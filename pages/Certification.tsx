
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const CertificationPage: React.FC = () => {
  const { t } = useLocale();

  const tiers = [
    { 
      name: t.locale === 'zh' ? 'Verified (基础认证)' : 'Verified (Baseline)', 
      desc: t.locale === 'zh' ? '材料审核 + 合规核验通过。适用于个人人才及初级项目。' : 'Identity vetting + baseline compliance check. For individuals and entry projects.',
      status: 'Open'
    },
    { 
      name: t.locale === 'zh' ? 'Certified (标准认证)' : 'Certified (Standard)', 
      desc: t.locale === 'zh' ? '深度访谈 + 流程合规审计。适用于经纪公司与培训中心。' : 'Interviews + standard workflow audit. For agencies and training centers.', 
      highlight: true,
      status: 'Open'
    },
    { 
      name: t.locale === 'zh' ? 'Accredited (高级认证)' : 'Accredited (Premium)', 
      desc: t.locale === 'zh' ? '现场审计 + 风险评级 + 年度复审。适用于制片厂与大型赛事。' : 'On-site audit + risk rating + annual review. For studios and festivals.',
      status: 'Invited'
    },
  ];

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={t.certification.title} 
        subtitle={t.certification.subtitle} 
      />
      
      {/* THE IRON RULES SECTION */}
      <div className="mb-32">
        <h3 className="text-3xl font-black text-center mb-16 uppercase tracking-[0.2em] gold-gradient">
          {t.certification.valueTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.certification.valueBullets.map((v, i) => (
            <div key={i} className="bg-gfa-darkGray p-10 border border-gfa-gold/20 flex flex-col h-full group hover:border-gfa-gold transition-all">
              <div className="text-gfa-gold font-black text-xs mb-6 opacity-40">RULE 0{i+1}</div>
              <h4 className="text-white font-black uppercase text-sm tracking-widest mb-4 border-b border-white/5 pb-2">
                {v.split('：')[0] || v.split(':')[0]}
              </h4>
              <p className="text-gfa-gray text-xs leading-relaxed">{v.split('：')[1] || v.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-gfa-gold pl-6">
            {t.certification.typesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {t.certification.types.map((type, i) => (
              <div key={i} className="bg-gfa-darkGray p-8 border border-white/5 flex items-center justify-between group hover:border-gfa-gold/50 transition-all">
                <span className="text-sm font-bold uppercase tracking-wider text-white">{type}</span>
                <span className="text-gfa-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-gfa-gold pl-6">
            {t.certification.govTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
             {[
              { title: t.nav.certGov.governance, path: '/governance', icon: '⚖️' },
              { title: t.nav.certGov.standards, path: '/standards', icon: '📋' },
              { title: t.nav.certGov.transparency, path: '/transparency', icon: '💰' },
              { title: t.nav.certGov.protection, path: '/protection', icon: '🛡️' }
            ].map((std, i) => (
              <Link key={i} to={std.path} className="bg-gfa-darkGray p-6 border border-white/5 text-center group hover:border-gfa-gold transition-all h-full flex flex-col items-center justify-center">
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{std.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white">{std.title}</div>
              </Link>
            ))}
          </div>

          {/* TIERS */}
          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-l-4 border-gfa-gold pl-6">
            {t.locale === 'zh' ? '认证等级 (Tiers)' : 'Certification Tiers'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-8 border ${tier.highlight ? 'border-gfa-gold bg-gfa-gold/5' : 'border-white/5 bg-gfa-darkGray'} transition-all relative group overflow-hidden`}>
                <div className="flex justify-between items-start mb-4">
                   <h4 className="text-xs font-black uppercase tracking-widest text-white">{tier.name}</h4>
                   <span className="text-[8px] font-black uppercase tracking-widest text-gfa-gold opacity-50">{tier.status}</span>
                </div>
                <p className="text-[10px] text-gfa-gray uppercase font-bold tracking-widest leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gfa-darkGray p-10 border border-gfa-gold flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden h-fit lg:sticky lg:top-32">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gfa-gold/20 -mr-12 -mt-12 rotate-45"></div>
          <div className="text-6xl mb-8">🛡️</div>
          <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{t.certification.verifyCardTitle}</h3>
          <p className="text-gfa-gray text-sm mb-10 leading-relaxed">
            {t.certification.verifyCardBody}
          </p>
          <Link to="/verify" className="w-full bg-gfa-gold text-gfa-black py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            {t.nav.verify}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 pt-32">
        <h3 className="text-3xl font-black text-center mb-20 uppercase tracking-[0.2em]">{t.certification.processTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {t.certification.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full border border-gfa-gold/30 text-gfa-gold flex items-center justify-center font-black text-xs mb-4 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">
                {i + 1}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white leading-tight px-2">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <button className="bg-gfa-gold text-gfa-black px-16 py-6 font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            {t.certification.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
