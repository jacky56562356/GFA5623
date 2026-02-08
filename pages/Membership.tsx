
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Membership: React.FC = () => {
  const { t } = useLocale();
  const ui = t.membership.ui || {
    networkBadge: "GFA Professional Network",
    orgSubtitle: "Institutional Access for Companies & Schools",
    joinAs: "Join as {tier}",
    select: "Select {tier}"
  };

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">{ui.networkBadge}</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {t.membership.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {t.membership.intro}
          </p>
        </header>
      
        {/* Talent Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{t.membership.talentTitle}</h3>
            <div className="h-1 w-20 bg-gfa-gold mx-auto opacity-50 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.membership.talentTiers.map((tier: any, i: number) => (
              <div key={i} className={`p-8 border rounded-card transition-all flex flex-col ${tier.recommended ? 'border-gfa-gold bg-white shadow-xl relative overflow-hidden' : 'border-gfa-border bg-white shadow-sm hover:shadow-md'}`}>
                {tier.recommended && <div className="absolute top-0 left-0 w-full h-1.5 bg-gfa-gold"></div>}
                <h4 className="text-lg font-bold uppercase tracking-tight mb-2 text-gfa-inkBlack font-serif">{tier.name}</h4>
                <div className="text-3xl font-black text-gfa-gold mb-8 font-serif">{tier.price}</div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {tier.perks.map((p: string, idx: number) => (
                    <li key={idx} className="text-[11px] text-gfa-slate uppercase font-bold tracking-wide flex items-start gap-3">
                      <span className="text-gfa-gold text-sm">✓</span> {p}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 text-[11px] font-black uppercase tracking-widest rounded-btn transition-all ${tier.recommended ? 'bg-gfa-gold text-gfa-black shadow-lg hover:brightness-105' : 'border border-gfa-border text-gfa-slate hover:border-gfa-gold hover:text-gfa-gold'}`}>
                  {ui.select.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Section */}
        <div className="mb-32 bg-gfa-inkBlack text-white p-12 md:p-20 rounded-card shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/5 blur-3xl rounded-full"></div>
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">{t.membership.orgTitle}</h3>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest">{ui.orgSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
            {t.membership.orgTiers.map((tier: any, i: number) => (
              <div key={i} className="p-10 border border-white/10 bg-white/5 flex flex-col text-center rounded-sm hover:border-gfa-gold/30 transition-all">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2 font-serif text-white">{tier.name}</h4>
                <div className="text-4xl font-black text-gfa-gold mb-10 font-serif">{tier.price}</div>
                <ul className="space-y-4 mb-12 flex-grow text-left">
                  {tier.perks.map((p: string, idx: number) => (
                    <li key={idx} className="text-xs text-white/60 font-medium flex items-start gap-4">
                      <span className="text-gfa-gold mt-0.5">✦</span> {p}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 text-[10px] font-black uppercase tracking-widest border border-gfa-gold/50 text-gfa-gold hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-sm">
                  {ui.joinAs.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gfa-gold p-16 text-center text-gfa-black rounded-card shadow-xl">
          <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight font-serif">{t.membership.entTitle}</h3>
          <p className="max-w-2xl mx-auto mb-12 font-medium text-lg opacity-90 leading-relaxed">{t.membership.entDesc}</p>
          <button className="bg-gfa-black text-white px-12 py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-all shadow-2xl rounded-btn">
            {t.membership.entCta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
