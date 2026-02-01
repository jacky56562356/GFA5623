
import React from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center hero-mesh pt-20 px-4">
        <div className="max-w-5xl text-center z-10">
          <div className="inline-block border border-gfa-gold/40 px-4 py-1 mb-8 rounded-full text-gfa-gold text-xs tracking-[0.3em] uppercase font-bold animate-pulse">
            Industry Authority • Global Standards
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 gold-gradient tracking-tighter uppercase leading-none">
            {t.home.hero.title}
          </h1>
          <p className="text-xl md:text-3xl text-white mb-6 tracking-widest font-light uppercase">
            {t.home.hero.subtitle}
          </p>
          <p className="text-gfa-gray text-base md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.home.hero.body}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/certification" className="bg-gfa-gold text-gfa-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl">
              {t.home.hero.ctaPrimary}
            </Link>
            <Link to="/membership" className="border border-gfa-gold text-gfa-gold px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-gfa-gold hover:text-gfa-black transition-all">
              {t.home.hero.ctaSecondary}
            </Link>
            <Link to="/support" className="bg-white/10 backdrop-blur-md text-white px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all border border-white/10">
              {t.home.hero.ctaTertiary}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-gfa-darkGray/30 border-y border-gfa-gold/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
              {t.home.trust.title}
            </h2>
            <p className="text-gfa-gray text-lg mb-12 leading-relaxed">
              {t.home.trust.body}
            </p>
            <div className="grid grid-cols-2 gap-12">
              {[
                { label: t.home.stats.certifiedTalents, value: '15,000+' },
                { label: t.home.stats.verifiedInstitutions, value: '1,200+' },
                { label: t.home.stats.supportedProjects, value: '450+' },
                { label: t.home.stats.partnerMerchants, value: '2,800+' }
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-gfa-gold/30 pl-6">
                  <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t.home.pillars.p1Title, body: t.home.pillars.p1Body, icon: '🛡️' },
              { title: t.home.pillars.p2Title, body: t.home.pillars.p2Body, icon: '👥' },
              { title: t.home.pillars.p3Title, body: t.home.pillars.p3Body, icon: '🎓' },
              { title: t.home.pillars.p4Title, body: t.home.pillars.p4Body, icon: '🎟️' }
            ].map((p, i) => (
              <div key={i} className="bg-gfa-black p-10 border border-white/5 hover:border-gfa-gold/40 transition-all group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{p.icon}</div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white leading-snug mb-3">{p.title}</h3>
                <p className="text-xs text-gfa-gray leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Highlights */}
      <section className="py-32 bg-gfa-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">{t.home.supportHighlight.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.home.supportHighlight.card1, img: 'https://picsum.photos/seed/grad/600/400' },
              { title: t.home.supportHighlight.card2, img: 'https://picsum.photos/seed/vfx/600/400' },
              { title: t.home.supportHighlight.card3, img: 'https://picsum.photos/seed/studio/600/400' }
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden bg-gfa-darkGray border border-white/5">
                <img src={card.img} alt={card.title} className="w-full h-64 object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/40">
                  <h3 className="text-lg font-black uppercase tracking-widest">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <Link to="/support" className="mt-16 inline-block bg-gfa-gold text-gfa-black px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            {t.home.supportHighlight.cta}
          </Link>
        </div>
      </section>

      {/* Partner Teaser */}
      <section className="py-32 bg-gfa-darkGray/30 border-y border-gfa-gold/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">{t.home.partnersTeaser.title}</h2>
          <p className="text-gfa-gray text-lg mb-16 max-w-2xl mx-auto">{t.home.partnersTeaser.body}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['Legal', 'Insurance', 'Dining', 'Retail', 'Travel'].map((cat, i) => (
              <div key={i} className="py-12 border border-white/5 bg-gfa-darkGray/50 hover:bg-gfa-gold/5 transition-colors">
                <div className="text-gfa-gold font-black uppercase tracking-widest text-xs">{cat}</div>
              </div>
            ))}
          </div>
          <Link to="/partners" className="mt-16 inline-block text-gfa-gold font-black uppercase text-xs tracking-widest border-b-2 border-gfa-gold/30 hover:border-gfa-gold pb-1 transition-all">
            {t.home.partnersTeaser.cta}
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 text-center relative overflow-hidden bg-gfa-gold">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-8xl font-black text-gfa-black mb-6 tracking-tighter uppercase leading-none">
            {t.home.closing.title}
          </h2>
          <p className="text-gfa-black/80 font-bold uppercase tracking-widest text-sm mb-12">
            {t.home.closing.body}
          </p>
          <Link to="/contact" className="bg-gfa-black text-gfa-gold px-16 py-7 font-black uppercase text-xl tracking-[0.4em] hover:scale-105 transition-all shadow-2xl inline-block">
            {t.home.closing.cta}
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-20 -mt-20"></div>
      </section>
    </div>
  );
};

export default Home;
