const fs = require('fs');
let code = fs.readFileSync('pages/ShortDrama.tsx', 'utf8');

const oldButtonRegex = /<button \s*disabled=\{currentTotal === 0\}\s*onClick=\{\(\) => setShowModal\(true\)\}\s*className=\{`w-full mt-6 py-4 font-bold tracking-[^>]+>\s*\{isEn \? 'Proceed to Registration' : '前往填写表单'\}\s*<\/button>/;

const newButton = `<button 
                     type="submit"
                     disabled={currentTotal === 0}
                     className={\`w-full mt-6 py-4 font-bold tracking-widest uppercase transition-all duration-300 rounded text-sm
                       \${currentTotal > 0 
                         ? 'bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C97A] shadow-[0_0_20px_rgba(201,168,76,0.3)]' 
                         : 'bg-[#252525] text-gray-500 cursor-not-allowed'}\`}
                  >
                     {isEn ? 'Submit & Pay' : '确认并支付'}
                  </button>`;

code = code.replace(oldButtonRegex, newButton);

fs.writeFileSync('pages/ShortDrama.tsx', code);
