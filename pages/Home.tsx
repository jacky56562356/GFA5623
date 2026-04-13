import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { Shield, Search, Users, CheckCircle, FileText, Globe, Lock, AlertTriangle } from 'lucide-react';

const Home = () => {
  const { t } = useLocale();
  const home = t.home || {};
  const hero = home.hero || {};
  const who = home.whoWeAre || {};
  const why = home.whyAccreditation || {};
  const framework = home.framework || {};
  const how = home.howItWorks || {};
  const search = home.search || {};
  const governance = home.governance || {};

  return (
    <div className="bg-gfa-warmWhite min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title={hero.title || "Global Film Alliance"} 
        description={hero.subhead || "Independent Accreditation & Youth Protection Authority"} 
      />

      {/* 1. HERO Section */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Cinematic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-gfa-inkBlack"></div>
        </div>
        
        <div className="container-gfa relative z-10 text-center animate-fade-in">
          <div className="gold-badge mb-6 animate-fade-up">Institutional Authority</div>
          <h1 className="text-5xl md:text-[88px] font-bold text-white uppercase tracking-tight mb-6 leading-tight font-serif drop-shadow-2xl">
            {hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gfa-gold mb-8 tracking-[0.4em] uppercase opacity-90 font-sans">
            {hero.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90 font-sans font-light">
            {hero.subhead}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-up">
            <Link to="/certification#registry" className="btn-primary group">
              <span className="relative z-10 flex items-center gap-2">
                {hero.ctaPrimary}
                <Search className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/membership" className="btn-secondary-white">
              {hero.ctaSecondary}
            </Link>
          </div>

          {/* Decorative Icons matching the user's image */}
          <div className="flex justify-center items-center gap-8 md:gap-16 opacity-30">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:text-gfa-gold group-hover:border-gfa-gold transition-all">
                <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:text-gfa-gold group-hover:border-gfa-gold transition-all">
                <FileText className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:text-gfa-gold group-hover:border-gfa-gold transition-all">
                <Users className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 md:w-16 md:h-16 border border-white/20 rounded-full flex items-center justify-center text-white group-hover:text-gfa-gold group-hover:border-gfa-gold transition-all">
                <Globe className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="relative py-32 bg-gfa-warmWhite overflow-hidden">
        <div className="container-gfa relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-fade-up">
              <div className="gold-badge mb-6">{who.title}</div>
              <h2 className="text-4xl md:text-6xl font-bold text-gfa-inkBlack mb-8 font-serif leading-tight">
                Advancing Industry <span className="italic text-gfa-gold">Integrity</span>
              </h2>
              <div className="space-y-8 text-lg text-gfa-slate leading-relaxed">
                <p className="font-medium text-gfa-inkBlack text-xl">{who.p1}</p>
                <p className="font-light">{who.p2}</p>
                <div className="p-8 bg-white border-l-4 border-gfa-gold shadow-sm italic text-gfa-inkBlack font-serif">
                  "{who.p3}"
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-card overflow-hidden shadow-2xl border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-700 group">
                <img src="https://i.ibb.co/S4QYV7vn/a.png" alt="Industry Standards" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gfa-gold/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 bg-gfa-inkBlack text-white p-10 rounded-card shadow-2xl hidden md:block max-w-xs animate-float">
                <Shield className="w-12 h-12 text-gfa-gold mb-6" />
                <h4 className="text-xl font-serif mb-2">Independent Oversight</h4>
                <p className="text-sm font-light opacity-70 leading-relaxed">Providing rigorous third-party accreditation for global cinematic standards and youth protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section (New for Detail) */}
      <section className="py-24 bg-gfa-inkBlack border-y border-white/5">
        <div className="container-gfa">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Accredited Entities", value: "850+" },
              { label: "Global Regions", value: "24" },
              { label: "Youth Protected", value: "15k+" },
              { label: "Standards Audited", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-6xl font-serif text-gfa-gold mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Accreditation Matters */}
      <section className="relative py-32 bg-gfa-inkBlack text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" alt="Film Set" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-gfa-inkBlack via-gfa-inkBlack/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10">
          <div className="max-w-4xl">
            <div className="gold-badge mb-6">Industry Risk Mitigation</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif text-white leading-tight">
              Why <span className="text-gfa-gold">Accreditation</span> Matters
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl">
              {why.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {(why.risks || []).map((risk: string, i: number) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-card hover:bg-white/10 transition-all group hover:border-gfa-gold/50">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-base font-medium text-gray-200">{risk}</span>
                </div>
              ))}
            </div>
            <div className="bg-gfa-gold/5 border border-gfa-gold/20 p-10 rounded-card backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/10 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
              <p className="text-2xl font-serif italic text-gfa-gold leading-relaxed relative z-10">
                {why.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Framework */}
      <section className="py-32 bg-gfa-warmWhite relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" alt="Framework Background" className="w-full h-full object-cover" />
        </div>
        <div className="container-gfa relative z-10">
          <div className="text-center mb-20 animate-fade-up">
            <div className="gold-badge mb-4">Regulatory Standards</div>
            <h2 className="text-4xl md:text-6xl font-bold text-gfa-inkBlack mb-6 font-serif">{framework.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(framework.items || []).map((item: any, i: number) => (
              <div key={i} className="relative group rounded-[32px] overflow-hidden border border-gfa-border shadow-sm hover:shadow-2xl transition-all duration-500 h-[400px]">
                {/* Background Image per card */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={
                      i === 0 ? "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" :
                      i === 1 ? "https://images.unsplash.com/photo-1521791136364-798a730bb361?q=80&w=2070&auto=format&fit=crop" :
                      i === 2 ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" :
                      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    } 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/80 to-gfa-inkBlack/40 group-hover:from-gfa-inkBlack group-hover:via-gfa-inkBlack/60 group-hover:to-transparent transition-all duration-500"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-gfa-gold group-hover:border-gfa-gold transition-all duration-500">
                    {i === 0 ? <Globe className="w-6 h-6 text-white" /> : 
                     i === 1 ? <Shield className="w-6 h-6 text-white" /> : 
                     i === 2 ? <Lock className="w-6 h-6 text-white" /> : 
                     <Search className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-serif leading-tight">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-32 bg-white relative overflow-hidden border-y border-gfa-border">
        <div className="container-gfa relative z-10">
          <div className="text-center mb-20">
            <div className="gold-badge mb-4">Operational Process</div>
            <h2 className="text-4xl md:text-6xl font-bold text-gfa-inkBlack mb-6 font-serif">{how.title}</h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">A rigorous, multi-stage evaluation process ensuring the highest standards of industry integrity and professional compliance.</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gfa-gold/20 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {(how.steps || []).map((step: string, i: number) => (
                <div key={i} className="relative z-10 text-center group">
                  <div className="w-20 h-20 bg-white border border-gfa-border rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-serif text-gfa-gold group-hover:bg-gfa-gold group-hover:text-white group-hover:border-gfa-gold transition-all duration-500 shadow-xl group-hover:scale-110">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gfa-inkBlack px-4 leading-tight font-sans uppercase tracking-wider">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Search Accredited Organizations */}
      <section className="py-32 bg-gfa-warmWhite relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop" alt="Search Background" className="w-full h-full object-cover" />
        </div>
        <div className="container-gfa relative z-10">
          <div className="bg-white rounded-[32px] shadow-2xl p-10 md:p-20 border border-gfa-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/5 rounded-bl-full -mr-32 -mt-32"></div>
            <div className="text-center mb-16 relative z-10">
              <div className="gold-badge mb-4">Public Registry</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gfa-inkBlack mb-6 font-serif">{search.title}</h2>
              <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto">Verify the accreditation status and trust rating of industry partners worldwide through our secure verification portal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gfa-slate ml-1">{search.filters?.name}</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-gold" />
                  <input 
                    type="text" 
                    className="w-full h-14 bg-gfa-warmWhite border border-gfa-border rounded-xl pl-12 pr-4 focus:outline-none focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/10 transition-all shadow-inner font-sans text-sm" 
                    placeholder="Enter name..." 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gfa-slate ml-1">{search.filters?.region}</label>
                <select className="w-full h-14 bg-gfa-warmWhite border border-gfa-border rounded-xl px-4 focus:outline-none focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/10 appearance-none transition-all shadow-inner font-sans text-sm">
                  <option>Global</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia-Pacific</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gfa-slate ml-1">{search.filters?.category}</label>
                <select className="w-full h-14 bg-gfa-warmWhite border border-gfa-border rounded-xl px-4 focus:outline-none focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/10 appearance-none transition-all shadow-inner font-sans text-sm">
                  <option>All Categories</option>
                  <option>Training Institution</option>
                  <option>Talent Agency</option>
                  <option>Production Company</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="btn-primary w-full h-14 group">
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Search Records
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Governance & Transparency */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-gfa relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="animate-fade-up">
              <div className="gold-badge mb-6">Institutional Oversight</div>
              <h2 className="text-4xl md:text-6xl font-bold text-gfa-inkBlack mb-8 font-serif leading-tight">{governance.title}</h2>
              <p className="text-xl text-gfa-slate mb-10 leading-relaxed font-light">
                {governance.p1}
              </p>
              <ul className="space-y-6 mb-12">
                {(governance.list || []).map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-6 text-lg font-medium text-gfa-inkBlack group">
                    <div className="w-8 h-8 bg-gfa-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gfa-gold group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-gfa-gold group-hover:text-white" />
                    </div>
                    <span className="font-serif italic">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-10 bg-gfa-warmWhite rounded-[24px] border-l-8 border-gfa-gold italic text-gfa-slate text-lg shadow-sm">
                {governance.p2}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="aspect-[3/4] rounded-card overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Governance" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gfa-gold p-10 rounded-card text-white text-center shadow-xl animate-float">
                  <div className="text-5xl font-serif font-bold mb-2">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Independent Oversight</div>
                </div>
              </div>
              <div className="space-y-8 pt-16">
                <div className="bg-gfa-inkBlack p-10 rounded-card text-white text-center shadow-xl">
                  <FileText className="w-12 h-12 text-gfa-gold mx-auto mb-6" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Public Charter</div>
                </div>
                <div className="aspect-[3/4] rounded-card overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1521791136364-798a730bb361?q=80&w=2070&auto=format&fit=crop" alt="Transparency" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-gfa-gold relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop" alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="container-gfa relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight">Ready to Elevate Your <span className="italic">Standards?</span></h2>
            <p className="text-xl text-white/90 mb-16 font-light leading-relaxed">Join the Global Film Alliance and demonstrate your commitment to industry excellence, operational transparency, and youth protection.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/membership" className="h-16 px-12 bg-white text-gfa-inkBlack rounded-xl font-bold hover:bg-gfa-inkBlack hover:text-white transition-all text-lg shadow-2xl flex items-center justify-center">
                Apply for Accreditation
              </Link>
              <Link to="/contact" className="h-16 px-12 bg-gfa-inkBlack text-white rounded-xl font-bold hover:bg-white hover:text-gfa-inkBlack transition-all text-lg shadow-2xl flex items-center justify-center">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
