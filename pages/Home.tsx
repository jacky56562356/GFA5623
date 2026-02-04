import React from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Condensed Majesty */}
      <section className="relative min-h-[80vh] flex items-center justify-center hero-mesh pt-16 px-4 pb-12">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-5xl text-center z-10 animate-fade-up relative">
          
          <div className="mb-6 flex justify-center animate-fade-in">
             <div className="relative group cursor-default">
                <img 
                  src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
                  alt={t.meta.siteName} 
                  className="w-32 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -inset-4 bg-gfa-gold/5 blur-[30px] rounded-full -z-10"></div>
             </div>
          </div>

          <div className="inline-flex items-center gap-2 border border-gfa-gold/15 bg-gfa-gold/5 px-6 py-1.5 mb-6 rounded-full backdrop-blur-sm">
            <span className="flex h-1 w-1 rounded-full bg-gfa-gold animate-pulse"></span>
            <span className="text-gfa-gold text-[8px] tracking-[0.4em] uppercase font-black font-montserrat">
              {t.home.hero.badge}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 gold gold-shimmer tracking-tighter uppercase leading-[1.05] font-montserrat relative">
            {t.home.hero.title}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 text-white/60 font-medium tracking-[0.3em] uppercase text-[9px] md:text-[11px] font-montserrat">
            <span>{t.home.hero.tags.cert}</span>
            <span className="hidden md:inline text-gfa-gold/20">/</span>
            <span>{t.home.hero.tags.gov}</span>
            <span className="hidden md:inline text-gfa-gold/20">/</span>
            <span>{t.home.hero.tags.prot}</span>
          </div>

          <p className="text-gfa-gray text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium opacity-70 px-4">
            {t.home.hero.body}
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/certification" className="btn-gold gold-glow group relative px-12 py-4 font-black uppercase text-[10px] tracking-[0.15em] font-montserrat rounded-md">
              {t.home.hero.ctaPrimary}
            </Link>
            <Link to="/governance" className="glass-panel text-white px-12 py-4 font-black uppercase text-[10px] tracking-[0.15em] hover:border-gfa-gold hover:text-gfa-gold transition-all font-montserrat rounded-md">
              {t.home.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Section - Tighter Padding */}
      <section className="py-16 bg-gfa-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="text-gfa-gold font-black text-[10px] tracking-[0.3em] uppercase mb-4 font-montserrat">{t.home.trust.badge}</div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 gold leading-[1.1] tracking-tighter uppercase font-montserrat">
                {t.home.trust.title}
              </h2>
              <p className="text-gfa-gray text-base mb-10 leading-relaxed max-w-lg font-medium opacity-70">
                {t.home.trust.body}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: t.home.stats.verifiedInstitutions, value: '200+', unit: 'Bonded' },
                  { label: t.locale === 'zh' ? '核实保证金池' : 'Verified Bond Pool', value: '$10M+', unit: 'Statutory' }
                ].map((s, i) => (
                  <div key={i} className="border-t border-white/10 pt-6 group">
                    <div className="text-4xl font-black text-white mb-1 group-hover:text-gfa-gold transition-colors font-montserrat">{s.value}</div>
                    <div className="text-[9px] text-gfa-gray uppercase font-black tracking-[0.2em] font-montserrat">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-gfa-gold/5 blur-[80px] rounded-full"></div>
              <div className="glass-panel p-10 border border-gfa-gold/20 shadow-xl relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-12 h-12 bg-gfa-gold/10 border border-gfa-gold/30 flex items-center justify-center rounded-md">
                    <span className="text-gfa-gold text-xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-[0.15em] text-xs font-montserrat">{t.home.trust.passportTitle}</h3>
                    <p className="text-[8px] text-gfa-gray uppercase tracking-widest mt-1 font-bold">{t.home.trust.passportSubtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {t.home.trust.auditItems.map(check => (
                    <div key={check} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[10px] text-gfa-gray uppercase font-bold tracking-widest">{check}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-green-500"></div>
                        <span className="text-[8px] text-green-500 font-black uppercase tracking-widest font-montserrat">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/verify" className="btn-gold gold-glow mt-10 block text-center py-4 text-[9px] font-black uppercase tracking-[0.25em] font-montserrat shadow-md rounded-md">
                  {t.common.searchRegistry}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Supervision */}
      <section className="py-16 bg-gfa-darkGray/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6 gold uppercase tracking-tighter font-montserrat">{t.home.pillars.title}</h2>
            <div className="h-0.5 w-20 bg-gfa-gold mx-auto mb-6"></div>
            <p className="text-gfa-gray text-xs md:text-base max-w-2xl mx-auto uppercase tracking-[0.15em] font-bold opacity-60">
              {t.home.pillars.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t.home.pillars.p1Title, body: t.home.pillars.p1Body, path: '/about' },
              { title: t.home.pillars.p2Title, body: t.home.pillars.p2Body, path: '/transparency' },
              { title: t.home.pillars.p3Title, body: t.home.pillars.p3Body, path: '/verify' }
            ].map((p, i) => (
              <Link key={i} to={p.path} className="glass-panel p-8 hover:border-gfa-gold transition-all flex flex-col h-full relative group shadow-md rounded-md">
                <div className="text-gfa-gold font-black text-2xl mb-6 opacity-15 group-hover:opacity-100 transition-opacity font-montserrat">0{i+1}</div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-white mb-4 border-b border-gfa-gold/15 pb-2 font-montserrat leading-snug">{p.title}</h3>
                <p className="text-[11px] text-gfa-gray leading-relaxed mb-8 flex-grow font-medium opacity-70">{p.body}</p>
                <div className="flex items-center gap-2 text-gfa-gold text-[8px] font-black uppercase tracking-widest font-montserrat">
                  {t.home.pillars.explore} <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center relative overflow-hidden bg-gfa-gold">
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-gfa-black mb-6 tracking-tighter uppercase leading-[1.05] font-montserrat">
            {t.home.closing.title}
          </h2>
          <p className="text-gfa-black font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-10 max-w-xl mx-auto opacity-80">
            {t.home.closing.body}
          </p>
          <Link to="/contact" className="bg-gfa-black text-gfa-gold px-16 py-5 font-black uppercase text-lg tracking-[0.15em] hover:scale-105 transition-transform shadow-xl inline-block font-montserrat rounded-md">
            {t.home.closing.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;