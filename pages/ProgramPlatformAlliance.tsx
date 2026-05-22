import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';

const ProgramPlatformAlliance: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-3">
      <SEO title="Hollywood Career Training | GFA" />

      <div className="relative bg-[#1A2B4A] py-5 mb-3 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1485846234645-a62644f84728%3Fq%3D80%26w%3D2059%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" 
            alt="Hollywood Career" 
            className="w-full h-full object-cover opacity-30 grayscale"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-lg">
            {"Your Hollywood Journey Starts Here"}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-5">
         <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {"Geared toward recent graduates and emerging filmmakers, providing professional training and practical opportunities within the Hollywood industrial system to bridge the gap between academic learning and professional reality."}
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img loading="lazy"  src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1516321497487-e288fb19713f%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Mentorship" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {"Industry Mentorship"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {"One-on-one guidance from established Hollywood professionals, producers, and directors."}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1542204165-65bf26472b9b%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="On set" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {"On-Set Professional Training"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {"Shadowing and hands-on roles on real commercial and independent film sets."}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1536440136628-849c177e76a1%3Fq%3D80%26w%3D2025%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Portfolio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {"Portfolio & Reel Development"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {"Expert review and refinement of your showreel, script portfolio, or DP reel."}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1503676260728-1c00da094a0b%3Fq%3D80%26w%3D2022%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Festivals" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"  width="1200" height="800"   />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {"Film Festival Strategy"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {"Learn how to navigate submissions, networking, and distribution at tier-1 festivals."}
                 </p>
               </div>
            </div>
          </div>
        </section>

        <section className="text-center py-3">
          <button className="bg-[#1A2B4A] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] transition-colors shadow-2xl">
            {"Apply Now"}
          </button>
        </section>

      </div>
    </div>
  );
};

export default ProgramPlatformAlliance;
