
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const Certification = () => {
  const { t } = useLocale();
  const cert = t.certification;
  const details = t.certificationDetails;
  const ui = details.ui || {
    mainTitle: "Institutional Standards & Professional Recognition",
    protocolsTitle: "Assessment Protocols",
    cycleTitle: "The Certification Cycle",
    levelPrefix: "Recognition Level"
  };

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        {/* Statutory Disclaimer Strip */}
        <div className="mb-16 bg-white border border-gfa-border p-6 md:p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-center" role="alert">
           <div className="w-14 h-14 bg-gfa-gold/10 text-gfa-gold flex items-center justify-center rounded-full shrink-0 text-xl font-serif">!</div>
           <p className="text-[14px] text-gfa-slate font-bold leading-loose italic text-center md:text-left">
             {t.disclaimer.statutory}
           </p>
        </div>

        {/* Document Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">{t.certification.title}</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {ui.mainTitle}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose italic opacity-80 border-y border-gfa-border py-12 font-medium">
            {cert.intro}
          </p>
        </header>

        {/* Level Grid Section */}
        <section className="bg-white border border-gfa-border rounded-card shadow-sm p-12 md:p-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {details.levels.map((lvl: any, i: number) => (
              <div key={i} className="group">
                <div className="text-[10px] font-black text-gfa-gold mb-8 uppercase tracking-[0.4em]">{ui.levelPrefix} 0{i+1}</div>
                <h3 className="text-xl font-bold text-gfa-inkBlack mb-6 font-serif group-hover:text-gfa-gold transition-colors">{lvl.t}</h3>
                <p className="text-[15px] text-gfa-slate leading-relaxed opacity-85">{lvl.d}</p>
                <div className="mt-12 h-0.5 w-12 bg-gfa-border group-hover:bg-gfa-gold group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocol & Vetting */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{ui.protocolsTitle}</h2>
            <div className="space-y-12">
              {details.protocols.map((item: any, i: number) => (
                <div key={i} className="flex gap-10 group">
                  <div className="w-14 h-14 border border-gfa-border rounded-btn flex items-center justify-center font-bold text-gfa-gold group-hover:bg-gfa-gold group-hover:text-white transition-all shadow-sm">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gfa-inkBlack mb-3 font-serif">{item.t}</h4>
                    <p className="text-[15px] text-gfa-slate opacity-80 leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Institutional Process Callout */}
          <div className="bg-gfa-inkBlack text-white p-16 rounded-card shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16"></div>
             <h3 className="text-2xl font-bold font-serif mb-12 text-gfa-gold">{ui.cycleTitle}</h3>
             <div className="space-y-12 border-l border-white/10 pl-10 relative">
                {details.cycle.map((step: any, i: number) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[53px] top-1.5 w-6 h-6 rounded-full bg-gfa-inkBlack border-2 border-gfa-gold"></div>
                    <h5 className="text-[11px] font-black uppercase tracking-widest text-gfa-gold mb-3">{step.s}</h5>
                    <p className="text-[14px] text-white/40 leading-relaxed italic">{step.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="mt-40 bg-white border border-gfa-border rounded-card p-16 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-10 text-gfa-inkBlack">{details.cta.title}</h2>
          <p className="text-gfa-slate mb-16 max-w-2xl mx-auto leading-relaxed text-lg italic font-medium">
            {details.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-primary">{details.cta.inquire}</Link>
            <Link to="/governance" className="btn-secondary">{details.cta.download}</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
