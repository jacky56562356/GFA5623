const fs = require('fs');

let navCode = fs.readFileSync('components/Navbar.tsx', 'utf8');
navCode = navCode.replace(/\{\s*name:\s*locale\s*===\s*Locale\.EN\s*\?\s*'Impact'\s*:\s*'影响力',\s*path:\s*'\/impact'\s*\},/g, '');
navCode = navCode.replace(/\{\s*name:\s*locale\s*===\s*Locale\.EN\s*\?\s*'News'\s*:\s*'新闻',\s*path:\s*'\/news'\s*\},?/g, '');
navCode = navCode.replace(/,\s*]/g, '\n  ]');
fs.writeFileSync('components/Navbar.tsx', navCode);

let appCode = fs.readFileSync('App.tsx', 'utf8');
appCode = appCode.replace(/import Impact from '\.\/pages\/Impact';\n/g, '');
appCode = appCode.replace(/import News from '\.\/pages\/News';\n/g, '');
appCode = appCode.replace(/<Route path="\/impact" element=\{<Impact \/>\} \/>\n/g, '');
appCode = appCode.replace(/<Route path="\/news" element=\{<News \/>\} \/>\n/g, '');
fs.writeFileSync('App.tsx', appCode);

console.log("Updated Navbar & App");
