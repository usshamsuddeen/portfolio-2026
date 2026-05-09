import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { Octokit } from 'octokit';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Octokit with the server-side token
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

// Cache for repo data to avoid hitting rate limits
const cache = new Map();

app.use(cors());
app.use(express.json());

// API: Get Repository Tree
app.get('/api/github/tree/:repo', async (req, res) => {
  const { repo } = req.params;
  const owner = process.env.GITHUB_OWNER || 'usshamsuddeen';

  try {
    const { data } = await octokit.rest.git.getTree({
      owner,
      repo,
      tree_sha: 'main',
      recursive: true,
    });
    res.json(data.tree);
  } catch (err) {
    console.error(`Error fetching tree for ${repo}:`, err.message);
    res.status(500).json({ error: 'Failed to fetch repository structure' });
  }
});

// API: Get File Content
app.get('/api/github/file/:repo/*', async (req, res) => {
  const { repo } = req.params;
  const filePath = req.params[0];
  const owner = process.env.GITHUB_OWNER || 'usshamsuddeen';

  try {
    const { data } = await octokit.rest.repos.getContent({
      owner,
      repo,
      path: filePath,
    });

    if (Array.isArray(data)) {
      return res.status(400).json({ error: 'Path is a directory' });
    }

    const content = Buffer.from(data.content, 'base64').toString('utf8');
    const ext = path.extname(filePath).toLowerCase();
    
    // Determine type (text or image)
    const isImage = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext);
    
    res.json({
      type: isImage ? 'image' : 'text',
      content: isImage ? `data:image/${ext.replace('.', '')};base64,${data.content.replace(/\s/g, '')}` : content
    });
  } catch (err) {
    console.error(`Error fetching file ${filePath}:`, err.message);
    res.status(500).json({ error: 'Failed to fetch file content' });
  }
});

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running on port ${PORT}`);
});
