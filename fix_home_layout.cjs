const fs = require('fs');
let code = fs.readFileSync('pages/Home.tsx', 'utf8');

const target1 = `<div className="text-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4">
              {isEn ? "California Film Industry Crisis: 2024-2026" : "加州影视就业危机 — 2024-2026现状"}
            </h2>
            <p className="text-gfa-gold text-base md:text-xl font-light max-w-4xl mx-auto leading-relaxed text-center">
              {isEn 
                ? "This is the primary reason for GFA's existence: The industry is undergoing its most severe employment crisis in recent years, with new graduates facing unprecedented challenges." 
                : "这是GFA存在最重要的理由：行业正在经历近年来最严重的就业危机，新毕业生面临前所未有的困境。"}
            </p>
          </div>`;
          
const replace1 = `<div className="flex flex-col items-center justify-center text-center mb-6 mx-auto w-full max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4 text-center w-full">
              {isEn ? "California Film Industry Crisis: 2024-2026" : "加州影视就业危机 — 2024-2026现状"}
            </h2>
            <p className="text-gfa-gold text-base md:text-xl font-light leading-relaxed text-center w-full">
              {isEn 
                ? "This is the primary reason for GFA's existence: The industry is undergoing its most severe employment crisis in recent years, with new graduates facing unprecedented challenges." 
                : "这是GFA存在最重要的理由：行业正在经历近年来最严重的就业危机，新毕业生面临前所未有的困境。"}
            </p>
          </div>`;

code = code.replace(target1, replace1);

const target2 = `      {/* Sponsors */}
      <section className="py-12 bg-white border-t border-gfa-border overflow-hidden">
         <div className="container-gfa text-center mb-8">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
              {isEn ? "Our Global Partners & Sponsors" : "全球赞助与合作伙伴"}
            </h2>
         </div>
         <div className="container-gfa relative w-full mb-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-4">
                 <div className="text-xl md:text-2xl font-bold italic tracking-tighter text-gray-800 opacity-70 hover:opacity-100 transition-opacity">Blackmagic Design</div>
                 <div className="text-2xl md:text-3xl font-serif text-gray-800 opacity-70 hover:opacity-100 transition-opacity">Harmony Gold</div>
                 <div className="text-lg font-bold uppercase tracking-widest text-center text-gray-800 opacity-70 hover:opacity-100 transition-opacity">City of<br/>Pomona</div>
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png&h=100&output=webp" alt="Sponsor 1" className="h-14 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png&h=100&output=webp" alt="Sponsor 2" className="h-14 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png&h=100&output=webp" alt="Sponsor 3" className="h-14 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/cSVbb7ZM/list-2.png&h=100&output=webp" alt="Sponsor 4" className="h-14 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg&h=100&output=webp" alt="Sponsor 5" className="h-14 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
         </div>
      </section>`;

const replace2 = `      {/* Sponsors */}
      <section className="py-8 bg-white border-t border-gfa-border overflow-hidden">
         <div className="container-gfa text-center mb-6">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
              {isEn ? "Our Global Partners & Sponsors" : "全球赞助与合作伙伴"}
            </h2>
         </div>
         <div className="relative w-full overflow-hidden flex items-center group">
            {/* Left and Right Fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee-slow group-hover:pause-animation items-center">
              {/* First Set of Logos */}
              <div className="flex items-center justify-around min-w-[100vw] shrink-0 gap-12 px-8">
                 <div className="text-xl md:text-2xl font-bold italic tracking-tighter shrink-0 text-gray-800 opacity-60 hover:opacity-100 transition-all duration-300">Blackmagic Design</div>
                 <div className="text-lg font-bold uppercase tracking-widest text-center shrink-0 text-gray-800 opacity-60 hover:opacity-100 transition-all duration-300">City of<br/>Pomona</div>
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/cSVbb7ZM/list-2.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
              </div>
              
              {/* Second Set of Logos */}
              <div className="flex items-center justify-around min-w-[100vw] shrink-0 gap-12 px-8">
                 <div className="text-xl md:text-2xl font-bold italic tracking-tighter shrink-0 text-gray-800 opacity-60 hover:opacity-100 transition-all duration-300">Blackmagic Design</div>
                 <div className="text-lg font-bold uppercase tracking-widest text-center shrink-0 text-gray-800 opacity-60 hover:opacity-100 transition-all duration-300">City of<br/>Pomona</div>
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/cSVbb7ZM/list-2.png&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg&h=100&output=webp" alt="Sponsor" className="h-12 md:h-16 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0" width="200" height="100" />
              </div>
            </div>
         </div>
      </section>`;

code = code.replace(target2, replace2);
fs.writeFileSync('pages/Home.tsx', code);
console.log('Fixed home layout and added marquee back with no Harmony Gold, more logos.');
