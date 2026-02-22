import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';

const Navbar: React.FC = () => {
  const { t, locale, setLocale } = useLocale();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.certification, path: '/certification' },
    { name: t.nav.registry, path: '/registry' },
    { name: t.nav.childSafety, path: '/safeguarding' },
    { name: t.nav.membership, path: '/membership' },
    { name: t.nav.contact, path: '/contact' }
  ];

  const textColor = "text-gfa-inkBlack";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[100px] flex items-center transition-all duration-300 border-t-4 border-t-gfa-gold ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gfa-border/50" : "bg-white border-b border-gfa-border"}`}>
        <div className="container-gfa flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-4 shrink-0 -ml-36 hover:opacity-80 transition-opacity">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className={`text-5xl font-bold leading-none tracking-tighter font-serif ${textColor}`}>GFA</span>
              <span className="text-[8px] tracking-[0.3em] uppercase font-black mt-1 text-gfa-gold">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-gfa-gold relative group ${location.pathname === link.path ? "text-gfa-gold" : textColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gfa-gold transform origin-left transition-transform duration-300 ${location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/login" className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-gfa-gold ${textColor}`}>
              {t.nav.login}
            </Link>
            <Link to="/membership" className="btn-primary !h-[42px] !px-6 !text-[11px] !uppercase !tracking-widest shadow-md hover:shadow-lg">
              {t.nav.join}
            </Link>
            <div className="relative group">
              <select 
                value={locale} 
                onChange={(e) => setLocale(e.target.value as Locale)} 
                className={`appearance-none bg-transparent text-[11px] font-bold uppercase tracking-widest focus:outline-none cursor-pointer border-b border-transparent hover:border-gfa-gold px-2 py-1 ${textColor} transition-colors`}
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

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 group" aria-label="Toggle Menu">
            <div className={`w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-8 h-0.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 xl:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <button onClick={() => setMobileMenuOpen(false)} className="text-gfa-inkBlack text-5xl font-light self-end mb-12 hover:text-gfa-gold transition-colors" aria-label="Close Menu">×</button>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-2xl font-bold uppercase tracking-tight text-gfa-inkBlack mb-8 font-serif hover:text-gfa-gold transition-colors hover:translate-x-2 transform duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gfa-border w-full my-6"></div>
          <Link to="/governance" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gfa-slate mb-4 hover:text-gfa-inkBlack">{t.nav.governance}</Link>
          <Link to="/partners" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gfa-slate mb-4 hover:text-gfa-inkBlack">{t.nav.partners}</Link>
          <Link to="/career-access" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gfa-slate mb-8 hover:text-gfa-inkBlack">{t.nav.graduateSupport}</Link>
          <Link to="/membership" onClick={() => setMobileMenuOpen(false)} className="btn-primary mt-auto mb-10 w-full text-center shadow-xl">{t.nav.join}</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
