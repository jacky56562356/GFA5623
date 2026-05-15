const fs = require('fs');

let content = fs.readFileSync('pages/YouthPrograms.tsx', 'utf8');

content = content.replace(
    '<button className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">',
    '<button onClick={() => setShowRegForm(true)} className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">'
);

fs.writeFileSync('pages/YouthPrograms.tsx', content);
