const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function syncAll() {
  const rootDir = path.join(__dirname, '..');
  const snapshotFile = path.join(rootDir, 'src', 'data', 'repo-snapshots.json');

  console.log('\n--- PHASE 1: RESEARCH PUBLICATIONS (ORCID) ---');
  try {
    execSync('node scripts/sync-publications.cjs', { stdio: 'inherit', cwd: rootDir });
  } catch (err) {
    console.error('Failed to sync Publications.');
  }

  console.log('\n--- PHASE 2: DESIGN PROJECTS (BEHANCE) ---');
  try {
    execSync('node scripts/sync-behance.cjs', { stdio: 'inherit', cwd: rootDir });
  } catch (err) {
    console.error('Failed to sync Behance.');
  }

  console.log('\n--- PHASE 3: GITHUB DATA FETCH ---');
  try {
    execSync('node scripts/sync-snapshots.cjs', { stdio: 'inherit', cwd: rootDir });
  } catch (err) {
    console.warn('Skipping GitHub Fetch (Make sure GITHUB_TOKEN is set in .env)');
  }

  console.log('\n--- PHASE 4: OPTIMIZATION (DEEP STRATEGY) ---');
  if (fs.existsSync(snapshotFile)) {
    try {
      execSync('node scripts/split-snapshots.cjs', { stdio: 'inherit', cwd: rootDir });
      fs.unlinkSync(snapshotFile);
      console.log('Cleanup: Removed large src/data/repo-snapshots.json');
    } catch (err) {
      console.error('Failed to optimize GitHub data.');
    }
  } else {
    console.log('No new GitHub snapshots found to optimize.');
  }

  console.log('\n✅ ALL SYSTEMS SYNCED! Your entire portfolio is now fresh and fast.');
}

syncAll().catch(console.error);
