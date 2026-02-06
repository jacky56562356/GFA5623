
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
        className="group bg-gfa-darkGray/40 p-10 border border-white/10 hover:border-gfa-gold transition-all duration-500 relative overflow-hidden shadow-2xl flex flex-col h-full rounded-sm"
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
        
        {/* Specific Verification Features */}
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
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gfa-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
    );
  };

  return (
    <div className="bg-gfa-black">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_70%)] opacity-60"></div>
        <div className="max-w-6xl text-center z-10 animate-fade-in relative">
          <div className="inline-block px-5 py-1.5 border border-gfa-gold/40 text-gfa-gold text-[10px] font-black uppercase tracking-[0.6em] mb-12 bg-gfa-gold/5 rounded-sm backdrop-blur-md">
            Independent Nonprofit • Industry Standards
          </div>
          <h1 className="mb-10 gold uppercase text-4xl md:text-7xl tracking-[0.1em] leading-[1.1] font-black font-cinzel">
            {h.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gfa-gray font-light uppercase tracking-[0.3em] mb-14 max-w-4xl mx-auto leading-loose border-y border-white/10 py-10">
            {h.hero.subtitle}
          </p>
          <p className="text-gfa-gray/60 text-xs md:text-sm max-w-2xl mx-auto mb-16 leading-relaxed uppercase tracking-[0.15em] font-medium opacity-80">
            {h.hero.body}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/certification" className="btn-gold px-12 py-5 shadow-2xl text-[11px]">{h.hero.ctaPrimary}</Link>
            <Link to="/registry" className="px-12 py-5 border border-gfa-gold/40 text-gfa-gold text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-sm backdrop-blur-sm shadow-xl">{h.hero.ctaSecondary}</Link>
          </div>
          <p className="mt-12 text-[9px] text-gfa-gray/40 uppercase tracking-[0.4em] italic">
            {h.hero.note}
          </p>
        </div>
      </section>

      {/* 2. Platform Hubs (Expanded) */}
      <section className="py-40 px-6 border-b border-white/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="max-w-7xl mx-auto">
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

      {/* 3. Certification Framework */}
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

      {/* 4. Bulletin News */}
      <section className="py-40 px-6 border-y border-white/5">
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
          <div className="bg-gfa-darkGray/60 p-16 border border-white/10 relative shadow-3xl flex flex-col justify-center rounded-sm">
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
