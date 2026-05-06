import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import { Heart, ChevronDown, Globe } from 'lucide-react';

const LANGUAGES = [
  { locale: Locale.EN, label: 'English', short: 'EN' },
  { locale: Locale.ZH, label: '中文', short: '中文' },
  { locale: Locale.ES, label: 'Español', short: 'ES' },
  { locale: Locale.KO, label: '한국어', short: 'KO' },
  { locale: Locale.FR, label: 'Français', short: 'FR' },
  { locale: Locale.IT, label: 'Italiano', short: 'IT' },
];

const NAV_LINKS = [
  { en: 'About', zh: '关于', es: 'Nosotros', ko: '소개', fr: 'À Propos', it: 'Chi Siamo', path: '/about' },
  { en: 'Filmmakers', zh: '电影人', es: 'Cineastas', ko: '영화인', fr: 'Cinéastes', it: 'Cineasti', path: '/filmmaker-support' },
  { en: 'Youth', zh: '青少年', es: 'Jóvenes', ko: '청소년', fr: 'Jeunesse', it: 'Giovani', path: '/youth-programs' },
  { en: 'Guide', zh: '指南', es: 'Guía', ko: '가이드', fr: 'Guide', it: 'Guida', path: '/family-guide' },
  { en: 'Awards', zh: '金羽奖', es: 'Premios', ko: '시상식', fr: 'Prix', it: 'Premi', path: '/awards' },
  { en: 'Competition', zh: '大赛', es: 'Concurso', ko: '대회', fr: 'Compétition', it: 'Competizione', path: '/competition' },
];

function getLinkName(link: typeof NAV_LINKS[0], locale: Locale): string {
  switch (locale) {
    case Locale.ZH: return link.zh;
    case Locale.ES: return link.es;
    case Locale.KO: return link.ko;
    case Locale.FR: return link.fr;
    case Locale.IT: return link.it;
    default: return link.en;
  }
}

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.locale === locale) || LANGUAGES[0];

  const donateLabel = locale === Locale.ZH ? '捐款' : locale === Locale.ES ? 'Donar' : locale === Locale.KO ? '후원' : locale === Locale.FR ? 'Faire un Don' : locale === Locale.IT ? 'Dona' : 'Donate';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[90px] md:h-[100px] flex items-center transition-all duration-300 border-t-4 border-t-gfa-gold ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gfa-border/50" : "bg-white border-b border-gfa-border"}`}>
        <div className="container-gfa flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-12 md:h-16 w-auto" />
            <div className="hidden lg:flex flex-col">
              <span className="text-3xl lg:text-4xl font-bold leading-none tracking-tighter font-serif text-gfa-inkBlack">GFA</span>
              <span className="text-[7px] tracking-[0.2em] font-black mt-1 text-gfa-gold whitespace-nowrap">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 flex-grow ml-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-[12px] 2xl:text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-gfa-gold relative group whitespace-nowrap ${location.pathname.startsWith(link.path) ? "text-gfa-gold" : "text-gfa-inkBlack"}`}
              >
                {getLinkName(link, locale)}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gfa-gold transform origin-left transition-transform duration-300 ${location.pathname.startsWith(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-4 shrink-0">
            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-[12px] font-bold tracking-widest text-gfa-inkBlack hover:text-gfa-gold transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currentLang.short}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gfa-border rounded-xl shadow-xl overflow-hidden z-50 min-w-[140px]">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.locale}
                      onClick={() => { setLocale(lang.locale); setLangDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-gfa-gold flex items-center justify-between ${locale === lang.locale ? 'text-gfa-gold bg-amber-50' : 'text-gfa-inkBlack'}`}
                    >
                      <span>{lang.label}</span>
                      {locale === lang.locale && <span className="w-1.5 h-1.5 rounded-full bg-gfa-gold"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg hover:bg-[#b09241] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase">
              <Heart className="w-4 h-4 fill-current" />
              {donateLabel}
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 group" aria-label="Toggle Menu">
            <div className="w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold"></div>
            <div className="w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold"></div>
            <div className="w-8 h-0.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 xl:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-gfa-border">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-12 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="text-gfa-inkBlack text-4xl font-light hover:text-gfa-gold transition-colors" aria-label="Close Menu">×</button>
          </div>

          {/* Language Grid */}
          <div className="px-8 py-6 border-b border-gfa-border">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-4 flex items-center gap-2"><Globe className="w-3 h-3" /> Language</p>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.locale}
                  onClick={() => { setLocale(lang.locale); }}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors border ${locale === lang.locale ? 'bg-gfa-gold text-white border-gfa-gold' : 'border-gfa-border text-gfa-inkBlack hover:border-gfa-gold hover:text-gfa-gold'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-8 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-tight text-gfa-inkBlack py-3 font-serif hover:text-gfa-gold transition-colors border-b border-gfa-border/50 last:border-0"
              >
                {getLinkName(link, locale)}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-12 mt-auto">
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest shadow-lg uppercase w-full">
              <Heart className="w-5 h-5 fill-current" />
              {donateLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
