
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
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { path: '/about', label: t.nav.about, icon: '🏛️' },
    { path: '/support', label: t.nav.support, icon: '🌱' },
    { path: '/casting', label: t.nav.casting, icon: '🎬' },
    { path: '/membership', label: t.nav.membership, icon: '🎫' },
    { path: '/partners', label: t.nav.partners, icon: '🤝' },
    { path: '/events', label: t.nav.events, icon: '🏆' },
  ];

  const quickTools = [
    { path: '/verify', label: t.nav.certGov.verify, icon: '🛡️' },
    { path: '/directory', label: t.nav.certGov.directory, icon: '📂' },
    { path: '/reporting', label: t.nav.certGov.reporting, icon: '🚩' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] nav-float ${scrolled ? 'scrolled' : 'bg-gfa-black/60 backdrop-blur-md border-b border-white/5'}`}>
        <div className={`max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between`}>
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
              alt="GFA" 
              className="h-8 md:h-10 w-auto drop-shadow-lg"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black gold tracking-tighter leading-none">GFA</span>
              <span className="text-[7px] tracking-[0.4em] text-gfa-gray uppercase font-black opacity-60">Alliance</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-gfa-gold ${pathname === item.path ? 'text-gfa-gold' : 'text-gfa-gray'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            <select 
              value={locale} 
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="bg-transparent text-[10px] text-gfa-gold font-black uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              <option value={Locale.EN}>EN</option>
              <option value={Locale.ZH}>ZH</option>
              <option value={Locale.ES}>ES</option>
              <option value={Locale.FR}>FR</option>
              <option value={Locale.IT}>IT</option>
            </select>
          </div>

          {/* Mobile Right Controls - Fixed Visibility */}
          <div className="flex lg:hidden items-center gap-4">
            <button onClick={toggleMenu} className="w-10 h-10 flex flex-col justify-center items-center relative z-[120] text-gfa-gold">
               <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`}></span>
               <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
               <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dashboard Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-gfa-black/98 backdrop-blur-3xl pt-24 pb-32 px-6 overflow-y-auto animate-fade-in lg:hidden">
          <div className="max-w-md mx-auto space-y-12">
            
            {/* Header / Brand */}
            <div className="mobile-item-enter text-center" style={{ animationDelay: '0.1s' }}>
              <div className="text-[10px] text-gfa-gold font-black uppercase tracking-[0.6em] mb-2">Institutional Portal</div>
              <div className="h-px w-20 bg-gfa-gold/30 mx-auto"></div>
            </div>

            {/* Main Navigation Grid */}
            <div className="grid grid-cols-2 gap-3 mobile-item-enter" style={{ animationDelay: '0.2s' }}>
              {navItems.map((item, i) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="glass-card p-6 rounded-xl flex flex-col items-center gap-3"
                >
                  <span className="text-2xl grayscale">{item.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70 text-center leading-tight">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Quick Tools Dashboard */}
            <div className="mobile-item-enter space-y-4" style={{ animationDelay: '0.4s' }}>
               <h4 className="text-[9px] text-white/40 font-black uppercase tracking-[0.5em] pl-2 mb-4">Registry & Compliance</h4>
               <div className="grid grid-cols-1 gap-2">
                 {quickTools.map(tool => (
                   <Link 
                    key={tool.path} 
                    to={tool.path} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-xl active:bg-gfa-gold/10 transition-colors"
                   >
                     <div className="flex items-center gap-4">
                       <span className="text-xl">{tool.icon}</span>
                       <span className="text-xs font-bold uppercase tracking-widest text-white/80">{tool.label}</span>
                     </div>
                     <span className="text-gfa-gold text-lg">›</span>
                   </Link>
                 ))}
               </div>
            </div>

            {/* Language Selector */}
            <div className="mobile-item-enter pt-6 flex justify-center gap-8 border-t border-white/5" style={{ animationDelay: '0.6s' }}>
              {[Locale.EN, Locale.ZH, Locale.ES, Locale.FR, Locale.IT].map(lang => (
                <button 
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={`text-[10px] font-black uppercase tracking-widest p-2 transition-colors ${locale === lang ? 'text-gfa-gold' : 'text-white/20'}`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Primary Action */}
            <div className="mobile-item-enter pt-4" style={{ animationDelay: '0.7s' }}>
               <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full flex items-center justify-center gap-3 rounded-full shadow-2xl"
               >
                 <span>✉️</span> {t.nav.contact}
               </Link>
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
            <Link to="/governance" className="block hover:text-gfa-gold transition-colors">{t.nav.certGov.governance}</Link>
            <Link to="/standards" className="block hover:text-gfa-gold transition-colors">{t.nav.certGov.standards}</Link>
            <Link to="/safeguarding" className="block hover:text-gfa-gold transition-colors">{t.nav.certGov.safeguarding}</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-8">Resources</h4>
          <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gfa-gray">
            <Link to="/verify" className="block hover:text-gfa-gold transition-colors">{t.footer.verification}</Link>
            <Link to="/privacy" className="block hover:text-gfa-gold transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="block hover:text-gfa-gold transition-colors">{t.footer.terms}</Link>
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
