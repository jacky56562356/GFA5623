
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

const Home = () => {
  const { t } = useLocale();
  const navigate = useNavigate();
  
  // Robustly access nested properties to prevent crashes
  const home = t.home || {};
  const hero = home.hero || {};
  const what = home.whatWeDo || {};
  const searchReg = home.searchRegistry || {};
  const global = home.globalPresence || {};
  const safe = home.safeguardingSection || {};
  const charter = home.charter || {};
  const trust = home.trust || {};
  
  // Helper for search UI translations
  const s = searchReg.ui || {};

  return (
    <div className="bg-gfa-warmWhite min-h-screen overflow-x-hidden font-sans">
      <SEO 
        title={hero.title || "Global Film Alliance"} 
        description={hero.body || "The Global Film Alliance (GFA) provides voluntary industry standards, youth safeguarding guidelines, and professional support networks."} 
      />

      {/* Hero Section - Cinematic Background */}
      <section 
        className="relative min-h-[850px] flex items-center pt-[72px] overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.png" 
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop";
              }}
              alt="Film Set Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gfa-inkBlack via-gfa-inkBlack/90 to-gfa-inkBlack/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Decorative Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gfa-gold/10 blur-[120px] rounded-full z-[1] animate-pulse"></div>
        
        <div className="container-gfa relative z-10 text-center animate-fade-up">
          {/* Kicker */}
          <span className="inline-block border border-gfa-gold/30 px-6 py-2 rounded-full text-[11px] font-bold text-gfa-gold uppercase tracking-[0.3em] mb-10 bg-black/40 backdrop-blur-md shadow-lg">
            {hero.kicker}
          </span>
          
          {/* H1 */}
          <h1 id="hero-title" className="text-5xl md:text-[72px] font-bold text-gfa-gold uppercase tracking-tight mb-8 leading-[1.05] font-serif max-w-6xl mx-auto drop-shadow-2xl animate-fade-in">
            {hero.title}
          </h1>
          
          {/* Subhead */}
          <p className="text-[22px] md:text-[28px] font-medium text-gfa-grayLight mb-12 max-w-3xl mx-auto italic opacity-95 leading-tight font-serif text-shadow-sm">
            {hero.subhead}
          </p>
          
          {/* Body */}
          <p className="text-[18px] text-gray-300 max-w-2xl mx-auto mb-14 leading-[1.8] font-normal opacity-90">
            {hero.body}
          </p>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link to="/membership" className="btn-primary shadow-[0_0_40px_rgba(201,162,77,0.4)] hover:shadow-[0_0_60px_rgba(201,162,77,0.6)] hover:scale-105 transition-all" aria-label="Learn how to become a member">
              {hero.ctaPrimary}
            </Link>
            <Link to="/career-access" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center" aria-label="View our professional programs">
              {hero.ctaSecondary}
            </Link>
          </div>

          {/* Micro text */}
          <div className="inline-flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            <p className="text-[10px] text-white uppercase tracking-widest font-bold">
              {t.disclaimer?.heroWarning}
            </p>
          </div>
        </div>
      </section>

      {/* Registry Search Section - Floating Card with Pattern */}
      <section className="relative z-20 -mt-24 pb-24">
        <div className="container-gfa">
          <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-card p-10 md:p-14 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gfa-gold/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <div className="text-center mb-10 max-w-3xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-green-50 rounded-full border border-green-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-800">Live Database • Updated 2h ago</span>
              </div>
              <h2 className="text-[32px] font-bold text-gfa-inkBlack mb-4 font-serif">
                {searchReg.title}
              </h2>
              <p className="text-[16px] text-gfa-slate leading-relaxed font-normal opacity-90">
                {searchReg.subtitle}
              </p>
            </div>

            {/* Advanced Search Bar UI */}
            <div className="max-w-6xl mx-auto relative z-10">
              {/* Tab Switcher */}
              <div className="flex justify-center mb-6 border-b border-gfa-border overflow-x-auto">
                 <button className="px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-gfa-inkBlack border-b-2 border-gfa-gold transition-colors whitespace-nowrap bg-gradient-to-t from-gfa-gold/10 to-transparent">{s.tabs?.org}</button>
                 <button className="px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-gfa-slate hover:text-gfa-inkBlack border-b-2 border-transparent hover:border-gfa-border transition-colors whitespace-nowrap">{s.tabs?.bond}</button>
                 <button className="px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-gfa-slate hover:text-gfa-inkBlack border-b-2 border-transparent hover:border-gfa-border transition-colors whitespace-nowrap">{s.tabs?.project}</button>
              </div>

              <div className="bg-gfa-warmWhite p-8 border border-gfa-border rounded-xl shadow-inner relative">
                <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
                  
                  {/* Row 1 */}
                  <div className="md:col-span-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.name}</label>
                     <div className="relative group">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gfa-slate/50 group-focus-within:text-gfa-gold transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input 
                          type="text" 
                          placeholder={s.placeholders?.name}
                          className="w-full h-12 bg-white border border-gfa-border rounded-md pl-10 pr-4 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                        />
                     </div>
                  </div>

                  <div className="md:col-span-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.category}</label>
                     <div className="relative">
                        <select className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack font-medium appearance-none cursor-pointer shadow-sm focus:shadow-md">
                          <option value="">{s.options?.allTypes}</option>
                          <option value="agency">{s.options?.agency}</option>
                          <option value="production">{s.options?.production}</option>
                          <option value="school">{s.options?.school}</option>
                          <option value="casting">{s.options?.casting}</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gfa-slate/50 text-[8px]">▼</div>
                     </div>
                  </div>

                  <div className="md:col-span-3">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.phone}</label>
                     <input 
                       type="text" 
                       placeholder={s.placeholders?.phone}
                       className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                     />
                  </div>

                  <div className="md:col-span-3">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.license}</label>
                     <input 
                       type="text" 
                       placeholder={s.placeholders?.license}
                       className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                     />
                  </div>

                  {/* Row 2 */}
                  <div className="md:col-span-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.country}</label>
                     <div className="relative">
                        <select className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack font-medium appearance-none cursor-pointer shadow-sm focus:shadow-md">
                          <option value="">{s.options?.global}</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="cn">China</option>
                          <option value="fr">France</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gfa-slate/50 text-[8px]">▼</div>
                     </div>
                  </div>

                  <div className="md:col-span-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.state}</label>
                     <input 
                       type="text" 
                       placeholder={s.placeholders?.state}
                       className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                     />
                  </div>

                  <div className="md:col-span-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.city}</label>
                     <input 
                       type="text" 
                       placeholder={s.placeholders?.city}
                       className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                     />
                  </div>

                  <div className="md:col-span-4">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-1 ml-1 block">{s.labels?.address}</label>
                     <input 
                       type="text" 
                       placeholder={s.placeholders?.address}
                       className="w-full h-12 bg-white border border-gfa-border rounded-md px-3 text-xs focus:outline-none focus:border-gfa-gold text-gfa-inkBlack placeholder-gfa-slate/40 font-medium transition-all shadow-sm focus:shadow-md"
                     />
                  </div>

                  <div className="md:col-span-2 flex items-end">
                    <button 
                      onClick={() => navigate('/registry')}
                      className="btn-primary w-full h-12 !rounded-md shadow-lg hover:shadow-xl text-[11px] font-black uppercase tracking-widest bg-gradient-to-r from-gfa-gold to-gfa-goldDark border border-transparent hover:border-white/20"
                    >
                      {searchReg.cta}
                    </button>
                  </div>
                </div>
              </div>

              {/* Filters & Quick Links */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-[10px] font-bold uppercase tracking-widest text-gfa-slate/70 gap-4">
                 <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-gfa-inkBlack transition-colors">
                      <input type="checkbox" className="w-3 h-3 accent-gfa-gold rounded-sm" defaultChecked />
                      <span>{s.filters?.verified}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-gfa-inkBlack transition-colors">
                      <input type="checkbox" className="w-3 h-3 accent-gfa-gold rounded-sm" />
                      <span>{s.filters?.bonded}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-gfa-inkBlack transition-colors">
                      <input type="checkbox" className="w-3 h-3 accent-gfa-gold rounded-sm" />
                      <span>{s.filters?.affiliates}</span>
                    </label>
                 </div>
                 <div className="flex gap-4 items-center">
                    <span className="text-gfa-gold">{s.trending?.label}</span>
                    <button className="hover:text-gfa-inkBlack border-b border-transparent hover:border-gfa-inkBlack transition-all">{s.trending?.la}</button>
                    <span className="opacity-30">•</span>
                    <button className="hover:text-gfa-inkBlack border-b border-transparent hover:border-gfa-inkBlack transition-all">{s.trending?.uk}</button>
                    <span className="opacity-30">•</span>
                    <button className="hover:text-gfa-inkBlack border-b border-transparent hover:border-gfa-inkBlack transition-all">{s.trending?.casting}</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Endorsement Bar */}
      <div className="bg-white border-y border-gfa-border py-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gfa-warmWhite opacity-50"></div>
        <div className="container-gfa relative z-10">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4 shrink-0">
                 <div className="w-10 h-10 rounded-full bg-gfa-gold/10 flex items-center justify-center text-gfa-gold border border-gfa-gold/20 shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                 </div>
                 <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-gfa-slate opacity-70">{trust.label}</span>
                    <span className="block text-[12px] font-bold text-gfa-inkBlack font-serif">{trust.badge}</span>
                 </div>
              </div>
              <div className="flex-grow border-t md:border-t-0 md:border-l border-gfa-border h-px md:h-12 w-full md:w-px mx-4"></div>
              <div className="flex items-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
                {(trust.guilds || []).map((guild: string) => (
                  <span key={guild} className="text-[11px] font-black uppercase tracking-[0.2em]">{guild}</span>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Core Service Pillars */}
      <section className="bg-gfa-warmWhite relative py-24" aria-labelledby="what-we-do-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-transparent opacity-50"></div>
        <div className="container-gfa relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-gfa-gold font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block">{t.about?.whatWeDo?.title}</span>
            <h2 id="what-we-do-title" className="text-[42px] font-bold text-gfa-inkBlack mb-6 font-serif">
              {what.title}
            </h2>
            <div className="h-1 w-20 bg-gfa-gold mx-auto mb-8"></div>
            <p className="text-[18px] text-gfa-slate leading-relaxed font-normal opacity-90">
              {what.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(what.cards || []).map((card: any, i: number) => (
              <div key={i} className="card-standard flex flex-col h-full group bg-white relative overflow-hidden shadow-sm hover:shadow-xl border-t-4 border-t-transparent hover:border-t-gfa-gold transition-all duration-300 p-8 rounded-card">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gfa-gold/0 via-gfa-gold/0 to-gfa-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gfa-warmWhite border border-gfa-border flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:border-gfa-gold group-hover:bg-white transition-all duration-300 shadow-sm">
                    {i === 0 ? '⚖️' : i === 1 ? '🛡️' : '🎓'}
                  </div>
                  <h3 className="text-[22px] font-bold mb-5 font-serif text-gfa-inkBlack group-hover:text-gfa-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-gfa-slate leading-relaxed mb-10 flex-grow opacity-85">
                    {card.body}
                  </p>
                  <div className="mt-auto border-t border-gfa-border pt-6 group-hover:border-gfa-gold/30 transition-colors">
                    <Link 
                      to={i === 0 ? "/certification" : i === 1 ? "/safeguarding" : "/career-access"} 
                      className="text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack group-hover:text-gfa-gold flex items-center gap-2"
                    >
                      {card.link} <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Statutory Disclaimer Strip */}
      <div className="bg-white py-16 border-y border-gfa-border" role="complementary">
        <div className="container-gfa">
          <div className="bg-gradient-to-r from-gfa-warmWhite to-white border-l-4 border-gfa-gold p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-grow">
               <h4 className="text-[11px] font-black uppercase tracking-widest text-gfa-gold mb-2">{t.disclaimer?.title}</h4>
               <p className="text-[14px] text-gfa-inkBlack font-medium leading-relaxed italic max-w-4xl">
                 "{t.disclaimer?.statutory}"
               </p>
            </div>
            <Link to="/governance" className="shrink-0 px-6 py-3 border border-gfa-border text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors rounded-sm bg-white shadow-sm">
               {t.nav.governance}
            </Link>
          </div>
        </div>
      </div>

      {/* Institutional Document Section */}
      <section className="bg-white border-b border-gfa-border py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gfa-warmWhite/50 skew-x-12 transform origin-top-right pointer-events-none"></div>
        <div className="container-gfa relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               {/* Abstract decorative shapes */}
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-gfa-gold/20 rounded-full blur-3xl"></div>
               <div className="bg-gfa-inkBlack p-14 rounded-card shadow-2xl relative z-10 text-white bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                  <h3 className="text-2xl font-bold font-serif mb-8 border-b border-white/10 pb-6 text-gfa-gold">{charter.title}</h3>
                  <p className="text-[14px] text-white/80 leading-relaxed uppercase tracking-widest font-bold italic mb-10">
                    {t.disclaimer?.legal}
                  </p>
                  <div className="space-y-6">
                    {(charter.points || []).map((pt: string, idx: number) => (
                      <div key={pt} className="flex gap-5 items-center group">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-gfa-gold group-hover:text-black group-hover:border-gfa-gold transition-all duration-500 font-mono">0{idx + 1}</div>
                        <p className="text-xs text-white font-bold uppercase tracking-widest group-hover:text-gfa-gold transition-colors">{pt}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="space-y-10">
              <span className="gold-badge shadow-sm">{trust.integrity}</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-[1.15] text-gfa-inkBlack">{trust.upholding}</h2>
              <p className="text-gfa-slate leading-relaxed text-[17px] opacity-90 font-medium italic border-l-2 border-gfa-gold pl-6">
                {trust.professionalismBody}
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link to="/reporting" className="btn-primary shadow-lg" aria-label="Lodge feedback regarding a certified entity">{t.nav.complaints}</Link>
                <Link to="/about" className="btn-secondary bg-white hover:bg-gfa-inkBlack" aria-label="Read our full institutional charter">{t.nav.about}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Safeguarding & Trusted Industry Standards Section */}
      <section className="py-24 px-6 bg-[#0d0f12] text-white border-t border-white/5 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f12] via-transparent to-[#0d0f12]"></div>
        
        <div className="container-gfa relative z-10">
            {/* Header */}
            <div className="mb-3 text-gfa-gold text-[13px] font-semibold uppercase tracking-[2px]">
                {t.nav.childSafety}
            </div>

            <h2 className="text-[42px] font-bold mb-5 font-serif text-white leading-tight">
                {safe.title}
            </h2>

            <p className="text-lg opacity-85 max-w-[820px] leading-relaxed mb-16 text-gfa-grayLight">
                {safe.subtitle}
            </p>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                {(safe.cards || []).map((item: any, index: number) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-gfa-gold/50 transition-colors shadow-lg hover:bg-white/10 group">
                        <h4 className="text-gfa-gold font-bold mb-2 text-lg font-serif group-hover:scale-105 transition-transform">{item.title}</h4>
                        <p className="text-sm opacity-90 text-gfa-grayLight">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 bg-white/5 p-12 rounded-xl border border-white/5">
                {/* Left side */}
                <div>
                    <h3 className="text-gfa-gold text-2xl font-bold mb-6 mt-2 font-serif">{safe.whyExists?.title}</h3>
                    <p className="leading-relaxed opacity-90 mb-6 text-lg text-gray-300">
                        {safe.whyExists?.p1}
                    </p>
                    <p className="leading-relaxed opacity-90 mb-6 text-lg text-gray-300">
                        {safe.whyExists?.p2}
                    </p>

                    <h3 className="text-gfa-gold text-2xl font-bold mb-6 mt-10 font-serif">{safe.howHelps?.title}</h3>
                    <ul className="space-y-3">
                        {(safe.howHelps?.list || []).map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 opacity-90">
                                <span className="text-gfa-gold mt-1.5 text-xs">●</span>
                                <span className="text-gray-300 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side */}
                <div>
                    <h3 className="text-gfa-gold text-2xl font-bold mb-6 mt-2 font-serif">{safe.requirements?.title}</h3>
                    <ul className="space-y-4 mb-10">
                         {(safe.requirements?.list || []).map((item: any, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-lg">
                                <span className="text-gfa-gold mt-1.5 text-xs shrink-0">●</span>
                                <span className="text-gray-300"><strong className="text-white font-semibold">{item.l}</strong> {item.t}</span>
                            </li>
                         ))}
                    </ul>

                    <h3 className="text-gfa-gold text-2xl font-bold mb-6 font-serif">{safe.benefits?.title}</h3>
                     <ul className="space-y-3">
                        {(safe.benefits?.list || []).map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 opacity-90">
                                <span className="text-gfa-gold mt-1.5 text-xs">●</span>
                                <span className="text-gray-300 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/certification" className="btn-primary shadow-xl hover:shadow-2xl">
                    {hero.btnCertify}
                </Link>
                <Link to="/registry" className="btn-secondary !border-gfa-gold !text-gfa-gold hover:!bg-gfa-gold hover:!text-black">
                    {searchReg.cta}
                </Link>
            </div>
        </div>
      </section>

      {/* Global Strategic Presence Section - Map Refinement */}
      <section className="bg-gfa-inkBlack text-white py-32 border-t border-white/10 relative overflow-hidden">
        {/* Background Map Decoration */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-cover grayscale"></div>
        <div className="absolute inset-0 bg-gfa-inkBlack/80"></div>

        <div className="container-gfa relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-gfa-gold font-bold uppercase tracking-[0.3em] text-[12px] mb-4 block">{global.networkKicker}</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">{global.title}</h2>
              <p className="text-white/60 mt-4 text-lg italic">{global.subtitle}</p>
            </div>
            <div className="flex gap-4">
              {(global.stats || []).map((stat: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 px-8 py-5 rounded-sm text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-gfa-gold font-serif">{stat.val}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(global.locations || []).map((loc: any, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gfa-gold/50 transition-all group backdrop-blur-sm hover:bg-white/10 shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-gfa-gold transition-colors">{trust.operational}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-serif">{loc.city}</h3>
                <p className="text-[11px] text-gfa-slate uppercase tracking-widest opacity-60">{loc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
