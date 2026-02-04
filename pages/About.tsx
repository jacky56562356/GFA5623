import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const About: React.FC = () => {
  const { t } = useLocale();
  const a = t.about;

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      {/* 1. INSTITUTIONAL HERO HEADER */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 border border-gfa-gold/20 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] mb-8 bg-gfa-gold/5 animate-fade-in font-montserrat">
          Supervisory Assistance & Oversight
        </div>
        <h1 className="text-3xl md:text-5xl font-black gold gold-shimmer uppercase tracking-tighter mb-6 leading-none font-montserrat">
          {a.title}
        </h1>
        <div className="h-0.5 w-20 bg-gfa-gold mx-auto mb-8 opacity-60"></div>
        <p className="text-gfa-gray text-xs md:text-base font-bold uppercase tracking-[0.3em] opacity-60 max-w-3xl mx-auto font-montserrat">
          {t.locale === 'zh' ? '协助政府监督 • 保证金凭证核查 • 机构真实性审计' : 'Assisting State Supervision • Enforcing Statutory Bonds'}
        </p>
      </div>

      {/* 2. CORE MANDATE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="bg-gfa-darkGray p-10 border-l-2 border-gfa-gold shadow-xl flex flex-col justify-center relative group rounded-r-md">
          <div className="absolute top-3 right-5 text-gfa-gold/5 font-black text-5xl font-montserrat">01</div>
          <h2 className="text-xl font-black mb-4 uppercase tracking-tight text-white border-b border-white/5 pb-3 font-montserrat">{a.mandate.title}</h2>
          <p className="text-gfa-gray text-sm leading-relaxed font-medium uppercase tracking-wider opacity-70">
            {a.mandate.body}
          </p>
        </div>
        <div className="bg-gfa-black border border-white/5 p-10 flex flex-col justify-center relative group rounded-md">
          <div className="absolute top-3 right-5 text-gfa-gold/5 font-black text-5xl font-montserrat">02</div>
          <h2 className="text-xl font-black mb-4 gold uppercase tracking-tight border-b border-white/5 pb-3 font-montserrat">{a.strategy.title}</h2>
          <p className="text-gfa-gray text-sm leading-relaxed font-medium uppercase tracking-wider opacity-70">
            {a.strategy.body}
          </p>
        </div>
      </div>

      {/* 3. SUPERVISORY SCOPE */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-black mb-12 text-center uppercase tracking-[0.15em] gold font-montserrat">{a.coreFunctions.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {a.coreFunctions.items.map((item, i) => (
            <div key={i} className="bg-gfa-darkGray/40 p-8 border border-white/5 relative group hover:border-gfa-gold/40 transition-all flex flex-col h-full overflow-hidden shadow-lg rounded-md">
              <div className="text-gfa-gold font-black text-xl mb-6 opacity-15 group-hover:opacity-80 transition-opacity font-montserrat">ASSIST-0{i + 1}</div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.15em] mb-4 border-b border-white/10 pb-3 font-montserrat">
                {item.title}
              </h4>
              <p className="text-gfa-gray text-[10px] leading-relaxed font-bold uppercase tracking-widest opacity-60">
                {item.body}
              </p>
              <div className="mt-auto pt-6">
                 <div className="h-[1px] w-10 bg-gfa-gold/40 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. YOUTH TRAINING SUPERVISION */}
      <div className="bg-gfa-black border border-gfa-gold/15 p-10 md:p-16 relative overflow-hidden shadow-2xl mb-20 rounded-lg">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gfa-gold/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-gfa-gold/40 text-gfa-gold text-[8px] font-black uppercase tracking-[0.4em] mb-8 bg-gfa-gold/5 font-montserrat">
            {t.locale === 'zh' ? '协助政府监督 - 净化行业环境' : 'ASSISTING STATE SUPERVISION'}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 gold uppercase tracking-tighter leading-[1.05] font-montserrat">
            {a.youthProtection.title}
          </h2>
          <p className="text-white font-black text-[9px] uppercase tracking-[0.2em] mb-10 border-b border-white/10 pb-6 opacity-50 font-montserrat">
            {a.youthProtection.subtitle}
          </p>
          <div className="bg-gfa-darkGray/20 p-6 border-l-2 border-gfa-gold mb-12 shadow-inner">
            <p className="text-gfa-gray text-base leading-relaxed font-medium uppercase tracking-wider italic opacity-80">
              "{a.youthProtection.intro}"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {a.youthProtection.pillars.map((pillar, i) => (
              <div key={i} className="bg-gfa-darkGray/50 p-8 border border-white/5 group hover:border-gfa-gold/30 transition-all flex flex-col h-full shadow-md rounded-md">
                <div className="w-10 h-10 border border-gfa-gold/20 text-gfa-gold flex items-center justify-center font-black text-base mb-6 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all font-montserrat">
                  {i + 1}
                </div>
                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.1em] mb-4 border-b border-white/10 pb-2 group-hover:text-gfa-gold transition-colors font-montserrat">
                  {pillar.title}
                </h4>
                <p className="text-gfa-gray text-[9px] leading-relaxed font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. ACCOUNTABILITY LEDGER */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-black mb-12 text-center uppercase tracking-[0.15em] gold font-montserrat">{a.accountability.title}</h3>
        <p className="text-gfa-gray text-center text-base mb-12 leading-relaxed font-medium uppercase tracking-wider opacity-60 px-6 border-x border-gfa-gold/10">
          {a.accountability.body}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {a.accountability.items.map((item, i) => (
            <div key={i} className="p-10 bg-gfa-darkGray/20 border border-white/5 backdrop-blur-sm group hover:border-gfa-gold transition-all text-center flex flex-col items-center shadow-md rounded-md">
              <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500">{item.icon}</div>
              <h4 className="font-black text-white mb-4 uppercase tracking-[0.15em] text-[10px] font-montserrat">{item.title}</h4>
              <p className="text-gfa-gray text-[8px] font-black uppercase tracking-[0.15em] leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity font-montserrat">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FINAL SEAL */}
      <div className="mt-32 text-center border-t border-white/10 pt-16 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gfa-gold/5 blur-[80px] -z-10"></div>
         <p className="text-gfa-gold font-black text-[8px] tracking-[0.6em] uppercase mb-8 animate-pulse font-montserrat">Official Supervision Registry • Est. 2024</p>
         <h3 className="text-xl font-black text-white uppercase tracking-[0.15em] max-w-2xl mx-auto leading-relaxed opacity-60 font-montserrat">
           {t.locale === 'zh' ? '协助政府监督 • 保证金凭证核验中心 • 机构真实性审计' : 'Government Liaison • Supervisory Assistance & Compliance Auditing'}
         </h3>
         <div className="mt-12 flex justify-center opacity-20">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA Official Seal" className="h-24 w-auto grayscale" />
         </div>
      </div>
    </div>
  );
};

export default About;