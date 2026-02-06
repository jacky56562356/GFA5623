
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Certification = () => {
  const { t } = useLocale();
  const cert = t.certification;
  const framework = t.home.certFramework;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-5xl mx-auto">
          <span className="text-gfa-gold font-black uppercase tracking-[0.5em] text-[9px] mb-8 block opacity-60">Professional Industry Standard</span>
          <h1 className="mb-10 gold uppercase text-2xl md:text-4xl leading-tight tracking-tighter">{cert.title}</h1>
          <p className="text-sm md:text-base text-gfa-gray uppercase tracking-[0.2em] font-light leading-loose border-y border-white/10 py-10">
            {cert.intro}
          </p>
        </header>

        {/* Tiers Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {framework.levels.map((lvl: any, i: number) => (
              <div key={i} className="bg-gfa-darkGray/40 p-12 border border-white/10 group hover:border-gfa-gold/40 transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-gfa-gold/5 font-black text-5xl">0{i+1}</div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 border-b border-white/5 pb-4 group-hover:text-gfa-gold transition-colors">{lvl.title}</h3>
                <p className="text-[11px] text-gfa-gray leading-loose uppercase tracking-[0.15em] opacity-60 flex-grow">{lvl.body}</p>
                <div className="mt-10 text-[8px] font-black uppercase tracking-[0.4em] text-gfa-gold">Verification Level Required</div>
              </div>
            ))}
          </div>
        </section>

        {/* Verification Standards */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] gold mb-10">Core Verification Pillars</h2>
            <div className="space-y-10">
              {cert.standards.map((std: any, i: number) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-10 h-10 rounded-full border border-gfa-gold/30 flex items-center justify-center text-gfa-gold font-black text-xs group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">0{i+1}</div>
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-widest mb-3">{std.title}</h4>
                    <p className="text-[11px] text-gfa-gray leading-loose uppercase tracking-widest opacity-60 italic">{std.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gfa-darkGray p-12 border border-white/10 shadow-3xl">
            <h3 className="text-xl font-black uppercase tracking-widest gold mb-10">{cert.processTitle}</h3>
            <div className="space-y-10 relative">
              <div className="absolute left-[20px] top-4 bottom-4 w-px bg-white/10"></div>
              {cert.process.map((step: any, i: number) => (
                <div key={i} className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gfa-black border border-gfa-gold/40 flex items-center justify-center text-gfa-gold text-[10px] font-black">{i+1}</div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-1">{step.s}</h5>
                    <p className="text-[9px] text-gfa-gray uppercase tracking-widest opacity-50 font-bold">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Application */}
        <section className="bg-white/5 p-20 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] gold mb-10 leading-tight">Apply for Institutional Certification</h2>
          <p className="text-xs text-gfa-gray uppercase tracking-widest mb-12 max-w-2xl mx-auto leading-loose opacity-60">
             GFA conducts periodic reviews and on-site documentation audits to ensure ongoing adherence to industry standards. Application fees are strictly applied to operational audit expenses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-gold px-12 py-5 text-[11px]">Initiate Audit Application</button>
            <button className="border border-white/20 text-white px-12 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all">Download Standards PDF</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
