import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';

const CertificationPage: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="py-grid-16 max-w-6xl mx-auto px-4">
      <SectionHeading 
        title={t.certification.title} 
        subtitle={t.certification.subtitle} 
      />
      
      {/* 1. LEVELS OF CERTIFICATION */}
      <div className="mb-grid-20">
        <h3 className="text-xl font-black text-center mb-grid-10 uppercase tracking-[0.15em] gold font-montserrat">
          {t.certification.typesTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-6">
          {t.certification.types.map((type, i) => (
            <div key={i} className={`glass-panel ${i === 1 ? 'border-gfa-gold shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105' : 'border-white/10'} transition-all hover:-translate-y-1`}>
              <div className="text-gfa-gold font-black micro-text mb-grid-4 opacity-40">LEVEL 0{i+1}</div>
              <h4 className="text-white font-black uppercase small-text tracking-widest leading-relaxed mb-grid-3">
                {type.split('：')[0] || type.split(':')[0]}
              </h4>
              <p className="text-gfa-gray micro-text uppercase font-bold tracking-widest opacity-60">
                {type.split('：')[1] || type.split(':')[1] || ''}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. UNIVERSAL RED LINES */}
      <div className="mb-grid-20 bg-red-500/5 border border-red-500/20 p-grid-10 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-grid-8 opacity-5">
          <svg className="w-48 h-48 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        </div>
        <h3 className="text-xl font-black text-red-500 uppercase tracking-[0.15em] mb-grid-8 font-montserrat">
          {t.certification.valueTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-6 relative z-10">
          {t.certification.valueBullets.map((v, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-red-500 font-bold">✕</span>
              <p className="text-red-200/60 micro-text font-black uppercase tracking-widest leading-relaxed">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. ADMISSION SOP */}
      <div className="border-t border-white/10 pt-grid-16">
        <h3 className="text-2xl font-black text-center mb-grid-12 uppercase tracking-[0.15em] font-montserrat">{t.certification.processTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-grid-3 text-center">
          {t.certification.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-10 h-10 rounded-full border border-gfa-gold/20 text-gfa-gold flex items-center justify-center font-black micro-text mb-grid-3 group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">
                {i + 1}
              </div>
              <span className="micro-text font-black uppercase tracking-widest text-white/70 leading-tight px-1">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-grid-16 text-center">
          <Link to="/contact" className="btn-gold uppercase micro-text tracking-[0.2em] font-montserrat">
            {t.certification.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;