const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix instances where => became = />
      content = content.replace(/onError=\{\(e\)\s*=\s*\/>\s*\{\s*e\.currentTarget\.src/g, 'onError={(e) => { e.currentTarget.src');
      
      // Fix cases where the original > was left at the end but we also inserted /> in the middle
      // Actually, if we just fix = /> to =>, we might still have /> at the very end of the tag.
      // E.g. onError={(e) => { e.currentTarget.src = "..."; }}>
      content = content.replace(/Image\+Not\+Found\";\s*\}\}\s*>/g, 'Image+Not+Found"; }} />');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('pages');
processDir('components');
processDir('src/components');
console.log('Fixed arrow syntax.');
