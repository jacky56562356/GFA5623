
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Locale } from './types';
import { DICTIONARIES } from './i18n';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import CertificationPage from './pages/Certification';
import Verify from './pages/Verify';
import Support from './pages/Support';
import Casting from './pages/Casting';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Events from './pages/Events';
import Contact from './pages/Contact';
import PolicyPage from './pages/PolicyPage';
import Safeguarding from './pages/Safeguarding';

// Governance Pages
import Governance from './pages/Governance';
import Standards from './pages/Standards';
import Transparency from './pages/Transparency';
import Protection from './pages/Protection';
import Directory from './pages/Directory';
import Reporting from './pages/Reporting';

const LanguageContext = createContext({
  locale: Locale.EN,
  setLocale: (l: Locale) => {},
  t: DICTIONARIES[Locale.EN]
});

export const useLocale = () => useContext(LanguageContext);

const Navbar = () => {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const mainNavLinks = [
    { path: '/about', label: t.nav.about },
    { path: '/support', label: t.nav.support },
    { path: '/casting', label: t.nav.casting },
    { path: '/membership', label: t.nav.membership },
    { path: '/partners', label: t.nav.partners },
    { path: '/events', label: t.nav.events },
  ];

  const certGovLinks = [
    { path: '/certification', label: t.nav.certGov.overview, icon: '📜' },
    { path: '/verify', label: t.nav.certGov.verify, icon: '🛡️' },
    { path: '/safeguarding', label: t.nav.certGov.safeguarding, icon: '👶' },
    { path: '/governance', label: t.nav.certGov.governance, icon: '⚖️' },
    { path: '/standards', label: t.nav.certGov.standards, icon: '📋' },
    { path: '/transparency', label: t.nav.certGov.transparency, icon: '💎' },
    { path: '/directory', label: t.nav.certGov.directory, icon: '📂' },
    { path: '/reporting', label: t.nav.certGov.reporting, icon: '🚩' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsCertOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] nav-float ${scrolled ? 'scrolled' : 'bg-gfa-black/80'}`}>
        <div className={`max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between`}>
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
              alt="GFA" 
              className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black gold tracking-tighter leading-none">GFA</span>
              <span className="text-[8px] tracking-[0.3em] text-gfa-gray uppercase font-black opacity-60">Alliance</span>
            </div>
          </Link>

          {/* Desktop Links - Minimalist Mode */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group" onMouseEnter={() => setIsCertOpen(true)} onMouseLeave={() => setIsCertOpen(false)}>
              <button className={`text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all ${certGovLinks.some(l => pathname === l.path) ? 'text-gfa-gold' : 'text-gfa-gray hover:text-white'}`}>
                {t.nav.certification} <span className="text-[8px] opacity-40">▼</span>
              </button>
              
              {isCertOpen && (
                <div className="absolute top-full -left-10 pt-4 animate-fade-in">
                  <div className="bg-gfa-darkGray/95 backdrop-blur-3xl border border-gfa-gold/20 p-6 w-[480px] grid grid-cols-2 gap-x-8 gap-y-4 shadow-3xl">
                    {certGovLinks.map(gl => (
                      <Link key={gl.path} to={gl.path} className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-gfa-gold transition-colors ${pathname === gl.path ? 'text-gfa-gold' : 'text-gfa-gray'}`}>
                        <span className="opacity-50">{gl.icon}</span> {gl.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainNavLinks.map(l => (
              <Link 
                key={l.path} 
                to={l.path} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-white ${pathname === l.path ? 'text-gfa-gold' : 'text-gfa-gray'}`}
              >
                {l.label}
              </Link>
            ))}

            <select 
              value={locale} 
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="bg-transparent border-none text-[10px] text-gfa-gold font-black px-2 py-1 focus:outline-none cursor-pointer uppercase tracking-widest"
            >
              <option value={Locale.EN}>EN</option>
              <option value={Locale.ZH}>ZH</option>
              <option value={Locale.ES}>ES</option>
              <option value={Locale.FR}>FR</option>
              <option value={Locale.IT}>IT</option>
            </select>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-6">
             <button onClick={() => setIsOpen(!isOpen)} className="text-gfa-gold relative w-8 h-8 flex flex-col justify-center items-center">
                <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-2'}`}></span>
                <span className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'}`}></span>
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dashboard Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-gfa-black pt-32 px-6 overflow-y-auto animate-fade-in">
          <div className="max-w-md mx-auto space-y-12 pb-24">
            
            {/* Primary Navigation Cards */}
            <div className="grid grid-cols-2 gap-4">
               {mainNavLinks.map((l, i) => (
                 <Link 
                  key={l.path} 
                  to={l.path} 
                  onClick={closeMenu}
                  className="bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center rounded-lg hover:border-gfa-gold/50 mobile-item-enter"
                  style={{ animationDelay: `${i * 0.05}s` }}
                 >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 text-center">{l.label}</span>
                 </Link>
               ))}
            </div>

            {/* Institutional Compliance Portal */}
            <div className="mobile-item-enter" style={{ animationDelay: '0.4s' }}>
               <h4 className="text-[10px] text-gfa-gold font-black uppercase tracking-[0.4em] mb-6 border-l-2 border-gfa-gold pl-4">Institutional Compliance</h4>
               <div className="bg-gfa-darkGray/50 border border-white/5 p-8 grid grid-cols-1 gap-6 rounded-xl shadow-2xl">
                  {certGovLinks.map(gl => (
                    <Link 
                      key={gl.path} 
                      to={gl.path} 
                      onClick={closeMenu}
                      className={`flex items-center gap-4 text-xs font-bold uppercase tracking-widest ${pathname === gl.path ? 'text-gfa-gold' : 'text-white/40'}`}
                    >
                      <span className="text-lg grayscale">{gl.icon}</span> {gl.label}
                    </Link>
                  ))}
               </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-8 mobile-item-enter" style={{ animationDelay: '0.6s' }}>
               <Link to="/contact" onClick={closeMenu} className="btn-gold w-full flex">
                 {t.nav.contact}
               </Link>
               
               <div className="mt-12 flex justify-center gap-6">
                  {[Locale.EN, Locale.ZH, Locale.ES, Locale.FR, Locale.IT].map(lang => (
                    <button 
                      key={lang}
                      onClick={() => setLocale(lang)}
                      className={`text-[10px] font-black uppercase tracking-widest ${locale === lang ? 'text-gfa-gold' : 'text-white/30'}`}
                    >
                      {lang}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-gfa-black border-t border-gfa-gold/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-6 mb-8">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="text-3xl font-black gold leading-none tracking-tighter">GFA</span>
              <span className="text-[8px] tracking-[0.3em] text-gfa-gray uppercase font-bold mt-1 opacity-60">Alliance</span>
            </div>
          </Link>
          <p className="text-gfa-gray text-[10px] leading-relaxed max-w-xs uppercase tracking-widest font-bold opacity-40">
            {t.footer.desc}
          </p>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8">{t.nav.certGov.governance}</h4>
          <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gfa-gray">
            <Link to="/governance" className="block hover:text-gfa-gold">{t.nav.certGov.governance}</Link>
            <Link to="/standards" className="block hover:text-gfa-gold">{t.nav.certGov.standards}</Link>
            <Link to="/safeguarding" className="block hover:text-gfa-gold">{t.nav.certGov.safeguarding}</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8">Resources</h4>
          <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gfa-gray">
            <Link to="/verify" className="block hover:text-gfa-gold">{t.footer.verification}</Link>
            <Link to="/privacy" className="block hover:text-gfa-gold">{t.footer.privacy}</Link>
            <Link to="/terms" className="block hover:text-gfa-gold">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center md:text-left">
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-gfa-gray/30">
          {t.footer.copyright.replace('{year}', currentYear)}
        </span>
      </div>
    </footer>
  );
};

const App = () => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);
  const t = DICTIONARIES[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      <HashRouter>
        <div className="min-h-screen bg-gfa-black text-white selection:bg-gfa-gold selection:text-gfa-black">
          <Navbar />
          <main className="min-h-[calc(100vh-24rem)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/safeguarding" element={<Safeguarding />} />
              <Route path="/support" element={<Support />} />
              <Route path="/casting" element={<Casting />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/protection" element={<Protection />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/privacy" element={<PolicyPage type="privacy" />} />
              <Route path="/terms" element={<PolicyPage type="terms" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

export default App;
