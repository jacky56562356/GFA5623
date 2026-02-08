
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t } = useLocale();
  const a = t.about;
  const ui = a.ui || {
    mapPlaceholder: "[ Interactive Global Map Visualization ]",
    buttons: {
      viewStandards: "View Standards",
      readPolicy: "Read Safeguarding Policy →",
      explore: "Explore Programs",
      readCharter: "Read Charter & Bylaws",
      apply: "Apply for Recognition",
      readMission: "Read Mission Statement"
    },
    kickers: {
      profile: "Institutional Profile",
      zeroTolerance: "Zero Tolerance"
    },
    badges: {
      certified: "GFA CERTIFIED",
      standard: "Global Standard"
    }
  };

  return (
    <div className="bg-gfa-warmWhite min-h-screen">
      {/* 1. HERO */}
      <section className="bg-gfa-inkBlack text-white pt-40 pb-32 px-6 text-center relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full"></div>
        </div>

        <div className="container-gfa relative z-10">
          <div className="inline-block px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 bg-gfa-gold/5 rounded-sm">
            {a.hero.kicker}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-8 leading-tight">
            {a.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl mx-auto italic font-serif">
            {a.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-24 px-6">
        <div className="container-gfa grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 border border-gfa-border rounded-sm shadow-sm hover:border-gfa-gold transition-colors group">
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 group-hover:text-gfa-gold transition-colors">{a.mission.title}</h3>
            <p className="text-gfa-slate leading-loose text-lg font-medium opacity-80">
              {a.mission.body}
            </p>
          </div>
          <div className="bg-gfa-inkBlack p-12 border border-gfa-inkBlack rounded-sm shadow-xl text-white">
            <h3 className="text-2xl font-bold font-serif text-gfa-gold mb-6">{a.vision.title}</h3>
            <p className="text-white/80 leading-loose text-lg font-medium italic">
              "{a.vision.body}"
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-24 bg-white border-y border-gfa-border">
        <div className="container-gfa flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-3/12 lg:w-2/12">
             <div className="w-full aspect-[4/5] bg-gfa-inkBlack relative overflow-hidden rounded-sm shadow-2xl group">
                <img 
                  src="https://i.ibb.co/pvjT9QV9/1346.png"
                  alt="GFA Institutional Profile"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 border border-white/10"></div>
             </div>
          </div>
          <div className="md:w-9/12 lg:w-10/12">
             <span className="text-gfa-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">{ui.kickers.profile}</span>
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{a.whoWeAre.title}</h2>
             <p className="text-gfa-slate leading-loose text-lg font-medium opacity-80">
               {a.whoWeAre.body}
             </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (6 Modules) */}
      <section className="py-32 px-6 bg-gfa-warmWhite">
        <div className="container-gfa">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">{a.whatWeDo.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {a.whatWeDo.items.map((item: any, i: number) => (
              <div key={i} className="bg-white p-10 border border-gfa-border hover:border-gfa-gold hover:shadow-xl transition-all duration-300 rounded-sm group flex flex-col items-start">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <h3 className="text-xl font-bold text-gfa-inkBlack mb-3 font-serif">{item.title}</h3>
                <p className="text-sm text-gfa-slate leading-relaxed font-bold uppercase tracking-wide opacity-60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATION SYSTEM */}
      <section className="py-24 bg-gfa-inkBlack text-white relative overflow-hidden">
        <div className="container-gfa relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-gold mb-8">{a.certification.title}</h2>
             <p className="text-lg text-white/70 leading-loose mb-10 font-light">
               {a.certification.body}
             </p>
             <Link to="/certification" className="btn-secondary !border-white/20 !text-white hover:!bg-white hover:!text-gfa-inkBlack">
               {ui.buttons.viewStandards}
             </Link>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gfa-gold/10 blur-[80px] rounded-full"></div>
             <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-sm rounded-sm text-center">
                <div className="text-6xl mb-6">🎖️</div>
                <div className="text-2xl font-serif font-bold text-white mb-2">{ui.badges.certified}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gfa-gold">{ui.badges.standard}</div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. YOUTH PROTECTION */}
      <section className="py-24 px-6 bg-red-50/50 border-b border-red-100">
        <div className="container-gfa text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-600 text-[9px] font-black uppercase tracking-[0.3em] rounded-sm mb-6">{ui.kickers.zeroTolerance}</div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{a.youthProtection.title}</h2>
          <p className="text-lg text-gfa-slate leading-loose mb-10">
            {a.youthProtection.body}
          </p>
          <Link to="/safeguarding" className="text-red-600 font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-red-200 hover:border-red-600 pb-1 transition-all">
            {ui.buttons.readPolicy}
          </Link>
        </div>
      </section>

      {/* 7. INDUSTRY SUPPORT */}
      <section className="py-24 bg-white">
        <div className="container-gfa grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gfa-warmWhite h-40 rounded-sm border border-gfa-border"></div>
                <div className="bg-gfa-warmWhite h-40 rounded-sm border border-gfa-border translate-y-8"></div>
             </div>
          </div>
          <div className="order-1 md:order-2">
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{a.support.title}</h2>
             <p className="text-lg text-gfa-slate leading-loose mb-10 opacity-80">
               {a.support.body}
             </p>
             <Link to="/career-access" className="btn-primary !h-12 !text-[12px]">{ui.buttons.explore}</Link>
          </div>
        </div>
      </section>

      {/* 8. MEMBER COLLABORATION NETWORK */}
      {a.collaboration && (
        <section className="py-24 bg-gfa-warmWhite border-t border-gfa-border">
           <div className="container-gfa">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <span className="text-gfa-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">{a.collaboration.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{a.collaboration.title}</h2>
                    <p className="text-lg text-gfa-slate leading-loose mb-8 font-medium opacity-80">
                      {a.collaboration.body}
                    </p>
                    <div className="bg-white border border-gfa-border p-8 border-l-4 border-l-gfa-gold shadow-sm rounded-sm">
                       <p className="text-lg italic font-serif text-gfa-inkBlack opacity-90">
                         "{a.collaboration.quote}"
                       </p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {a.collaboration.features.map((feat: string, i: number) => (
                       <div key={i} className="bg-white p-6 border border-gfa-border flex items-center gap-4 shadow-sm rounded-sm hover:border-gfa-gold transition-colors">
                          <div className="w-2 h-2 bg-gfa-gold rounded-full shrink-0"></div>
                          <span className="text-sm font-bold uppercase tracking-wide text-gfa-inkBlack">{feat}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      )}

      {/* 9. FILM RESOURCE EXCHANGE */}
      {a.resourceExchange && (
        <section className="py-24 bg-white border-t border-gfa-border">
           <div className="container-gfa">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                 <span className="text-gfa-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                   {a.resourceExchange.subtitle}
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6">
                   {a.resourceExchange.title}
                 </h2>
                 <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80">
                   {a.resourceExchange.body}
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {a.resourceExchange.categories.map((cat: any, i: number) => (
                    <div key={i} className="bg-gfa-warmWhite p-8 border border-gfa-border rounded-sm hover:border-gfa-gold transition-all group">
                       <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{cat.icon}</div>
                       <h3 className="text-lg font-bold font-serif text-gfa-inkBlack mb-6 border-b border-gfa-border pb-4">
                         {cat.title}
                       </h3>
                       <ul className="space-y-3">
                          {cat.items.map((item: string, idx: number) => (
                             <li key={idx} className="text-sm text-gfa-slate font-medium flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-gfa-gold rounded-full"></span>
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* 10. GLOBAL NETWORK */}
      <section className="py-32 bg-white border-t border-gfa-border text-center">
        <div className="container-gfa">
           <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{a.network.title}</h2>
           <p className="text-lg text-gfa-slate max-w-3xl mx-auto leading-loose mb-16 opacity-80">
             {a.network.body}
           </p>
           {/* Placeholder Map Visual */}
           <div className="w-full max-w-4xl mx-auto aspect-[2/1] bg-gfa-warmWhite border border-gfa-border rounded-sm flex items-center justify-center relative opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-gfa-slate text-[10px] uppercase tracking-widest font-bold">{ui.mapPlaceholder}</span>
              {/* Dots indicating hubs */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gfa-gold rounded-full shadow-lg"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gfa-gold rounded-full shadow-lg"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-gfa-gold rounded-full shadow-lg"></div>
           </div>
        </div>
      </section>

      {/* 11. GOVERNANCE */}
      <section className="py-24 bg-white border-y border-gfa-border">
        <div className="container-gfa flex flex-col md:flex-row gap-12 items-start">
           <div className="md:w-1/3">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-6">{a.governance.title}</h2>
              <Link to="/governance" className="text-gfa-gold font-bold uppercase text-[11px] tracking-widest hover:underline">{ui.buttons.readCharter}</Link>
           </div>
           <div className="md:w-2/3">
              <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80">
                {a.governance.body}
              </p>
           </div>
        </div>
      </section>

      {/* 12. IMPACT */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-white">{a.impact.title}</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {a.impact.stats.map((stat: any, i: number) => (
                <div key={i} className="p-6 border border-white/10 rounded-sm">
                   <div className="text-4xl md:text-5xl font-black text-gfa-gold mb-2 font-serif">{stat.value}</div>
                   <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-32 bg-gfa-gold text-gfa-inkBlack text-center">
        <div className="container-gfa max-w-3xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">{a.cta.title}</h2>
           <p className="text-xl font-medium leading-relaxed mb-12 opacity-90">
             {a.cta.body}
           </p>
           <Link to="/membership" className="inline-block bg-gfa-inkBlack text-white px-12 py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl rounded-sm">
             {a.cta.button}
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
