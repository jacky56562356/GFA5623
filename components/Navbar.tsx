import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import { Heart, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signInWithGoogle, logout, setAuthModalOpen } = useAuth();
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
    { name: locale === Locale.EN ? 'About' : '关于', path: '/about' },
    { name: locale === Locale.EN ? 'Filmmakers' : '电影人', path: '/filmmaker-support' },
    { name: locale === Locale.EN ? 'Youth' : '青少年', path: '/youth-programs' },
    { name: locale === Locale.EN ? 'Family' : '家长指南', path: '/family-guide' },
    { name: locale === Locale.EN ? 'Awards' : '金羽奖', path: '/awards' },
    { name: locale === Locale.EN ? 'Competition' : '大赛', path: '/competition' },
    { name: locale === Locale.EN ? 'Impact' : '影响力', path: '/impact' },
    { name: locale === Locale.EN ? 'News' : '新闻', path: '/news' },
    { name: locale === Locale.EN ? 'Involve' : '参与', path: '/get-involved' }
  ];

  const textColor = "text-gfa-inkBlack";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[80px] md:h-[90px] flex items-center transition-all duration-300 border-t-4 border-t-gfa-gold lg:border-t-0 w-full ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gfa-border/50" : "bg-white border-b border-gfa-border"}`}>
        <div className="container-gfa flex items-center justify-between w-full px-4 lg:px-8 mx-auto max-w-[1400px]">
          <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-10 md:h-14 w-auto object-contain" />
            <div className="hidden lg:flex flex-col">
              <span className={`text-2xl lg:text-3xl font-bold leading-none tracking-tighter font-serif ${textColor}`}>GFA</span>
              <span className="text-[6px] tracking-[0.2em] font-black mt-1 text-gfa-gold whitespace-nowrap">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-2 lg:gap-4 xl:gap-5 flex-grow px-2 mx-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link text-[11px] xl:text-[12px] font-bold uppercase tracking-wider transition-all duration-300 hover:text-gfa-gold relative group whitespace-nowrap ${location.pathname.startsWith(link.path) ? "text-gfa-gold" : textColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gfa-gold transform origin-left transition-transform duration-300 ${location.pathname.startsWith(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 shrink-0 ml-2">
            <div className="flex items-center space-x-2 text-[11px] xl:text-[12px] font-bold tracking-widest">
              <button 
                onClick={() => setLocale(Locale.EN)}
                className={`transition-colors hover:text-gfa-gold ${locale === Locale.EN ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                EN
              </button>
              <span className="text-gfa-slate/30">|</span>
              <button 
                onClick={() => setLocale(Locale.ZH)}
                className={`transition-colors hover:text-gfa-gold ${locale === Locale.ZH ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                {locale === Locale.EN ? 'ZH' : '中文'}
              </button>
            </div>
            
            <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-full font-bold text-xs xl:text-sm tracking-wide shadow hover:bg-[#b09241] hover:shadow-md transition-all duration-300 uppercase shrink-0">
              <Heart className="w-4 h-4 fill-current" />
              {locale === Locale.EN ? 'Donate' : '捐款'}
            </Link>

            {user ? (
              <div className="flex items-center gap-3 border-l border-gfa-border pl-4">
                <Link to="/profile" className="flex items-center gap-2 text-gfa-inkBlack hover:text-gfa-gold transition-colors">
                  <UserCircle className="w-5 h-5 xl:w-6 xl:h-6" />
                </Link>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="text-gfa-slate hover:text-gfa-gold transition-colors"
                >
                  <LogOut className="w-4 h-4 xl:w-5 xl:h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setAuthModalOpen(true)}
                className="text-gfa-inkBlack hover:text-gfa-gold font-bold uppercase tracking-wider text-[11px] xl:text-[12px] transition-colors border-l border-gfa-border pl-4 whitespace-nowrap"
              >
                {locale === Locale.EN ? 'Sign In' : '登录'}
              </button>
            )}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 group" aria-label="Toggle Menu">
            <div className={`w-6 h-0.5 mb-1.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-6 h-0.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-4 px-10">
          <button onClick={() => setMobileMenuOpen(false)} className="text-gfa-inkBlack text-5xl font-light self-end mb-3 hover:text-gfa-gold transition-colors" aria-label="Close Menu">×</button>
          
          <div className="flex items-center space-x-4 mb-3 border-b border-gfa-border pb-3">
             <button 
                onClick={() => { setLocale(Locale.EN); setMobileMenuOpen(false); }}
                className={`text-lg font-bold tracking-widest ${locale === Locale.EN ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                EN
              </button>
              <span className="text-gfa-slate/30">|</span>
              <button 
                onClick={() => { setLocale(Locale.ZH); setMobileMenuOpen(false); }}
                className={`text-lg font-bold tracking-widest ${locale === Locale.ZH ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                {locale === Locale.EN ? 'ZH' : '中文'}
              </button>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-2xl font-bold uppercase tracking-tight text-gfa-inkBlack mb-4 font-serif hover:text-gfa-gold transition-colors hover:translate-x-2 transform duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-4 border-t border-gfa-border pt-4 mb-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link 
                  to="/profile" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-xl font-bold uppercase tracking-tight text-gfa-inkBlack font-serif hover:text-gfa-gold transition-colors"
                >
                  <UserCircle className="w-6 h-6" />
                  {locale === Locale.EN ? 'Profile' : '个人资料'}
                </Link>
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); navigate('/'); }}
                  className="text-gfa-slate hover:text-gfa-gold transition-colors"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { setAuthModalOpen(true); setMobileMenuOpen(false); }}
                className="text-xl font-bold uppercase tracking-tight text-gfa-inkBlack font-serif hover:text-gfa-gold transition-colors"
              >
                {locale === Locale.EN ? 'Sign In' : '登录'}
              </button>
            )}
          </div>
          
          <div className="mt-auto mb-4">
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest shadow-lg uppercase w-full">
              <Heart className="w-5 h-5 fill-current" />
              {locale === Locale.EN ? 'Donate' : '捐款'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
