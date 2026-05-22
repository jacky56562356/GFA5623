import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Link } from 'react-router-dom';
import { Trophy, Star, Medal, ArrowRight, Heart, Globe, Video, Handshake, Users, DollarSign, Send, CheckCircle, CalendarDays, Camera, Clapperboard, Sparkles, Mic, Lightbulb, Scissors, Music, Paintbrush, Film } from 'lucide-react';

const Awards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans pb-3 bg-[#F5F2EE]">
      <SEO title="Golden Feather Awards | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-8 pb-5">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" 
            alt="Awards Ceremony" 
            className="w-full h-full object-cover object-[center_20%] opacity-90" 
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto mt-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {"The Golden Feather Awards"}
          </h1>
          <h2 className="text-xl md:text-3xl font-light text-[#C9A84C] italic drop-shadow-lg mb-6">
            {"Hollywood's Premier Recognition for Emerging Filmmakers"}
          </h2><h1 className="hidden">
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-white relative z-20 -mt-16 rounded-t-[40px] shadow-xl">
        <div className="container-gfa max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/4">
            <p className="text-lg md:text-xl font-light text-gfa-inkBlack leading-[1.8] font-serif mb-6 text-center md:text-left">
              {"An annual Hollywood awards ceremony recognizing excellence in youth and independent cinema. It is one of Hollywood's most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers."}
            </p>
            <div className="w-16 h-px bg-[#C9A84C] mb-6 mx-auto md:mx-0"></div>
            <div className="text-gfa-slate font-light leading-[1.8] space-y-4 text-sm md:text-base text-left md:text-justify mb-8">
               <p>{"Judged by active Hollywood industry professionals, and held at the heart of Hollywood in a formal, high-caliber ceremony, the Golden Feather Awards recognizes excellence across all levels of the craft — from established filmmakers to emerging directors, from seasoned creators to bold new voices entering the industry for the first time."}</p>
               
               <p>{"We believe that great cinema deserves to be seen. A great film should not remain unseen simply because its creator lacked a platform. Our mission is to build that platform."}</p>
                 
               <p>{"Through our distribution network spanning Asia — including Mainland China, Hong Kong, and Taiwan — the Golden Feather Awards serves as a bridge, carrying outstanding works to audiences across the world. Every film recognized by our awards gains access to new markets, new audiences, and new opportunities for growth."}</p>
                 
               <p>{"We are building our own streaming platform to ensure that awarded filmmakers receive the recognition, reach, and professional returns their work deserves — because great storytelling should never go unrewarded."}</p>
            </div>

            <div className="text-center md:text-left mt-6">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#C9A84C] mb-2 tracking-wide">
                {"The Golden Feather Awards."}
              </h3>
              <p className="text-lg md:text-xl font-light text-gfa-inkBlack italic font-serif">
                {"Where excellence is recognized. Where cinema travels further."}
              </p>
            </div>
          </div>
          
          <div className="md:w-1/4 flex justify-center mt-8 md:mt-0">
             <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" alt="Golden Feather Trophy" className="w-[120px] md:w-[160px] h-auto object-contain mx-auto" />
          </div>
        </div>
      </section>

      <div className="container-gfa max-w-6xl mx-auto space-y-5 px-4 mt-5">
        
        {/* Global Distribution & Platform Value */}
        <section>
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
               <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {"Opportunities & Industry Platform"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
               {"Participants and winners access a comprehensive ecosystem designed to launch film careers."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <Globe className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Asian & Global Distribution"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Winning films will be heavily promoted and distributed across top streaming platforms and cinemas in China and the broader Asian market, as well as globally."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <Video className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Premier Screening Opportunities"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Showcase your work live at top-tier film festivals and exclusive Hollywood screenings, gathering immediate feedback from industry veterans."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <Handshake className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Asian Co-Production Opportunities"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"We facilitate direct collaboration platforms to launch Asian co-productions, securing joint funding and dedicated cross-cultural partnerships for future projects."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <span className="text-[#C9A84C] group-hover:text-white font-serif italic text-2xl">🎬</span>
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Film Creation Ecosystem"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Our platform provides comprehensive resources, from script development to post-production, streamlining the entire creative process for young filmmakers."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <DollarSign className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Lowering Production Costs"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Through our vendor networks and equipment subsidies, we heavily reduce the financial burden of production, allowing talent to focus purely on storytelling."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                  <Users className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-3">{"Investor Matchmaking"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Dedicated pitch sessions and networking events tie promising projects to established film funds and independent investors ready to greenlight new visions."}
               </p>
            </div>
          </div>
        </section>

        {/* Ceremony Format & Timeline */}
        <section className="bg-white p-10 lg:p-16 rounded-[40px] shadow-sm border border-gray-100 my-5">
           <div className="text-center mb-10">
             <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                <Sparkles className="w-8 h-8" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
                {"Open to filmmakers worldwide"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
                {"An unforgettable Hollywood experience connecting rising stars with industry legends."}
             </p>
           </div>

           <div className="relative">
              {/* Vertical line connecting events */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#F5F2EE] transform -translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-4">
                 {/* Step 1 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-4 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"The Red Carpet"}</h3>
                       <p className="text-gfa-slate font-light">{"Walk the exclusive Hollywood red carpet with media coverage and celebrity guests."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">01</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy"  src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Red Carpet"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-4 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Nominee Showcase & Premiere"}</h3>
                       <p className="text-gfa-slate font-light">{"Exclusive theater screenings of nominated films for distributors and international buyers."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">02</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Premiere"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-4 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Gala & Awards Presentation"}</h3>
                       <p className="text-gfa-slate font-light">{"The grand ceremony featuring live performances, keynote speeches, and the Golden Feather presentations."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">03</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Presentation"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-4 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Industry After Party"}</h3>
                       <p className="text-gfa-slate font-light">{"A dedicated networking event to connect winners with Hollywood producers and Asian market funds."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">04</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Networking"  width="1200" height="800"   />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Award Categories */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-10 lg:p-16 shadow-xl border border-gray-800">
           <div className="text-center mb-10">
             <div className="w-16 h-16 bg-[#333333] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                <Trophy className="w-8 h-8" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-4">
                {"The Complete Golden Feather Awards System"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                {"Recognizing excellence across all disciplines of filmmaking."}
             </p>
           </div>
           
           <div className="space-y-3">
              {/* Grand Honors */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Clapperboard className="w-6 h-6" /> {"Grand Honors"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center group hover:bg-white/10 transition">
                       <h4 className="font-bold text-lg">{"Best Film"}</h4>
                       <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider">$2,000</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center group hover:bg-white/10 transition">
                       <h4 className="font-bold text-lg">{"Best Director"}</h4>
                       <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider">$1,000</span>
                    </div>
                 </div>
              </div>

              {/* Acting Awards */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Star className="w-6 h-6" /> {"Acting Awards"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { en: "Best Actor", zh: "最佳男主角", prize: "$500" },
                      { en: "Best Actress", zh: "最佳女主角", prize: "$500" },
                      { en: "Best Supporting Actor", zh: "最佳男配角", prize: "$300" },
                      { en: "Best Supporting Actress", zh: "最佳女配角", prize: "$300" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:bg-white/10 transition text-center">
                         <h4 className="font-bold text-lg mb-2">{item.en}</h4>
                         <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider">{item.prize}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Genre Awards */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Film className="w-6 h-6" /> {"Genre Awards"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { en: "Best Short Film", zh: "最佳短片", prize: "$800" },
                      { en: "Best Documentary", zh: "最佳纪录片", prize: "$800" },
                      { en: "Best Animation", zh: "最佳动画片", prize: "$500" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:bg-white/10 transition text-center">
                         <h4 className="font-bold text-lg mb-2">{item.en}</h4>
                         <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider">{item.prize}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Short Drama Awards */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Video className="w-6 h-6" /> {"Short Drama Awards (New)"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { en: "Best Short Drama Production", zh: "最佳短剧制作奖", prize: "$800", descEn: "Recognizes overall production quality, visuals, and technical standards.", descZh: "表彰整体制作质量、视觉呈现、技术水准" },
                      { en: "Best Short Drama Story", zh: "最佳短剧故事奖", prize: "$600", descEn: "Recognizes narrative creativity, story structure, and originality.", descZh: "表彰剧情创意、叙事结构、原创性" },
                      { en: "Best Short Drama Actor", zh: "最佳短剧男主角", prize: "$300", descEn: "Acting in the short drama category.", descZh: "短剧类表演" },
                      { en: "Best Short Drama Actress", zh: "最佳短剧女主角", prize: "$300", descEn: "Acting in the short drama category.", descZh: "短剧类表演" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col group hover:bg-white/10 transition">
                         <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-lg text-white">{item.en}</h4>
                           <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider ml-4">{item.prize}</span>
                         </div>
                         <p className="text-white/50 text-sm font-light mt-auto">{item.descEn}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Youth / Newcomer Awards */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Sparkles className="w-6 h-6" /> {"Youth & Emerging Talent"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { en: "Best Young Director", zh: "最佳青年导演", prize: "$500" },
                      { en: "Best Emerging Actor", zh: "最佳新人演员", prize: "$300" },
                      { en: "Best Student Film", zh: "最佳学生影片", prize: "$200" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:bg-white/10 transition text-center">
                         <h4 className="font-bold text-lg mb-2">{item.en}</h4>
                         <span className="text-[#C9A84C] font-mono text-xl font-bold tracking-wider">{item.prize}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Technical / Craft Awards */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Scissors className="w-6 h-6" /> {"Craft & Technical Awards (Certificate + Trophy)"}
                 </h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "最佳剧本", "最佳摄影", "最佳剪辑", "最佳原创音乐", 
                      "最佳视觉效果", "最佳服装造型", "最佳短剧剧本", "评审特别奖"
                    ].map((zhText, idx) => {
                      const enObj: Record<string, string> = {
                        "最佳剧本": "Best Screenplay",
                        "最佳摄影": "Best Cinematography",
                        "最佳剪辑": "Best Editing", 
                        "最佳原创音乐": "Best Original Score",
                        "最佳视觉效果": "Best Visual Effects",
                        "最佳服装造型": "Best Costume Design",
                        "最佳短剧剧本": "Best Short Drama Script",
                        "评审特别奖": "Special Jury Prize"
                      };
                      return (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition min-h-[100px]">
                         <h4 className="font-bold text-base text-white/90">{enObj[zhText]}</h4>
                      </div>
                    )})}
                 </div>
              </div>

              {/* Audience Choice */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Users className="w-6 h-6" /> {"Audience Awards"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:bg-white/10 transition">
                       <div className="flex justify-between items-start">
                         <h4 className="font-bold text-lg">{"Audience Choice Award"}</h4>
                         <Heart className="w-5 h-5 text-red-400 opacity-60" />
                       </div>
                       <div className="mt-4 inline-block bg-[#C9A84C]/20 text-[#C9A84C] px-4 py-2 rounded-full font-bold text-sm w-fit">
                          {"100% of Audience Donations"}
                       </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:bg-white/10 transition">
                       <div className="flex justify-between items-start">
                         <h4 className="font-bold text-lg">{"Audience Choice Short Drama"}</h4>
                         <Heart className="w-5 h-5 text-red-400 opacity-60" />
                       </div>
                       <div className="mt-4 inline-block bg-[#C9A84C]/20 text-[#C9A84C] px-4 py-2 rounded-full font-bold text-sm w-fit">
                          {"100% of Audience Donations"}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Perks / Benefits */}
              <div>
                 <h3 className="text-2xl font-bold font-serif mb-3 text-[#C9A84C] flex items-center gap-3 border-b border-white/10 pb-4">
                    <Medal className="w-6 h-6" /> {"Non-Cash Rewards (All Winners)"}
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { en: "Asian Distribution Pipeline", zh: "亚洲发行通道", descEn: "Entry into Mainland China, Hong Kong, and Taiwan.", descZh: "进入中国大陆、香港、台湾" },
                      { en: "Official Trophy & Certificate", zh: "官方奖杯+证书", descEn: "Awarded live at the Hollywood ceremony.", descZh: "好莱坞颁奖典礼颁发" },
                      { en: "Permanent GFA Website Showcase", zh: "GFA官网永久展示", descEn: "Dedicated showcase page for the winning film.", descZh: "获奖影片介绍页面" },
                      { en: "Blackmagic Equipment Support", zh: "Blackmagic设备支持", descEn: "Available to select winners.", descZh: "部分获奖者" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition">
                         <h4 className="font-bold text-lg mb-2 text-[#C9A84C] group-hover:text-white transition-colors">{item.en}</h4>
                         <p className="text-white/60 text-sm font-light">{item.descEn}</p>
                      </div>
                    ))}
                 </div>
              </div>
              
           </div>
        </section>

        {/* Judging & Selection Process */}
        <section className="bg-white text-gfa-inkBlack rounded-[40px] p-10 lg:p-16 shadow-sm border border-gray-100 mt-5">
           <div className="relative z-10">
              <div className="text-center mb-10">
                 <div className="w-16 h-16 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-[#C9A84C]/20 text-[#C9A84C]">
                    <CheckCircle className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-4">
                   {"Evaluation Criteria & Selection Model"}
                 </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                 <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 border-b border-gray-100 pb-3">
                       {"Evaluation Criteria"}
                    </h3>
                    <ul className="space-y-3">
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-3xl">01</div>
                          <div>
                             <h4 className="font-bold text-xl mb-2">{"Originality & Vision"}</h4>
                             <p className="text-gfa-slate font-light">{"Unique perspective, innovative storytelling, and bold artistic choices."}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-3xl">02</div>
                          <div>
                             <h4 className="font-bold text-xl mb-2">{"Technical Execution"}</h4>
                             <p className="text-gfa-slate font-light">{"Proficiency in cinematography, editing, sound design, and overall production value."}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-3xl">03</div>
                          <div>
                             <h4 className="font-bold text-xl mb-2">{"Emotional Impact"}</h4>
                             <p className="text-gfa-slate font-light">{"The film's ability to engage audiences and evoke a meaningful emotional response."}</p>
                          </div>
                       </li>
                    </ul>
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 border-b border-gray-100 pb-3">
                       {"Selection Model"}
                    </h3>
                    <div className="space-y-4">
                       <div className="bg-[#F5F2EE] border border-[#C9A84C]/20 p-8 rounded-3xl">
                          <h4 className="font-bold text-xl mb-3">{"Preliminary Round"}</h4>
                          <p className="text-gfa-slate font-light">
                             {"Submissions are reviewed by an initial committee of festival programmers to ensure technical readiness and rule compliance. We utilize a blind-review system for initial technical categories to ensure absolute fairness, evaluating the raw emotional impact and technical competency of the art uninfluenced by background."}
                          </p>
                       </div>
                       <div className="bg-[#111111] text-white border border-[#C9A84C]/20 p-8 rounded-3xl relative overflow-hidden shadow-lg">
                          <div className="absolute top-0 right-0 w-2 h-full bg-[#C9A84C]"></div>
                          <h4 className="font-bold text-xl mb-3">{"Industry Jury Panel"}</h4>
                          <p className="text-white/80 font-light">
                             {"Shortlisted films are evaluated by a prestigious panel of active industry professionals: current DGA directors, PGA producers, festival programmers, and top-tier critics."}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Submission & Eligibility Section */}
        <section className="bg-white border text-center border-[#C9A84C]/30 rounded-[40px] p-10 lg:p-16 relative overflow-hidden shadow-sm">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
           <div className="absolute top-0 left-0 w-full h-2 bg-[#C9A84C]"></div>
           
           <div className="relative z-10">
              <div className="text-center mb-5">
                 <div className="w-20 h-20 bg-[#F5F2EE] rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs border border-[#C9A84C]/20">
                    <Send className="w-8 h-8 text-[#C9A84C] ml-1" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                    {"Submission & Eligibility"}
                 </h2>
                 <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto">
                    {"Ready to present your work to exactly the audience you've been looking for?"}
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-left">
                 <div className="bg-[#F5F2EE] p-10 rounded-3xl border border-[#C9A84C]/10">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3 flex items-center gap-3">
                       <CheckCircle className="w-7 h-7 text-[#C9A84C]" />
                       {"Eligibility Requirements"}
                    </h3>
                    <ul className="space-y-5 text-gfa-slate font-light text-lg">
                       <li className="flex items-start gap-4">
                          <div className="min-w-2 mt-2.5 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"The primary creator (Director/Writer/Lead Actor) must be under 30 years old for youth categories."}
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="min-w-2 mt-2.5 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Films must have been completed on or after January 1, 2024."}
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="min-w-2 mt-2.5 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"All non-English films MUST contain burned-in English subtitles."}
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="min-w-2 mt-2.5 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Applicant must hold full distribution rights and necessary copyright clearances."}
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="min-w-2 mt-2.5 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Length: Short Films (under 40 mins), Feature Films (60+ mins)."}
                       </li>
                    </ul>
                 </div>

                 <div className="bg-[#111111] text-white p-10 rounded-3xl border border-[#C9A84C]/20 shadow-lg">
                    <h3 className="text-2xl font-bold font-serif mb-3 flex items-center gap-3">
                       <CalendarDays className="w-7 h-7 text-[#C9A84C]" />
                       {"Application Timeline"}
                    </h3>
                    <div className="space-y-3">
                       <div className="relative pl-8 border-l border-[#C9A84C]/30 pb-3">
                          <div className="absolute w-4 h-4 bg-[#C9A84C] rounded-full -left-[8.5px] top-1"></div>
                          <h4 className="font-bold text-xl">{"Submissions Open"}</h4>
                          <p className="text-white/70 font-light mt-1">{"May 25, 2026"}</p>
                       </div>
                       <div className="relative pl-8 border-l border-[#C9A84C]/30 pb-3">
                          <div className="absolute w-4 h-4 bg-[#C9A84C] rounded-full -left-[8.5px] top-1"></div>
                          <h4 className="font-bold text-xl">{"Regular Deadline"}</h4>
                          <p className="text-white/70 font-light mt-1">{"October 2026"}</p>
                       </div>
                       <div className="relative pl-8 border-l border-[#C9A84C]/30 pb-3">
                          <div className="absolute w-4 h-4 bg-[#C9A84C] rounded-full -left-[8.5px] top-1"></div>
                          <h4 className="font-bold text-xl">{"Shortlist Announcement"}</h4>
                          <p className="text-white/70 font-light mt-1">{"Early November 2026"}</p>
                       </div>
                       <div className="relative pl-8">
                          <div className="absolute w-4 h-4 bg-[#C9A84C] rounded-full -left-[8.5px] top-1 shadow-[0_0_15px_rgba(201,168,76,0.8)]"></div>
                          <h4 className="font-bold text-xl text-[#C9A84C]">{"Golden Feather Gala"}</h4>
                          <p className="text-white/70 font-light mt-1">{"November 2026 (Hollywood, CA)"}</p>
                       </div>
                    </div>
                 </div>
              </div>

              
               <div className="bg-[#F5F2EE] p-8 md:p-12 rounded-3xl border border-[#C9A84C]/20 max-w-4xl mx-auto mt-5 text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                 
                 <h4 className="font-bold text-2xl md:text-3xl font-serif mb-3 text-gfa-inkBlack relative z-10">
                   {"Step Into the Spotlight"}
                 </h4>
                 <p className="text-gfa-slate text-lg mb-5 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
                   {"Open to filmmakers worldwide. Submit your masterpiece to the Golden Feather Awards. Not only will you gain global exposure, industry connections, and prestigious recognition, but standout filmmakers are also eligible for robust project support and a Cash Prize of up to $2,000 USD to fuel your next cinematic journey!"}
                 </p>
                 <Link to="/award-submission" className="inline-block relative z-10 bg-gradient-to-r from-[#C9A84C] to-[#E5C973] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-base hover:from-gfa-inkBlack hover:to-gfa-inkBlack hover:text-white transition-all shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:shadow-2xl hover:-translate-y-1 transform duration-300 mb-6">
                    {"Start Your Submission"}
                 </Link>
                 <div className="relative z-10 border-t border-[#C9A84C]/20 pt-6">
                    <p className="text-sm text-gfa-slate uppercase tracking-widest font-bold">
                       {"Questions? Contact us:"} <a href="mailto:info@gfafilm.org" className="text-[#C9A84C] hover:underline"> info@gfafilm.org </a>
                    </p>
                 </div>
              </div>
            </div>
         </section>

        {/* Media & Support */}
        <section className="text-center pt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
             <div className="bg-white border border-gray-100 shadow-sm p-12 rounded-3xl">
               <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{"Press & Media"}</h4>
               <p className="text-gfa-slate font-light mb-4 max-w-sm mx-auto">{"Cover the brightest young talents on their biggest night in Hollywood."}</p>
               <Link to="/contact" className="border-2 border-gfa-inkBlack text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-gfa-inkBlack hover:text-white transition-colors inline-block w-auto">
                 {"Request Press Pass"}
               </Link>
             </div>
             
             <div className="bg-[#111111] text-white p-12 rounded-3xl border border-gray-800 shadow-lg">
               <h4 className="text-2xl font-bold font-serif mb-4 text-[#C9A84C]">{"Corporate Sponsors"}</h4>
               <p className="text-white/80 font-light mb-4 max-w-sm mx-auto">{"Align your brand with the visionary stories and future stars of cinema."}</p>
               <Link to="/contact" className="bg-[#C9A84C] text-black font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-white transition-colors inline-block w-auto">
                 {"Sponsorship Inquiry"}
               </Link>
             </div>
          </div>

          <div className="bg-gfa-inkBlack text-white p-12 md:p-16 rounded-[40px] relative overflow-hidden shadow-2xl">
             <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-white/5 pointer-events-none" />
             <h3 className="relative z-10 text-3xl md:text-5xl font-bold font-serif mb-3 drop-shadow-lg">
               {"Fund a Dream"}
             </h3>
             <p className="relative z-10 text-white/80 text-lg md:text-xl font-light mb-4 max-w-3xl mx-auto leading-relaxed">
               {"Our awards ceremony is entirely non-profit. Your donation ensures we can fly in low-income nominees and host an event they will remember for the rest of their lives."}
             </p>
             <Link to="/donate" className="relative z-10 bg-[#C9A84C] hover:bg-white text-black font-bold uppercase tracking-widest text-base px-12 py-5 rounded-full transition-all flex items-center justify-center gap-3 mx-auto shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 inline-flex w-auto">
               <Heart className="w-5 h-5 fill-current"/> {"Donate to the Awards"}
             </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Awards;

