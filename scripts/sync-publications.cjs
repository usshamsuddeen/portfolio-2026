const fs = require('fs');
const path = require('path');
const https = require('https');

const ORCID_ID = '0009-0006-2883-7947';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'dynamic-publications.json');

async function getORCIDWorks() {
  const options = {
    hostname: 'pub.orcid.org',
    path: `/v3.0/${ORCID_ID}/works`,
    headers: {
      'Accept': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    https.get(options, (res) => {
      let data = '';
      res.on('data', (d) => data += d);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function syncPublications() {
  console.log(`Fetching publications for ORCID: ${ORCID_ID}...`);
  try {
    const rawData = await getORCIDWorks();
    const works = rawData.group || [];
    
    const publications = works.map((group, index) => {
      const summary = group['work-summary'][0];
      const title = summary.title.title.value;
      const year = summary['publication-date']?.year?.value || 'N/A';
      const journal = summary['journal-title']?.value || 'Research Paper';
      const type = summary.type;
      
      // Attempt to find DOI
      let doi = '';
      let doiUrl = '';
      if (summary['external-ids']?.['external-id']) {
        const doiId = summary['external-ids']['external-id'].find(id => id['external-id-type'] === 'doi');
        if (doiId) {
          doi = doiId['external-id-value'];
          doiUrl = doiId['external-id-url']?.value || `https://doi.org/${doi}`;
        }
      }

      return {
        id: `pub-${index}`,
        code: `P${index + 1}`,
        title: title,
        authors: "Muhammad Usman Shams", // ORCID API requires separate calls for authors, usually, but for portfolio we know it's you
        journal: journal,
        year: year,
        doi: doi,
        doiUrl: doiUrl
      };
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(publications, null, 2));
    console.log(`Successfully synced ${publications.length} publications to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('Failed to sync publications:', err.message);
  }
}

syncPublications();
