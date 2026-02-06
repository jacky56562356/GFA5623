
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';

const Home = () => {
  const { t } = useLocale();
  const h = t.home;

  const renderHubCard = (hubKey: string, icon: string, path: string) => {
    const hub = h.hubs[hubKey];
    return (
      <Link 
        to={path} 
        className="group bg-gfa-darkGray/40 p-10 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-2xl flex flex-col h-full rounded-sm backdrop-blur-md"
      >
        <div className="text-gfa-gold mb-8 text-4xl opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
          {icon}
        </div>
        <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">
          {hub.title}
        </h3>
        <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-loose opacity-60 mb-8 flex-grow">
          {hub.body}
        </p>
        
        <div className="space-y-3 mb-10 pt-6 border-t border-white/5">
          {hub.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-gfa-gold text-[10px] opacity-40">✦</span>
              <span className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-bold group-hover:text-white/80 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto text-gfa-gold text-[8px] font-black uppercase tracking-[0.4em] flex items-center gap-3 group-hover:translate-x-2 transition-transform">
          {t.locale === 'zh' ? '进入中心' : 'ACCESS HUB'} <span className="text-xs">→</span>
        </div>
        
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gfa-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
    );
  };

  return (
    <div className="bg-gfa-black">
      {/* 1. Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 z-1 hero-overlay"></div>
        
        <div className="max-w-6xl text-center z-10 animate-fade-in relative px-4">
          <div className="inline-block px-5 py-2 border border-gfa-gold/40 text-gfa-gold text-[10px] font-black uppercase tracking-[0.6em] mb-12 bg-gfa-gold/5 rounded-sm backdrop-blur-md">
            Nonprofit • Independent • Transparency
          </div>
          <h1 className="mb-10 gold-shimmer gold uppercase text-5xl md:text-8xl tracking-tighter leading-[0.9] font-black font-cinzel">
            {h.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light uppercase tracking-[0.3em] mb-14 max-w-4xl mx-auto leading-loose border-y border-white/10 py-12 backdrop-blur-[2px]">
            {h.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <Link to="/certification" className="btn-gold px-14 py-6 shadow-2xl">{h.hero.ctaPrimary}</Link>
            <Link to="/registry" className="px-14 py-6 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-gfa-black transition-all rounded-sm backdrop-blur-sm shadow-xl">{h.hero.ctaSecondary}</Link>
          </div>
          <p className="mt-14 text-[9px] text-gfa-gold/60 uppercase tracking-[0.5em] italic font-bold">
            {h.hero.note}
          </p>
        </div>
      </section>

      {/* 2. Stats Marquee Bar */}
      <div className="bg-gfa-gold text-gfa-black overflow-hidden py-6 border-y border-gfa-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center px-10">
              <span className="text-[12px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="text-xl">📊</span> {h.stats.audited}
              </span>
              <span className="text-xl opacity-20">|</span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="text-xl">👤</span> {h.stats.verified}
              </span>
              <span className="text-xl opacity-20">|</span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="text-xl">🌍</span> {h.stats.countries}
              </span>
              <span className="text-xl opacity-20">|</span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="text-xl">🛡️</span> {h.stats.safeguarding}
              </span>
              <span className="text-xl opacity-20">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Pillars Section */}
      <section className="py-40 px-6 bg-gfa-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gfa-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[0.3em] gold mb-10">{h.pillars.title}</h2>
            <p className="text-gfa-gray text-xs md:text-sm uppercase tracking-[0.2em] max-w-3xl mx-auto leading-loose opacity-60 italic">
              {h.pillars.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-12 glass-panel border border-white/5 hover:border-gfa-gold/30 transition-all duration-700 group">
                <div className="text-gfa-gold text-5xl mb-10 opacity-30 group-hover:opacity-100 transition-opacity">0{i}</div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-6 group-hover:text-gfa-gold transition-colors">
                  {h.pillars[`p${i}`].title}
                </h3>
                <p className="text-[11px] text-gfa-gray uppercase tracking-widest leading-relaxed opacity-60">
                  {h.pillars[`p${i}`].body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Platform Hubs Section with Texture Background */}
      <section className="py-40 px-6 relative border-y border-white/5">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=2000')] bg-fixed bg-cover opacity-10 grayscale"></div>
        <div className="absolute inset-0 bg-gfa-black/90 z-1"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block px-4 py-1 border border-gfa-gold/20 text-gfa-gold text-[8px] font-black uppercase tracking-[0.5em] mb-6 bg-gfa-gold/5 font-montserrat rounded-sm">
              SUPERVISORY OVERSIGHT
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[0.4em] gold mb-8 leading-tight">
              {h.hubs.title}
            </h2>
            <p className="text-gfa-gray/60 text-xs md:text-sm uppercase tracking-[0.2em] max-w-3xl mx-auto leading-loose font-medium">
              {h.hubs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderHubCard('registry', '🔍', '/registry')}
            {renderHubCard('bond', '🛡️', '/verify')}
            {renderHubCard('safety', '🚩', '/safeguarding')}
            {renderHubCard('transparency', '💰', '/transparency')}
          </div>
        </div>
      </section>

      {/* 5. Certification Framework */}
      <section className="py-40 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black uppercase tracking-[0.4em] gold mb-12 leading-tight">{h.certFramework.title}</h2>
              <p className="text-xs text-gfa-gray/70 leading-loose uppercase tracking-widest mb-16">
                {h.certFramework.body}
              </p>
              <Link to="/certification" className="text-[10px] font-black uppercase tracking-[0.5em] text-gfa-gold hover:text-white transition-colors">
                {h.certFramework.cta} →
              </Link>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {h.certFramework.levels.map((lvl: any, i: number) => (
                <div key={i} className="p-12 bg-gfa-black border border-white/10 hover:border-gfa-gold transition-all duration-500 relative group shadow-2xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gfa-gold/10 border border-gfa-gold/40 text-gfa-gold text-[9px] px-4 py-1.5 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    TIER 0{i+1}
                  </div>
                  <h4 className="text-white font-black uppercase tracking-[0.2em] mb-6 border-b border-white/5 pb-4">{lvl.title}</h4>
                  <p className="text-[10px] text-gfa-gray/60 uppercase tracking-widest leading-relaxed">
                    {lvl.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bulletin News & Charter */}
      <section className="py-40 px-6 border-t border-white/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] gold mb-16">{h.news.title}</h2>
            <div className="space-y-10">
              {h.news.items.map((news: any, i: number) => (
                <div key={i} className="flex gap-10 items-start group border-b border-white/5 pb-10">
                  <div className="text-[10px] text-gfa-gold font-black uppercase tracking-widest pt-1 opacity-60">{news.date}</div>
                  <div className="flex-grow">
                    <div className="text-[8px] text-white/30 uppercase tracking-[0.4em] mb-3 font-black">{news.type}</div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-gfa-gold transition-colors">{news.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gfa-darkGray/60 p-16 border border-white/10 relative shadow-3xl flex flex-col justify-center rounded-sm backdrop-blur-md">
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] gold mb-10">{h.governance.title}</h2>
            <p className="text-xs text-gfa-gray leading-loose uppercase tracking-widest mb-16 opacity-70 italic border-l-4 border-gfa-gold/30 pl-10">
              {h.governance.body}
            </p>
            <Link to="/about" className="btn-gold w-fit px-12 py-5 text-[10px]">{h.governance.cta}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
