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

      // Fix fetchpriority
      if (code.includes('fetchpriority=')) {
        code = code.replace(/fetchpriority=/g, 'fetchPriority=');
        modified = true;
      }

      // Fix duplicate aria-label
      if (code.includes('aria-label')) {
        // Find any element with multiple aria-label attributes and remove duplicates
        // This is tricky with regex, simpler is finding <Link ... aria-label="..."...aria-label="...">
        // Actually, let's just make sure we didn't add it twice.
        code = code.replace(/aria-label="([^"]+)" aria-label=\{`Learn more about [^`]+`\}/g, 'aria-label="$1"');
        code = code.replace(/aria-label=\{`Learn more about [^`]+`\} aria-label="([^"]+)"/g, 'aria-label="$1"');
        // Let's also check if I have `aria-label="..." aria-label="..."`
        code = code.replace(/aria-label="([^"]+)"([\s\S]*?)aria-label="([^"]+)"/g, (match, a1, middle, a2) => {
            if (!middle.includes('<') && !middle.includes('>')) {
                 return `aria-label="${a1}"${middle}`; // keep only first
            }
            return match;
        });
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, code);
      }
    }
  }
}

processDir('pages');
processDir('components');

// Fix tsconfig
let tsconfig = fs.readFileSync('tsconfig.json', 'utf8');
if (tsconfig.includes('"moduleResolution": "Node"')) {
   tsconfig = tsconfig.replace(/"moduleResolution": "Node"/g, '"moduleResolution": "Bundler"');
   fs.writeFileSync('tsconfig.json', tsconfig);
} else if (!tsconfig.includes('"moduleResolution":')) {
   // append it to compilerOptions
   tsconfig = tsconfig.replace(/"compilerOptions":\s*\{/, '"compilerOptions": {\n    "moduleResolution": "Bundler",');
   fs.writeFileSync('tsconfig.json', tsconfig);
}

// Fix duplicates more robustly in Home.tsx manually if needed
let home = fs.readFileSync('pages/Home.tsx', 'utf8');
home = home.replace(/aria-label=\{`Learn more about [^`]+`\}\s+aria-label=\{`Learn more about/g, 'aria-label={`Learn more about');
fs.writeFileSync('pages/Home.tsx', home);

console.log('Fixed fetchPriority, aria labels, tsconfig');
