
import React from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const ChildSafety = () => {
  const { t } = useLocale();
  const sg = t.safeguarding;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center max-w-5xl mx-auto">
          <span className="text-red-500 font-black uppercase tracking-[0.6em] text-[10px] mb-10 block">Global Safeguarding Standard</span>
          <h1 className="mb-12 gold uppercase text-6xl md:text-8xl leading-tight tracking-tighter">{sg.title}</h1>
          <p className="text-xl md:text-2xl text-gfa-gray uppercase tracking-[0.3em] font-light leading-loose border-y border-white/10 py-12">
            {sg.intro}
          </p>
        </header>

        {/* Zero-Tolerance Red Lines */}
        <section className="mb-40">
           <div className="bg-red-950/20 border border-red-500/20 p-16 relative overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/></svg>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-[0.3em] text-red-500 mb-16 relative z-10">{sg.redLinesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {sg.redLines.map((line: string, i: number) => (
                  <div key={i} className="flex gap-8 items-center bg-black/40 p-8 border border-red-500/10 group hover:border-red-500/30 transition-all">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🚩</div>
                    <p className="text-xs font-black uppercase tracking-widest text-red-100/60 group-hover:text-red-100 leading-loose">{line}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Parental Guidance Toolkit */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-black uppercase tracking-[0.4em] gold leading-tight">{sg.guideTitle}</h2>
            <p className="text-lg text-gfa-gray leading-relaxed uppercase tracking-widest opacity-80 border-l-4 border-gfa-gold/30 pl-10 italic">
               "{sg.guide}"
            </p>
            <div className="pt-8">
              <button className="btn-gold px-16 py-6 shadow-2xl">{sg.cta}</button>
            </div>
          </div>
          <div className="bg-gfa-darkGray p-16 border border-white/10 relative shadow-3xl">
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-10 border-b border-white/5 pb-4">Safe Participation Protocol</h3>
            <ul className="space-y-8 text-xs text-gfa-gray uppercase tracking-widest font-bold leading-relaxed opacity-60">
              <li className="flex gap-4"><span className="text-gfa-gold">01</span> Never pay for an audition or interview.</li>
              <li className="flex gap-4"><span className="text-gfa-gold">02</span> Verify the identity of organizers via the public registry.</li>
              <li className="flex gap-4"><span className="text-gfa-gold">03</span> Ensure a parent/guardian is present at all times during sessions.</li>
              <li className="flex gap-4"><span className="text-gfa-gold">04</span> Review all contracts with qualified legal counsel before signing.</li>
              <li className="flex gap-4"><span className="text-gfa-gold">05</span> Keep copies of all communications on institutional channels.</li>
            </ul>
          </div>
        </section>

        {/* Accountability & Reporting CTA */}
        <section className="bg-gfa-darkGray/40 p-24 text-center border-y border-white/5">
           <h2 className="text-3xl font-black uppercase tracking-[0.3em] gold mb-10">Risk Reduction & Accountability</h2>
           <p className="text-sm text-gfa-gray uppercase tracking-widest mb-16 max-w-4xl mx-auto leading-loose opacity-60">
              GFA helps families identify organizations that demonstrate higher levels of documentation, accountability, and safeguarding readiness. If you have witnessed a violation of these standards, please use our structured intake system.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/complaints" className="bg-red-600 text-white px-20 py-6 font-black uppercase text-[11px] tracking-widest hover:bg-red-700 transition-all shadow-xl">Report a Concern</Link>
              <Link to="/registry" className="border border-white/20 text-white px-20 py-6 font-black uppercase text-[11px] tracking-widest hover:bg-white/5 transition-all">Verify a Partner</Link>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ChildSafety;
