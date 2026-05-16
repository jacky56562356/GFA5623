import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';

const Footer: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <footer className="bg-gfa-inkBlack text-white pt-4 pb-4 px-6 border-t-[6px] border-t-[#C9A84C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)"}}></div>
      <div className="container-gfa grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-3 relative z-10">
        
        {/* Brand & Mission */}
        <div className="space-y-3 lg:border-r lg:border-white/10 lg:pr-8">
          <div className="flex items-center gap-4">
            <img fetchpriority="high"  src="https://wsrv.nl/?url=i.ibb.co%2FmFgDBtBp%2F1.png&w=1200&output=webp" alt="GFA Logo" className="h-20 w-auto object-contain"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter font-serif leading-none">{/* [中文内容待填入] */} GFA </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold mt-1">{/* [中文内容待填入] */} Global Film Alliance </span>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            {isEn 
              ? "Opening Doors for Filmmakers." 
              : "为每一位电影人打开那扇门。"}
          </p>
          <div className="flex gap-4">
            {/* Social Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="Twitter">{/* [待补充真实的社交媒体链接] */}X<span className="sr-only">{/* [中文内容待填入] */} Twitter </span></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="LinkedIn">{/* [待补充真实的社交媒体链接] */}In<span className="sr-only">{/* [中文内容待填入] */} LinkedIn </span></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="Instagram">{/* [待补充真实的社交媒体链接] */}Ig<span className="sr-only">{/* [中文内容待填入] */} Instagram </span></a>
          </div>
        </div>

        {/* Footer Links replaced by Top Bar */}
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-4 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span> {isEn ? "Platform" : "平台建设"}
          </h3>
          <div className="space-y-4 text-sm text-gray-300 font-light">
            <Link to="/about" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'About Us' : '关于我们'}</Link>
            <Link to="/programs" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Programs & Initiatives' : '项目与倡议'}</Link>
            <Link to="/membership" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Membership' : '平台与会员'}</Link>
            <Link to="/governance" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Governance' : '治理架构'}</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-4 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span> {isEn ? "Contact" : "联系我们"}
          </h3>
          <div className="space-y-4 text-sm text-gray-300 font-light">
            <p className="flex flex-col gap-1">
              <span className="text-gfa-gold text-xs font-bold uppercase tracking-wider">{/* [中文内容待填入] */} Email </span>
              <a href="mailto:jacky@gfafilm.org" className="hover:text-white transition-colors">{/* [中文内容待填入] */} jacky@gfafilm.org </a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-gfa-gold text-xs font-bold uppercase tracking-wider">{/* [中文内容待填入] */} Phone </span>
              <a href="tel:6266778017" className="hover:text-white transition-colors">626-677-8017</a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-gfa-gold text-xs font-bold uppercase tracking-wider">{/* [中文内容待填入] */} Address </span>
              <span>17800 Castleton St, Suite 173<br/>City of Industry, CA 91748</span>
            </p>
          </div>
        </div>

        {/* Legal & Nonprofit Status */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-3xl text-sm text-gray-300 font-light backdrop-blur-sm flex flex-col justify-center">
           <img loading="lazy" src="https://wsrv.nl/?url=i.ibb.co%2FmFgDBtBp%2F1.png&w=1200&output=webp" alt="Nonprofit" className="h-12 w-auto object-contain object-left mb-3 opacity-50 grayscale mix-blend-screen"  width="1200" height="800"  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/eeeeee/999999?text=Image+Not+Found"; }} />
           <p className="mb-4 text-white/90 font-medium">{/* [中文内容待填入] */} Global Film Alliance, Inc. </p>
           <p className="mb-2">{/* [中文内容待填入] */} A registered 501(c)(3) nonprofit organization in California. </p>
           <p className="font-mono text-xs bg-black/30 p-2 rounded text-center mb-0 mt-4 border border-white/5">EIN: 33-4817276</p>
        </div>
      </div>

      <div className="container-gfa pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40 font-light">
        <p>&copy; {new Date().getFullYear()} Global Film Alliance, Inc. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <Link to="/youth-protection" className="hover:text-[#C9A84C] font-bold text-gray-300 transition-colors uppercase tracking-widest">{isEn ? 'Youth Protection' : '青少年安全与保护'}</Link>
          <Link to="/policy/privacy" className="hover:text-white transition-colors">{isEn ? 'Privacy Policy' : '隐私政策'}</Link>
          <Link to="/policy/terms" className="hover:text-white transition-colors">{isEn ? 'Terms of Service' : '服务条款'}</Link>
          <Link to="/policy/consent" className="hover:text-white transition-colors">{isEn ? 'Cookie Policy' : 'Cookie政策'}</Link>
          <span className="text-gray-400">|</span>
          <Link to="/admin" className="hover:text-[#C9A84C] transition-colors">{isEn ? 'Admin' : '系统管理'}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
