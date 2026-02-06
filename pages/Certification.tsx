
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Certification = () => {
  const { t } = useLocale();
  const cert = t.certification;
  const framework = t.home.certFramework;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center max-w-5xl mx-auto">
          <span className="text-gfa-gold font-black uppercase tracking-[0.6em] text-[10px] mb-10 block opacity-60">Professional Industry Standard</span>
          <h1 className="mb-12 gold uppercase text-6xl md:text-8xl leading-tight tracking-tighter">{cert.title}</h1>
          <p className="text-xl md:text-2xl text-gfa-gray uppercase tracking-[0.3em] font-light leading-loose border-y border-white/10 py-12">
            {cert.intro}
          </p>
        </header>

        {/* Tiers Section */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {framework.levels.map((lvl: any, i: number) => (
              <div key={i} className="bg-gfa-darkGray/40 p-16 border border-white/10 group hover:border-gfa-gold/40 transition-all flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-gfa-gold/5 font-black text-6xl">0{i+1}</div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8 border-b border-white/5 pb-6 group-hover:text-gfa-gold transition-colors">{lvl.title}</h3>
                <p className="text-xs text-gfa-gray leading-loose uppercase tracking-[0.2em] opacity-60 flex-grow">{lvl.body}</p>
                <div className="mt-12 text-[9px] font-black uppercase tracking-[0.4em] text-gfa-gold">Verification Level Required</div>
              </div>
            ))}
          </div>
        </section>

        {/* Verification Standards */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-[0.4em] gold mb-12">Core Verification Pillars</h2>
            <div className="space-y-12">
              {cert.standards.map((std: any, i: number) => (
                <div key={i} className="flex gap-10 group">
                  <div className="w-12 h-12 rounded-full border border-gfa-gold/30 flex items-center justify-center text-gfa-gold font-black group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">0{i+1}</div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest mb-4">{std.title}</h4>
                    <p className="text-xs text-gfa-gray leading-loose uppercase tracking-widest opacity-60 italic">{std.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gfa-darkGray p-16 border border-white/10 shadow-3xl">
            <h3 className="text-2xl font-black uppercase tracking-widest gold mb-12">{cert.processTitle}</h3>
            <div className="space-y-12 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10"></div>
              {cert.process.map((step: any, i: number) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gfa-black border border-gfa-gold/40 flex items-center justify-center text-gfa-gold text-xs font-black">{i+1}</div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">{step.s}</h5>
                    <p className="text-[10px] text-gfa-gray uppercase tracking-widest opacity-50 font-bold">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Application */}
        <section className="bg-white/5 p-24 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gfa-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
          <h2 className="text-4xl font-black uppercase tracking-[0.3em] gold mb-12 leading-tight">Apply for Institutional Certification</h2>
          <p className="text-sm text-gfa-gray uppercase tracking-widest mb-16 max-w-3xl mx-auto leading-loose opacity-60">
             GFA conducts periodic reviews and on-site documentation audits to ensure ongoing adherence to industry standards. Application fees are strictly applied to operational audit expenses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button className="btn-gold px-20 py-7">Initiate Audit Application</button>
            <button className="border border-white/20 text-white px-20 py-7 font-black uppercase text-[11px] tracking-widest hover:bg-white/5 transition-all">Download Standards PDF</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certification;
