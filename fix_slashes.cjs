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
      
      // We messed up the self-closing tags: <img ... / onError=...>
      // We'll replace it.
      
      content = content.replace(/<img(.*?)>/gs, (match, inner) => {
        // extract all attributes correctly and ensure the tag is self-closing
        // remove the first trailing slash, if any
        let cleanInner = inner.replace(/\/\s*(onError=[\s\S]*?)(\s*)$/g, ' $1$2');
        cleanInner = cleanInner.replace(/\/\s*$/g, '');
        return '<img' + cleanInner + ' />';
      });
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('pages');
processDir('components');
processDir('src/components');
console.log('Fixed trailing slashes.');
