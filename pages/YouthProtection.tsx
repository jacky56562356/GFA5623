import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Shield, Eye, CheckCircle, Heart, Lock } from 'lucide-react';

const YouthProtection: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="font-sans">
      <SEO title="Youth Protection | Global Film Alliance" />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack group">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1544717305-2782549b5136%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" 
            alt="Youth Protection" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[20s]" 
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 mt-5 max-w-4xl mx-auto">
          <Shield className="w-16 h-16 text-[#C9A84C] mx-auto mb-3" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-2xl">
            {"Youth Protection & Safety"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-5 leading-relaxed italic">
            {"Because giving them a stage means nothing if they don't feel safe standing on it."}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-4 bg-white">
        <div className="container-gfa max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">
              {"Our Commitment"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
              {"Safety is not an afterthought. It is our foundation."}
            </h3>
            <p className="text-lg text-gfa-slate font-light leading-relaxed mb-3">
              {"At Global Film Alliance, we are absolutely committed to providing a safe, ethical, and supportive environment for every child. Whether on set, in a summer camp, or at our awards ceremony, the physical and emotional well-being of our young artists is our highest priority."}
            </p>

            <div className="flex flex-wrap justify-center gap-4 opacity-80">
               <img loading="lazy"  src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1573164713988-8665fc963095%3Fauto%3Dformat%26fit%3Dcrop%26w%3D400%26q%3D80&w=1200&output=webp" alt="Safe Set" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-gfa-warmWhite"  width="1200" height="800"   />
               <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fauto%3Dformat%26fit%3Dcrop%26w%3D400%26q%3D80&w=1200&output=webp" alt="Mentoring" className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white -mt-8 relative z-10"  width="1200" height="800"   />
               <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1514525253161-7a46d19cd819%3Fauto%3Dformat%26fit%3Dcrop%26w%3D400%26q%3D80&w=1200&output=webp" alt="Event Safety" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-gfa-warmWhite"  width="1200" height="800"   />
            </div>
        </div>
      </section>

      {/* Core Policies */}
      <section className="py-4 bg-[#F5F2EE] border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
             <div className="space-y-5">
                <div className="flex gap-3 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <Eye className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Two-Adult Rule (Always Visibile)"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {"No child is ever left alone with a single adult, mentor, or staff member. All interactions occur in open, observable environments with at least two background-checked adults present at all times."}
                      </p>
                   </div>
                </div>

                <div className="flex gap-3 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <CheckCircle className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Rigorous Background Checks"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {"Every single staff member, mentor, instructor, and volunteer undergoes comprehensive national background and reference checks before they are allowed anywhere near our programs."}
                      </p>
                   </div>
                </div>

                <div className="flex gap-3 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <Lock className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{"Data & Media Privacy"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {"We strictly protect the digital identity of our youth. Photos and footage of children are only used with explicit parental consent, and sensitive personal information is secured using industry-standard protocols."}
                      </p>
                   </div>
                </div>
             </div>
             
             <div className="relative h-full flex flex-col justify-center">
                <div className="bg-[#1A2B4A] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                   <Heart className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 opacity-50 pointer-events-none" />
                   <h4 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">
                     {"The Hollywood Standard"}
                   </h4>
                   <p className="text-white/80 font-light leading-relaxed mb-3">
                     {"Because our students work on real film sets, we mandate strict adherence to California child labor laws and industry safety protocols. Working hours are carefully managed, and on-set welfare coordinators are appointed for all production programs."}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advancing Industry Integrity Section */}
      <section className="py-4 bg-white">
        <div className="container-gfa max-w-5xl mx-auto">
           <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="md:w-1/2">
                <div className="rounded-[32px] overflow-hidden shadow-2xl border border-gfa-border bg-gfa-warmWhite p-2">
                   <img loading="lazy" 
                     src="https://wsrv.nl/?url=i.ibb.co%2Fsp4fWHq3%2FChat-GPT-Image-2026-3-23-12-23-22.png&w=1200&output=webp" 
                     alt="Advancing Industry Integrity" 
                     className="w-full h-auto rounded-[24px]"
                    width="1200" height="800"   />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">
                  {"Ethical Leadership"}
                </h2>
                <h3 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-3 leading-tight">
                  {"Advancing Industry Integrity"}
                </h3>
                <p className="text-lg text-gfa-slate font-light leading-relaxed mb-3">
                  {"GFA actively promotes a culture of integrity across all our partnerships. We collaborate with studios, theaters, and local governments to ensure that youth participation in media is not only creatively fulfilling, but ethically sound."}
                </p>
                <p className="text-lg text-gfa-slate font-light leading-relaxed">
                  {"The inclusion of young voices in film must never come at the cost of their innocence or security. We are setting the standard for how non-profits interface with the entertainment industry."}
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Contact for Concerns */}
      <section className="py-4 bg-[#1A2B4A] text-center border-t border-[#C9A84C]/30">
        <div className="container-gfa max-w-3xl mx-auto">
           <h3 className="text-3xl font-bold font-serif text-white mb-3">
             {"Report a Concern"}
           </h3>
           <p className="text-white/80 font-light mb-4 max-w-xl mx-auto leading-relaxed">
             {"If you ever have a concern regarding the safety or well-being of a child at any GFA program, please contact us immediately. We have a zero-tolerance policy for misconduct."}
           </p>
           <a href="mailto:safety@gfafilm.org" className="inline-block bg-[#C9A84C] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-gfa-inkBlack transition-colors shadow-lg">
             {"Contact Safety Team"}
           </a>
        </div>
      </section>
    </div>
  );
};

export default YouthProtection;
