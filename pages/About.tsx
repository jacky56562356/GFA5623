
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';

const About: React.FC = () => {
  const { t } = useLocale();
  // Safe defaults
  const a = t.about || {};
  const hero = a.hero || {};
  const mission = a.mission || {};
  const vision = a.vision || {};
  const who = a.whoWeAre || {};
  const what = a.whatWeDo || {};
  const cert = a.certification || {};
  const youth = a.youthProtection || {};
  const support = a.support || {};
  const network = a.network || {};
  const gov = a.governance || {};
  const impact = a.impact || {};
  const cta = a.cta || {};
  const ui = a.ui || {
    mapPlaceholder: "[ Map ]",
    buttons: {},
    kickers: {},
    badges: {}
  };
  const btns = ui.buttons || {};

  return (
    <div className="bg-gfa-warmWhite min-h-screen">
      <SEO 
        title={hero.title || "About GFA"} 
        description={mission.body || "To provide an independent framework for professional recognition and youth protection in the film industry."} 
      />

      {/* 1. HERO - Cinematic Background */}
      <section className="relative pt-48 pb-40 px-6 text-center overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
             alt="Film Production Set" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gfa-inkBlack/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gfa-gold/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        </div>

        <div className="container-gfa relative z-10">
          <div className="inline-block px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 bg-black/40 backdrop-blur-md rounded-sm shadow-lg animate-fade-in">
            {hero.kicker}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-gradient-gold mb-8 leading-tight drop-shadow-xl animate-fade-up">
            {hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto italic font-serif animate-fade-up delay-200">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-24 px-6 relative bg-gfa-warmWhite">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>
        <div className="container-gfa grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="bg-white p-12 border border-gfa-border rounded-sm shadow-lg hover:border-gfa-gold transition-colors group">
            <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 group-hover:text-gfa-gold transition-colors">{mission.title}</h3>
            <p className="text-gfa-slate leading-loose text-lg font-medium opacity-80">
              {mission.body}
            </p>
          </div>
          <div className="bg-gfa-inkBlack p-12 border border-gfa-inkBlack rounded-sm shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold font-serif text-gfa-gold mb-6 relative z-10">{vision.title}</h3>
            <p className="text-white/80 leading-loose text-lg font-medium italic relative z-10">
              "{vision.body}"
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
                  src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop"
                  alt="GFA Institutional Profile"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0" 
                />
                <div className="absolute inset-0 border border-white/10"></div>
             </div>
          </div>
          <div className="md:w-9/12 lg:w-10/12">
             <span className="text-gfa-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">{ui.kickers?.profile}</span>
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{who.title}</h2>
             <p className="text-gfa-slate leading-loose text-lg font-medium opacity-80">
               {who.body}
             </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (6 Modules) */}
      <section className="py-32 px-6 bg-gfa-warmWhite relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gfa-warmWhite"></div>
        <div className="container-gfa relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">{what.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(what.items || []).map((item: any, i: number) => (
              <div key={i} className="bg-white p-10 border border-gfa-border hover:border-gfa-gold hover:shadow-xl transition-all duration-300 rounded-sm group flex flex-col items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gfa-gold/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-gfa-gold/10"></div>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div className="container-gfa relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-gold mb-8">{cert.title}</h2>
             <p className="text-lg text-white/70 leading-loose mb-10 font-light">
               {cert.body}
             </p>
             <Link to="/certification" className="btn-secondary !border-white/20 !text-white hover:!bg-white hover:!text-gfa-inkBlack backdrop-blur-sm">
               {btns.viewStandards}
             </Link>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gfa-gold/10 blur-[80px] rounded-full"></div>
             <div className="border border-white/10 p-12 bg-white/5 backdrop-blur-md rounded-sm text-center shadow-2xl">
                <div className="text-6xl mb-6">🎖️</div>
                <div className="text-2xl font-serif font-bold text-white mb-2">{ui.badges?.certified}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gfa-gold">{ui.badges?.standard}</div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. YOUTH PROTECTION */}
      <section className="py-24 px-6 bg-red-50/50 border-b border-red-100 relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-red-100/50 rounded-full blur-3xl"></div>
        <div className="container-gfa text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-600 text-[9px] font-black uppercase tracking-[0.3em] rounded-sm mb-6">{ui.kickers?.zeroTolerance}</div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{youth.title}</h2>
          <p className="text-lg text-gfa-slate leading-loose mb-10">
            {youth.body}
          </p>
          <Link to="/safeguarding" className="text-red-600 font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-red-200 hover:border-red-600 pb-1 transition-all">
            {btns.readPolicy}
          </Link>
        </div>
      </section>

      {/* 7. INDUSTRY SUPPORT */}
      <section className="py-24 bg-white">
        <div className="container-gfa grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gfa-warmWhite h-40 rounded-sm border border-gfa-border overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Production"/>
                </div>
                <div className="bg-gfa-warmWhite h-40 rounded-sm border border-gfa-border translate-y-8 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Camera"/>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
             <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{support.title}</h2>
             <p className="text-lg text-gfa-slate leading-loose mb-10 opacity-80">
               {support.body}
             </p>
             <Link to="/career-access" className="btn-primary !h-12 !text-[12px] shadow-md">{btns.explore}</Link>
          </div>
        </div>
      </section>

      {/* 10. GLOBAL NETWORK */}
      <section className="py-32 bg-white border-t border-gfa-border text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gfa-warmWhite opacity-50 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]"></div>
        <div className="container-gfa relative z-10">
           <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{network.title}</h2>
           <p className="text-lg text-gfa-slate max-w-3xl mx-auto leading-loose mb-16 opacity-80">
             {network.body}
           </p>
           {/* Placeholder Map Visual */}
           <div className="w-full max-w-4xl mx-auto aspect-[2/1] bg-gfa-inkBlack border border-gfa-border rounded-sm flex items-center justify-center relative shadow-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" alt="Global Network"/>
              <span className="text-white text-[12px] uppercase tracking-widest font-bold z-10 bg-black/50 px-6 py-2 backdrop-blur-md border border-white/20 rounded-full">{ui.mapPlaceholder}</span>
           </div>
        </div>
      </section>

      {/* 11. GOVERNANCE */}
      <section className="py-24 bg-white border-y border-gfa-border">
        <div className="container-gfa flex flex-col md:flex-row gap-12 items-start">
           <div className="md:w-1/3">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-6">{gov.title}</h2>
              <Link to="/governance" className="text-gfa-gold font-bold uppercase text-[11px] tracking-widest hover:underline">{btns.readCharter}</Link>
           </div>
           <div className="md:w-2/3">
              <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80">
                {gov.body}
              </p>
           </div>
        </div>
      </section>

      {/* 12. IMPACT */}
      <section className="py-24 bg-gfa-inkBlack text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gfa-gold/10 via-transparent to-blue-500/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gfa-gold/30 to-transparent"></div>
        <div className="container-gfa relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gradient-gold">{impact.title}</h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {(impact.stats || []).map((stat: any, i: number) => (
                <div key={i} className="p-8 border border-white/10 rounded-xl glass-panel-dark hover:border-gfa-gold/50 transition-all duration-500 group">
                   <div className="text-4xl md:text-5xl font-black text-gfa-gold mb-2 font-serif group-hover:scale-110 transition-transform">{stat.value}</div>
                   <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="py-32 bg-gfa-gold text-gfa-inkBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
        <div className="container-gfa max-w-3xl mx-auto relative z-10">
           <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">{cta.title}</h2>
           <p className="text-xl font-medium leading-relaxed mb-12 opacity-90">
             {cta.body}
           </p>
           <Link to="/membership" className="inline-block bg-gfa-inkBlack text-white px-12 py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl rounded-sm">
             {cta.button}
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
