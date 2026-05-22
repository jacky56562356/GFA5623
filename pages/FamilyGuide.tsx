import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ChevronDown, Map, Compass, BookOpen, GraduationCap, PhoneCall } from 'lucide-react';

const FamilyGuide: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "My child loves film, but I'm not sure if it's a good career path?", a: "The entertainment industry is one of the largest export industries in the US, with a massive demand for diverse talent ranging from creative to technical and business roles. With proper planning, it offers highly viable and lucrative career paths." },
    { q: "Is studying film very expensive?", a: "It can be, but it doesn't have to be. GFA specifically mitigates these costs by providing free gear, mentorship, and extensive scholarship programs so talent matters more than money." },
    { q: "What should my child major in for college?", a: "It depends completely on their interest. They don't have to major in 'Film Production'. Many successful producers majored in Business; many great cinematographers studied Physics or Fine Arts. We offer consultations to help figure this out." },
    { q: "As a Chinese family, how can we help our child succeed in the US industry?", a: "By understanding the US system early. Hollywood relies entirely on union structures, verified credits, and professional networks. GFA acts as a bridge, giving Chinese families the exact roadmap required to build an authentic Hollywood career." },
    { q: "How much do GFA's programs cost? Is there financial aid?", a: "Cost varies by program, but as a nonprofit, profitability is not our goal. We offer robust scholarships—up to 100% coverage—for low and middle-income families." },
    { q: "My child has absolutely no experience. Can they start with GFA?", a: "Yes. Our 6-10 age programs assume zero prior experience. We focus purely on kindling their passion and creativity in a pressure-free environment." },
    { q: "Will the Global Talent Competition actually help my child's future?", a: "Absolutely. Competing in Hollywood, receiving verified credentials from a recognized US 501(c)(3), and performing for industry judges are massive resume builders for college applications and talent agents." },
    { q: "How do I schedule a 1-on-1 consultation with the GFA team?", a: "Simply click the 'Book Free Consultation' button at the bottom of this page. We'll find a time to discuss your child's specific situation." }
  ];

  return (
    <div className="font-sans pb-3">
      <SEO title="Family Career Guide | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-5">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=i.ibb.co%2FF4jckgZp%2FChat-GPT-Image-2026-1-25-15-29-13.png&w=1200&output=webp" 
            alt="Family reviewing a script" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {"Your Child Dreams of Film."}<br/>
            <span className="text-[#C9A84C] mt-2 block">{"Let's Build the Path Together."}</span>
          </h1>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-5 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-3xl mx-auto px-4">
           <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
             {"We understand the worries many parents face: The film industry is fiercely competitive—is it truly a viable career path? When should my child start preparing? How much is this going to cost us? What specific roles are actually out there? This page was designed precisely to answer your questions and replace uncertainty with a clear roadmap."}
           </p>
        </div>
      </section>

      {/* Industry Paths */}
      <section className="py-3 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-3">
              {"Understanding Industry Roles"}
            </h2>
            <p className="text-gfa-slate font-light mb-4 max-w-2xl mx-auto">
              {"It's not just 'being a director'. The industry offers a vast array of specialized, highly-skilled professions."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Creative"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Director, Screenwriter, Cinematographer"}<br/><br/>
                  {"The visionaries who craft the emotional core and visual style of the story."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Production"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Producer, Production Designer, Editor"}<br/><br/>
                  {"The master organizers and builders who bring the script from paper to reality."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Technical"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"VFX Artist, Sound Designer, Colorist"}<br/><br/>
                  {"The highly specialized experts who perfect the immersive experience."}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Emerging (Tech)"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"AI Filmmaker, Interactive Content Dir."}<br/><br/>
                  {"The pioneers utilizing artificial intelligence to revolutionize pipelines."}
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{"Business"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{"Roles: "}</strong>{"Distribution, Marketing, IP Law"}<br/><br/>
                  {"The strategists who ensure the art makes money and reaches the audience."}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Age Timeline */}
      <section className="py-3 bg-white border-y border-gfa-border">
         <div className="container-gfa max-w-4xl mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">
                {"Development Strategy by Age"}
              </h2>
            </div>

            <div className="space-y-3">
               {/* 6-10 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">6-10</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Map className="text-[#C9A84C] w-6 h-6"/> {"Exploration Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Love for cinema, keen observation, boundless creativity."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Summer Camps (Foundational), Community Screenings."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Take them to diverse films, encourage them to tell bedtime stories, give them a simple camera to play with."}
                    </div>
                  </div>
               </div>

               {/* 11-14 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">11-14</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <Compass className="text-[#C9A84C] w-6 h-6"/> {"Development Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Master basic narrative creation; successfully complete their first real project."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Summer Camps (Advanced), Children's Film Project, Talent Competitions."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Support them shooting videos on a smartphone, encourage entering local contests, validate their artistic attempts."}
                    </div>
                  </div>
               </div>

               {/* 15-18 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">15-18</div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <BookOpen className="text-[#C9A84C] w-6 h-6"/> {"Specialization Phase"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"Goal:"}</strong>
                      {"Build a robust college portfolio, narrow down a specific career track."}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Hollywood Career Training, AI Filmmaking Courses, Golden Feather Awards submissions."}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{"What Parents Can Do:"}</strong>
                      {"Support their choice of a related college major, help them start networking, trust their focus."}
                    </div>
                  </div>
               </div>

               {/* College / Grad */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-gfa-inkBlack text-white font-bold font-serif text-sm tracking-widest uppercase px-6 py-3 rounded-bl-3xl rounded-tr-3xl"> Grad </div>
                  <h3 className="text-2xl font-bold font-serif mb-3 text-gfa-inkBlack flex items-center gap-3">
                    <GraduationCap className="text-gfa-inkBlack w-6 h-6"/> {"Professional Launcher"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{"GFA Provides:"}</strong>
                      {"Filmmaker Career Support, industry mentorship network, free professional gear rentals."}
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-3 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           <div className="text-center mb-4">
             <h2 className="text-3xl font-bold font-serif text-[#C9A84C]">{"Frequently Asked Questions"}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full px-6 py-5 text-left font-bold flex justify-between items-center focus:outline-none hover:bg-white/10 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                       <span className="pr-8">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-white/70 font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-3 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="pt-2 border-t border-white/10 mt-2">{faq.a}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-3 bg-white text-center">
         <div className="container-gfa px-4">
           <div className="w-20 h-20 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C9A84C]">
             <PhoneCall className="w-8 h-8" />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-3">
             {"Not Sure Where to Start?"}<br/>
             <span className="text-[#C9A84C]">{"Talk to us."}</span>
           </h2>
           <p className="text-lg text-gfa-slate font-light max-w-2xl mx-auto mb-5">
             {"The GFA team offers free, one-on-one parent consultations to help you understand the most suitable path for your talented child."}
           </p>
           <button className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-xl">
             {"Book Free Consultation"}
           </button>
         </div>
      </section>

    </div>
  );
};

export default FamilyGuide;
