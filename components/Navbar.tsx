import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import { Heart, ChevronDown, Globe, Shield, Menu, X } from 'lucide-react';

const LANGUAGES = [
  { locale: Locale.EN, label: 'English', short: 'EN' },
  { locale: Locale.ZH, label: '中文', short: '中文' },
  { locale: Locale.ES, label: 'Español', short: 'ES' },
  { locale: Locale.KO, label: '한국어', short: 'KO' },
  { locale: Locale.FR, label: 'Français', short: 'FR' },
  { locale: Locale.IT, label: 'Italiano', short: 'IT' },
];

interface DropdownItem {
  label: string;
  labelZh: string;
  path: string;
  desc: string;
  descZh: string;
}

interface NavSection {
  label: string;
  labelZh: string;
  items: DropdownItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Overview',
    labelZh: '概览',
    items: [
      { label: 'About GFA', labelZh: '关于GFA', path: '/about', desc: 'Our mission, team & history', descZh: '使命、团队与历史' },
      { label: 'Impact', labelZh: '影响力', path: '/impact', desc: 'Data, stories & outcomes', descZh: '数据、故事与成果' },
      { label: 'News', labelZh: '新闻', path: '/news', desc: 'Latest updates & press', descZh: '最新动态与媒体报道' },
      { label: 'Partners', labelZh: '合作伙伴', path: '/about', desc: 'Sponsors & collaborators', descZh: '赞助商与合作方' },
    ],
  },
  {
    label: 'Programs',
    labelZh: '计划',
    items: [
      { label: 'Filmmaker Support', labelZh: '电影人扶持', path: '/filmmaker-support', desc: 'Equipment, mentors & distribution', descZh: '设备、导师与发行' },
      { label: 'Youth Programs', labelZh: '青少年计划', path: '/youth-programs', desc: 'Ages 6–17 · Camps & scholarships', descZh: '6-17岁·夏令营与奖学金' },
      { label: 'Family Guide', labelZh: '家长指南', path: '/family-guide', desc: 'Career planning for parents', descZh: '为家长规划艺术职业路径' },
      { label: 'Graduate Support', labelZh: '毕业生支持', path: '/filmmaker-support', desc: 'Breaking into the industry', descZh: '帮助毕业生进入行业' },
    ],
  },
  {
    label: 'Events',
    labelZh: '赛事',
    items: [
      { label: 'Golden Feather Awards', labelZh: '金羽奖', path: '/awards', desc: 'Annual Hollywood ceremony', descZh: '年度好莱坞颁奖典礼' },
      { label: 'Talent Competition', labelZh: '才艺大赛', path: '/competition', desc: 'US–China youth film contest', descZh: '中美青少年电影大赛' },
      { label: 'Get Involved', labelZh: '参与我们', path: '/get-involved', desc: 'Volunteer, sponsor, mentor', descZh: '志愿者、赞助商、导师' },
      { label: 'Donate', labelZh: '捐款', path: '/donate', desc: 'Support filmmakers', descZh: '支持电影人' },
    ],
  },
  {
    label: 'Standards',
    labelZh: '标准',
    items: [
      { label: 'Youth Protection', labelZh: '青少年保护', path: '/youth-protection', desc: 'On-set safety & safeguarding', descZh: '片场安全与保护' },
      { label: 'Privacy Policy', labelZh: '隐私政策', path: '/policy/privacy', desc: 'How we handle your data', descZh: '数据处理方式' },
      { label: 'Terms of Use', labelZh: '使用条款', path: '/policy/terms', desc: 'Site terms and conditions', descZh: '网站使用条款' },
      { label: 'Content Policy', labelZh: '内容政策', path: '/policy/content', desc: 'Submission guidelines', descZh: '内容提交准则' },
    ],
  },
];

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isZh = locale === Locale.ZH;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const currentLang = LANGUAGES.find(l => l.locale === locale) || LANGUAGES[0];

  const donateLabel = isZh ? '捐款' : locale === Locale.ES ? 'Donar' : locale === Locale.KO ? '후원' : locale === Locale.FR ? 'Faire un Don' : locale === Locale.IT ? 'Dona' : 'Donate';
  const safeguardLabel = isZh ? '安全保护' : 'Safeguarding';
  const contactLabel = isZh ? '联系我们' : 'Contact Us';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_#E6E7EA,0_4px_16px_-4px_rgba(0,0,0,0.08)]'
            : 'bg-white border-b border-[#E6E7EA]'
        }`}
      >
        <div className="container-gfa flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-8 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-black tracking-tighter text-[#0B0B0C] font-serif">GFA</span>
              <span className="text-[7px] font-bold tracking-[0.18em] text-[#C9A84C] uppercase">Global Film Alliance</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold rounded-md transition-colors ${
                    activeDropdown === section.label
                      ? 'text-[#0B0B0C] bg-gray-50'
                      : 'text-[#444] hover:text-[#0B0B0C] hover:bg-gray-50'
                  }`}
                >
                  {isZh ? section.labelZh : section.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === section.label ? 'rotate-180 text-[#C9A84C]' : 'text-gray-400'}`} />
                </button>

                {activeDropdown === section.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white border border-[#E6E7EA] rounded-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-1.5">
                      {section.items.map((item) => (
                        <Link
                          key={item.path + item.label}
                          to={item.path}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 group/item transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="text-[13px] font-semibold text-[#0B0B0C] group-hover/item:text-[#C9A84C] transition-colors leading-snug">
                              {isZh ? item.labelZh : item.label}
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                              {isZh ? item.descZh : item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="px-3.5 py-2 text-[13px] font-semibold text-[#444] hover:text-[#0B0B0C] hover:bg-gray-50 rounded-md transition-colors"
            >
              {contactLabel}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#444] hover:text-[#0B0B0C] hover:bg-gray-50 rounded-md transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-gray-400" />
                <span>{currentLang.short}</span>
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-150 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-[#E6E7EA] rounded-xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] overflow-hidden">
                  <div className="p-1.5">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.locale}
                        onClick={() => { setLocale(lang.locale); setLangOpen(false); }}
                        className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                          locale === lang.locale
                            ? 'text-[#C9A84C] bg-amber-50'
                            : 'text-[#444] hover:bg-gray-50 hover:text-[#0B0B0C]'
                        }`}
                      >
                        {lang.label}
                        {locale === lang.locale && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Safeguarding */}
            <Link
              to="/youth-protection"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0B0B0C] text-white text-[12px] font-bold tracking-wide rounded-lg hover:bg-[#222] transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              {safeguardLabel}
            </Link>

            {/* Donate */}
            <Link
              to="/donate"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#C9A84C] text-white text-[12px] font-bold tracking-wide rounded-lg hover:bg-[#b09241] transition-all hover:-translate-y-px shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              {donateLabel}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#0B0B0C] hover:text-[#C9A84C] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[95] transition-all duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full overflow-y-auto pt-16">
          <div className="px-6 py-6 border-b border-[#E6E7EA]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> Language
            </p>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.locale}
                  onClick={() => setLocale(lang.locale)}
                  className={`py-2 rounded-lg text-sm font-semibold transition-colors border ${
                    locale === lang.locale
                      ? 'bg-[#C9A84C] text-white border-[#C9A84C]'
                      : 'border-[#E6E7EA] text-[#444] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 flex flex-col gap-0.5">
            {NAV_SECTIONS.map((section) => (
              <div key={section.label}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-4 mb-2">
                  {isZh ? section.labelZh : section.label}
                </p>
                {section.items.map((item) => (
                  <Link
                    key={item.path + item.label}
                    to={item.path}
                    className="flex items-center gap-2 py-2.5 text-[15px] font-semibold text-[#0B0B0C] hover:text-[#C9A84C] transition-colors border-b border-[#E6E7EA]/50 last:border-0"
                  >
                    {isZh ? item.labelZh : item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2 py-2.5 text-[15px] font-semibold text-[#0B0B0C] hover:text-[#C9A84C] transition-colors"
            >
              {contactLabel}
            </Link>
          </div>

          <div className="px-6 pb-10 mt-auto flex flex-col gap-3">
            <Link
              to="/youth-protection"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0B0B0C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide"
            >
              <Shield className="w-4 h-4" />
              {safeguardLabel}
            </Link>
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide"
            >
              <Heart className="w-4 h-4 fill-current" />
              {donateLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
