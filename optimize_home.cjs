const fs = require('fs');

let code = fs.readFileSync('pages/Home.tsx', 'utf8');

// Add wsrv.nl proxy to sponsor logos to resize them to h=100 max
// and converting them to webp for better compression
code = code.replace(/https:\/\/i\.ibb\.co\/4RNsSNYg\/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800\.png/g, 'https://wsrv.nl/?url=i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png&h=100&output=webp');
code = code.replace(/https:\/\/i\.ibb\.co\/Ldwg7vRN\/4a2ec28a2689027a04641d8a150fda3f\.png/g, 'https://wsrv.nl/?url=i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png&h=100&output=webp');
code = code.replace(/https:\/\/i\.ibb\.co\/XBZ4F7j\/Alvantor-new-logo-2020-1\.png/g, 'https://wsrv.nl/?url=i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png&h=100&output=webp');
code = code.replace(/https:\/\/i\.ibb\.co\/cSVbb7ZM\/list-2\.png/g, 'https://wsrv.nl/?url=i.ibb.co/cSVbb7ZM/list-2.png&h=100&output=webp');
code = code.replace(/https:\/\/i\.ibb\.co\/whJfbzKn\/ALT-LOGO-2400x1800-2\.jpg/g, 'https://wsrv.nl/?url=i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg&h=100&output=webp');

fs.writeFileSync('pages/Home.tsx', code);
console.log('optimized home images');
