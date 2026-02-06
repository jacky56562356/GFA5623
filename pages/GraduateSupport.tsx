
import React from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const GraduateSupport = () => {
  const { t } = useLocale();
  const support = t.support;

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center max-w-5xl mx-auto">
          <span className="text-gfa-gold font-black uppercase tracking-[0.6em] text-[10px] mb-10 block opacity-60">Emerging Talent Infrastructure</span>
          <h1 className="mb-12 gold uppercase text-6xl md:text-8xl leading-tight tracking-tighter">{support.title}</h1>
          <p className="text-xl md:text-2xl text-gfa-gray uppercase tracking-[0.3em] font-light leading-loose border-y border-white/10 py-12">
            {support.body}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {support.programs.map((prog: any, i: number) => (
            <div key={i} className="bg-gfa-darkGray/40 p-16 border border-white/10 hover:border-gfa-gold/40 transition-all group flex flex-col h-full relative overflow-hidden text-center rounded-sm">
               <div className="text-5xl mb-12 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">
                 {i === 0 ? '📽️' : i === 1 ? '🤝' : '🏢'}
               </div>
               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8 border-b border-white/5 pb-6 group-hover:text-gfa-gold transition-colors">{prog.title}</h3>
               <p className="text-xs text-gfa-gray leading-loose uppercase tracking-[0.2em] opacity-60 flex-grow">{prog.d}</p>
            </div>
          ))}
        </div>

        {/* Support Pathways Detail */}
        <section className="bg-white/5 p-24 border border-white/10 mb-40">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl font-black uppercase tracking-[0.3em] gold mb-10 leading-tight">Professional Support Pathways</h2>
                 <p className="text-sm text-gfa-gray leading-loose uppercase tracking-widest mb-16 opacity-80">
                    GFA facilitates connections between verified industry partners and emerging creators to reduce risk and foster responsible professional growth. We focus on "Support Pathways" rather than production guarantees to ensure talent development remains grounded in ethical standards.
                 </p>
                 <ul className="space-y-8">
                    <li className="flex gap-6 items-start group">
                       <span className="text-gfa-gold font-serif text-2xl group-hover:scale-125 transition-transform">✦</span>
                       <p className="text-xs text-white uppercase tracking-widest font-black leading-relaxed">Direct Referral to GFA Certified Agencies</p>
                    </li>
                    <li className="flex gap-6 items-start group">
                       <span className="text-gfa-gold font-serif text-2xl group-hover:scale-125 transition-transform">✦</span>
                       <p className="text-xs text-white uppercase tracking-widest font-black leading-relaxed">Safety & Contractual Readiness Audits</p>
                    </li>
                    <li className="flex gap-6 items-start group">
                       <span className="text-gfa-gold font-serif text-2xl group-hover:scale-125 transition-transform">✦</span>
                       <p className="text-xs text-white uppercase tracking-widest font-black leading-relaxed">Mentor-Guided Project Development</p>
                    </li>
                 </ul>
              </div>
              <div className="bg-gfa-black/60 p-12 border border-white/5 shadow-3xl">
                 <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold mb-10 italic">Inquiry for Support</h3>
                 <form className="space-y-10" onSubmit={e => { e.preventDefault(); alert("Inquiry received. The support office will review your project eligibility."); }}>
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3 italic">Applicant Name</label>
                       <input type="text" required className="w-full bg-gfa-black border border-white/10 p-5 text-[11px] font-bold uppercase tracking-widest text-white focus:border-gfa-gold outline-none transition-all" />
                    </div>
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3 italic">Pathway Category</label>
                       <select className="w-full bg-gfa-black border border-white/10 p-5 text-[11px] font-bold uppercase tracking-widest text-white focus:border-gfa-gold outline-none transition-all">
                          <option>Film Incubator</option>
                          <option>Industry Bridge</option>
                          <option>Resource Access</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-3 italic">Statement of Need</label>
                       <textarea rows={5} required className="w-full bg-gfa-black border border-white/10 p-5 text-[11px] font-bold uppercase tracking-widest text-white focus:border-gfa-gold outline-none transition-all"></textarea>
                    </div>
                    <button className="w-full py-6 bg-gfa-gold text-gfa-black font-black uppercase text-[11px] tracking-widest hover:bg-white transition-all shadow-xl">Submit Pathway Inquiry</button>
                 </form>
              </div>
           </div>
        </section>

        <section className="text-center py-20 border-t border-white/10">
           <p className="text-[10px] text-gfa-gray/40 uppercase tracking-[0.5em] italic font-medium">
              Empowering responsible creation through standards and support.
           </p>
        </section>
      </div>
    </div>
  );
};

export default GraduateSupport;
