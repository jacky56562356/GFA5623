
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

const Membership: React.FC = () => {
  const { t } = useLocale();
  const m = t.membership || {};
  const ui = m.ui || {
    networkBadge: "GFA Professional Network",
    orgSubtitle: "Institutional Access for Companies & Schools",
    joinAs: "Join as {tier}",
    select: "Select {tier}"
  };

  return (
    <div className="bg-gfa-warmWhite min-h-screen">
      <SEO 
        title={m.title || "Membership"} 
        description={m.intro || "Join the Global Film Alliance professional network. Access talent tiers, organizational accreditation, and industry resources."} 
      />
      
      {/* Cinematic Hero */}
      <header className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-gfa-inkBlack">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2031&auto=format&fit=crop" 
             alt="Film Premiere Red Carpet" 
             className="w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/90 via-gfa-inkBlack/70 to-gfa-warmWhite"></div>
        </div>

        <div className="container-gfa relative z-10">
          <span className="inline-block px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 bg-black/40 backdrop-blur-sm rounded-full">{ui.networkBadge}</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-10 leading-tight drop-shadow-2xl">
            {m.title}
          </h1>
          <p className="text-lg text-white/70 leading-loose font-medium opacity-90 max-w-2xl mx-auto italic">
            {m.intro}
          </p>
        </div>
      </header>
      
      <div className="container-gfa px-6 pb-32 -mt-10 relative z-20">
        
        {/* Talent Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{m.talentTitle}</h3>
            <div className="h-1 w-20 bg-gfa-gold mx-auto opacity-50 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(m.talentTiers || []).map((tier: any, i: number) => (
              <div 
                key={i} 
                className={`p-8 border rounded-card transition-all flex flex-col relative group ${
                  tier.recommended 
                    ? 'border-gfa-gold bg-gradient-to-br from-white via-gfa-gold/5 to-white shadow-2xl scale-105 z-10' 
                    : 'border-gfa-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gfa-gold via-yellow-300 to-gfa-gold"></div>
                )}
                
                <h4 className="text-lg font-bold uppercase tracking-tight mb-2 text-gfa-inkBlack font-serif">{tier.name}</h4>
                <div className="text-3xl font-black text-gfa-gold mb-8 font-serif">{tier.price}</div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {(tier.perks || []).map((p: string, idx: number) => (
                    <li key={idx} className="text-[11px] text-gfa-slate uppercase font-bold tracking-wide flex items-start gap-3">
                      <span className="text-gfa-gold text-sm">✓</span> {p}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 text-[11px] font-black uppercase tracking-widest rounded-btn transition-all ${tier.recommended ? 'bg-gfa-gold text-gfa-black shadow-lg hover:brightness-105' : 'border border-gfa-border text-gfa-slate hover:border-gfa-gold hover:text-gfa-gold hover:bg-gfa-gold/5'}`}>
                  {ui.select?.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Section */}
        <div className="mb-32 bg-gfa-inkBlack text-white p-12 md:p-20 rounded-card shadow-2xl relative overflow-hidden">
          {/* Subtle Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/10 blur-3xl rounded-full"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">{m.orgTitle}</h3>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest">{ui.orgSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
            {(m.orgTiers || []).map((tier: any, i: number) => (
              <div key={i} className="p-10 border border-white/10 bg-white/5 flex flex-col text-center rounded-sm hover:border-gfa-gold/30 transition-all hover:bg-white/10 backdrop-blur-sm group">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2 font-serif text-white group-hover:text-gfa-gold transition-colors">{tier.name}</h4>
                <div className="text-4xl font-black text-gfa-gold mb-10 font-serif">{tier.price}</div>
                <ul className="space-y-4 mb-12 flex-grow text-left">
                  {(tier.perks || []).map((p: string, idx: number) => (
                    <li key={idx} className="text-xs text-white/60 font-medium flex items-start gap-4">
                      <span className="text-gfa-gold mt-0.5">✦</span> {p}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 text-[10px] font-black uppercase tracking-widest border border-gfa-gold/50 text-gfa-gold hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-sm">
                  {ui.joinAs?.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-[#C9A24D] to-[#E3C67B] p-16 text-center text-gfa-black rounded-card shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight font-serif">{m.entTitle}</h3>
            <p className="max-w-2xl mx-auto mb-12 font-medium text-lg opacity-90 leading-relaxed">{m.entDesc}</p>
            <button className="bg-gfa-black text-white px-12 py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-all shadow-2xl rounded-btn hover:shadow-black/20">
              {m.entCta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
