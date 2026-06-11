import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Cpu, Image as ImageIcon, Scissors, Palette } from 'lucide-react';

const ProgramDiverseEthnicity: React.FC = () => {
  const { locale } = useLocale();
  const isEn = true;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-3">
      <SEO title="AI Filmmaking Training | GFA" />

      <div className="relative bg-[#1A2B4A] py-5 mb-3 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img fetchPriority="high" 
            src="https://wsrv.nl/?url=images.unsplash.com%2Fphoto-1611162617474-5b21e879e113%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop&w=1200&output=webp" 
            alt="AI Filmmaking" 
            className="w-full h-full object-cover opacity-30 grayscale"
           width="1200" height="800"   />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-3 leading-tight drop-shadow-lg">
            {"The Future of Film is Here — Are You Ready?"}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-5">
         <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {"Learn how AI tools are transforming scriptwriting, visual effects, editing, and production design. GFA's AI Filmmaking Training prepares the next generation for the industry of tomorrow."}
          </p>
        </section>

        <section>
           <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-3 text-center">
            {"Curriculum Overview"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Cpu className="w-10 h-10 text-[#C9A84C] mb-3" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {"AI Scriptwriting Tools"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {"Leveraging LLMs for brainstorming, structuring narratives, and dialogue generation while maintaining human creativity."}
               </p>
             </div>
             
             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <ImageIcon className="w-10 h-10 text-[#C9A84C] mb-3" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {"AI Visual Effects & Image Generation"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {"Creating storyboards and pre-viz using text-to-image models, and integrating AI into the VFX pipeline."}
               </p>
             </div>

             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Scissors className="w-10 h-10 text-[#C9A84C] mb-3" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {"AI-Assisted Editing"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {"Automating rough cuts, audio sync, and color grading using intelligent editing software."}
               </p>
             </div>

             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Palette className="w-10 h-10 text-[#C9A84C] mb-3" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {"AI in Production Design"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {"Rapid iteration of set designs, lighting plans, and costume concepts using generative AI."}
               </p>
             </div>
          </div>
        </section>

        <section className="bg-gfa-inkBlack text-white p-12 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
             <h3 className="text-3xl font-bold font-serif mb-3 text-[#C9A84C]">
                {"Who is this for?"}
             </h3>
             <p className="text-lg font-light text-white/80 max-w-2xl mx-auto mb-5">
               {"Designed for young filmmakers, tech-enthusiasts, and storytellers aged 14+. No prior coding experience required."}
             </p>
             <button className="bg-white text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] hover:text-white transition-colors">
                {"Join the Waitlist"}
             </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramDiverseEthnicity;
