const fs = require('fs');
let footer = fs.readFileSync('components/Footer.tsx', 'utf8');

footer = footer.replace(/<h4/g, '<h3');
footer = footer.replace(/<\/h4>/g, '</h3>');

fs.writeFileSync('components/Footer.tsx', footer);
console.log('Fixed h4 to h3 in footer');
