
import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Locale } from './types.ts';
import { LocaleProvider, useLocale } from './LocaleContext.tsx';

// Unified Page Imports (using the most complete versions)
const Home = lazy(() => import('./pages/Home.tsx'));
const Certification = lazy(() => import('./pages/Certification.tsx'));
const Safeguarding = lazy(() => import('./pages/Safeguarding.tsx'));
const ChildSafety = lazy(() => import('./pages/ChildSafety.tsx'));
const GraduateSupport = lazy(() => import('./pages/GraduateSupport.tsx'));
const Registry = lazy(() => import('./pages/Registry.tsx'));
const Directory = lazy(() => import('./pages/Directory.tsx'));
const Complaints = lazy(() => import('./pages/Complaints.tsx'));
const Reporting = lazy(() => import('./pages/Reporting.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const MemberPortal = lazy(() => import('./pages/MemberPortal.tsx'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard.tsx'));
const Verify = lazy(() => import('./pages/Verify.tsx'));
const Transparency = lazy(() => import('./pages/Transparency.tsx'));
const Protection = lazy(() => import('./pages/Protection.tsx'));
const Governance = lazy(() => import('./pages/Governance.tsx'));
const Standards = lazy(() => import('./pages/Standards.tsx'));
const Partners = lazy(() => import('./pages/Partners.tsx'));
const Membership = lazy(() => import('./pages/Membership.tsx'));
const Events = lazy(() => import('./pages/Events.tsx'));
const Casting = lazy(() => import('./pages/Casting.tsx'));

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { pathname } = useLocation();
  const { t, locale, setLocale } = useLocale();

  const mainLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.registry, path: '/registry' },
    { name: t.nav.certification, path: '/certification' },
    { name: t.nav.childSafety, path: '/safeguarding' },
    { name: t.nav.governance, path: '/governance' },
  ];

  const secondaryLinks = [
    { name: t.nav.standards, path: '/standards' },
    { name: t.nav.membership, path: '/membership' },
    { name: t.nav.about, path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-gfa-black/95 backdrop-blur-2xl py-3 border-b border-gfa-gold/10 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA" className="h-12 w-auto group-hover:scale-110 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="text-3xl font-black gold leading-none tracking-tighter">GFA</span>
              <span className="text-[9px] tracking-[0.4em] uppercase opacity-40 font-black mt-1">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {mainLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-gfa-gold border-b-2 ${pathname === link.path ? 'border-gfa-gold text-gfa-gold' : 'border-transparent text-gfa-gray'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            <Link to="/member" className="bg-gfa-gold/10 border border-gfa-gold/40 text-gfa-gold text-xs font-black uppercase tracking-widest px-5 py-2.5 hover:bg-gfa-gold hover:text-gfa-black transition-all duration-300">
              {t.nav.memberPortal}
            </Link>
            <select 
              value={locale} 
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="bg-gfa-black/40 text-xs text-gfa-gold font-black uppercase tracking-widest focus:outline-none cursor-pointer border border-gfa-gold/20 rounded px-2 py-1.5 hover:border-gfa-gold"
            >
              <option value={Locale.EN} className="bg-gfa-black">EN</option>
              <option value={Locale.ZH} className="bg-gfa-black">ZH</option>
            </select>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gfa-gold p-2">
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-gfa-black/98 backdrop-blur-3xl z-[105] transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10 overflow-y-auto">
          <div className="grid grid-cols-1 gap-6">
            {[...mainLinks, ...secondaryLinks].map((link) => (
              <Link key={link.path} to={link.path} className="text-2xl font-black uppercase tracking-widest text-white/90 border-b border-white/5 pb-4">
                {link.name}
              </Link>
            ))}
            <Link to="/member" className="text-lg font-black uppercase tracking-widest text-gfa-gold pt-4">
              {t.nav.memberPortal}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="bg-gfa-black border-t border-white/5 pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
        <div className="lg:col-span-1 space-y-10">
          <Link to="/" className="flex items-center gap-4">
            <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA" className="h-10 w-auto opacity-60" />
            <span className="text-2xl font-black gold tracking-tighter">GFA</span>
          </Link>
          <p className="text-[10px] text-gfa-gray leading-loose uppercase tracking-[0.2em] opacity-40 max-w-sm">
            {t.footer.desc}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 lg:col-span-2">
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-gfa-gold">Systems</h4>
            <div className="space-y-4">
              <Link to="/registry" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Public Registry</Link>
              <Link to="/verify" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Bond Verification</Link>
              <Link to="/certification" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Apply for Status</Link>
              <Link to="/transparency" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Transparency Index</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-gfa-gold">Institutional</h4>
            <div className="space-y-4">
              <Link to="/safeguarding" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Child Safety Center</Link>
              <Link to="/governance" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Governance Charter</Link>
              <Link to="/standards" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">Industry Standards</Link>
              <Link to="/about" className="block text-[10px] text-gfa-gray/60 hover:text-white uppercase tracking-widest transition-colors">GFA Charter</Link>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-10 border border-white/5 rounded-sm lg:col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-gfa-gold mb-8">Independence</h4>
          <p className="text-[9px] text-gfa-gray/40 leading-relaxed uppercase tracking-wider italic">
            {t.disclaimer.legal}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 text-center">
        <p className="text-[9px] text-gfa-gray/30 uppercase tracking-[0.6em] font-black">{t.footer.copyright.replace('{year}', '2025')}</p>
      </div>
    </footer>
  );
};

const AppContent = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-gfa-gold selection:text-gfa-black">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center bg-gfa-black">
            <div className="w-12 h-12 border-2 border-gfa-gold border-t-transparent rounded-full animate-spin"></div>
          </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/safeguarding" element={<Safeguarding />} />
              <Route path="/graduate-support" element={<GraduateSupport />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/about" element={<About />} />
              <Route path="/member" element={<MemberPortal />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/protection" element={<Protection />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/events" element={<Events />} />
              <Route path="/casting" element={<Casting />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const App = () => {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
};

export default App;
