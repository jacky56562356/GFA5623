import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Link } from 'react-router-dom';
import { Award, Globe, Video, Handshake, Users, DollarSign, Send, Star, CheckCircle, Trophy, CalendarDays, Camera, Clapperboard, Sparkles, Mic, Lightbulb } from 'lucide-react';

const ProgramAwards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="bg-[#F5F2EE] pt-[80px] font-sans pb-3">
      <SEO title="Golden Feather Film Awards | GFA" />

      {/* Banner */}
      <div className="relative bg-gfa-inkBlack h-[70vh] min-h-[600px] flex flex-col justify-end pb-4 mb-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co/pjRZK2vm/Gemini-Generated-Image-k7a54jk7a54jk7a5-1.png&w=1200&output=webp" 
            alt="Golden Feather Awards" 
            className="w-full h-full object-cover object-[center_20%] opacity-90"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack/80 via-gfa-inkBlack/20 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-bold uppercase tracking-widest rounded-full mb-3 relative">
            {"Annual Highlight"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-xl">
            {"Golden Feather Film Awards"}
          </h1>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
             {"Honoring the visionary film talents of tomorrow, discovering cinematic pioneers, and providing an unparalleled global stage for young creators to shine."}
          </p>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-3 px-4">
        
         {/* About the Awards */}
         <section className="bg-white p-8 lg:p-16 rounded-[40px] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-3 items-center -mt-32 relative z-20">
            <div className="md:w-[60%]">
               <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-3">
                 {"About the Golden Feather Awards"}
               </h2>
               <div className="text-gfa-slate leading-relaxed font-light space-y-4 text-base md:text-lg text-justify">
                 <p className="font-medium text-gfa-inkBlack">
                   {"The Golden Feather Awards is not a talent competition. It is one of Hollywood's most serious and prestigious professional recognition ceremonies — dedicated to honoring exceptional filmmakers, outstanding works, and the visionary voices shaping the future of cinema."}
                 </p>
                 <p>
                   {"Judged by active Hollywood industry professionals, and held at the heart of Hollywood in a formal, high-caliber ceremony, the Golden Feather Awards recognizes excellence across all levels of the craft — from established filmmakers to emerging directors, from seasoned creators to bold new voices entering the industry for the first time."}
                 </p>
                 <p>
                   {"We believe that great cinema deserves to be seen. A great film should not remain unseen simply because its creator lacked a platform. Our mission is to build that platform."}
                 </p>
                 <p>
                   {"Through our distribution network spanning Asia — including Mainland China, Hong Kong, and Taiwan — the Golden Feather Awards serves as a bridge, carrying outstanding works to audiences across the world. Every film recognized by our awards gains access to new markets, new audiences, and new opportunities for growth."}
                 </p>
                 <p>
                   {"We are building our own streaming platform to ensure that awarded filmmakers receive the recognition, reach, and professional returns their work deserves — because great storytelling should never go unrewarded."}
                 </p>
                 <p className="italic text-gfa-inkBlack font-medium pt-2">
                   {"The Golden Feather Awards. Where excellence is recognized. Where cinema travels further."}
                 </p>
               </div>
            </div>
            <div className="md:w-[40%] grid grid-cols-2 gap-4">
                <img loading="lazy" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-auto object-cover shadow-md aspect-square" alt="Ceremony"  width="1200" height="800"   />
                <img loading="lazy" src="https://i.ibb.co/8gHZ9bxG/Chat-GPT-Image-2026-3-8-11-02-27.png" className="rounded-3xl w-full h-auto object-cover shadow-md aspect-square mt-3" alt="Awards Recognition"  width="1200" height="800"   />
            </div>
         </section>

        {/* Global Distribution & Platform Value */}
        <section>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
              {"Opportunities & Industry Platform"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg">
               {"Participants and winners access a comprehensive ecosystem designed to launch film careers."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Globe className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Global Distribution Network"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Selected films gain access to our extensive global distribution network, ensuring stories are seen by audiences worldwide across premier streaming platforms and cinemas."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Video className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Premier Screening Opportunities"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Showcase your work live at top-tier film festivals and exclusive Hollywood screenings, gathering immediate feedback from industry veterans."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Handshake className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Expanding into the Asian Market"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"We facilitate direct connections and partnerships within the rapidly growing Asian film market, opening doors for co-productions and cross-cultural releases."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <span className="text-[#C9A84C] group-hover:text-white font-serif italic text-2xl">🎬</span>
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Film Creation Ecosystem"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Our platform provides comprehensive resources, from script development to post-production, streamlining the entire creative process for young filmmakers."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <DollarSign className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Lowering Production Costs"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Through our vendor networks and equipment subsidies, we heavily reduce the financial burden of production, allowing talent to focus purely on storytelling."}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#C9A84C] transition-colors">
                  <Users className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{"Investor Matchmaking"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {"Dedicated pitch sessions and networking events tie promising projects to established film funds and independent investors ready to greenlight new visions."}
               </p>
            </div>
          </div>
        </section>

        {/* Award Categories */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-12 lg:p-16 shadow-xl border border-gray-800">
           <div className="text-center mb-4">
             <h2 className="text-4xl font-bold font-serif mb-4 flex justify-center items-center gap-4">
                <Trophy className="w-10 h-10 text-[#C9A84C]" />
                {"Award Categories"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                {"Recognizing excellence across all disciplines of filmmaking."}
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
                    <h4 className="font-bold font-serif">{category.en}</h4>
                 </div>
              ))}
           </div>
        </section>

        {/* Ceremony Format & Timeline */}
        <section className="bg-white p-12 lg:p-16 rounded-[40px] shadow-xl border border-gray-100">
           <div className="text-center mb-4">
             <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 flex justify-center items-center gap-4">
                <Sparkles className="w-10 h-10 text-[#C9A84C]" />
                {"Ceremony Format & Experience"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">
                {"An unforgettable Hollywood experience connecting rising stars with industry legends."}
             </p>
           </div>

           <div className="relative">
              {/* Vertical line connecting events */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#F5F2EE] transform -translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-3">
                 {/* Step 1 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"The Red Carpet"}</h3>
                       <p className="text-gfa-slate font-light">{"Walk the exclusive Hollywood red carpet with media coverage and celebrity guests."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">01</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Red Carpet"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Nominee Showcase & Premiere"}</h3>
                       <p className="text-gfa-slate font-light">{"Exclusive theater screenings of nominated films for distributors and international buyers."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">02</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Premiere"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Gala & Awards Presentation"}</h3>
                       <p className="text-gfa-slate font-light">{"The grand ceremony featuring live performances, keynote speeches, and the Golden Feather presentations."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">03</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1540829016269-e05670f88adb?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Presentation"  width="1200" height="800"   />
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-3 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Industry After Party"}</h3>
                       <p className="text-gfa-slate font-light">{"A dedicated networking event to connect winners with Hollywood producers and Asian market funds."}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">04</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img loading="lazy" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Networking"  width="1200" height="800"   />
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
                {"Evaluation Criteria & Selection Model"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#C9A84C] flex items-center gap-3">
                       <CheckCircle className="w-6 h-6" />
                       {"Evaluation Criteria"}
                    </h3>
                    <ul className="space-y-3">
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">01</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{"Originality & Vision"}</h4>
                             <p className="text-white/70 font-light text-sm">{"Unique perspective, innovative storytelling, and bold artistic choices."}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">02</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{"Technical Execution"}</h4>
                             <p className="text-white/70 font-light text-sm">{"Proficiency in cinematography, editing, sound design, and overall production value."}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">03</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{"Emotional Impact"}</h4>
                             <p className="text-white/70 font-light text-sm">{"The film's ability to engage audiences and evoke a meaningful emotional response."}</p>
                          </div>
                       </li>
                    </ul>
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#C9A84C] flex items-center gap-3">
                       <Star className="w-6 h-6" />
                       {"Selection Model"}
                    </h3>
                    <div className="space-y-3">
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                          <h4 className="font-bold text-lg mb-2">{"Preliminary Round"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {"Submissions are reviewed by an initial committee of festival programmers to ensure technical readiness and rule compliance."}
                          </p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-2 h-full bg-[#C9A84C]"></div>
                          <h4 className="font-bold text-lg mb-2">{"Industry Jury Panel"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {"Shortlisted films are evaluated by a prestigious panel of Hollywood directors, Asian market distributors, and top-tier critics."}
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
                    {"Submission & Eligibility"}
                 </h2>
                 <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto leading-relaxed">
                    {"Ready to present your work to exactly the audience you've been looking for?"}
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3 flex items-center gap-3">
                       <CheckCircle className="w-6 h-6 text-[#C9A84C]" />
                       {"Eligibility Requirements"}
                    </h3>
                    <ul className="space-y-4 text-gfa-slate font-light">
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"The primary creator (Director/Writer/Lead Actor) must be under 30 years old for youth categories."}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Films must have been completed on or after January 1, 2024."}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"All non-English films MUST contain burned-in English subtitles."}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Applicant must hold full distribution rights and necessary copyright clearances."}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {"Length: Short Films (under 40 mins), Feature Films (60+ mins)."}
                       </li>
                    </ul>
                 </div>

                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3 flex items-center gap-3">
                       <CalendarDays className="w-6 h-6 text-[#C9A84C]" />
                       {"Application Timeline"}
                    </h3>
                    <div className="space-y-3">
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{"Submissions Open"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{"May 25, 2026"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{"Regular Deadline"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{"October 2026"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{"Shortlist Announcement"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{"Early November 2026"}</p>
                       </div>
                       <div className="relative pl-6">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{"Golden Feather Gala"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{"November 2026 (Hollywood, CA)"}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
                 <h4 className="font-bold text-xl font-serif mb-4 text-gfa-inkBlack">
                   {"Ready to Submit Your Film?"}
                 </h4>
                 <Link to="/award-submission" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors whitespace-nowrap shadow-md hover:shadow-xl hover:scale-105 transform duration-300">
                    {"Start Application"}
                 </Link>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramAwards;
