import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Target, FileText, PlayCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans pb-4">
      <SEO 
        title={"About, Impact & News | Global Film Alliance"} 
        description={"Learn about our mission, real-world impact, and the latest news from Global Film Alliance."}
      />

      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack mt-[90px] md:mt-[100px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fauto%3Dformat%26fit%3Dcrop%26w%3D2670%26q%3D80&w=1200&output=webp" 
            alt="Diverse team of young filmmakers" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-4 leading-tight drop-shadow-2xl">
            {"Who We Are &"}<br/>
            <span className="text-[#C9A84C]">{"Our Global Impact"}</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base font-light">
             {"Discover our mission, our work, and the real-world stories driving change in the film industry."}
          </p>
        </div>
      </section>

      {/* Part 1: Organization Introduction */}
      <section className="py-12 md:py-16 bg-white border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
                {"About Us"}
              </h2>
              <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
                {"Global Film Alliance"}
              </h3>
              <p className="text-base md:text-lg font-light text-gfa-slate leading-relaxed">
                {"Global Film Alliance (GFA) is a 501(c)(3) certified nonprofit organization headquartered in Los Angeles, California. Through our commitment to film education, industry support, and international cooperation, we break down industry barriers and create equitable opportunities for everyone passionate about film."}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-80">
               <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1600880292203-757bb62b4baf%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1000%26q%3D80&w=1200&output=webp" alt="Film Team Working" className="w-full h-full object-cover"  width="1200" height="800"   />
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#F5F2EE] p-10 rounded-2xl border border-[#C9A84C]/20">
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-3">
                 <Target className="w-6 h-6 text-[#C9A84C]" />
                {"Our Mission"}
              </h3>
              <div className="text-gfa-slate font-light leading-relaxed text-lg">
                <>
<p className="mb-4"> Talent should never disappear because opportunity never arrived. <br/> GFA opens the door for every child with a dream, <br/> helps every graduate find their place, <br/> and builds real careers for independent creators. </p>
                    <p className="font-medium text-gfa-inkBlack"> We don't offer one-time help. <br/> We offer a lifetime of support. </p>
</>
              </div>
            </div>
            <div className="bg-gfa-inkBlack text-white p-10 rounded-2xl">
              <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4 flex items-center gap-3">
                 <Target className="w-6 h-6" />
                {"Our Vision"}
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-lg">
                {"To become a leading global film education and industry support platform, building an international film ecosystem that integrates education, creation, distribution, and industry resources."}
              </p>
            </div>
          </div>

          {/* Founder's Statement */}
          <div className="relative bg-[#F5F2EE] rounded-3xl p-8 md:p-12 shadow-sm border border-[#C9A84C]/20 mb-16">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#C9A84C]/20 -rotate-6" />
            <div className="relative z-10 w-full max-w-4xl mx-auto">
              <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-6 border-b border-[#C9A84C]/20 pb-3 inline-block">
                {"A Message From Our Founder"}
              </h2>
              
              <div className="space-y-5 text-base md:text-xl font-serif text-gfa-inkBlack leading-relaxed italic mb-8">
                <>
<p>"After years of working in Hollywood as a film producer, I have witnessed firsthand how this industry can simultaneously be the most magical place on earth — and one of the most difficult to enter.</p>
                    <p> I have seen extraordinarily talented young filmmakers walk away — not because they lacked vision, not because they lacked passion, but because no one opened the door for them. No camera. No mentor. No platform willing to take a chance on them. That is the moment GFA was born in my heart. </p>
                    <p>I built GFA because I believe the future of cinema depends not on who has the most access today, but on who we choose to invest in tomorrow. I invite every filmmaker, educator, and industry professional who shares this belief to join us — because the next generation of storytellers is already out there, waiting for someone to believe in them."</p>
</>
              </div>


            </div>
          </div>

        </div>
      </section>

      {/* Part 2: Impact & Success Metrics */}
      <section className="py-16 md:py-20 bg-gfa-inkBlack text-white">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl md:text-4xl font-bold font-serif mb-8">
               {"Financial Transparency"}
             </h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-10">
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-[#C9A84C] mb-4">70%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/80">{"Filmmaker Support & Youth Programs"}</span>
                </div>
                <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-4">20%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/80">{"Scholarships for Low-Income Families"}</span>
                </div>
                <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
                <div className="flex flex-col items-center">
                   <span className="text-5xl md:text-7xl font-bold font-serif text-white/40 mb-4">10%</span>
                   <span className="text-sm uppercase tracking-widest font-bold text-white/40">{"Admin & Operations"}</span>
                </div>
             </div>
             <p className="text-white/60 font-light text-base leading-relaxed mb-6 max-w-3xl mx-auto">
               {"As a 501(c)(3) nonprofit, accountability is our bedrock. Your support fuels art, not bureaucracy."}
             </p>
          </div>
        </div>
      </section>

      {/* Part 3: The Faces of Change & Featured Films */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">{"The Faces of Change"}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative">
                 <img loading="lazy" src="https://i.ibb.co/TxbFZqLB/Gemini-Generated-Image-v3wfmxv3wfmxv3wf.png" alt="Filmmaker Action" className="w-full h-full object-cover"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{"Career Support"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack"> Marcus T. </h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{"I was working two retail jobs after film school just to survive. GFA connected me with my mentor, who got me my first PA gig on a real union set."}"
                 </p>
               </div>
             </div>

             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative">
                 <img loading="lazy" src="https://i.ibb.co/93ZJzvsG/Gemini-Generated-Image-98n2ne98n2ne98n2.png" alt="Summer Camp" className="w-full h-full object-cover"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{"Youth Camp"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack"> Sophia L. & Family </h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{"The full scholarship changed everything. Watching Sophia direct her short film gave her a level of confidence we had never seen before."}"
                 </p>
               </div>
             </div>

             <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <div className="h-56 overflow-hidden relative flex justify-center p-4">
                 <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2F8gHZ9bxG%2FChat-GPT-Image-2026-3-8-11-02-27.png&w=1200&output=webp" alt="Awards Night" className="h-full object-contain drop-shadow-xl"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-3">{"Golden Feather"}</div>
                 <h3 className="font-serif font-bold text-2xl mb-4 text-gfa-inkBlack"> Elena R. </h3>
                 <p className="text-gfa-slate font-light text-base italic leading-relaxed">
                   "{"Winning Best Screenplay meant my voice actually mattered. It's the validation I carry into every single writing session now."}"
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Part 4: News & Media */}
      <section className="py-16 md:py-20 bg-[#F5F2EE]">
        <div className="container-gfa max-w-5xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">{"Latest Updates"}</h2>
             <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">{"News & Media"}</h3>
           </div>

           <div className="space-y-6">
              {/* News Item 1 */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow group">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-56 md:h-full bg-gray-200 rounded-2xl overflow-hidden relative">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1478720568477-152d9b164e26%3Fq%3D80%26w%3D2000%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="News Image 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"  width="1200" height="800"   />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-3">March 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                      {"Global Youth Talent Competition 2026 Officially Announced"}
                    </h3>
                    <p className="text-gfa-slate font-light text-base mb-6 leading-relaxed">
                      {"GFA announces its flagship event to be held in Hollywood, uniting young talents from the US and China on a single stage. Registration opens soon for students spanning multiple disciplines."}
                    </p>
                    <Link to="/competition" className="text-gfa-inkBlack font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {"View Competition"} <ArrowRight className="w-5 h-5"/>
                    </Link>
                 </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow group">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-56 md:h-full bg-gray-200 rounded-2xl overflow-hidden relative">
                       <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1485846234645-a62644f84728%3Fq%3D80%26w%3D2000%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="News Image 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"  width="1200" height="800"   />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-3">January 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                      {"Student Short Film 'Garden' Picked Up by Amazon Prime"}
                    </h3>
                    <p className="text-gfa-slate font-light text-base mb-6 leading-relaxed">
                      {"Produced entirely by our Youth Film Campers, the award-winning short film secures major streaming distribution right after its premiere."}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {"Read Full Release"} <ArrowRight className="w-5 h-5"/>
                    </button>
                 </div>
              </div>
           </div>

           <div className="text-center mt-10">
              <button className="border border-gfa-inkBlack text-gfa-inkBlack px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors">
                {"Download Media Kit & Resources"}
              </button>
           </div>
        </div>
      </section>

      
      {/* Programs */}
      <section className="py-16 bg-[#F5F2EE]">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {"Our Core Programs"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {"Empowering the Next Generation"}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack"> Youth Film Camp </h4>
               <p className="text-gfa-slate font-light text-sm"> Comprehensive hands-on filmmaking experience for young aspiring creators. </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack"> Golden Feather Awards </h4>
               <p className="text-gfa-slate font-light text-sm"> Hollywood\'s premier recognition ceremony for emerging filmmakers. </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack"> Film Graduate Support </h4>
               <p className="text-gfa-slate font-light text-sm"> Career development, mentorship, and equipment grants for recent film school grads. </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-xl mb-3 text-gfa-inkBlack"> Children\'s Film Production </h4>
               <p className="text-gfa-slate font-light text-sm"> Empowering children to tell their own stories through guided professional production. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gfa-inkBlack text-white">
         <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-serif mb-8 text-[#C9A84C]">
              {"Contact Global Film Alliance"}
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-light">
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{"Address"}</span>
                 17800 Castleton St Suite 173<br/>City of Industry, CA 91748
               </div>
               <div className="hidden md:block w-px h-12 bg-white/20"></div>
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{"Email"}</span> jacky@gfafilm.org </div>
               <div className="hidden md:block w-px h-12 bg-white/20"></div>
               <div>
                 <span className="block font-bold text-[#C9A84C] text-sm uppercase tracking-widest mb-1">{"Phone"}</span>
                 626-677-8017
               </div>
            </div>
         </div>
      </section>

      {/* Part 5: Partners section */}

      <section className="py-16 md:py-20 bg-white">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {"Partners"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {"United by a Common Goal"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                 <div className="text-2xl font-bold italic tracking-tighter text-gfa-inkBlack"> Blackmagic Design </div>
              </div>
              <p className="text-sm md:text-base font-light text-gfa-slate leading-relaxed mx-auto">
                {"Professional equipment partner, providing pro-level camera gear support for GFA projects."}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                 <div className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack"> City of Pomona </div>
              </div>
              <p className="text-sm md:text-base font-light text-gfa-slate leading-relaxed mx-auto">
                {"Government partner, proudly supporting GFA's local community outreach and youth initiatives."}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
