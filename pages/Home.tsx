
import React from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Elevated Institutional Look */}
      <section className="relative min-h-screen flex items-center justify-center hero-mesh pt-20 px-4">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          {/* Subtle global network lines can be added here as background svg */}
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl text-center z-10">
          <div className="inline-flex items-center gap-4 border border-gfa-gold/30 bg-gfa-gold/5 px-6 py-2 mb-10 rounded-full">
            <span className="flex h-2 w-2 rounded-full bg-gfa-gold animate-pulse"></span>
            <span className="text-gfa-gold text-[10px] tracking-[0.4em] uppercase font-black">
              Independent Global Standards • Non-Profit Authority
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[7.5rem] font-black mb-8 gold-gradient tracking-tighter uppercase leading-[0.85] filter drop-shadow-2xl">
            {t.home.hero.title}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 text-white font-light tracking-[0.5em] uppercase text-sm md:text-xl">
            <span>Certification</span>
            <span className="hidden md:inline text-gfa-gold">•</span>
            <span>Governance</span>
            <span className="hidden md:inline text-gfa-gold">•</span>
            <span>Talent Protection</span>
          </div>

          <p className="text-gfa-gray text-base md:text-xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            GFA is the global non-profit authority establishing ethical standards for the film industry. We empower creators and protect talent through transparent certification, independent governance, and a secure talent ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/certification" className="group relative bg-gfa-gold text-gfa-black px-12 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Apply for Certification
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-white opacity-0 group-hover:opacity-100 transition-all"></span>
            </Link>
            <Link to="/governance" className="border border-white/20 text-white px-12 py-6 font-black uppercase text-xs tracking-widest hover:border-gfa-gold hover:text-gfa-gold transition-all backdrop-blur-sm">
              View Standards
            </Link>
          </div>
        </div>
      </section>

      {/* Identity & Global Trust */}
      <section className="py-40 bg-gfa-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter uppercase">
                An Independent <span className="text-gfa-gold">Ecosystem</span> for Professional Excellence.
              </h2>
              <p className="text-gfa-gray text-lg mb-12 leading-relaxed max-w-xl">
                Unlike traditional agencies, GFA operates as a non-profit standards organization. We do not take commissions; we set the rules that ensure safety, transparency, and fairness in film globally.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: 'Verified Global Registry', value: '150+', unit: 'Countries' },
                  { label: 'Independent Oversight', value: '100%', unit: 'Non-Profit' }
                ].map((s, i) => (
                  <div key={i} className="border-t border-white/10 pt-8">
                    <div className="text-5xl font-black text-white mb-2">{s.value}</div>
                    <div className="text-[10px] text-gfa-gold uppercase font-black tracking-[0.3em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-gfa-gold/5 blur-[100px] rounded-full"></div>
              <div className="bg-gfa-darkGray p-12 border border-white/5 shadow-3xl relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-gfa-gold/10 border border-gfa-gold/30 flex items-center justify-center">
                    <span className="text-gfa-gold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-widest text-sm">GFA Verified Identity</h3>
                    <p className="text-[10px] text-gfa-gray uppercase tracking-widest">Digital Authentication Standard</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {['Institutional Review', 'Financial Transparency', 'Child Safety Protocols', 'Ethics Compliance'].map(check => (
                    <div key={check} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-xs text-gfa-gray uppercase font-bold tracking-widest">{check}</span>
                      <span className="text-[8px] text-green-500 font-black uppercase tracking-widest">Verified</span>
                    </div>
                  ))}
                </div>
                <Link to="/verify" className="mt-12 block text-center py-4 border border-gfa-gold text-gfa-gold text-[10px] font-black uppercase tracking-widest hover:bg-gfa-gold hover:text-gfa-black transition-all">
                  Access Public Registry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Governance Pillars */}
      <section className="py-40 bg-gfa-darkGray/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Governance Framework</h2>
            <p className="text-gfa-gray text-lg max-w-2xl mx-auto uppercase tracking-widest text-sm font-light">
              Four categories of strict auditing that define the GFA ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'A', title: 'Organization', body: 'Rigorous verification of legal identity, past history, and operational ethics.', path: '/standards' },
              { id: 'B', title: 'Protection', body: 'Guardian-first controls and zero-tolerance safety protocols for minors.', path: '/protection' },
              { id: 'C', title: 'Transparency', body: 'Mandatory public itemized pricing and anti-overcharging enforcement.', path: '/transparency' },
              { id: 'D', title: 'Quality', body: 'Audit of educational value, professional outcomes, and artistic integrity.', path: '/standards' }
            ].map((p, i) => (
              <Link key={i} to={p.path} className="group bg-gfa-black p-12 border border-white/5 hover:border-gfa-gold transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <span className="text-9xl font-black text-white leading-none">{p.id}</span>
                </div>
                <div className="text-gfa-gold font-black text-3xl mb-8">{p.id}</div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white mb-6 border-b border-gfa-gold/30 pb-4 inline-block">{p.title}</h3>
                <p className="text-xs text-gfa-gray leading-loose mb-10 flex-grow">{p.body}</p>
                <span className="text-[10px] font-black text-gfa-gold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Read Protocol <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Program Directory Highlight */}
      <section className="py-40 bg-gfa-black">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
             <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Authorized <span className="text-gfa-gold">Listings</span></h2>
                <p className="text-gfa-gray text-lg uppercase tracking-widest leading-relaxed">Only programs that pass our independent audit appear in the authorized GFA network.</p>
             </div>
             <Link to="/directory" className="text-gfa-gold font-black uppercase text-xs tracking-widest border-b-2 border-gfa-gold/30 hover:border-gfa-gold pb-2 transition-all">
                Search White-Listed Events
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'Certification Registry', icon: '💎', desc: 'Real-time database of all verified talents and entities.' },
               { title: 'Whitelisted Events', icon: '🎫', desc: 'Approved auditions, showcases, and international festivals.' },
               { title: 'Support Pipeline', icon: '🔗', desc: 'Documented graduate and emerging filmmaker support outcomes.' }
             ].map((card, i) => (
               <div key={i} className="bg-gfa-darkGray/30 p-12 border border-white/5 hover:bg-white/5 transition-colors">
                 <div className="text-4xl mb-8">{card.icon}</div>
                 <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{card.title}</h3>
                 <p className="text-xs text-gfa-gray leading-relaxed uppercase tracking-wider">{card.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final Institutional CTA */}
      <section className="py-40 text-center relative overflow-hidden bg-gfa-gold">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-5xl md:text-8xl font-black text-gfa-black mb-8 tracking-tighter uppercase leading-[0.9]">
            Build Trust in the <span className="opacity-60">Global Industry.</span>
          </h2>
          <p className="text-gfa-black/70 font-black uppercase tracking-[0.3em] text-xs md:text-base mb-16 max-w-3xl mx-auto">
            Join the alliance of institutions, productions, and talents committed to a higher standard of film professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-gfa-black text-gfa-gold px-20 py-8 font-black uppercase text-xl tracking-[0.4em] hover:scale-105 transition-all shadow-2xl">
              Join the Alliance
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Home;
