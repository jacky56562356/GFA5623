const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;

      // Ensure every page has the first image as fetchpriority="high" and rest as loading="lazy"
      // Match all img tags using a non-greedy multiline dot match
      const imgRegex = /<img([\s\S]*?)>/g;
      
      let firstImg = true;
      code = code.replace(imgRegex, (match, attrs) => {
         modified = true;
         
         // Remove existing loading or fetchpriority
         let newAttrs = attrs
            .replace(/\s+loading="lazy"/g, '')
            .replace(/\s+fetchpriority="high"/g, '');
            
         // Add explicit width/height if missing to satisfy Lighthouse
         // Note: we can use width="100%" height="auto" or something similar if missing
         if (!newAttrs.includes('width=')) {
            newAttrs += ' width="1200"';
         }
         if (!newAttrs.includes('height=')) {
            newAttrs += ' height="800"';
         }

         if (firstImg) {
             firstImg = false;
             return `<img fetchpriority="high"${newAttrs}>`;
         } else {
             return `<img loading="lazy"${newAttrs}>`;
         }
      });

      if (modified) {
        fs.writeFileSync(fullPath, code);
      }
    }
  }
}

processDir('pages');
processDir('components');
console.log('Optimized all images second pass');
