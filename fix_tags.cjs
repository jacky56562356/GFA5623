const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

// Fix closing tags I broke
code = code.replace(/<p className="text-sm font-bold text-\[\#826622\](.*?)<\/h4>/g, '<p className="text-sm font-bold text-[#826622]$1</p>');
code = code.replace(/<p className="text-sm font-bold/g, '<p className="text-sm font-bold'); // wait, the previous code had <h4 ...>...</h4> and my regex replaced `<h4 ...` with `<p ...` but left `</h4>`.

code = code.replace(/<\/h4>/g, '</p>'); // wait, some h4 are actually used?
// Let's manually replace the broken tags.
// pages/Home.tsx(135,108): Error closing tag for 'p'
// If I changed `<h4 className="text-sm font-bold...` to `<p ` it ends with `</h4>`. I should change `</h4>` to `</p>` where there's a `p className="text-sm font-bold` before it.

// Reverting the "h4 to h3" replacement that left `</h4>`
code = code.replace(/<h3 className="font-bold text-lg mb-1">([^<]+)<\/h4>/g, '<h3 className="font-bold text-lg mb-1">$1</h3>');

// Reverting "h4 to p" replacement that left `</h4>`
code = code.replace(/<p className="text-sm font-bold([^>]+)>([^<]+)<\/h4>/g, '<p className="text-sm font-bold$1>$2</p>');

// And I also replaced `<h4 className="text-sm font-bold text-[#826622]...` with `<p ...` previously but then `fix_a11y.cjs` replaced `h4` with `p`.
code = code.replace(/<p className="text-sm font-bold text-\[\#826622\] uppercase tracking-widest mb-1">([^<]+)<\/h4>/g, '<p className="text-sm font-bold text-[#826622] uppercase tracking-widest mb-1">$1</p>');

// Any remaining </h4> might need to be </p> or </h3> depending on what was opened.
// Let's just fix it automatically using a regex state machine or more specific regexes.
// Line 135:                       <p className="text-sm font-bold text-[#826622] uppercase tracking-widest mb-1">USC SCA</h4>
code = code.replace(/<p className="text-sm font-bold text-\[\#826622\] uppercase tracking-widest mb-1">([^<]+)<\/h4>/g, '<p className="text-sm font-bold text-[#826622] uppercase tracking-widest mb-1">$1</p>');

// Wait, the ones in line 406: <p className="text-sm font-bold text-[#826622] uppercase tracking-wider mb-4">Filmmaker Support</h4>
code = code.replace(/<p className="text-sm font-bold text-\[\#826622\] uppercase tracking-wider mb-4">([^<]+)<\/h4>/g, '<p className="text-sm font-bold text-[#826622] uppercase tracking-wider mb-4">$1</p>');

fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed tags');
