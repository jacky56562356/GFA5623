import React from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center hero-mesh pt-24 px-4 pb-20">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D4AF37" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl text-center z-10 animate-fade-up relative">
          <div className="mb-10 flex justify-center animate-fade-in">
             <div className="relative group cursor-default">
                <img 
                  src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
                  alt={t.meta.siteName} 
                  className="w-40 md:w-56 h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                />
                <div className="absolute -inset-8 bg-gfa-gold/10 blur-[40px] rounded-full -z-10"></div>
             </div>
          </div>

          <div className="inline-flex items-center gap-3 border border-gfa-gold/20 bg-gfa-gold/5 px-8 py-2 mb-8 rounded-full backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gfa-gold animate-pulse"></span>
            <span className="text-gfa-gold micro-text tracking-[0.4em] uppercase font-bold font-montserrat">
              {t.home.hero.badge}
            </span>
          </div>
          
          <h1 className="mb-6 gold gold-shimmer uppercase font-serif tracking-widest leading-[1.05]">
            {t.home.hero.title}
          </h1>

          <h3 className="mb-8 text-white/90 uppercase tracking-widest text-lg md:text-xl font-montserrat max-w-4xl mx-auto leading-relaxed border-y border-white/10 py-6">
            {t.home.hero.subtitle}
          </h3>
          
          <p className="text-gfa-gray text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium opacity-80 px-4">
            {t.home.hero.body}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/certification" className="btn-gold px-12 py-5 font-bold uppercase text-xs tracking-[0.2em] font-montserrat rounded-md">
              {t.home.hero.ctaPrimary}
            </Link>
            <Link to="/verify" className="glass-panel text-white px-12 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:border-gfa-gold/60 hover:text-gfa-gold transition-all font-montserrat rounded-md border border-white/20">
              {t.home.hero.ctaSecondary}
            </Link>
            <Link to="/reporting" className="glass-panel text-red-400 px-12 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:border-red-500 hover:text-red-500 transition-all font-montserrat rounded-md border border-red-500/30">
              {t.home.closing.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — Who We Are */}
      <section className="section-gap bg-gfa-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-fade-in">
              <div className="text-gfa-gold font-bold text-xs tracking-[0.4em] uppercase mb-6 font-montserrat">{t.home.trust.badge}</div>
              <h2 className="mb-8 gold uppercase font-serif leading-tight">
                An Independent Industry Authority
              </h2>
              <p className="text-gfa-gray text-lg mb-8 leading-relaxed font-medium opacity-80">
                {t.home.trust.title}
              </p>
              <p className="text-gfa-gray text-base mb-8 leading-relaxed opacity-60">
                {t.home.trust.body}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.home.trust.auditItems.map(role => (
                  <div key={role} className="flex items-center gap-3 py-3 border-b border-white/5">
                    <span className="text-gfa-gold">✦</span>
                    <span className="text-xs font-black uppercase tracking-widest text-white/70">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-panel border border-gfa-gold/20 shadow-2xl p-grid-6">
                <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-8 font-montserrat">{t.home.trust.passportTitle}</h3>
                <div className="space-y-6 mb-12">
                   <p className="text-gfa-gray micro-text uppercase tracking-widest font-bold opacity-60 leading-loose">
                     {t.home.trust.passportSubtitle}
                   </p>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      <span className="micro-text text-green-500 font-bold uppercase tracking-widest font-montserrat">Independent Vetting Active</span>
                   </div>
                </div>
                <Link to="/directory" className="btn-gold w-full block text-center py-5 text-[10px] font-bold uppercase tracking-[0.3em] font-montserrat rounded-md">
                   {t.home.closing.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why GFA Exists */}
      <section className="section-gap bg-gfa-darkGray/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="mb-6 gold uppercase tracking-widest font-serif">{t.home.pillars.title}</h2>
          <p className="text-gfa-gray text-base md:text-lg max-w-3xl mx-auto uppercase tracking-[0.2em] font-semibold opacity-60 leading-relaxed mb-20">
            {t.home.pillars.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.home.pillars.p1Title, body: t.home.pillars.p1Body },
              { title: t.home.pillars.p2Title, body: t.home.pillars.p2Body },
              { title: t.home.pillars.p3Title, body: t.home.pillars.p3Body },
              { title: t.home.pillars.p4Title, body: t.home.pillars.p4Body },
              { title: t.home.pillars.p5Title, body: t.home.pillars.p5Body },
              { title: t.locale === 'zh' ? '经审计的准入' : 'Verified Access', body: t.locale === 'zh' ? '提供合规机构和经核实制作机会的可搜索公共名录。' : 'Families and young performers deserve protection, transparency, and verified opportunities.' }
            ].map((p, i) => (
              <div key={i} className="glass-panel p-10 flex flex-col text-left border border-white/5 hover:border-red-500/20 transition-all group">
                <div className="text-red-500 text-xs font-black mb-6 opacity-40 group-hover:opacity-100">RISK CONTROL {i+1}</div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-4 font-montserrat">{p.title}</h3>
                <p className="small-text text-gfa-gray leading-relaxed font-medium opacity-60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — What We Certify */}
      <section className="section-gap bg-gfa-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="gold uppercase font-serif tracking-widest">{t.certification.typesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {t.certification.types.map((cat, i) => (
              <Link key={i} to="/standards" className="bg-gfa-darkGray p-8 border border-white/5 text-center group hover:border-gfa-gold transition-all flex flex-col items-center">
                 <div className="text-gfa-gold font-bold mb-4 opacity-30 group-hover:opacity-100">0{i+1}</div>
                 <h4 className="text-[11px] text-white uppercase font-black tracking-widest mb-4 font-montserrat">
                    {cat.split('：')[0] || cat.split(':')[0]}
                 </h4>
                 <p className="micro-text text-gfa-gray leading-relaxed opacity-60">
                    {cat.split('：')[1] || cat.split(':')[1] || ''}
                 </p>
              </Link>
            ))}
          </div>
          <div className="text-center">
             <Link to="/standards" className="btn-gold">
               {t.certification.cta}
             </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Youth & Child Protection First */}
      <section className="section-gap bg-red-900/5 border-y border-red-500/10">
        <div className="max-w-5xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-red-500 uppercase font-serif tracking-widest mb-4">{t.protection.title}</h2>
              <p className="text-red-200/40 uppercase tracking-[0.3em] font-black text-xs">{t.protection.subtitle}</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {t.protection.modelItems.map((rule, i) => (
                <div key={i} className="flex gap-6 items-start bg-gfa-black/30 p-10 border border-red-500/10 rounded-lg">
                   <span className="text-red-500 font-serif text-2xl">0{i+1}</span>
                   <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3 font-montserrat">{rule}</h4>
                      <p className="small-text text-gfa-gray opacity-70 leading-relaxed font-medium">
                        {t.protection.safeguards[i]?.items?.join(' • ') || 'Institutional safeguarding protocols enforced by the GFA compliance department.'}
                      </p>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-16 text-center">
              <Link to="/safeguarding" className="btn-gold bg-red-600 text-white hover:bg-red-700">{t.nav.certGov.safeguarding}</Link>
           </div>
        </div>
      </section>

      {/* Section 5 — Supporting the Next Generation */}
      <section className="section-gap bg-gfa-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: t.support.p1Title, body: t.support.p1Bullets.join(', ') },
                    { title: t.support.p2Title, body: t.support.p2Bullets.join(', ') },
                    { title: t.locale === 'zh' ? '器材银行' : 'Equipment Bank', body: t.support.transparencyBody },
                    { title: t.support.p3Title, body: t.support.p3Bullets.join(', ') }
                  ].map(prog => (
                    <div key={prog.title} className="glass-panel p-8">
                       <h4 className="text-[10px] text-gfa-gold uppercase font-black tracking-widest mb-2 font-montserrat">{prog.title}</h4>
                       <p className="micro-text text-gfa-gray opacity-60 leading-relaxed uppercase font-bold">{prog.body}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="gold uppercase font-serif mb-8 leading-tight">{t.support.title}</h2>
               <p className="text-white/60 font-black uppercase tracking-widest text-xs mb-6 opacity-40">{t.support.subtitle}</p>
               <p className="text-gfa-gray text-lg mb-12 leading-relaxed font-medium">
                  {t.support.intro}
               </p>
               <Link to="/support" className="btn-gold">{t.support.cta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Public Registry */}
      <section className="section-gap text-center relative overflow-hidden bg-gfa-darkGray/30 border-t border-white/10">
        <div className="relative z-10 max-w-5xl mx-auto px-6 animate-fade-in">
          <div className="text-gfa-gold text-6xl mb-10">📜</div>
          <h2 className="gold uppercase font-serif mb-6">{t.home.closing.title}</h2>
          <p className="text-white/60 font-bold uppercase tracking-[0.4em] text-sm mb-16 max-w-2xl mx-auto leading-loose">
            {t.home.closing.body}
          </p>
          <Link to="/directory" className="btn-gold px-20 py-6 font-bold uppercase text-xl tracking-[0.2em] hover:scale-105 transition-all shadow-2xl inline-block font-montserrat rounded-md">
            {t.home.closing.cta}
          </Link>
        </div>
      </section>

      {/* Section 7 — Partners */}
      <section className="py-32 bg-gfa-black">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="gold uppercase font-serif mb-8">{t.partners.title}</h2>
            <p className="text-gfa-gray text-base max-w-3xl mx-auto uppercase tracking-widest font-semibold opacity-60 leading-relaxed">
              {t.partners.intro}
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
               {['Production Studios', 'Film Schools', 'Nonprofits', 'Public Institutions'].map(p => (
                 <span key={p} className="text-xs font-black uppercase tracking-[0.4em] text-white">{p}</span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;