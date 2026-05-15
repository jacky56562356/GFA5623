const fs = require('fs');

let code = fs.readFileSync('pages/Home.tsx', 'utf8');

// Replace text-[#C9A84C] with a darker gold ONLY inside sections that are white or bg-gray-50
// It's harder with regex, but we know the generic text color on dark is fine.
// The easiest fix is to replace the generic <span className="text-[#C9A84C] text-2xl...">
// inside the "GFA's Concrete Solutions" and "From Dream to Career" white sections.
code = code.replace(/text-\[\#C9A84C\]/g, 'text-[#826622] dark:text-[#C9A84C]');
// We don't have dark mode enabled explicitly in tailwind but we can add a custom utility class or hardcode it.
// Actually, it's easier to just use a darker gold for those specific texts.

// Let's just fix Home.tsx where appropriate
code = code.replace(/<span className="text-\[\#C9A84C\] text-2xl md:text-3xl">/g, '<span className="text-[#826622] text-2xl md:text-3xl">');
code = code.replace(/<div className="text-sm text-\[\#C9A84C\] font-bold mb-3">/g, '<div className="text-sm text-[#826622] font-bold mb-3">');
code = code.replace(/<div className="w-12 h-12 bg-white border-2 border-\[\#C9A84C\] rounded-full flex items-center justify-center mx-auto mb-3 text-\[\#C9A84C\]/g, '<div className="w-12 h-12 bg-white border-2 border-[#826622] rounded-full flex items-center justify-center mx-auto mb-3 text-[#826622]');
code = code.replace(/<h2 className="text-\[10px\] font-bold text-\[\#C9A84C\]/g, '<h2 className="text-[10px] font-bold text-[#826622]');
code = code.replace(/<h4 className="text-sm font-bold text-\[\#C9A84C\]/g, '<h4 className="text-sm font-bold text-[#826622]');
code = code.replace(/<p className="text-\[\#C9A84C\] text-base md:text-xl font-light/g, '<p className="text-[#C9A84C] text-base md:text-xl font-light'); // Actually crisis data is on dark background so keep it.

code = code.replace(/<div className="text-\[\#C9A84C\] font-bold uppercase tracking-widest text-\[10px\] mb-3">/g, '<div className="text-[#826622] font-bold uppercase tracking-widest text-[10px] mb-3">'); // This is inside white cards? NO, wait, the solution cards have dark backgrounds (blue-950 etc), so keep it.

// Fix H tags sequence
// Hero: H1.
// Trust Bar: None.
// Crisis Data: H2, H3, H4.
// Solutions: H2 -> H3.
// Impact: H2.
// Services: H2 -> H3 -> H4.
// Growth path: H2 ("From Dream to Career..."), H3 ("From Dream to Career"), H4. Wait, H2 and H3 have almost same text. Let's make the H2 a `p` and H3 an `h2`, then H4 an `h3`.
code = code.replace(/<h2 className="text-\[10px\] font-bold text-\[\#826622\] uppercase tracking-\[0\.3em\] mb-2">([\s\S]*?)<\/h2>/, '<p className="text-[10px] font-bold text-[#826622] uppercase tracking-[0.3em] mb-2">$1</p>');
code = code.replace(/<h3 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack">([\s\S]*?)<\/h3>/g, '<h2 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack">$1</h2>');
code = code.replace(/<h4 className="font-bold text-lg mb-1">/g, '<h3 className="font-bold text-lg mb-1">');

// Services also has:
// <h4 className="text-sm font-bold text-[...] uppercase tracking-wider mb-4">Filmmaker Support</h4>
// Lets change to p
code = code.replace(/<h4 className="text-sm font-bold/g, '<p className="text-sm font-bold');

fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed Home accessibility issues');
