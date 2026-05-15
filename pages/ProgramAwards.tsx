import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Link } from 'react-router-dom';
import { Award, Globe, Video, Handshake, Users, DollarSign, Send, Star, CheckCircle, Trophy, CalendarDays, Camera, Clapperboard, Sparkles, Mic, Lightbulb } from 'lucide-react';

const ProgramAwards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-[#F5F2EE] pt-[80px] font-sans pb-3">
      <SEO title="Golden Feather Film Awards | GFA" />

      {/* Banner */}
      <div className="relative bg-gfa-inkBlack h-[70vh] min-h-[600px] flex flex-col justify-end pb-4 mb-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2FpjRZK2vm%2FGemini-Generated-Image-k7a54jk7a54jk7a5-1.png&w=1200&output=webp" 
            alt="Golden Feather Awards" 
            className="w-full h-full object-cover object-[center_20%] opacity-90"
           width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 via-gfa-inkBlack/20 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-bold uppercase tracking-widest rounded-full mb-3 relative">
            {isEn ? "Annual Highlight" : "年度盛事"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-xl">
            {isEn ? "Golden Feather Film Awards" : "金羽奖电影颁奖礼"}
          </h1>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
             {isEn 
               ? "Honoring the visionary film talents of tomorrow, discovering cinematic pioneers, and providing an unparalleled global stage for young creators to shine." 
               : "致敬未来的电影视觉人才，发掘电影艺术先锋，为年轻创作者提供一个无与伦比的全球闪耀舞台。"}
          </p>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-3 px-4">
        
         {/* About the Awards */}
         <section className="bg-white p-8 lg:p-16 rounded-[40px] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-3 items-center -mt-32 relative z-20">
            <div className="md:w-[60%]">
               <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
                 {isEn ? "About the Golden Feather Awards" : "关于金羽奖"}
               </h2>
               <div className="text-gfa-slate leading-relaxed font-light space-y-4 text-base md:text-lg text-justify">
                 <p className="font-medium text-gfa-inkBlack">
                   {isEn 
                     ? "The Golden Feather Awards is not a talent competition. It is one of Hollywood's most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers, outstanding works, and the visionary voices shaping the future of cinema." 
                     : "金羽奖不是一场才艺比赛。它是好莱坞最严肃、最负盛名的专业表彰盛典之一——致力于表彰杰出的电影人、优秀的影视作品，以及塑造电影未来的前瞻性声音。"}
                 </p>
                 <p>
                   {isEn
                     ? "Judged by active Hollywood industry professionals, and held at the heart of Hollywood in a formal, high-caliber ceremony, the Golden Feather Awards recognizes excellence across all levels of the craft — from established filmmakers to emerging directors, from seasoned creators to bold new voices entering the industry for the first time."
                     : "金羽奖由活跃的好莱坞工业专业人士组成评审团，在好莱坞核心地带以高规格的正式典礼呈现。我们表彰电影制作各个层面的卓越成就——从成熟的电影人到新秀导演，从经验丰富的创作者到首次步入行业的勇敢新声。"}
                 </p>
                 <p>
                   {isEn
                     ? "We believe that great cinema deserves to be seen. A great film should not remain unseen simply because its creator lacked a platform. Our mission is to build that platform."
                     : "我们坚信，伟大的电影理应被世界看到。一部好电影，绝不该因为创作者缺乏发声的平台而默默无闻。打造这样一个属于电影人的平台，正是我们的使命。"}
                 </p>
                 <p>
                   {isEn
                     ? "Through our distribution network spanning Asia — including Mainland China, Hong Kong, and Taiwan — the Golden Feather Awards serves as a bridge, carrying outstanding works to audiences across the world. Every film recognized by our awards gains access to new markets, new audiences, and new opportunities for growth."
                     : "依托覆盖亚洲（包括中国大陆、香港及台湾地区）的发行网络，金羽奖犹如一座桥梁，将杰出作品推向全球观众。每一部获得我们奖项认可的影片，都将获得进入新市场、接触新受众和持续发展的新机遇。"}
                 </p>
                 <p>
                   {isEn
                     ? "We are building our own streaming platform to ensure that awarded filmmakers receive the recognition, reach, and professional returns their work deserves — because great storytelling should never go unrewarded."
                     : "我们正在建立专属的流媒体平台，以确保获奖电影人能够获得与其作品价值相匹配的认可、影响力以及专业回报——因为，伟大的故事讲述永远不该被辜负。"}
                 </p>
                 <p className="italic text-gfa-inkBlack font-medium pt-2">
                   {isEn ? "The Golden Feather Awards. Where excellence is recognized. Where cinema travels further." : "金羽奖。卓越被看见的地方。让电影走得更远。"}
                 </p>
               </div>
            </div>
            <div className="md:w-[40%] grid grid-cols-2 gap-4">
                <img loading="lazy"  src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1516321497487-e288fb19713f%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-auto object-cover shadow-md aspect-square" alt="Ceremony"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1542204165-65bf26472b9b%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-auto object-cover shadow-md aspect-square mt-3" alt="Trophy"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
            </div>
         </section>

        {/* Global Distribution & Platform Value */}
        <section>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "Opportunities & Industry Platform" : "机遇与产业平台整合"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg">
               {isEn ? "Participants and winners access a comprehensive ecosystem designed to launch film careers." : "参赛者与获奖者将进入一个旨在正式开启其电影职业生涯的全面生态系统。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Globe className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Global Distribution Network" : "全球发行平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Selected films gain access to our extensive global distribution network, ensuring stories are seen by audiences worldwide across premier streaming platforms and cinemas." : "入围及获奖影片将获得我们广泛的全球发行网络支持，确保您的故事能够通过顶级流媒体和院线与全球观众见面。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Video className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Premier Screening Opportunities" : "国际展映平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Showcase your work live at top-tier film festivals and exclusive Hollywood screenings, gathering immediate feedback from industry veterans." : "在顶级电影节和好莱坞专属放映会上面向公众及业内人士展示您的作品，并获得行业资深人士的直接反馈。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Handshake className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Expanding into the Asian Market" : "深度对接亚洲市场"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "We facilitate direct connections and partnerships within the rapidly growing Asian film market, opening doors for co-productions and cross-cultural releases." : "我们促进与快速增长的亚洲电影市场的直接对接与合作，为合拍片和跨文化电影发行敞开大门，建立坚实合作关系。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <span className="text-[#C9A84C] group-hover:text-white font-serif italic text-2xl">🎬</span>
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Film Creation Ecosystem" : "建立电影创作平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Our platform provides comprehensive resources, from script development to post-production, streamlining the entire creative process for young filmmakers." : "平台整合了从剧本开发到后期制作的综合资源，不断搭建与完善影视孵化平台，为年轻电影人简化创作流程。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <DollarSign className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Lowering Production Costs" : "大幅降低拍摄成本"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Through our vendor networks and equipment subsidies, we heavily reduce the financial burden of production, allowing talent to focus purely on storytelling." : "通过我们的设备补贴和供应商网络联盟，显著降低制作成本，让创作者可以全心投入讲好故事。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Users className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Investor Matchmaking" : "绑定行业投资人"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Dedicated pitch sessions and networking events tie promising projects to established film funds and independent investors ready to greenlight new visions." : "专设的项目路演场次与社交活动，将极具潜力的作品直接与成熟的电影基金及独立投资人绑定。"}
               </p>
            </div>
          </div>
        </section>

        {/* Award Categories */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-12 lg:p-16 shadow-xl border border-gray-800">
           <div className="text-center mb-4">
             <h2 className="text-4xl font-bold font-serif mb-4 flex justify-center items-center gap-4">
                <Trophy className="w-10 h-10 text-[#C9A84C]" />
                {isEn ? "Award Categories" : "奖项设置"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                {isEn ? "Recognizing excellence across all disciplines of filmmaking." : "表彰电影制作各个领域的卓越成就，涵盖长短片及各项核心技术。"}
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                  { icon: Clapperboard, en: "Best Picture", zh: "最佳影片大奖" },
                  { icon: Sparkles, en: "Best Director", zh: "最佳新晋导演" },
                  { icon: Star, en: "Best Youth Actor", zh: "最佳青年演员" },
                  { icon: Lightbulb, en: "Best Screenplay", zh: "最佳原创剧本" },
                  { icon: Camera, en: "Best Cinematography", zh: "最佳摄影指导" },
                  { icon: Mic, en: "Best Sound Design", zh: "最佳声音设计" },
                  { icon: Video, en: "Best Short Film", zh: "最佳单元短片" },
                  { icon: Globe, en: "Global Cultural Impact", zh: "全球文化影响力奖" },
              ].map((category, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A84C] transition-colors">
                       <category.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-gfa-inkBlack" />
                    </div>
                    <h4 className="font-bold font-serif">{isEn ? category.en : category.zh}</h4>
                 </div>
              ))}
           </div>
        </section>

        {/* Ceremony Format & Timeline */}
        <section className="bg-white p-12 lg:p-16 rounded-[40px] shadow-xl border border-gray-100">
           <div className="text-center mb-4">
             <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 flex justify-center items-center gap-4">
                <Sparkles className="w-10 h-10 text-[#C9A84C]" />
                {isEn ? "Ceremony Format & Experience" : "颁奖礼形式与盛典全流程"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">
                {isEn ? "An unforgettable Hollywood experience connecting rising stars with industry legends." : "一次难忘的好莱坞盛典体验，将冉冉升起的新星与行业传奇紧密相连。"}
             </p>
           </div>

           <div className="relative">
              {/* Vertical line connecting events */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#F5F2EE] transform -translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-3">
                 {/* Step 1 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "The Red Carpet" : "星光红毯秀"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "Walk the exclusive Hollywood red carpet with media coverage and celebrity guests." : "走上好莱坞专属红毯，接受全球媒体采访，与顶级明星嘉宾共襄盛举。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">01</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1626814026160-2237a95fc5a0%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Red Carpet"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Nominee Showcase & Premiere" : "入围电影展映与首映礼"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "Exclusive theater screenings of nominated films for distributors and international buyers." : "为发行商和国际买家专门安排的入围影片顶级影院级展映。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">02</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1489599849927-2ee91cede3ba%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Premiere"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Gala & Awards Presentation" : "颁奖盛典与文艺汇演"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "The grand ceremony featuring live performances, keynote speeches, and the Golden Feather presentations." : "隆重的盛典晚会，包括激燃的现场表演、行业领袖的主题演讲及金羽奖的正式颁发。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">03</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1540317580384-e5d43867caa6%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Presentation"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Industry After Party" : "行业交流晚宴"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "A dedicated networking event to connect winners with Hollywood producers and Asian market funds." : "颁奖礼后的专属晚宴，旨在将获奖者与好莱坞知名制片人及亚洲市场基金无缝对接。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">04</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1511795409834-ef04bbd61622%3Fq%3D80%26w%3D2069%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Networking"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Judging & Selection Process */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-10">
              <Award className="w-96 h-96" />
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl font-bold font-serif mb-3">
                {isEn ? "Evaluation Criteria & Selection Model" : "评奖标准与评选模式"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#C9A84C] flex items-center gap-3">
                       <CheckCircle className="w-6 h-6" />
                       {isEn ? "Evaluation Criteria" : "评奖标准"}
                    </h3>
                    <ul className="space-y-3">
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">01</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Originality & Vision" : "原创性与视野"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "Unique perspective, innovative storytelling, and bold artistic choices." : "独特的视角、创新的叙事方式及大胆的艺术选择。"}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">02</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Technical Execution" : "技术执行力"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "Proficiency in cinematography, editing, sound design, and overall production value." : "在摄影、剪辑、声音设计及整体制作水准上的专业表现。"}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">03</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Emotional Impact" : "情感共鸣"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "The film's ability to engage audiences and evoke a meaningful emotional response." : "影片吸引观众并引发深层情感共鸣的能力。"}</p>
                          </div>
                       </li>
                    </ul>
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#C9A84C] flex items-center gap-3">
                       <Star className="w-6 h-6" />
                       {isEn ? "Selection Model" : "评选模式"}
                    </h3>
                    <div className="space-y-3">
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                          <h4 className="font-bold text-lg mb-2">{isEn ? "Preliminary Round" : "初审阶段"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {isEn ? "Submissions are reviewed by an initial committee of festival programmers to ensure technical readiness and rule compliance." : "所有提交作品将由电影节选片委员会进行初步审核，确保技术达标及符合参赛规则。"}
                          </p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-2 h-full bg-[#C9A84C]"></div>
                          <h4 className="font-bold text-lg mb-2">{isEn ? "Industry Jury Panel" : "行业专家评委团终审"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {isEn ? "Shortlisted films are evaluated by a prestigious panel of Hollywood directors, Asian market distributors, and top-tier critics." : "入围影片将交由由好莱坞知名导演、亚洲市场发行商及顶级影评人组成的国际专家评审团进行最终评选。"}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Submission & Eligibility Section */}
        <section className="bg-white border-2 border-[#C9A84C]/30 rounded-[40px] p-12 lg:p-16 text-left relative overflow-hidden shadow-2xl">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="relative z-10">
              <div className="text-center mb-10">
                 <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C9A84C]/20 shadow-sm text-[#C9A84C]">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3 flex items-center gap-3">
                       <CheckCircle className="w-6 h-6 text-[#C9A84C]" />
                       {isEn ? "Eligibility Requirements" : "评选要求与获奖资格"}
                    </h3>
                    <ul className="space-y-4 text-gfa-slate font-light">
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "The primary creator (Director/Writer/Lead Actor) must be under 30 years old for youth categories." : "青年单元：主创人员（导演/编剧/主演）报名时年龄需在30周岁以下。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Films must have been completed on or after January 1, 2024." : "影片制作完成时间必须为2024年1月1日之后。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "All non-English films MUST contain burned-in English subtitles." : "所有非英语对白影片【必须】嵌有英文字幕。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Applicant must hold full distribution rights and necessary copyright clearances." : "报名者必须拥有该影片的完整发行权及音视频版权许可。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Length: Short Films (under 40 mins), Feature Films (60+ mins)." : "时长要求：短片单元限40分钟以内，长片单元需在60分钟以上。"}
                       </li>
                    </ul>
                 </div>

                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3 flex items-center gap-3">
                       <CalendarDays className="w-6 h-6 text-[#C9A84C]" />
                       {isEn ? "Application Timeline" : "赛事报名流程及时间表"}
                    </h3>
                    <div className="space-y-3">
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Submissions Open" : "启动报名通道"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "May 25, 2026" : "2026年5月25日"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Regular Deadline" : "常规报名截止"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "October 2026" : "2026年10月"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Shortlist Announcement" : "公布入围与获奖名单"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "Early November 2026" : "2026年11月初"}</p>
                       </div>
                       <div className="relative pl-6">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Golden Feather Gala" : "金羽奖颁奖礼盛典开幕式"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "November 2026 (Hollywood, CA)" : "2026年11月（美国好莱坞）"}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
                 <h4 className="font-bold text-xl font-serif mb-4 text-gfa-inkBlack">
                   {isEn ? "Ready to Submit Your Film?" : "准备好提交您的作品了吗？"}
                 </h4>
                 <Link to="/award-submission" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors whitespace-nowrap shadow-md hover:shadow-xl hover:scale-105 transform duration-300">
                    {isEn ? "Start Application" : "立即进入报名系统"}
                 </Link>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramAwards;
