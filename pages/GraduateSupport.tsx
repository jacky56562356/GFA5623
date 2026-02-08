
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const GraduateSupport = () => {
  const { t } = useLocale();
  const cap = t.careerAccess;
  const pathways = t.graduatePathways || [];

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        {/* Header */}
        <header className="mb-24 text-center">
          <span className="gold-badge mb-8">Professional Industry Program</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8">{cap.title}</h1>
          <p className="text-lg text-gfa-slate max-w-3xl mx-auto leading-loose italic opacity-70 border-y border-gfa-border py-12 font-medium">
            {cap.subtitle}
          </p>
        </header>

        {/* Intro Block */}
        <section className="mb-32 max-w-4xl mx-auto py-0">
          <div className="bg-white border border-gfa-border p-12 md:p-16 rounded-card shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gfa-inkBlack"></div>
            <p className="text-[17px] text-gfa-inkBlack leading-relaxed font-bold italic opacity-80 uppercase tracking-wide">
              "{cap.intro}"
            </p>
          </div>
        </section>

        {/* Program Pillars */}
        <section className="mb-32 py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(cap.pillars).map(([key, pillar]: [string, any]) => (
              <div key={key} className="card-gfa group">
                <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all opacity-30 group-hover:opacity-100">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-gfa-inkBlack mb-5 font-serif border-l-4 border-gfa-gold pl-5">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-gfa-slate leading-relaxed font-medium opacity-80">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white border border-gfa-border rounded-card p-12 md:p-24 shadow-sm py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">Supported Pathways</h2>
              <div className="space-y-10">
                {pathways.map((item: any) => (
                  <div key={item.id} className="group">
                    <span className="text-[10px] font-black text-gfa-gold uppercase tracking-[0.4em] mb-3 block opacity-50">Step {item.id}</span>
                    <h4 className="text-lg font-bold text-gfa-inkBlack mb-3 font-serif">{item.t}</h4>
                    <p className="text-sm text-gfa-slate opacity-70 leading-relaxed font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gfa-warmWhite p-12 md:p-16 border border-gfa-border rounded-card shadow-inner">
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-12 border-b border-gfa-border pb-6">
                {cap.inquiryTitle}
              </h3>
              <form className="space-y-8" onSubmit={e => { e.preventDefault(); alert("Inquiry Received. Our team will support your request within 48 hours."); }}>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gfa-slate block">Full Identity</label>
                  <input type="text" required className="w-full bg-white border border-gfa-border p-4 rounded-btn text-sm font-medium focus:border-gfa-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gfa-slate block">Institution</label>
                  <input type="text" required className="w-full bg-white border border-gfa-border p-4 rounded-btn text-sm font-medium focus:border-gfa-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gfa-slate block">Program Pathway</label>
                  <select className="w-full bg-white border border-gfa-border p-4 rounded-btn text-sm font-medium focus:border-gfa-gold outline-none transition-all cursor-pointer">
                    <option>Director Support Fund</option>
                    <option>Project Matchmaking</option>
                    <option>IMDb Verification</option>
                    <option>Network Access</option>
                  </select>
                </div>
                <button className="btn-primary w-full shadow-lg">
                  {cap.cta}
                </button>
              </form>
              <p className="mt-8 text-[11px] text-gfa-slate font-bold uppercase tracking-widest text-center italic opacity-40">
                {cap.inquiryNote}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-32 pt-16 border-t border-gfa-border text-center">
           <p className="text-[11px] text-gfa-slate uppercase tracking-[0.5em] font-bold opacity-30 italic">
              Non-Profit Industry Service • Est. 2024 • Supportive Excellence
           </p>
        </div>
      </div>
    </div>
  );
};

export default GraduateSupport;
