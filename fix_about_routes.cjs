const fs = require('fs');

// 1. Update App.tsx routing
let app = fs.readFileSync('App.tsx', 'utf8');
app = app.replace('<Route path="/awards" element={<Awards />} />', '<Route path="/golden-feather-awards" element={<Awards />} />\n            <Route path="/awards" element={<Awards />} />');
fs.writeFileSync('App.tsx', app);

// 2. Update About.tsx
let about = fs.readFileSync('pages/About.tsx', 'utf8');

const partnersCode = `
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                 <div className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack">SAG-AFTRA Foundation</div>
              </div>
              <p className="text-sm md:text-base font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Supporting youth performers and ensuring professional standards on aspiring sets." : "支持青少年表演者，并确保片场的专业标准与合规性。"}
              </p>
            </div>
`;

about = about.replace(
  '            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">\\n              <div className="h-16 flex items-center justify-center mb-4">\\n                 <div className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack">City of Pomona</div>',
  partnersCode + '            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">\\n              <div className="h-16 flex items-center justify-center mb-4">\\n                 <div className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack">City of Pomona</div>'
);

about = about.replace('grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl', 'grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl');

const programsAndContact = `
      {/* Programs */}
      <section className="py-16 bg-[#F5F2EE]">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {isEn ? "Our Core Programs" : "核心项目"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "Empowering the Next Generation" : "赋能下一代"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack">Youth Film Camp</h4>
               <p className="text-gfa-slate font-light text-sm">Comprehensive hands-on filmmaking experience for young aspiring creators.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack">Golden Feather Awards</h4>
               <p className="text-gfa-slate font-light text-sm">Hollywood\\'s premier recognition ceremony for emerging filmmakers.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack">Film Graduate Support</h4>
               <p className="text-gfa-slate font-light text-sm">Career development, mentorship, and equipment grants for recent film school grads.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack">Children\\'s Film Production</h4>
               <p className="text-gfa-slate font-light text-sm">Empowering children to tell their own stories through guided professional production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gfa-inkBlack text-white">
         <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-serif mb-8 text-[#C9A84C]">
              {isEn ? "Contact Global Film Alliance" : "联系全球电影联盟"}
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-light">
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{isEn ? "Address" : "地址"}</span>
                 17800 Castleton St Suite 173<br/>City of Industry, CA 91748
               </div>
               <div className="hidden md:block w-px h-12 bg-white/20"></div>
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{isEn ? "Email" : "邮箱"}</span>
                 jacky@gfafilm.org
               </div>
               <div className="hidden md:block w-px h-12 bg-white/20"></div>
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{isEn ? "Phone" : "电话"}</span>
                 626-677-8017
               </div>
            </div>
         </div>
      </section>

      {/* Part 5: Partners section */}
`;

about = about.replace('{/* Part 5: Partners section */}', programsAndContact);

fs.writeFileSync('pages/About.tsx', about);
console.log('Fixed about and routes!');
