
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';

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
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen relative overflow-hidden">
      <SEO 
        title={cert.title || "Certification Standards"} 
        description={cert.intro || "The GFA provides an objective framework for industry entities to signal their commitment to professional standards."} 
      />

      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gfa-gold/5 rounded-full blur-[150px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gfa-inkBlack/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
      
      <div className="container-gfa relative z-10">
        {/* Statutory Disclaimer Strip */}
        <div className="mb-16 bg-white border border-gfa-border p-6 md:p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-center relative overflow-hidden" role="alert">
           <div className="absolute left-0 top-0 h-full w-1 bg-gfa-gold"></div>
           <div className="w-14 h-14 bg-gfa-gold/10 text-gfa-gold flex items-center justify-center rounded-full shrink-0 text-xl font-serif">!</div>
           <p className="text-[14px] text-gfa-slate font-bold leading-loose italic text-center md:text-left">
             {t.disclaimer.statutory}
           </p>
        </div>

        {/* Document Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8 bg-white/50 backdrop-blur-sm shadow-sm">{t.certification.title}</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {ui.mainTitle}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose italic opacity-80 border-y border-gfa-border py-12 font-medium">
            {cert.intro}
          </p>
        </header>

        {/* Level Grid Section */}
        <section className="bg-white border border-gfa-border rounded-card shadow-lg p-12 md:p-20 mb-32 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {details.levels.map((lvl: any, i: number) => (
              <div key={i} className="group p-6 rounded-lg hover:bg-gfa-warmWhite transition-colors">
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
                <div key={i} className="flex gap-10 group bg-white p-6 rounded-sm border border-transparent hover:border-gfa-border hover:shadow-sm transition-all">
                  <div className="w-14 h-14 border border-gfa-border rounded-btn flex items-center justify-center font-bold text-gfa-gold group-hover:bg-gfa-gold group-hover:text-white transition-all shadow-sm shrink-0">
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
          <div className="bg-gfa-inkBlack text-white p-16 rounded-card shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20"></div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16"></div>
             <h3 className="text-2xl font-bold font-serif mb-12 text-gfa-gold relative z-10">{ui.cycleTitle}</h3>
             <div className="space-y-12 border-l border-white/10 pl-10 relative z-10">
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
        <section className="mt-40 bg-white border border-gfa-border rounded-card p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gfa-warmWhite to-white opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-10 text-gfa-inkBlack">{details.cta.title}</h2>
            <p className="text-gfa-slate mb-16 max-w-2xl mx-auto leading-relaxed text-lg italic font-medium">
              {details.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary shadow-lg">{details.cta.inquire}</Link>
              <Link to="/governance" className="btn-secondary bg-white hover:bg-gfa-inkBlack">{details.cta.download}</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
