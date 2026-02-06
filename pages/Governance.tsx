
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const Governance: React.FC = () => {
  const { t } = useLocale();
  const gov = t.governance;

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading title={gov.title} subtitle={gov.subtitle} />

      {/* Section 1: Our Role */}
      <div className="mb-24 bg-gfa-darkGray p-12 border border-gfa-gold/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
        </div>
        <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">{gov.roleTitle}</h3>
        <div className="space-y-6 text-gfa-gray leading-loose text-base uppercase tracking-wider font-medium">
          <p>{gov.roleBody}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 bg-gfa-black border border-white/5">
              <span className="text-gfa-gold font-black block mb-2">{gov.roleTag1}</span>
              <p className="text-xs">{gov.roleTag1Desc}</p>
            </div>
            <div className="p-6 bg-gfa-black border border-gfa-gold/30">
              <span className="text-gfa-gold font-black block mb-2">{gov.roleTag2}</span>
              <p className="text-xs">{gov.roleTag2Desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Core Principles */}
      <div className="mb-24">
        <h3 className="text-2xl font-black mb-12 text-center uppercase tracking-widest gold-gradient">{gov.principlesTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gov.principles.map((p, i) => (
            <div key={i} className="p-8 border border-white/5 bg-gfa-darkGray/50 hover:bg-gfa-darkGray transition-colors">
              <div className="text-gfa-gold font-black text-xl mb-4">0{i+1}</div>
              <h4 className="text-white font-black uppercase text-sm tracking-widest mb-3">{p.title}</h4>
              <p className="text-gfa-gray text-xs leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Authorization Policy */}
      <div className="bg-gfa-gold p-16 text-gfa-black">
        <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">{gov.policyTitle}</h3>
        <p className="text-lg font-bold mb-10 leading-relaxed uppercase tracking-tight">
          {gov.policyBody}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {gov.policyItems.map(item => (
            <div key={item} className="bg-gfa-black/10 border border-gfa-black/20 p-4 text-[10px] font-black uppercase tracking-widest">
              ✓ {item}
            </div>
          ))}
        </div>
        <p className="text-xs font-black uppercase tracking-[0.2em] border-t border-gfa-black/20 pt-8 opacity-70">
          {gov.policyNote}
        </p>
      </div>
    </div>
  );
};

export default Governance;
