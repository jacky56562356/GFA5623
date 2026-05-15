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

      // Fix the incorrectly formatted / width="1200" height="800">
      code = code.replace(/\/ width="1200" height="800">/g, ' width="1200" height="800" />');
      modified = true;

      // Add descriptive aria-labels to 'Learn More' and 'Learn about' links
      // Not easily targetable with a single regex without semantic context, but we can do a simple one:
      code = code.replace(/<Link to="([^"]+)"([^>]*)>([\s\S]*?)Learn More/g, '<Link to="$1"$2 aria-label={`Learn more about ${"$1".replace("/", "")}`}>$3Learn More');
      code = code.replace(/<Link to="([^"]+)"([^>]*)>([\s\S]*?)了解详情/g, '<Link to="$1"$2 aria-label="了解详情">$3了解详情');
      
      if (modified) {
        fs.writeFileSync(fullPath, code);
      }
    }
  }
}

processDir('pages');
processDir('components');
console.log('Fixed img tags and added some aria-labels');
