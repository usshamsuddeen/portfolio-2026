const fs = require('fs');
const path = require('path');
const https = require('https');

const BEHANCE_USER = 'Shamsss';
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'dynamic-behance.json');

async function syncBehance() {
  console.log(`Fetching design projects for Behance user: ${BEHANCE_USER}...`);
  
  return new Promise((resolve, reject) => {
    https.get(`https://www.behance.net/${BEHANCE_USER}`, (res) => {
      let data = '';
      res.on('data', (d) => { data += d; });
      res.on('end', () => {
        try {
          const projectPairs = [];
          const projectGalleries = data.match(/gallery\/(\d+)\/([^\"\']+)/g);
          
          if (projectGalleries) {
            const uniqueGalleries = [...new Set(projectGalleries)];

            uniqueGalleries.forEach(gallery => {
              const parts = gallery.split('/');
              const id = parts[1];
              const slug = parts[2];
              
              const imgRegex = new RegExp(`https://mir-s3-cdn-cf\\.behance\\.net/projects/[^\"']+${id}[^\"']+`, 'g');
              const imgMatches = data.match(imgRegex);
              
              let thumbnail = 'https://aepcos.com/wp-content/uploads/2020/06/behance-placeholder.png';
              
              if (imgMatches && imgMatches.length > 0) {
                // Take the first match and clean it of any srcset noise
                thumbnail = imgMatches[0].split(' ')[0].split(',')[0].replace(/\"/g, '').replace(/\'/g, '');
              }

              projectPairs.push({
                title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                type: "Design Project",
                tools: ["Adobe Creative Suite", "Figma"],
                thumbnail: thumbnail,
                behanceUrl: `https://www.behance.net/gallery/${id}/${slug}`
              });
            });
          }

          const finalProjects = projectPairs.slice(0, 12);
          fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalProjects, null, 2));
          console.log(`Successfully synced ${finalProjects.length} design projects.`);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

syncBehance().catch(console.error);
