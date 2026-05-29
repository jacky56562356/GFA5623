import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Play } from 'lucide-react';

import { Link } from 'react-router-dom';

const ProgramEmergingDirector: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-3">
      <SEO title="Children's Dream Film Project | GFA" />

      <div className="relative bg-[#1A2B4A] py-5 mb-3 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchpriority="high" 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1517604931442-7e0c8ed2963c%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" 
            alt="Dream Film Project" 
            className="w-full h-full object-cover opacity-30 grayscale"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-lg">
            {"Real Sets. Real Cameras. Real Stories."}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-5">
        <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {"Every quarter, GFA produces one professional short film — fully led by youth participants, from concept to camera. Children don't just watch movies. They make them."}
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-3 text-center">
            {"Released Projects"}
          </h2>
          <div className="space-y-4">
            
            <div className="flex flex-col md:flex-row gap-5 bg-white p-6 md:p-10 rounded-[32px] border border-gfa-border shadow-lg items-center">
              <div className="md:w-1/3 shrink-0">
                <img loading="lazy"  src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1440404653325-ab127d49abc1%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Garden Film Poster" className="w-full aspect-[2/3] object-cover rounded-2xl shadow-md"  width="1200" height="800"   />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2">"Garden"</h3>
                <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-3"> Best Family Film - Golden State Film Festival </p>
                <p className="text-gfa-slate font-light mb-4 max-w-xl">
                  {"An enchanting story exploring childhood imagination and family bonds, produced entirely by our 2024 youth cohort."}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.amazon.com/primevideo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00A8E1] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#0090C0] transition-colors">
                    <Play className="w-4 h-4 fill-current" /> Amazon Prime </a>
                  <a href="https://tubitv.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#E03C00] transition-colors">
                    <Play className="w-4 h-4 fill-current" /> Tubi </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 bg-white p-6 md:p-10 rounded-[32px] border border-gfa-border shadow-lg items-center">
              <div className="md:w-1/3 shrink-0">
                <img loading="lazy" src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1536440136628-849c177e76a1%3Fq%3D80%26w%3D2025%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" alt="Film 2 Poster" className="w-full aspect-[2/3] object-cover rounded-2xl shadow-md"  width="1200" height="800"   />
              </div>
              <div className="md:w-2/3">
                 <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2"> Echoes </h3>
                 <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-3"> Official Selection - LA Youth Film Fest </p>
                 <p className="text-gfa-slate font-light mb-4 max-w-xl">
                   {"A suspenseful drama created by teenagers investigating a local myth."}
                 </p>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-[#1A2B4A] rounded-[40px] p-12 text-center text-white relative overflow-hidden">
           <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 relative z-10">
             {"Want to be part of the next film?"}
           </h2>
           <p className="text-white/80 max-w-xl mx-auto mb-5 relative z-10">
             {"If you or your child is interested in acting, directing, or crewing for our upcoming projects, let us know."}
           </p>
           <Link to="/contact" className="inline-block bg-[#C9A84C] hover:bg-white hover:text-[#1A2B4A] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors relative z-10">
             {"Express Interest"}
           </Link>
        </section>

      </div>
    </div>
  );
};

export default ProgramEmergingDirector;
