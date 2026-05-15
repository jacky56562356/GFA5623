const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// remove tailwind script and inline configuration
html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '');
html = html.replace(/<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>/, '');
html = html.replace(/<style>[\s\S]*?<\/style>/, '');

fs.writeFileSync('index.html', html);
console.log('index.html cleaned up!');
