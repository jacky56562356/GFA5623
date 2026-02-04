import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const CertificationPage: React.FC = () => {
  const { t } = useLocale();

  const tiers = [
    { 
      name: t.locale === 'zh' ? 'Verified (基础认证)' : 'Verified (Baseline)', 
      desc: t.locale === 'zh' ? '材料审核 + 合规核验通过。适用于个人人才及初级项目。' : 'Identity vetting + baseline compliance check.',
      status: 'Open'
    },
    { 
      name: t.locale === 'zh' ? 'Certified (标准认证)' : 'Certified (Standard)', 
      desc: t.locale === 'zh' ? '深度访谈 + 流程合规审计。适用于经纪公司与培训中心。' : 'Interviews + standard workflow audit.', 
      highlight: true,
      status: 'Open'
    },
    { 
      name: t.locale === 'zh' ? 'Accredited (高级认证)' : 'Accredited (Premium)', 
      desc: t.locale === 'zh' ? '现场审计 + 风险评级 + 年度复审。' : 'On-site audit + annual review.',
      status: 'Invited'
    },
  ];

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <SectionHeading 
        title={t.certification.title} 
        subtitle={t.certification.subtitle} 
      />
      
      {/* THE IRON RULES SECTION */}
      <div className="mb-20">
        <h3 className="text-xl font-black text-center mb-10 uppercase tracking-[0.15em] gold-gradient">
          {t.certification.valueTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.certification.valueBullets.map((v, i) => (
            <div key={i} className="bg-gfa-darkGray p-8 border border-gfa-gold/15 flex flex-col h-full group hover:border-gfa-gold/40 transition-all rounded-md">
              <div className="text-gfa-gold font-black text-[9px] mb-4 opacity-30">RULE 0{i+1}</div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-3 border-b border-white/5 pb-2">
                {v.split('：')[0] || v.split(':')[0]}
              </h4>
              <p className="text-gfa-gray text-[10px] leading-relaxed opacity-70">{v.split('：')[1] || v.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-black mb-6 uppercase tracking-widest border-l-2 border-gfa-gold pl-4">
            {t.certification.typesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
            {t.certification.types.map((type, i) => (
              <div key={i} className="bg-gfa-darkGray/50 p-6 border border-white/5 flex items-center justify-between group hover:border-gfa-gold/30 transition-all rounded-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">{type}</span>
                <span className="text-gfa-gold opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-black mb-6 uppercase tracking-widest border-l-2 border-gfa-gold pl-4">
            {t.certification.govTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
             {[
              { title: t.nav.certGov.governance, path: '/governance', icon: '⚖️' },
              { title: t.nav.certGov.standards, path: '/standards', icon: '📋' },
              { title: t.nav.certGov.transparency, path: '/transparency', icon: '💰' },
              { title: t.nav.certGov.protection, path: '/protection', icon: '🛡️' }
            ].map((std, i) => (
              <Link key={i} to={std.path} className="bg-gfa-darkGray/50 p-5 border border-white/5 text-center group hover:border-gfa-gold transition-all h-full flex flex-col items-center justify-center rounded-md">
                <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all">{std.icon}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/70">{std.title}</div>
              </Link>
            ))}
          </div>

          {/* TIERS */}
          <h3 className="text-lg font-black mb-6 uppercase tracking-widest border-l-2 border-gfa-gold pl-4">
            {t.locale === 'zh' ? '认证等级 (Tiers)' : 'Certification Tiers'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {tiers.map((tier, i) => (
              <div key={i} className={`p-6 border ${tier.highlight ? 'border-gfa-gold/40 bg-gfa-gold/5' : 'border-white/5 bg-gfa-darkGray/50'} transition-all relative group overflow-hidden rounded-md`}>
                <div className="flex justify-between items-start mb-3">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-white">{tier.name}</h4>
                   <span className="text-[7px] font-black uppercase tracking-widest text-gfa-gold opacity-40">{tier.status}</span>
                </div>
                <p className="text-[9px] text-gfa-gray uppercase font-bold tracking-widest leading-relaxed opacity-60">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gfa-darkGray p-8 border border-gfa-gold/40 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden h-fit lg:sticky lg:top-24 rounded-lg">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gfa-gold/10 -mr-8 -mt-8 rotate-45"></div>
          <div className="text-4xl mb-6">🛡️</div>
          <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{t.certification.verifyCardTitle}</h3>
          <p className="text-gfa-gray text-xs mb-8 leading-relaxed opacity-70">
            {t.certification.verifyCardBody}
          </p>
          <Link to="/verify" className="w-full bg-gfa-gold text-gfa-black py-3 font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all rounded-md">
            {t.nav.verify}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 pt-16">
        <h3 className="text-2xl font-black text-center mb-12 uppercase tracking-[0.15em]">{t.certification.processTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
          {t.certification.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-10 h-10 rounded-full border border-gfa-gold/20 text-gfa-gold flex items-center justify-center font-black text-[10px] mb-3 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">
                {i + 1}
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/70 leading-tight px-1">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-gfa-gold text-gfa-black px-12 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-lg rounded-md">
            {t.certification.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;