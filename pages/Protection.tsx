
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Protection: React.FC = () => {
  const { t } = useLocale();
  const pr = t.protection;

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={pr.title} 
        subtitle={pr.subtitle} 
      />

      {/* Philosophy Shield Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div className="animate-fade-in">
          <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] uppercase font-black tracking-[0.4em] mb-8 bg-gfa-gold/5">
            {t.home.trust.badge}
          </div>
          <h3 className="text-4xl font-black mb-8 gold-gradient uppercase tracking-tighter leading-none">{pr.modelTitle}</h3>
          <p className="text-gfa-gray text-lg mb-10 leading-relaxed uppercase font-medium tracking-wider border-l-2 border-gfa-gold/30 pl-6">
            {pr.modelBody}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pr.modelItems.map(i => (
              <div key={i} className="flex items-center gap-4 bg-gfa-darkGray/50 p-6 border border-white/5 group hover:border-gfa-gold/30 transition-all">
                <span className="text-gfa-gold text-lg">✓</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80 leading-tight">{i}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative group">
           <div className="absolute -inset-4 bg-gfa-gold/5 blur-2xl group-hover:bg-gfa-gold/10 transition-all"></div>
           <div className="relative aspect-square bg-gfa-darkGray border border-gfa-gold/20 flex flex-col items-center justify-center p-12 shadow-3xl">
             <div className="text-9xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">🛡️</div>
             <h4 className="text-xl font-black text-gfa-gold uppercase tracking-[0.3em] text-center mb-4">{t.home.trust.passportTitle}</h4>
             <p className="text-[9px] text-gfa-gray uppercase tracking-widest text-center leading-loose">
               {t.home.trust.passportSubtitle}
             </p>
           </div>
        </div>
      </div>

      {/* Safeguards Grid */}
      <div className="mb-32">
        <h3 className="text-2xl font-black text-center mb-16 uppercase tracking-[0.2em] gold-gradient">{t.home.pillars.p2Title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pr.safeguards.map((group, idx) => (
            <div key={idx} className="bg-gfa-darkGray/30 p-10 border border-white/5 flex flex-col h-full hover:bg-gfa-darkGray transition-colors group">
              <div className="h-1 w-12 bg-gfa-gold mb-8 opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white mb-8 border-b border-white/5 pb-4">{group.title}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-4 font-bold uppercase tracking-[0.15em] flex-grow">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-gfa-gold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Enforcement Warning */}
      <div className="bg-red-500/10 border border-red-500/20 p-16 text-center">
        <h4 className="text-2xl font-black text-red-500 uppercase tracking-tighter mb-6">{pr.zeroTitle}</h4>
        <p className="text-red-400/70 text-sm font-black uppercase tracking-widest max-w-3xl mx-auto leading-relaxed">
          {pr.zeroDesc}
        </p>
      </div>

      {/* Parent CTA */}
      <div className="mt-32 text-center p-20 border border-white/5 bg-gfa-darkGray/20">
         <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-white">{pr.reportTitle}</h4>
         <p className="text-gfa-gray text-xs mb-10 uppercase tracking-widest font-bold">{pr.reportDesc}</p>
         <button className="bg-white text-gfa-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-gfa-gold transition-all shadow-2xl">
           {pr.reportCta}
         </button>
      </div>
    </div>
  );
};

export default Protection;
