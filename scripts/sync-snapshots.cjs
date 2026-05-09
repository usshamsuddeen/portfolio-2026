require('dotenv').config();
const { Octokit } = require('octokit');
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OUTPUT_FILE = path.join(__dirname, '../src/data/repo-snapshots.json');

if (!GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN not found in .env file');
  process.exit(1);
}

const octokit = new Octokit({ auth: GITHUB_TOKEN });

// Configuration: Extensions to include
const TEXT_EXTENSIONS = [
  '.js', '.ts', '.tsx', '.jsx', '.py', '.java', '.c', '.cpp', '.h', '.cs', 
  '.html', '.css', '.md', '.json', '.txt', '.yml', '.yaml', '.sql', '.sh', '.env', '.dockerfile'
];
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

async function getRepoFiles(owner, repo, branch = 'main') {
  try {
    // Get the recursive tree
    const { data: treeData } = await octokit.rest.git.getTree({
      owner,
      repo,
      tree_sha: branch,
      recursive: true,
    });

    const snapshots = {};

    for (const item of treeData.tree) {
      if (item.type === 'blob') {
        const ext = path.extname(item.path).toLowerCase();
        const isText = TEXT_EXTENSIONS.includes(ext);
        const isImage = IMAGE_EXTENSIONS.includes(ext);
        
        // Only include desired files and avoid large binary files or vendor dirs
        if ((isText || isImage) && !item.path.includes('node_modules') && !item.path.includes('vendor') && !item.path.includes('.git/')) {
          // Limit file size (approx < 1MB)
          if (item.size && item.size > 1000000) {
            console.log(`  Skipping Large File: ${item.path} (${(item.size / 1024).toFixed(1)} KB)`);
            continue;
          }

          console.log(`  Fetching: ${item.path}`);
          try {
            const { data: fileData } = await octokit.rest.repos.getContent({
              owner,
              repo,
              path: item.path,
              ref: branch,
            });

            if (isText) {
              const content = Buffer.from(fileData.content, 'base64').toString('utf8');
              snapshots[item.path] = { type: 'text', content };
            } else if (isImage) {
              // Store as data URL
              const mimeType = ext === '.svg' ? 'image/svg+xml' : `image/${ext.replace('.', '')}`;
              snapshots[item.path] = { 
                type: 'image', 
                content: `data:${mimeType};base64,${fileData.content.replace(/\s/g, '')}` 
              };
            }
          } catch (err) {
            console.warn(`  Failed to fetch content for ${item.path}: ${err.message}`);
          }
        }
      }
    }

    return {
      tree: treeData.tree,
      files: snapshots
    };
  } catch (err) {
    console.error(`Error fetching repo ${repo}:`, err.message);
    return null;
  }
}

async function run() {
  console.log('Starting GitHub Data Sync...');
  
  // 1. Get authenticated user
  const { data: user } = await octokit.rest.users.getAuthenticated();
  const owner = user.login;
  console.log(`Authenticated as: ${owner}`);

  // 2. Fetch all repositories (public and private)
  const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser({
    visibility: 'all',
    per_page: 100,
    sort: 'updated'
  });

  const allSnapshots = {};

  for (const repo of repos) {
    // You can filter which repos to snapshot here
    // For now, let's just do a specific one or all private ones as a test
    // To avoid bloating the JSON, maybe only snapshot the ones the user actually wants
    // For this demonstration, we'll fetch them all but the user can modify this list
    
    console.log(`Syncing ${repo.name}...`);
    const data = await getRepoFiles(owner, repo.name, repo.default_branch);
    if (data) {
      allSnapshots[repo.name] = {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        private: repo.private,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
        url: repo.html_url,
        data: data // Contins tree and files
      };
    }
  }

  // 3. Save to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allSnapshots, null, 2));
  console.log(`\nSuccess! Snapshots saved to ${OUTPUT_FILE}`);
}

run();
