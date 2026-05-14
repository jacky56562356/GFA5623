const fs = require('fs');
let code = fs.readFileSync('pages/ShortDrama.tsx', 'utf8');

// 1. Remove showModal from state
code = code.replace('const [showModal, setShowModal] = useState(false);', '');

// 2. Change <div className="container-gfa max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6 relative" id="registration-form"> 
// to <form ... onSubmit={...}
const formOpener = `<form 
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          
          let emailBody = \`\${isEn ? 'GFA Registration Form Submission' : 'GFA 报名表单提交'}\\n\\n\`;
          
          emailBody += \`--- Selected Items ---\\n\`;
          Object.entries(cart).forEach(([id, count]) => {
            if (count > 0) {
              emailBody += \`- \${id}: \${count}\\n\`;
            }
          });
          emailBody += \`Total Amount due: \\$\${currentTotal.toLocaleString()}\\n\\n\`;

          emailBody += \`--- Form Information ---\\n\`;
          for (const [key, value] of Object.entries(data)) {
            if (value && typeof value === 'string' && value.trim() !== '') {
               emailBody += \`\${key}: \${value}\\n\`;
            }
          }

          emailBody += \`\\n* Note: Any uploaded files (posters, logos) must be sent as email attachments directly since web forms cannot automatically attach local files to email clients.\`;

          const subject = encodeURIComponent("GFA Short Drama Showcase Registration");
          const body = encodeURIComponent(emailBody);
          
          window.location.href = \`mailto:hpag96@gmail.com?subject=\${subject}&body=\${body}\`;
          
          setCart({});
        }}
        className="container-gfa max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6 relative" id="registration-form">`;

code = code.replace(/<div className="container-gfa max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-6 relative" id="registration-form">/, formOpener);

// 3. Find the closing div for the booking form layout and change it to </form>
code = code.replace(/<\/div>\s*\n\s*\{\/\* Contact Footer \*\/\}/, '</form>\n\n      {/* Contact Footer */}');

// 4. Update the submit button on the right column
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

code = code.replace(/<button \s*disabled=\{currentTotal === 0\}\s*onClick=\{[^}]*\}\s*className=\{[^}]*\}\s*>[\s\S]*?<\/button>/, newButton);


// 5. Extract form fields and insert into Left Column as Step 7
// The modal form fields start with {/* Submission Form Fields */} and end right before <div className="bg-[#1A1A1A] p-6 border-t border-[#333] flex justify-between
const modalFieldsRegex = /\{\/\* Dynamically generating fields based on selection \*\/\}([\s\S]*?)<div className="bg-\[#1A1A1A\] p-6 border-t border-\[#333\]/;
const match = code.match(modalFieldsRegex);
if (!match) {
    console.error('Could not find modal fields');
    process.exit(1);
}
let formFields = match[1];
// remove the surrounding `<div className="p-8 ...">` and closing div
formFields = formFields.replace(/<div className="p-8 overflow-y-auto custom-scrollbar space-y-6 flex-1">\s*/, '');
// remove next line down to last </div> which we can do by trimming end
formFields = formFields.trim().replace(/<\/div>$/, '');

// Remove the modal entirely
code = code.replace(/\{\/\* Checkout Modal \*\/\}[\s\S]*?<style dangerouslySetInnerHTML=/, '<style dangerouslySetInnerHTML=');

// Insert the form fields into the Left Column
const step7 = `
            {/* Step 7: Registration Details */}
            {currentTotal > 0 && (
               <section id="step7" className="mt-12">
                  <SectionTitle step="7" en="Registration Details" zh="报名信息填写" />
                  <div className="bg-[#111] border border-[#252525] rounded-xl p-6 md:p-8 shadow-inner space-y-6">
                     ${formFields}
                  </div>
               </section>
            )}
`;

code = code.replace(/<\/div>\s*\n\s*\{\/\* Right Column: Sticky Summary Panel \*\/\}/, step7 + '\n         </div>\n\n         {/* Right Column: Sticky Summary Panel */}');

fs.writeFileSync('pages/ShortDrama.tsx', code);
