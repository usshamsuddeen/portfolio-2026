const fs = require('fs');
const path = require('path');

async function splitSnapshots() {
  const inputPath = path.join(__dirname, '..', 'src', 'data', 'repo-snapshots.json');
  const outputDir = path.join(__dirname, '..', 'public', 'snapshots');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Reading 43MB snapshot file...');
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  
  const manifest = {};

  for (const [repoId, repoData] of Object.entries(data)) {
    console.log(`Processing ${repoId}...`);
    
    // 1. Add to manifest
    manifest[repoId] = {
      name: repoData.name,
      description: repoData.description,
      url: repoData.url,
      hasData: true
    };

    const repoDir = path.join(outputDir, repoId);
    if (!fs.existsSync(repoDir)) fs.mkdirSync(repoDir, { recursive: true });

    // 2. Save Tree
    fs.writeFileSync(
      path.join(repoDir, 'tree.json'), 
      JSON.stringify(repoData.data.tree)
    );

    // 3. Save Files (Individually for Deep Strategy)
    const filesDir = path.join(repoDir, 'files');
    if (!fs.existsSync(filesDir)) fs.mkdirSync(filesDir, { recursive: true });

    for (const [filePath, fileContent] of Object.entries(repoData.data.files)) {
      // Create nested directories for files if needed, or use encoded path
      // Encoding path is safer for a static server
      const safeName = Buffer.from(filePath).toString('base64url');
      fs.writeFileSync(
        path.join(filesDir, `${safeName}.json`),
        JSON.stringify(fileContent)
      );
    }
  }

  // 4. Save Manifest
  fs.writeFileSync(
    path.join(outputDir, 'manifest.json'),
    JSON.stringify(manifest)
  );

  console.log('Split complete! You can now remove src/data/repo-snapshots.json');
}

splitSnapshots().catch(console.error);
