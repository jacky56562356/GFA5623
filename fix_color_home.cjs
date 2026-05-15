const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

// Replace all instances of `text-[#826622] dark:text-[#C9A84C]` back to `text-gfa-gold`
code = code.replace(/text-\[\#826622\] dark:text-\[\#C9A84C\]/g, 'text-gfa-gold');
code = code.replace(/text-\[\#826622\]/g, 'text-gfa-gold');

// Replace custom gold hex with standard tailwind class for consistency
code = code.replace(/text-\[\#C9A84C\]/g, 'text-gfa-gold');
code = code.replace(/border-\[\#C9A84C\]/g, 'border-gfa-gold');
code = code.replace(/bg-\[\#C9A84C\]/g, 'bg-gfa-gold');

// Make darker gold only where it's on a known white background
// Find `<p className="text-sm font-bold text-gfa-gold`
// and make it text-gfa-goldDark
code = code.replace(/<p className="text-sm font-bold text-gfa-gold/g, '<p className="text-sm font-bold text-gfa-goldDark');

// The "GFA's Concrete Solutions" blocks have `bg-white` or standard. Wait, the cards are:
// `bg-white border ...` then inside they have `text-gfa-gold uppercase`. Let's just do `text-gfa-goldDark` for them manually if needed.
// Actually, `text-gfa-goldDark` has better contrast on white. We can use it where appropriate.
// Let's use `text-gfa-goldDark` on white/gray bg.

fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed colors in Home.tsx');
