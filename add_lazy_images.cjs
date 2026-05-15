const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('Home.tsx') && !fullPath.includes('About.tsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      // Add loading="lazy" to all <img tags that don't have it
      if (code.includes('<img ')) {
        code = code.replace(/<img (?!loading="lazy")/g, '<img loading="lazy" ');
        fs.writeFileSync(fullPath, code);
      }
    }
  }
}

processDir('pages');
console.log('Added loading="lazy" to inner pages');
