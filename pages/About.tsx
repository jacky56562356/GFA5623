
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const About: React.FC = () => {
  const { t } = useLocale();
  const a = t.about;

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      {/* 1. INSTITUTIONAL HERO HEADER */}
      <div className="text-center mb-32">
        <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.6em] mb-10 bg-gfa-gold/5 animate-fade-in">
          Official Governance Blueprint
        </div>
        <h1 className="text-5xl md:text-8xl font-black gold-gradient uppercase tracking-tighter mb-8 leading-none">
          {a.title}
        </h1>
        <div className="h-1 w-24 bg-gfa-gold mx-auto mb-10"></div>
        <p className="text-gfa-gray text-xs md:text-sm font-black uppercase tracking-[0.5em] opacity-60 max-w-3xl mx-auto">
          {t.meta.tagline}
        </p>
      </div>

      {/* 2. CORE MANDATE & STRATEGY (THE FOUNDATION) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
        <div className="bg-gfa-darkGray p-12 border-l-4 border-gfa-gold shadow-3xl flex flex-col justify-center relative group">
          <div className="absolute top-4 right-4 text-gfa-gold/10 font-black text-6xl">01</div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight text-white border-b border-white/5 pb-4">{a.mandate.title}</h2>
          <p className="text-gfa-gray text-lg leading-relaxed font-medium uppercase tracking-wider opacity-80">
            {a.mandate.body}
          </p>
        </div>
        <div className="bg-gfa-black border border-white/5 p-12 flex flex-col justify-center relative group">
          <div className="absolute top-4 right-4 text-gfa-gold/10 font-black text-6xl">02</div>
          <h2 className="text-3xl font-black mb-6 gold-gradient uppercase tracking-tight border-b border-white/5 pb-4">{a.strategy.title}</h2>
          <p className="text-gfa-gray text-lg leading-relaxed font-medium uppercase tracking-wider opacity-80">
            {a.strategy.body}
          </p>
        </div>
      </div>

      {/* 3. THE THREE PILLARS (THE THREE CONTENT AREAS REQUESTED) */}
      <div className="mb-40">
        <h3 className="text-4xl font-black mb-20 text-center uppercase tracking-[0.2em] gold-gradient">{a.coreFunctions.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {a.coreFunctions.items.map((item, i) => (
            <div key={i} className="bg-gfa-darkGray/50 p-12 border border-white/5 relative group hover:border-gfa-gold/50 transition-all flex flex-col h-full overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-gfa-gold/5 rounded-full blur-2xl group-hover:bg-gfa-gold/10 transition-all"></div>
              <div className="text-gfa-gold font-black text-3xl mb-10 opacity-30 group-hover:opacity-100 transition-opacity">PROTOCOL 0{i + 1}</div>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                {item.title}
              </h4>
              <p className="text-gfa-gray text-xs leading-loose font-medium uppercase tracking-widest opacity-70">
                {item.body}
              </p>
              <div className="mt-auto pt-10">
                 <div className="h-[2px] w-12 bg-gfa-gold group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. YOUTH TRAINING INSTITUTION CERTIFICATION (SPECIFIC REQUEST) */}
      <div className="bg-gfa-black border-2 border-gfa-gold/20 p-12 md:p-24 relative overflow-hidden shadow-4xl mb-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gfa-gold/5 blur-[180px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gfa-gold/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 border border-gfa-gold/50 text-gfa-gold text-[10px] font-black uppercase tracking-[0.4em] mb-12 bg-gfa-gold/5">
            Registry Code: YOUTH-CERT-PROTOCOL
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-8 gold-gradient uppercase tracking-tighter leading-none">
            {a.youthProtection.title}
          </h2>
          <p className="text-white font-black text-xs uppercase tracking-[0.3em] mb-12 border-b border-white/10 pb-10 opacity-70">
            {a.youthProtection.subtitle}
          </p>
          <div className="bg-gfa-darkGray/30 p-10 border-l-4 border-gfa-gold mb-20 shadow-inner">
            <p className="text-gfa-gray text-xl leading-relaxed font-medium uppercase tracking-wider italic">
              "{a.youthProtection.intro}"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {a.youthProtection.pillars.map((pillar, i) => (
              <div key={i} className="bg-gfa-darkGray p-12 border border-white/5 group hover:border-gfa-gold/40 transition-all flex flex-col h-full shadow-xl">
                <div className="w-12 h-12 border border-gfa-gold/30 text-gfa-gold flex items-center justify-center font-black text-sm mb-10 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {i + 1}
                </div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-3 group-hover:text-gfa-gold transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-gfa-gray text-xs leading-loose font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. ACCOUNTABILITY & PUBLIC VERIFICATION LEDGER */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-black mb-16 text-center uppercase tracking-[0.2em] gold-gradient">{a.accountability.title}</h3>
        <p className="text-gfa-gray text-center text-lg mb-20 leading-relaxed font-medium uppercase tracking-wider opacity-80 px-10 border-x border-gfa-gold/10">
          {a.accountability.body}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {a.accountability.items.map((item, i) => (
            <div key={i} className="p-12 bg-gfa-darkGray/30 border border-white/5 backdrop-blur-md group hover:border-gfa-gold transition-all text-center flex flex-col items-center">
              <div className="text-6xl mb-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 drop-shadow-2xl">{item.icon}</div>
              <h4 className="font-black text-white mb-6 uppercase tracking-[0.2em] text-xs">{item.title}</h4>
              <p className="text-gfa-gray text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FINAL INSTITUTIONAL AUTHENTICATION STAMP */}
      <div className="mt-48 text-center border-t border-white/10 pt-24 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gfa-gold/5 blur-[100px] -z-10"></div>
         <p className="text-gfa-gold font-black text-[10px] tracking-[1em] uppercase mb-10 animate-pulse">Official Authority Registry • Est. 2024</p>
         <h3 className="text-2xl font-black text-white uppercase tracking-widest max-w-2xl mx-auto leading-relaxed opacity-80">
           Independent Vetting. Global Governance. Sovereign Protection.
         </h3>
         <div className="mt-16 flex justify-center opacity-30">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA Official Seal" className="h-32 w-auto grayscale" />
         </div>
      </div>
    </div>
  );
};

export default About;
