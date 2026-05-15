const fs = require('fs');

let awards = fs.readFileSync('pages/Awards.tsx', 'utf8');

awards = awards.replace(
  '{isEn ? "The Golden Feather Awards" : "金羽奖电影颁奖礼"}',
  `{isEn ? "The Golden Feather Awards" : "金羽奖电影颁奖礼"}\n          </h1>\n          <h2 className="text-xl md:text-3xl font-light text-[#C9A84C] italic drop-shadow-lg mb-6">\n            {isEn ? "Hollywood's Premier Recognition for Emerging Filmmakers" : "好莱坞首屈一指的新生代电影人表彰盛典"}\n          </h2><h1 className="hidden">`
);

awards = awards.replace(
  'The Golden Feather Awards is not a talent competition. It is one of Hollywood\\\'s most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers, outstanding works, and the visionary voices shaping the future of cinema.',
  'An annual Hollywood awards ceremony recognizing excellence in youth and independent cinema. It is one of Hollywood\\\'s most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers.'
);

awards = awards.replace(
  'The Golden Feather Awards is not a talent competition. It is one of Hollywood\'s most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers, outstanding works, and the visionary voices shaping the future of cinema.',
  'An annual Hollywood awards ceremony recognizing excellence in youth and independent cinema. It is one of Hollywood\'s most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers.'
);

awards = awards.replace(
  '{isEn ? "Ceremony Format & Experience" : "颁奖礼形式与盛典全流程"}',
  '{isEn ? "Open to filmmakers worldwide" : "向全球创作者开放"}'
);

const submissionEnd = `
               <div className="bg-[#F5F2EE] p-8 md:p-12 rounded-3xl border border-[#C9A84C]/20 max-w-4xl mx-auto mt-5 text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                 
                 <h4 className="font-bold text-2xl md:text-3xl font-serif mb-3 text-gfa-inkBlack relative z-10">
                   {isEn ? "Step Into the Spotlight" : "闪耀好莱坞，成就电影梦"}
                 </h4>
                 <p className="text-gfa-slate text-lg mb-5 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
                   {isEn 
                     ? "Open to filmmakers worldwide. Submit your masterpiece to the Golden Feather Awards. Not only will you gain global exposure, industry connections, and prestigious recognition, but standout filmmakers are also eligible for robust project support and a Cash Prize of up to $2,000 USD to fuel your next cinematic journey!" 
                     : "面向全球电影人开放。向金羽奖提交您的诚意之作，赢取高规格的项目扶持以及最高达2000美金的现金大奖！"}
                 </p>
                 <Link to="/award-submission" className="inline-block relative z-10 bg-gradient-to-r from-[#C9A84C] to-[#E5C973] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-base hover:from-gfa-inkBlack hover:to-gfa-inkBlack hover:text-white transition-all shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:shadow-2xl hover:-translate-y-1 transform duration-300 mb-6">
                    {isEn ? "Start Your Submission" : "即刻提交报名申请"}
                 </Link>
                 <div className="relative z-10 border-t border-[#C9A84C]/20 pt-6">
                    <p className="text-sm text-gfa-slate uppercase tracking-widest font-bold">
                       {isEn ? "Questions? Contact us:" : "有疑问？联系我们："} <a href="mailto:info@gfafilm.org" className="text-[#C9A84C] hover:underline">info@gfafilm.org</a>
                    </p>
                 </div>
              </div>
`;

// replace the end part
awards = awards.replace(
  /<div className="bg-\[#F5F2EE\] p-8 md:p-12 rounded-3xl border border-\[#C9A84C\]\/20 max-w-4xl mx-auto mt-5 text-center relative overflow-hidden">[\s\S]*?<\/div>[\s]*<\/div>[\s]*<\/section>/,
  submissionEnd + '            </div>\n         </section>'
);

fs.writeFileSync('pages/Awards.tsx', awards);
console.log('Fixed awards page!');
