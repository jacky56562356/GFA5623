const fs = require('fs');
let home = fs.readFileSync('pages/Home.tsx', 'utf8');
let footer = fs.readFileSync('components/Footer.tsx', 'utf8');

// replace text-white/50 with text-white/80
home = home.replace(/text-white\/50/g, 'text-gray-300');
home = home.replace(/text-white\/70/g, 'text-gray-200');
footer = footer.replace(/text-white\/70/g, 'text-gray-300');
footer = footer.replace(/text-\[\#C9A84C\]\/50/g, 'text-gfa-gold');
footer = footer.replace(/text-white\/20/g, 'text-gray-400');

fs.writeFileSync('pages/Home.tsx', home);
fs.writeFileSync('components/Footer.tsx', footer);
console.log('Fixed contrast');
