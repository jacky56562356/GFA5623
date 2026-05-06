import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';

function t(locale: Locale, en: string, zh: string, es: string, ko: string, fr: string, it: string): string {
  switch (locale) {
    case Locale.ZH: return zh;
    case Locale.ES: return es;
    case Locale.KO: return ko;
    case Locale.FR: return fr;
    case Locale.IT: return it;
    default: return en;
  }
}

const Footer: React.FC = () => {
  const { locale } = useLocale();

  const label = (en: string, zh: string, es: string, ko: string, fr: string, it: string) =>
    t(locale, en, zh, es, ko, fr, it);

  return (
    <footer className="bg-gfa-inkBlack text-white pt-16 pb-8 px-6 border-t-[6px] border-t-[#C9A84C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)"}}></div>
      <div className="container-gfa grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 relative z-10">

        {/* Brand & Mission */}
        <div className="space-y-6 lg:border-r lg:border-white/10 lg:pr-8">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA Logo" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter font-serif leading-none">GFA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold mt-1">Global Film Alliance</span>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed font-light">
            {label(
              "Opening Doors for Filmmakers.",
              "为每一位电影人打开那扇门。",
              "Abriendo puertas para cineastas.",
              "영화인을 위한 문을 열다.",
              "Ouvrir des Portes aux Cinéastes.",
              "Aprire le Porte ai Cineasti."
            )}
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="X (Twitter)">X</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="LinkedIn">In</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="Instagram">Ig</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-8 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span>
            {label("Quick Links", "快捷链接", "Enlaces Rápidos", "빠른 링크", "Liens Rapides", "Link Rapidi")}
          </h4>
          <div className="space-y-4 text-sm text-white/70 font-light">
            <Link to="/about" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('About', '关于我们', 'Nosotros', '소개', 'À Propos', 'Chi Siamo')}
            </Link>
            <Link to="/filmmaker-support" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Filmmaker Support', '电影人支持', 'Apoyo a Cineastas', '영화인 지원', 'Soutien aux Cinéastes', 'Supporto Cineasti')}
            </Link>
            <Link to="/youth-programs" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Youth Programs', '青少年计划', 'Programas Juveniles', '청소년 프로그램', 'Programmes Jeunesse', 'Programmi Giovani')}
            </Link>
            <Link to="/family-guide" className="block hover:text-[#C9A84C] transition-colors hover:translate-x-1 duration-300">
              {label('Family Guide', '家长指南', 'Guía Familiar', '가족 가이드', 'Guide Familial', 'Guida Familiare')}
            </Link>
            <Link to="/awards" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Golden Feather Awards', '金羽奖', 'Premios Golden Feather', '골든 페더 시상식', 'Prix Golden Feather', 'Premi Golden Feather')}
            </Link>
            <Link to="/competition" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Global Competition', '全球才艺大赛', 'Competencia Global', '글로벌 대회', 'Compétition Mondiale', 'Competizione Globale')}
            </Link>
            <Link to="/impact" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Impact', '影响力', 'Impacto', '영향력', 'Impact', 'Impatto')}
            </Link>
            <Link to="/news" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('News & Media', '新闻与媒体', 'Noticias y Medios', '뉴스 & 미디어', 'Actualités et Médias', 'Notizie e Media')}
            </Link>
            <Link to="/get-involved" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Get Involved', '参与我们', 'Involúcrate', '참여하기', 'S\'Impliquer', 'Partecipa')}
            </Link>
            <Link to="/donate" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
              {label('Donate', '捐款', 'Donar', '후원', 'Faire un Don', 'Dona')}
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-8 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span>
            {label("Contact", "联系我们", "Contacto", "연락처", "Contact", "Contatto")}
          </h4>
          <div className="space-y-4 text-sm text-white/70 font-light">
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">Email</span>
              <a href="mailto:jacky@gfafilm.org" className="hover:text-white transition-colors">jacky@gfafilm.org</a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">Phone</span>
              <a href="tel:6266778017" className="hover:text-white transition-colors">626-677-8017</a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">
                {label("Address", "地址", "Dirección", "주소", "Adresse", "Indirizzo")}
              </span>
              <span>17800 Castleton St, Suite 173<br/>City of Industry, CA 91748</span>
            </p>
          </div>

          {/* Privacy & Legal Links */}
          <div className="mt-8">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-4 flex items-center gap-3">
              <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span>
              {label("Legal", "法律", "Legal", "법률", "Légal", "Legale")}
            </h4>
            <div className="space-y-3 text-sm text-white/70 font-light">
              <Link to="/policy/privacy" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
                {label('Privacy Policy', '隐私政策', 'Política de Privacidad', '개인정보 처리방침', 'Politique de Confidentialité', 'Informativa sulla Privacy')}
              </Link>
              <Link to="/policy/terms" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">
                {label('Terms of Service', '服务条款', 'Términos de Servicio', '서비스 약관', 'Conditions d\'Utilisation', 'Termini di Servizio')}
              </Link>
              <Link to="/youth-protection" className="block hover:text-[#C9A84C] transition-colors hover:translate-x-1 duration-300 font-bold text-white/80">
                {label('Youth Protection Policy', '青少年安全与保护', 'Política de Protección Juvenil', '청소년 보호 정책', 'Politique de Protection des Jeunes', 'Politica di Protezione Giovanile')}
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Nonprofit Status */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-3xl text-sm text-white/70 font-light backdrop-blur-sm flex flex-col justify-center">
          <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="Nonprofit" className="h-12 w-auto mb-6 opacity-50 grayscale mix-blend-screen" />
          <p className="mb-4 text-white/90 font-medium">Global Film Alliance, Inc.</p>
          <p className="mb-2">
            {label(
              "A registered 501(c)(3) nonprofit organization in California.",
              "在加利福尼亚州注册的501(c)(3)非营利组织。",
              "Una organización sin fines de lucro 501(c)(3) registrada en California.",
              "캘리포니아에 등록된 501(c)(3) 비영리 단체.",
              "Une organisation à but non lucratif 501(c)(3) enregistrée en Californie.",
              "Un'organizzazione senza scopo di lucro 501(c)(3) registrata in California."
            )}
          </p>
          <p className="font-mono text-xs bg-black/30 p-2 rounded text-center mb-0 mt-4 border border-white/5">EIN: 33-4817276</p>
        </div>
      </div>

      <div className="container-gfa pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light">
        <p>&copy; {new Date().getFullYear()} Global Film Alliance, Inc. {label('All rights reserved.', '版权所有。', 'Todos los derechos reservados.', '모든 권리 보유.', 'Tous droits réservés.', 'Tutti i diritti riservati.')}</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/youth-protection" className="hover:text-[#C9A84C] font-bold text-white/70 transition-colors uppercase tracking-widest">
            {label('Youth Protection', '青少年保护', 'Protección Juvenil', '청소년 보호', 'Protection des Jeunes', 'Protezione Giovanile')}
          </Link>
          <Link to="/policy/privacy" className="hover:text-white transition-colors">
            {label('Privacy Policy', '隐私政策', 'Privacidad', '개인정보', 'Confidentialité', 'Privacy')}
          </Link>
          <Link to="/policy/terms" className="hover:text-white transition-colors">
            {label('Terms', '条款', 'Términos', '약관', 'Conditions', 'Termini')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
