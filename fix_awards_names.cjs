const fs = require('fs');
let awards = fs.readFileSync('pages/Awards.tsx', 'utf8');

awards = awards.replace('Best Picture', 'Best Film');
awards = awards.replace('最佳影片', '最佳影片 (Best Film)');

awards = awards.replace('Best Youth Director', 'Best Young Director');

fs.writeFileSync('pages/Awards.tsx', awards);
