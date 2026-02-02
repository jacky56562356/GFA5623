import React from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Institutional Cinematic Majesty */}
      <section className="relative min-h-screen flex items-center justify-center hero-mesh pt-20 px-4">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl text-center z-10 animate-fade-up">
          <div className="inline-flex items-center gap-4 border border-gfa-gold/20 bg-gfa-gold/5 px-8 py-2.5 mb-12 rounded-full backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-gfa-gold animate-pulse"></span>
            <span className="text-gfa-gold text-[9px] tracking-[0.5em] uppercase font-black">
              Independent Global Standards • Est. 2024
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[8rem] font-black mb-10 gold-gradient tracking-tighter uppercase leading-[0.8] filter drop-shadow-2xl">
            {t.home.hero.title}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-white/80 font-light tracking-[0.6em] uppercase text-xs md:text-lg">
            <span>Certification</span>
            <span className="hidden md:inline text-gfa-gold/40">/</span>
            <span>Governance</span>
            <span className="hidden md:inline text-gfa-gold/40">/</span>
            <span>Talent Protection</span>
          </div>

          <p className="text-gfa-gray text-lg md:text-xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium opacity-90 px-4">
            {t.home.hero.body}
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/certification" className="group relative bg-gfa-gold text-gfa-black px-16 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)]">
              {t.home.hero.ctaPrimary}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-white opacity-0 group-hover:opacity-100 transition-all"></span>
            </Link>
            <Link to="/governance" className="glass-panel text-white px-16 py-6 font-black uppercase text-xs tracking-[0.3em] hover:border-gfa-gold hover:text-gfa-gold transition-all">
              {t.home.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Global Registry Preview Pill */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link to="/verify" className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gfa-gold">Access Registry</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gfa-gold to-transparent"></div>
          </Link>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-40 bg-gfa-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="animate-fade-in">
              <div className="text-gfa-gold font-black text-xs tracking-[0.4em] uppercase mb-6">Non-Profit Mandate</div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1] tracking-tighter uppercase">
                Building a <span className="text-gfa-gold">Verified</span> Ecosystem.
              </h2>
              <p className="text-gfa-gray text-lg mb-12 leading-relaxed max-w-xl">
                {t.home.trust.body}
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                {[
                  { label: t.home.stats.certifiedTalents, value: '50k+', unit: 'Global' },
                  { label: t.home.stats.verifiedInstitutions, value: '200+', unit: 'Entities' }
                ].map((s, i) => (
                  <div key={i} className="border-t border-white/10 pt-10 group">
                    <div className="text-6xl font-black text-white mb-2 group-hover:text-gfa-gold transition-colors">{s.value}</div>
                    <div className="text-[10px] text-gfa-gray uppercase font-black tracking-[0.3em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-gfa-gold/5 blur-[100px] rounded-full animate-pulse-gold"></div>
              <div className="glass-panel p-12 border border-gfa-gold/20 shadow-3xl relative z-10">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 bg-gfa-gold/10 border border-gfa-gold/30 flex items-center justify-center">
                    <span className="text-gfa-gold text-2xl">ID</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm">GFA Digital Passport</h3>
                    <p className="text-[9px] text-gfa-gray uppercase tracking-widest mt-1">Institutional Credential Standard</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {['Institutional Review', 'Financial Disclosure', 'Minor Protection Audit', 'Ethics Verification'].map(check => (
                    <div key={check} className="flex justify-between items-center border-b border-white/5 pb-5">
                      <span className="text-[11px] text-gfa-gray uppercase font-bold tracking-widest">{check}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[9px] text-green-500 font-black uppercase tracking-widest">Active</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/verify" className="mt-12 block text-center py-5 bg-gfa-gold text-gfa-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
                  Search Registry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-40 bg-gfa-darkGray/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">{t.home.pillars.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto mb-10"></div>
            <p className="text-gfa-gray text-lg max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">
              Global Standards in Certification, Protection, and Support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t.home.pillars.p1Title, body: t.home.pillars.p1Body, path: '/certification' },
              { title: t.home.pillars.p2Title, body: t.home.pillars.p2Body, path: '/protection' },
              { title: t.home.pillars.p3Title, body: t.home.pillars.p3Body, path: '/support' },
              { title: t.home.pillars.p4Title, body: t.home.pillars.p4Body, path: '/membership' }
            ].map((p, i) => (
              <Link key={i} to={p.path} className="glass-panel p-12 hover:border-gfa-gold transition-all flex flex-col h-full relative group">
                <div className="text-gfa-gold font-black text-2xl mb-10 opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8 border-b border-gfa-gold/20 pb-4">{p.title}</h3>
                <p className="text-xs text-gfa-gray leading-loose mb-12 flex-grow opacity-80">{p.body}</p>
                <div className="flex items-center gap-3 text-gfa-gold text-[9px] font-black uppercase tracking-widest">
                  Explore Module <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 text-center relative overflow-hidden bg-gfa-gold">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 animate-fade-in">
          <h2 className="text-6xl md:text-[9rem] font-black text-gfa-black mb-10 tracking-tighter uppercase leading-[0.8]">
            Built For <span className="opacity-40">Integrity.</span>
          </h2>
          <p className="text-gfa-black/80 font-black uppercase tracking-[0.4em] text-xs md:text-lg mb-20 max-w-3xl mx-auto">
            {t.home.closing.body}
          </p>
          <Link to="/contact" className="bg-gfa-black text-gfa-gold px-24 py-8 font-black uppercase text-2xl tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl inline-block">
            {t.home.closing.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;