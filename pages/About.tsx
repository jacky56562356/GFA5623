
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';
import { Shield, Globe, Award, Play } from 'lucide-react';
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
  const framework = a.framework || {};
  const awards = a.awards || {};
  const distribution = a.distribution || {};
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

      {/* 1. HERO - Light Professional Background */}
      <section className="relative pt-48 pb-40 px-6 text-center overflow-hidden bg-white border-b border-gfa-border">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gfa-gold/40 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gfa-inkBlack/10 rounded-full"></div>
        </div>

        <div className="container-gfa relative z-10">
          <div className="gold-badge mb-8 animate-fade-in">
            {hero.kicker}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight animate-fade-up">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-4xl mx-auto italic font-serif animate-fade-up delay-200">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-32 px-6 relative bg-gfa-warmWhite">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>
        <div className="container-gfa grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="bg-white p-12 md:p-16 rounded-[32px] shadow-xl border border-gfa-border hover:border-gfa-gold/30 transition-all group">
            <div className="w-16 h-16 bg-gfa-gold/10 rounded-2xl flex items-center justify-center text-gfa-gold mb-8 group-hover:bg-gfa-gold group-hover:text-white transition-all">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-6 group-hover:text-gfa-gold transition-colors">{mission.title}</h3>
            <p className="text-gfa-slate leading-loose text-lg font-light opacity-80">
              {mission.body}
            </p>
          </div>
          <div className="bg-gfa-inkBlack p-12 md:p-16 rounded-[32px] shadow-xl border border-gfa-inkBlack text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-16 h-16 bg-gfa-gold/10 rounded-2xl flex items-center justify-center text-gfa-gold mb-8 group-hover:bg-gfa-gold group-hover:text-white transition-all">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold font-serif text-gfa-gold mb-6 relative z-10">{vision.title}</h3>
            <p className="text-white/80 leading-loose text-lg font-light italic relative z-10">
              "{vision.body}"
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (Modules) */}
      <section className="py-32 px-6 bg-white relative">
        <div className="container-gfa relative z-10">
          <div className="text-center mb-24">
            <div className="gold-badge mb-4">Core Competencies</div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8">{what.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {(what.items || []).map((item: any, i: number) => (
              <div key={i} className="card-standard group flex flex-col items-start relative overflow-hidden p-12">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gfa-gold/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-gfa-gold/10"></div>
                <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gfa-inkBlack mb-4 font-serif leading-tight">{item.title}</h3>
                <p className="text-base text-gfa-slate leading-relaxed font-light mb-6 opacity-80">
                  {item.desc}
                </p>
                <div className="mb-8 p-6 bg-gfa-warmWhite rounded-xl border-l-2 border-gfa-gold/30 text-sm text-gfa-slate italic font-light">
                  {item.details}
                </div>
                <Link 
                  to={i === 0 ? "/certification" : i === 1 ? "/safeguarding" : "/career-access"} 
                  className="mt-auto btn-tertiary"
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMPACT STATS */}
      <section className="py-32 bg-white text-gfa-inkBlack relative overflow-hidden border-y border-gfa-border">
        <div className="absolute inset-0 bg-gfa-warmWhite/50"></div>
        <div className="container-gfa relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
              {(impact.stats || []).map((stat: any, i: number) => (
                <div key={i} className="group">
                   <div className="text-5xl md:text-7xl font-black text-gfa-gold mb-4 font-serif group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                   <div className="text-[10px] uppercase tracking-[0.3em] text-gfa-slate group-hover:text-gfa-inkBlack transition-colors">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4.5 REGULATORY FRAMEWORK - NEW SECTION */}
      <section className="py-32 px-6 bg-white border-b border-gfa-border">
        <div className="container-gfa">
          <div className="text-center mb-20">
            <div className="gold-badge mb-4">Institutional Standards</div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">{framework.title}</h2>
            <p className="text-gfa-slate max-w-2xl mx-auto font-light">{framework.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[cert, youth, support, network, gov].map((item: any, i: number) => (
              <div key={i} className="p-10 bg-gradient-to-br from-white to-gfa-warmWhite rounded-3xl border border-gfa-border hover:border-gfa-gold/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-gfa-gold/10"></div>
                <div className="w-14 h-14 bg-gfa-gold/10 rounded-2xl flex items-center justify-center text-gfa-gold mb-8 group-hover:bg-gfa-gold group-hover:text-white transition-all shadow-inner">
                  <span className="font-serif font-bold text-2xl">0{i + 1}</span>
                </div>
                <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 group-hover:text-gfa-gold transition-colors">{item.title}</h4>
                <p className="text-base text-gfa-slate leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL OVERSIGHT */}
      <section className="py-32 bg-gfa-warmWhite border-y border-gfa-border">
        <div className="container-gfa flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-5/12 relative">
             <div className="w-full">
                <img 
                  src="https://i.ibb.co/FbV8K2JN/Chat-GPT-Image-2026-3-8-12-44-39.png"
                  alt="GFA Institutional Profile"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gfa-gold rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl animate-float">
                <div className="text-xs font-bold uppercase tracking-widest leading-tight">Global Regulatory Authority</div>
             </div>
          </div>
          <div className="lg:w-7/12">
             <div className="gold-badge mb-6">Institutional Oversight</div>
             <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight">{who.title}</h2>
             <p className="text-xl text-gfa-slate leading-relaxed font-light mb-12 opacity-90">
               {who.body}
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {(who.pillars || []).map((pillar: any, i: number) => (
                  <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-gfa-border hover:border-gfa-gold/30 transition-all">
                    <h4 className="font-serif text-xl mb-4 text-gfa-inkBlack">{pillar.title}</h4>
                    <p className="text-sm text-gfa-slate font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. GOLDEN FEATHER AWARDS */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-gfa relative z-10 flex flex-col lg:flex-row-reverse gap-24 items-center">
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-72 flex flex-col gap-8">
              <div className="w-full group">
                <img 
                  src="https://i.ibb.co/mrT1n0Fw/Chat-GPT-Image-2026-3-8-11-04-43.png" 
                  alt="Golden Feather Awards Logo 1" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain transition-all duration-700"
                />
              </div>
              <div className="w-full group">
                <img 
                  src="https://i.ibb.co/8gHZ9bxG/Chat-GPT-Image-2026-3-8-11-02-27.png" 
                  alt="Golden Feather Awards Logo 2" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain transition-all duration-700"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gfa-gold rounded-full flex items-center justify-center text-white shadow-xl animate-float">
                <Award className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="gold-badge mb-6">Flagship Annual Ceremony</div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight">{awards.title}</h2>
            <p className="text-2xl text-gfa-gold font-serif italic mb-8">{awards.subtitle}</p>
            <p className="text-xl text-gfa-slate leading-relaxed font-light mb-8 opacity-90">
              {awards.body}
            </p>
            <div className="p-8 bg-gfa-warmWhite rounded-2xl border-l-4 border-gfa-gold mb-12">
               <p className="text-lg text-gfa-inkBlack font-serif italic opacity-80">
                 {awards.focus}
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {(awards.categories || []).map((cat: any, i: number) => (
                 <div key={i} className="flex gap-4 items-start">
                   <div className="w-2 h-2 rounded-full bg-gfa-gold mt-2 shrink-0"></div>
                   <div>
                     <h4 className="font-bold text-gfa-inkBlack text-sm uppercase tracking-wider mb-1">{cat.title}</h4>
                     <p className="text-xs text-gfa-slate font-light leading-relaxed">{cat.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL DISTRIBUTION & PLATFORM */}
      <section className="py-32 bg-gfa-warmWhite text-gfa-inkBlack relative overflow-hidden">
        <div className="container-gfa relative z-10">
          <div className="text-center mb-24">
            <div className="gold-badge mb-6">Market Expansion</div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8">{distribution.title}</h2>
            <p className="text-xl text-gfa-slate max-w-4xl mx-auto font-light leading-relaxed">
              {distribution.body}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(distribution.features || []).map((feature: any, i: number) => (
              <div key={i} className="p-10 bg-white border border-gfa-border rounded-3xl hover:shadow-lg transition-all group">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-gfa-gold/10 rounded-2xl flex items-center justify-center text-gfa-gold shrink-0 group-hover:bg-gfa-gold group-hover:text-white transition-all">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif text-gfa-inkBlack mb-4">{feature.title}</h4>
                    <p className="text-sm text-gfa-slate font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-40 bg-white text-gfa-inkBlack text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gfa-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container-gfa max-w-3xl mx-auto relative z-10">
           <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8 leading-tight">{cta.title}</h2>
           <p className="text-xl font-light leading-relaxed mb-16 opacity-80">
             {cta.body}
           </p>
           <Link to="/membership" className="btn-primary h-16 px-16 text-lg">
             {cta.button}
           </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
