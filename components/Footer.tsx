import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';

const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-gfa-inkBlack text-white pt-24 pb-12 px-6 border-t-[6px] border-t-gfa-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)"}}></div>
      <div className="container-gfa grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter font-serif leading-none">GFA</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-1">Alliance</span>
            </div>
          </div>
          <p className="text-[12px] text-white/40 leading-relaxed font-medium max-w-xs">{t.footer.desc}</p>
          <div className="flex gap-4">
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
            <Link to="/login" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{t.nav.memberPortal}</Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 border border-white/10 rounded-card text-[12px] text-white/40 italic leading-relaxed backdrop-blur-sm">
          GFA is an independent non-profit industry service organization.
          <span className="block mt-4 text-gfa-gold/60 pt-4 border-t border-white/5 font-bold">{t.disclaimer.heroWarning}</span>
        </div>
      </div>
      <div className="container-gfa pt-8 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
        {t.footer.copyright.replace("{year}", "2025")}
      </div>
    </footer>
  );
};

export default Footer;
