
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const About: React.FC = () => {
  const { t } = useLocale();
  const a = t.about;

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      {/* 1. HERO HEADER */}
      <div className="text-center mb-24">
        <div className="inline-block px-6 py-2 border border-gfa-gold/30 text-gfa-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10 bg-gfa-gold/5 animate-fade-in font-montserrat rounded-sm">
          Supervisory Assistance & Oversight
        </div>
        <h1 className="mb-8 gold gold-shimmer uppercase font-serif tracking-widest">
          {a.title}
        </h1>
        <div className="h-1 w-24 bg-gfa-gold mx-auto mb-10 opacity-60 rounded-full"></div>
        <p className="text-gfa-gray text-base md:text-lg font-semibold uppercase tracking-[0.3em] opacity-60 max-w-4xl mx-auto font-montserrat leading-relaxed">
          {t.locale === 'zh' ? '协助政府监督 • 保证金凭证核查 • 机构真实性审计' : 'Assisting State Supervision • Enforcing Statutory Bonds'}
        </p>
      </div>

      {/* 2. CORE MANDATE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
        <div className="bg-gfa-darkGray/60 p-12 border-l-4 border-gfa-gold shadow-2xl flex flex-col justify-center relative group rounded-r-xl">
          <div className="absolute top-6 right-8 text-gfa-gold/10 font-bold text-7xl font-serif">01</div>
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white border-b border-white/10 pb-4 font-serif">{a.mandate.title}</h2>
          <p className="text-gfa-gray text-base leading-relaxed font-medium uppercase tracking-wider opacity-80">
            {a.mandate.body}
          </p>
        </div>
        <div className="bg-gfa-black border border-white/10 p-12 flex flex-col justify-center relative group rounded-xl">
          <div className="absolute top-6 right-8 text-gfa-gold/10 font-bold text-7xl font-serif">02</div>
          <h2 className="text-2xl font-bold mb-6 gold uppercase tracking-tight border-b border-white/10 pb-4 font-serif">{a.strategy.title}</h2>
          <p className="text-gfa-gray text-base leading-relaxed font-medium uppercase tracking-wider opacity-80">
            {a.strategy.body}
          </p>
        </div>
      </div>

      {/* 3. SUPERVISORY SCOPE */}
      <div className="mb-32">
        <h3 className="mb-16 text-center gold font-serif uppercase tracking-widest">{a.coreFunctions.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {a.coreFunctions.items.map((item, i) => (
            <div key={i} className="glass-panel p-10 relative group hover:border-gfa-gold/40 transition-all flex flex-col h-full overflow-hidden shadow-xl rounded-xl">
              <div className="text-gfa-gold font-bold text-2xl mb-8 opacity-20 group-hover:opacity-100 transition-opacity font-serif">ASSIST-0{i + 1}</div>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4 font-montserrat leading-relaxed">
                {item.title}
              </h4>
              <p className="text-gfa-gray text-xs leading-loose font-bold uppercase tracking-[0.15em] opacity-60 group-hover:opacity-90 transition-opacity">
                {item.body}
              </p>
              <div className="mt-auto pt-8">
                 <div className="h-0.5 w-12 bg-gfa-gold/40 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. PROTECTIONS SECTION */}
      <div className="bg-gfa-black border border-gfa-gold/20 p-12 md:p-24 relative overflow-hidden shadow-3xl mb-32 rounded-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gfa-gold/5 blur-[140px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 border border-gfa-gold/40 text-gfa-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10 bg-gfa-gold/5 font-montserrat rounded-sm">
            {t.locale === 'zh' ? '协助政府监督 - 净化行业环境' : 'ASSISTING STATE SUPERVISION'}
          </div>
          <h2 className="mb-8 gold uppercase font-serif leading-[1.1] tracking-widest">
            {a.youthProtection.title}
          </h2>
          <p className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-12 border-b border-white/10 pb-8 opacity-60 font-montserrat">
            {a.youthProtection.subtitle}
          </p>
          <div className="bg-gfa-darkGray/40 p-10 border-l-4 border-gfa-gold mb-16 shadow-inner rounded-r-lg">
            <p className="text-gfa-gray text-lg md:text-xl leading-relaxed font-medium uppercase tracking-widest italic opacity-90">
              "{a.youthProtection.intro}"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {a.youthProtection.pillars.map((pillar, i) => (
              <div key={i} className="bg-gfa-darkGray/50 p-10 border border-white/10 group hover:border-gfa-gold/30 transition-all flex flex-col h-full shadow-lg rounded-xl">
                <div className="w-12 h-12 border-2 border-gfa-gold/30 text-gfa-gold flex items-center justify-center font-bold text-lg mb-8 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all font-serif rounded-lg">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-6 border-b border-white/10 pb-3 group-hover:text-gfa-gold transition-colors font-montserrat">
                  {pillar.title}
                </h4>
                <p className="text-gfa-gray text-xs leading-loose font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-90 transition-opacity">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. ACCOUNTABILITY LEDGER */}
      <div className="max-w-5xl mx-auto">
        <h3 className="mb-16 text-center gold font-serif uppercase tracking-widest">{a.accountability.title}</h3>
        <p className="text-gfa-gray text-center text-lg md:text-xl mb-16 leading-relaxed font-medium uppercase tracking-widest opacity-80 px-10 border-x-2 border-gfa-gold/10">
          {a.accountability.body}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {a.accountability.items.map((item, i) => (
            <div key={i} className="p-12 glass-panel group hover:border-gfa-gold transition-all text-center flex flex-col items-center shadow-2xl rounded-2xl">
              <div className="text-6xl mb-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out">{item.icon}</div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-sm font-montserrat">{item.title}</h4>
              <p className="text-gfa-gray text-[10px] font-bold uppercase tracking-[0.25em] leading-loose opacity-40 group-hover:opacity-90 transition-opacity font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FINAL SEAL */}
      <div className="mt-40 text-center border-t-2 border-white/5 pt-20 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gfa-gold/5 blur-[100px] -z-10"></div>
         <p className="text-gfa-gold font-bold text-[10px] tracking-[0.8em] uppercase mb-12 animate-pulse font-montserrat">Official Supervision Registry • Est. 2024</p>
         <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-[0.2em] max-w-3xl mx-auto leading-loose opacity-60 font-serif">
           {t.locale === 'zh' ? '协助政府监督 • 保证金凭证核验中心 • 机构真实性审计' : 'Government Liaison • Supervisory Assistance & Compliance Auditing'}
         </h3>
         <div className="mt-16 flex justify-center opacity-[0.15] hover:opacity-40 transition-opacity duration-1000">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA Official Seal" className="h-32 w-auto grayscale" />
         </div>
      </div>
    </div>
  );
};

export default About;
