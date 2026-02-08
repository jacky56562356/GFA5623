
import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Locale } from './types.ts';
import { LocaleProvider, useLocale } from './LocaleContext.tsx';

// Unified Page Imports
const Home = lazy(() => import('./pages/Home.tsx'));
const Certification = lazy(() => import('./pages/Certification.tsx'));
const Safeguarding = lazy(() => import('./pages/Safeguarding.tsx'));
const YouthSafetyPolicy = lazy(() => import('./pages/YouthSafetyPolicy.tsx'));
const Registry = lazy(() => import('./pages/Registry.tsx'));
const Reporting = lazy(() => import('./pages/Reporting.tsx'));
const Governance = lazy(() => import('./pages/Governance.tsx'));
const Standards = lazy(() => import('./pages/Standards.tsx'));
const Membership = lazy(() => import('./pages/Membership.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Verify = lazy(() => import('./pages/Verify.tsx'));
const Transparency = lazy(() => import('./pages/Transparency.tsx'));
const GraduateSupport = lazy(() => import('./pages/GraduateSupport.tsx'));
const Partners = lazy(() => import('./pages/Partners.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const MemberPortal = lazy(() => import('./pages/MemberPortal.tsx'));
const Events = lazy(() => import('./pages/Events.tsx'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard.tsx'));
const Complaints = lazy(() => import('./pages/Complaints.tsx'));

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.certification, path: '/certification' },
    { name: t.nav.registry, path: '/registry' },
    { name: t.nav.childSafety, path: '/safeguarding' },
    { name: t.nav.membership, path: '/membership' },
    { name: t.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navTextColor = 'text-gfa-inkBlack';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[100px] flex items-center transition-all duration-300 border-t-4 border-t-gfa-gold ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gfa-border/50' : 'bg-white border-b border-gfa-border'}`}>
        <div className="container-gfa flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 shrink-0 -ml-36 hover:opacity-80 transition-opacity">
            <img 
              src="https://i.ibb.co/mFgDBtBp/1.png" 
              alt="GFA" 
              className="h-20 w-auto" 
            />
            <div className="flex flex-col">
              <span className={`text-5xl font-bold leading-none tracking-tighter font-serif ${navTextColor}`}>GFA</span>
              <span className="text-[8px] tracking-[0.3em] uppercase font-black mt-1 text-gfa-gold">Global Film Alliance</span>
            </div>
          </Link>

          {/* Navigation Middle */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-gfa-gold relative group ${pathname === link.path ? 'text-gfa-gold' : navTextColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gfa-gold transform origin-left transition-transform duration-300 ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
          </div>

          {/* Action Links Right */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/login" className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-gfa-gold ${navTextColor}`}>
              {t.nav.login}
            </Link>
            <Link to="/membership" className="btn-primary !h-[42px] !px-6 !text-[11px] !uppercase !tracking-widest shadow-md hover:shadow-lg">
              {t.nav.join}
            </Link>
            <div className="relative group">
              <select 
                value={locale} 
                onChange={(e) => setLocale(e.target.value as Locale)}
                className={`appearance-none bg-transparent text-[11px] font-bold uppercase tracking-widest focus:outline-none cursor-pointer border-b border-transparent hover:border-gfa-gold px-2 py-1 ${navTextColor} transition-colors`}
              >
                <option value={Locale.EN} className="bg-white text-gfa-inkBlack">English</option>
                <option value={Locale.ZH} className="bg-white text-gfa-inkBlack">中文</option>
                <option value={Locale.ES} className="bg-white text-gfa-inkBlack">Español</option>
                <option value={Locale.FR} className="bg-white text-gfa-inkBlack">Français</option>
                <option value={Locale.IT} className="bg-white text-gfa-inkBlack">Italiano</option>
                <option value={Locale.KO} className="bg-white text-gfa-inkBlack">한국어</option>
                <option value={Locale.JA} className="bg-white text-gfa-inkBlack">日本語</option>
                <option value={Locale.DE} className="bg-white text-gfa-inkBlack">Deutsch</option>
              </select>
            </div>
          </div>

          {/* Mobile Trigger */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 group" aria-label="Toggle Menu">
             <div className={`w-8 h-0.5 mb-2 transition-colors ${navTextColor.replace('text-', 'bg-')} group-hover:bg-gfa-gold`}></div>
             <div className={`w-8 h-0.5 mb-2 transition-colors ${navTextColor.replace('text-', 'bg-')} group-hover:bg-gfa-gold`}></div>
             <div className={`w-8 h-0.5 transition-colors ${navTextColor.replace('text-', 'bg-')} group-hover:bg-gfa-gold`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overly */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 xl:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <button onClick={() => setIsOpen(false)} className="text-gfa-inkBlack text-5xl font-light self-end mb-12 hover:text-gfa-gold transition-colors" aria-label="Close Menu">&times;</button>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-2xl font-bold uppercase tracking-tight text-gfa-inkBlack mb-8 font-serif hover:text-gfa-gold transition-colors hover:translate-x-2 transform duration-300">
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gfa-border w-full my-6"></div>
          <Link to="/governance" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gfa-slate mb-4 hover:text-gfa-inkBlack">{t.nav.governance}</Link>
          <Link to="/partners" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gfa-slate mb-4 hover:text-gfa-inkBlack">{t.nav.partners}</Link>
          <Link to="/career-access" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gfa-slate mb-8 hover:text-gfa-inkBlack">{t.nav.graduateSupport}</Link>
          <Link to="/membership" onClick={() => setIsOpen(false)} className="btn-primary mt-auto mb-10 w-full text-center shadow-xl">{t.nav.join}</Link>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="bg-gfa-inkBlack text-white pt-24 pb-12 px-6 border-t-[6px] border-t-gfa-gold relative overflow-hidden">
      {/* Footer background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)' }}></div>
      
      <div className="container-gfa grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
             <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-20 w-auto" />
             <div className="flex flex-col">
               <span className="text-3xl font-bold tracking-tighter font-serif leading-none">GFA</span>
               <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-1">Alliance</span>
             </div>
          </div>
          <p className="text-[12px] text-white/40 leading-relaxed font-medium max-w-xs">
            {t.footer.desc}
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gfa-gold hover:border-gfa-gold hover:text-black transition-all cursor-pointer">X</div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gfa-gold hover:border-gfa-gold hover:text-black transition-all cursor-pointer">In</div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gfa-gold hover:border-gfa-gold hover:text-black transition-all cursor-pointer">Ig</div>
          </div>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-gfa-gold mb-10 flex items-center gap-3">
            <span className="w-1 h-1 bg-gfa-gold rounded-full"></span> {t.nav.about}
          </h4>
          <div className="space-y-4 text-[13px] text-white/50 font-medium">
            <Link to="/governance" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.governance}</Link>
            <Link to="/transparency" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">Transparency</Link>
            <Link to="/verify" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">Audit</Link>
            <Link to="/youth-safety-policy" className="block text-gfa-gold hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.childSafety}</Link>
          </div>
        </div>
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-gfa-gold mb-10 flex items-center gap-3">
             <span className="w-1 h-1 bg-gfa-gold rounded-full"></span> Resources
          </h4>
          <div className="space-y-4 text-[13px] text-white/50 font-medium">
             <Link to="/safeguarding" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.childSafety}</Link>
             <Link to="/registry" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.registry}</Link>
             <Link to="/reporting" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.complaints}</Link>
             <Link to="/career-access" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.graduateSupport}</Link>
             <Link to="/partners" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.partners}</Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 border border-white/10 rounded-card text-[12px] text-white/40 italic leading-relaxed backdrop-blur-sm">
          GFA is an independent non-profit industry service organization. 
          <span className="block mt-4 text-gfa-gold/60 pt-4 border-t border-white/5 font-bold">
            {t.disclaimer.heroWarning}
          </span>
        </div>
      </div>
      <div className="container-gfa pt-8 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
        {t.footer.copyright.replace('{year}', '2025')}
      </div>
    </footer>
  );
};

const AppContent = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col relative">
        <div className="bg-noise"></div>
        <Navbar />
        <main className="flex-grow z-10">
          <Suspense fallback={<div className="h-screen flex items-center justify-center bg-gfa-warmWhite"><div className="w-12 h-12 border-2 border-gfa-gold border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/safeguarding" element={<Safeguarding />} />
              <Route path="/youth-safety-policy" element={<YouthSafetyPolicy />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/about" element={<About />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/career-access" element={<GraduateSupport />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<MemberPortal />} />
              <Route path="/events" element={<Events />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/complaints" element={<Complaints />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

const App = () => (
  <LocaleProvider>
    <AppContent />
  </LocaleProvider>
);

export default App;
