const fs = require('fs');
let code = fs.readFileSync('pages/ShortDrama.tsx', 'utf8');

const regStart = code.indexOf('{/* Registration Details */}');
const step2Start = code.indexOf('{/* Step 2: Booths */}');

let preForm = code.substring(0, regStart);
let formBlock = code.substring(regStart, step2Start);
let postForm = code.substring(step2Start);

// Remove the `{(Object.keys(cart).some(...)` lines
formBlock = formBlock.replace(/\{\(Object\.keys\(cart\)\.some\([^)]+\)\.some\([^)]+\) \|\| [^)]+\)\) && \(/g, '');
formBlock = formBlock.replace(/\{\(Object\.keys\(cart\)[^&]*&& \(/g, '');

// Clean up the `)}` that closed those conditional blocks
// We just remove all `)}` that are on their own lines.
formBlock = formBlock.split('\n').filter(line => !line.trim().match(/^\)\}\s*$/)).join('\n');

// In Contact fields, make required unconditionally instead of dynamically
formBlock = formBlock.replace(/required=\{\(Object[^}]+\}\}/g, 'required');

code = preForm + formBlock + postForm;
fs.writeFileSync('pages/ShortDrama.tsx', code);
