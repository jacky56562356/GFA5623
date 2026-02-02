import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Reporting: React.FC = () => {
  const { t } = useLocale();
  const r = t.reporting;

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={r.title} 
        subtitle={r.subtitle} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <form className="bg-gfa-darkGray p-12 border border-white/5 shadow-2xl space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Success'); }}>
            <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">{r.formTitle}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.type}</label>
                <select className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold font-bold uppercase text-[10px] tracking-widest">
                  {r.reportTypes.map(type => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.org}</label>
                <input required type="text" className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.desc}</label>
              <textarea required rows={8} className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs leading-relaxed"></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.email}</label>
              <input required type="email" className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
            </div>

            <button type="submit" className="bg-gfa-gold text-gfa-black px-16 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl">
              {r.formLabels.submit}
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-8 border-l-2 border-gfa-gold pl-3">{r.processTitle}</h4>
            <div className="space-y-6">
              {r.process.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-gfa-gold font-black text-xs">{i+1}</span>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-white mb-1">{step.s}</h5>
                    <p className="text-[10px] text-gfa-gray font-bold uppercase tracking-widest">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-red-500/10 border border-red-500/20">
            <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">{r.outcomesTitle}</h4>
            <ul className="text-[10px] text-red-400 font-bold space-y-2 uppercase tracking-widest">
              {r.outcomes.map(outcome => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;