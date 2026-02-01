
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

const LanguageContext = createContext({
  locale: Locale.EN,
  setLocale: (l: Locale) => {},
  t: DICTIONARIES[Locale.EN]
});

export const useLocale = () => useContext(LanguageContext);

const Navbar = () => {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { path: '/about', label: t.nav.about },
    { path: '/certification', label: t.nav.certification },
    { path: '/support', label: t.nav.support },
    { path: '/casting', label: t.nav.casting },
    { path: '/membership', label: t.nav.membership },
    { path: '/partners', label: t.nav.partners },
    { path: '/events', label: t.nav.events },
    { path: '/contact', label: t.nav.contact },
  ];

  const languages = [
    { code: Locale.EN, label: t.language.en },
    { code: Locale.ZH, label: t.language.zh },
    { code: Locale.ES, label: t.language.es },
    { code: Locale.FR, label: t.language.fr },
    { code: Locale.IT, label: t.language.it },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gfa-black/90 backdrop-blur-lg border-b border-gfa-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
              alt="GFA Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black gold-gradient tracking-tighter leading-none">GFA</span>
              <span className="text-[8px] tracking-[0.2em] text-gfa-gray uppercase font-bold">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-6">
            {links.map(l => (
              <Link key={l.path} to={l.path} className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-gfa-gold ${pathname === l.path ? 'text-gfa-gold' : 'text-gfa-gray'}`}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <select 
              value={locale} 
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="bg-transparent border border-gfa-gold/30 text-[10px] text-gfa-gold font-bold px-2 py-1 focus:outline-none cursor-pointer"
            >
              {languages.map(lang => <option key={lang.code} value={lang.code} className="bg-gfa-black">{lang.label}</option>)}
            </select>
            <button className="lg:hidden text-gfa-gray" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gfa-black border-b border-gfa-gold/20 pb-4">
          {links.map(l => (
            <Link key={l.path} to={l.path} className="block px-6 py-3 text-sm font-bold uppercase tracking-widest text-gfa-gray" onClick={() => setIsOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-gfa-black border-t border-gfa-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-4 mb-6 group">
            <img 
              src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" 
              alt="GFA Logo" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-3xl font-black gold-gradient leading-none">GFA</span>
              <span className="text-xs tracking-[0.4em] text-gfa-gray uppercase font-bold">Global Film Alliance</span>
            </div>
          </Link>
          <p className="text-gfa-gray text-sm leading-relaxed max-w-sm">
            Institutional authority for global film certification, talent protection, and creative foundation support.
          </p>
        </div>
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">Alliance</h4>
          <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-gfa-gray">
            <Link to="/about" className="block hover:text-gfa-gold">{t.nav.about}</Link>
            <Link to="/certification" className="block hover:text-gfa-gold">{t.nav.certification}</Link>
            <Link to="/verify" className="block hover:text-gfa-gold">{t.footer.verification}</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">{t.nav.policies}</h4>
          <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-gfa-gray">
            <Link to="/privacy" className="block hover:text-gfa-gold">{t.footer.privacy}</Link>
            <Link to="/terms" className="block hover:text-gfa-gold">{t.footer.terms}</Link>
            <Link to="/consent" className="block hover:text-gfa-gold">{t.footer.parental}</Link>
            <Link to="/content-policy" className="block hover:text-gfa-gold">{t.footer.content}</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-8 text-center text-[10px] text-gfa-gray uppercase tracking-widest font-medium">
        {t.footer.copyright.replace('{year}', currentYear)}
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('gfa_locale') as Locale) || Locale.EN);

  useEffect(() => {
    localStorage.setItem('gfa_locale', locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: DICTIONARIES[locale] }}>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gfa-black text-white selection:bg-gfa-gold selection:text-gfa-black">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/support" element={<Support />} />
              <Route path="/casting" element={<Casting />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PolicyPage type="privacy" />} />
              <Route path="/terms" element={<PolicyPage type="terms" />} />
              <Route path="/consent" element={<PolicyPage type="consent" />} />
              <Route path="/content-policy" element={<PolicyPage type="content" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

export default App;
