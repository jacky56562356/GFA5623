const fs = require('fs');
let nav = fs.readFileSync('components/Navbar.tsx', 'utf8');
nav = nav.replace(/path: '\/awards'/g, "path: '/golden-feather-awards'");
fs.writeFileSync('components/Navbar.tsx', nav);

let footer = fs.readFileSync('components/Footer.tsx', 'utf8');
footer = footer.replace(/to="\/awards"/g, 'to="/golden-feather-awards"');
fs.writeFileSync('components/Footer.tsx', footer);
