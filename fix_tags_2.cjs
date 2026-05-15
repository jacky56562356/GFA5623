const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

code = code.replace(/<h4([^>]+)>([^<]+)<\/p>/g, '<h4$1>$2</h4>');
code = code.replace(/<h3([^>]+)>([^<]+)<\/p>/g, '<h3$1>$2</h3>');

fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed tags again');
