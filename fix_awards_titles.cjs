const fs = require('fs');
let code = fs.readFileSync('pages/Awards.tsx', 'utf8');

// 1. Opportunities & Industry Platform
const oldOpportunities = `<div className="text-center mb-3">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
              {isEn ? "Opportunities & Industry Platform" : "机遇与产业平台整合"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg">
               {isEn ? "Participants and winners access a comprehensive ecosystem designed to launch film careers." : "参赛者与获奖者将进入一个旨在正式开启其电影职业生涯的全面生态系统。"}
            </p>
          </div>`;
          
const newOpportunities = `<div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
               <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "Opportunities & Industry Platform" : "机遇与产业平台整合"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
               {isEn ? "Participants and winners access a comprehensive ecosystem designed to launch film careers." : "参赛者与获奖者将进入一个旨在正式开启其电影职业生涯的全面生态系统。"}
            </p>
          </div>`;

// 2. Open to filmmakers worldwide
const oldOpen = `<div className="text-center mb-4">
             <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 flex justify-center items-center gap-4">
                <Sparkles className="w-10 h-10 text-[#C9A84C]" />
                {isEn ? "Open to filmmakers worldwide" : "向全球创作者开放"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">
                {isEn ? "An unforgettable Hollywood experience connecting rising stars with industry legends." : "一次难忘的好莱坞盛典体验，将冉冉升起的新星与行业传奇紧密相连。"}
             </p>
           </div>`;

const newOpen = `<div className="text-center mb-10">
             <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                <Sparkles className="w-8 h-8" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
                {isEn ? "Open to filmmakers worldwide" : "向全球创作者开放"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
                {isEn ? "An unforgettable Hollywood experience connecting rising stars with industry legends." : "一次难忘的好莱坞盛典体验，将冉冉升起的新星与行业传奇紧密相连。"}
             </p>
           </div>`;

// 3. The Complete Golden Feather Awards System
const oldComplete = `<div className="text-center mb-3">
             <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-4 flex justify-center items-center gap-4">
                <Trophy className="w-10 h-10 lg:w-12 lg:h-12 text-[#C9A84C]" />
                {isEn ? "The Complete Golden Feather Awards System" : "GFA金羽奖完整奖项方案"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                {isEn ? "Recognizing excellence across all disciplines of filmmaking." : "表彰电影制作各个领域的卓越成就，涵盖长短片及各项核心技术。"}
             </p>
           </div>`;

const newComplete = `<div className="text-center mb-10">
             <div className="w-16 h-16 bg-[#333333] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                <Trophy className="w-8 h-8" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-4">
                {isEn ? "The Complete Golden Feather Awards System" : "GFA金羽奖完整奖项方案"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                {isEn ? "Recognizing excellence across all disciplines of filmmaking." : "表彰电影制作各个领域的卓越成就，涵盖长短片及各项核心技术。"}
             </p>
           </div>`;

// 4. Submission & Eligibility
const oldSubmission = `<div className="text-center mb-5">
                  <div className="w-20 h-20 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs border border-[#C9A84C]/20">
                     <Send className="w-8 h-8 text-[#C9A84C] ml-1" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                     {isEn ? "Submission & Eligibility" : "报名指南与获奖资格"}
                  </h2>
                  <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto">
                     {isEn 
                       ? "Ready to present your work to exactly the audience you've been looking for?" 
                       : "准备好向世界展现您的杰作了吗？请仔细阅读下方的赛事资格及报名要求。"}
                  </p>
               </div>`;

const newSubmission = `<div className="text-center mb-10">
                  <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                     <Send className="w-8 h-8 ml-1" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
                     {isEn ? "Submission & Eligibility" : "报名指南与获奖资格"}
                  </h2>
                  <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto leading-relaxed">
                     {isEn 
                       ? "Ready to present your work to exactly the audience you've been looking for?" 
                       : "准备好向世界展现您的杰作了吗？请仔细阅读下方的赛事资格及报名要求。"}
                  </p>
               </div>`;

code = code.replace(oldOpportunities, newOpportunities);
code = code.replace(oldOpen, newOpen);
code = code.replace(oldComplete, newComplete);
code = code.replace(oldSubmission, newSubmission);

fs.writeFileSync('pages/Awards.tsx', code);

// ALSO ProgramAwards.tsx has some of these!
try {
  let promoCode = fs.readFileSync('pages/ProgramAwards.tsx', 'utf8');
  
  // 1. Opportunities & Industry Platform
  const paOldOpp = `<div className="text-center mb-3">
             <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
               {isEn ? "Opportunities & Industry Platform" : "机遇与产业平台整合"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg">
                {isEn ? "Participants and winners access a comprehensive ecosystem designed to launch film careers." : "参赛者与获奖者将进入一个旨在正式开启其电影职业生涯的全面生态系统。"}
             </p>
           </div>`;
  promoCode = promoCode.replace(paOldOpp, newOpportunities);

  // 2. Open to filmmakers
  const paOldOpen = `<div className="text-center mb-4">
              <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 flex justify-center items-center gap-4">
                 <Sparkles className="w-10 h-10 text-[#C9A84C]" />
                 {isEn ? "Open to filmmakers worldwide" : "向全球创作者开放"}
              </h2>
              <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">
                 {isEn ? "An unforgettable Hollywood experience connecting rising stars with industry legends." : "一次难忘的好莱坞盛典体验，将冉冉升起的新星与行业传奇紧密相连。"}
              </p>
            </div>`;
  promoCode = promoCode.replace(paOldOpen, newOpen);

  // 3. Complete Golden Feather
  const paOldComplete = `<div className="text-center mb-3">
              <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-4 flex justify-center items-center gap-4">
                 <Trophy className="w-10 h-10 lg:w-12 lg:h-12 text-[#C9A84C]" />
                 {isEn ? "The Complete Golden Feather Awards System" : "GFA金羽奖完整奖项方案"}
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                 {isEn ? "Recognizing excellence across all disciplines of filmmaking." : "表彰电影制作各个领域的卓越成就，涵盖长短片及各项核心技术。"}
              </p>
            </div>`;
  promoCode = promoCode.replace(paOldComplete, newComplete);

  // 4. Submission
  const paOldSub = `<div className="text-center mb-3">
                  <div className="w-20 h-20 bg-gfa-inkBlack rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                     <Send className="w-8 h-8 text-[#C9A84C] ml-1" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                     {isEn ? "Submission & Eligibility" : "报名指南与获奖资格"}
                  </h2>
                  <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto">
                     {isEn 
                       ? "Ready to present your work to exactly the audience you've been looking for?" 
                       : "准备好向世界展现您的杰作了吗？请仔细阅读下方的赛事资格及报名要求。"}
                  </p>
               </div>`;
  const paNewSub = `<div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gfa-inkBlack rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                     <Send className="w-8 h-8 ml-1" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
                     {isEn ? "Submission & Eligibility" : "报名指南与获奖资格"}
                  </h2>
                  <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto leading-relaxed">
                     {isEn 
                       ? "Ready to present your work to exactly the audience you've been looking for?" 
                       : "准备好向世界展现您的杰作了吗？请仔细阅读下方的赛事资格及报名要求。"}
                  </p>
               </div>`;
  promoCode = promoCode.replace(paOldSub, paNewSub);

  fs.writeFileSync('pages/ProgramAwards.tsx', promoCode);
} catch (e) {
  console.log("ProgramAwards might not have it all", e);
}
