
import React, { useState, createContext, useContext, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Locale } from './types';
import { DICTIONARIES } from './i18n';

// Core layout components load immediately
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

// Lazy load all pages for faster initial load
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CertificationPage = lazy(() => import('./pages/Certification'));
const Verify = lazy(() => import('./pages/Verify'));
const Support = lazy(() => import('./pages/Support'));
const Casting = lazy(() => import('./pages/Casting'));
const Membership = lazy(() => import('./pages/Membership'));
const Partners = lazy(() => import('./pages/Partners'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const PolicyPage = lazy(() => import('./pages/PolicyPage'));
const Safeguarding = lazy(() => import('./pages/Safeguarding'));
const Governance = lazy(() => import('./pages/Governance'));
const Standards = lazy(() => import('./pages/Standards'));
const Transparency = lazy(() => import('./pages/Transparency'));
const Directory = lazy(() => import('./pages/Directory'));
const Reporting = lazy(() => import('./pages/Reporting'));

const LanguageContext = createContext({
  locale: Locale.EN,
  setLocale: (l: Locale) => {},
  t: DICTIONARIES[Locale.EN]
});

export const useLocale = () => useContext(LanguageContext);

// Optimized Loading Spinner
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
    <div className="w-8 h-8 border-2 border-gfa-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Performance: Navbar is now integrated into App to avoid multiple renders
const AppNavbar = () => {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navItems = [
    { path: '/about', label: t.nav.about },
    { path: '/support', label: t.nav.support },
    { path: '/casting', label: t.nav.casting },
    { path: '/membership', label: t.nav.membership },
    { path: '/partners', label: t.nav.partners },
    { path: '/events', label: t.nav.events },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] nav-float ${scrolled ? 'scrolled py-3' : 'bg-gfa-black/50 backdrop-blur-md border-b border-white/5 py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" className="h-8 md:h-10" alt="GFA" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black gold tracking-tighter leading-none">GFA</span>
              <span className="text-[7px] tracking-[0.4em] text-gfa-gray uppercase font-black opacity-60">Alliance</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === item.path ? 'text-gfa-gold' : 'text-gfa-gray hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
            <select 
              value={locale} 
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="bg-transparent text-[10px] text-gfa-gold font-black border-none cursor-pointer focus:outline-none"
            >
              {Object.values(Locale).map(l => <option key={l} value={l} className="bg-gfa-black">{l.toUpperCase()}</option>)}
            </select>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[120]">
            <span className={`w-6 h-0.5 bg-gfa-gold transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gfa-gold transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gfa-gold transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Optimized Mobile Dashboard */}
      <div className={`fixed inset-0 z-[100] bg-gfa-black pt-24 px-6 mobile-overlay ${isOpen ? 'open' : ''} lg:hidden`}>
        <div className="grid grid-cols-2 gap-3 mb-10">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="bg-white/5 p-6 rounded-xl flex flex-col items-center gap-2 border border-white/5 active:scale-95 transition-transform">
               <span className="text-[9px] font-black uppercase tracking-widest text-center text-white/80">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          {['/verify', '/directory', '/reporting'].map(path => (
            <Link key={path} to={path} onClick={() => setIsOpen(false)} className="block w-full p-4 bg-gfa-gold/10 border border-gfa-gold/20 rounded-xl text-center text-xs font-black uppercase tracking-widest text-gfa-gold">
              {path.replace('/', '')} Portal
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);
  const t = DICTIONARIES[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      <HashRouter>
        <div className="min-h-screen bg-gfa-black text-white selection:bg-gfa-gold selection:text-gfa-black flex flex-col">
          <Suspense fallback={null}><AppNavbar /></Suspense>
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/directory" element={<Directory />} />
                <Route path="/reporting" element={<Reporting />} />
                <Route path="/privacy" element={<PolicyPage type="privacy" />} />
                <Route path="/terms" element={<PolicyPage type="terms" />} />
              </Routes>
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <footer className="bg-gfa-black border-t border-white/5 py-12 px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">GFA Alliance Institutional Portal</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">&copy; 2024 Global Film Alliance</span>
              </div>
            </footer>
          </Suspense>
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

export default App;
