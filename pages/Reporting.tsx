
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Reporting: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Report Misconduct or Overcharging" 
        subtitle="Help protect minors and families by reporting unethical behavior or standard violations." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <form className="bg-gfa-darkGray p-12 border border-white/5 shadow-2xl space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Report received. GFA Compliance Office will contact you if needed.'); }}>
            <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">Report Form</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Report Type</label>
                <select className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold font-bold uppercase text-[10px] tracking-widest">
                  <option>Hidden Fees / Overcharging</option>
                  <option>Unsafe Environment</option>
                  <option>Harassment / Grooming</option>
                  <option>False Promises / Scams</option>
                  <option>Unprofessional Conduct</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Organization Name</label>
                <input required type="text" className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Detailed Description</label>
              <textarea required rows={8} className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs leading-relaxed"></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Contact Email (for Investigation)</label>
              <input required type="email" className="w-full bg-gfa-black border border-white/10 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
            </div>

            <button type="submit" className="bg-gfa-gold text-gfa-black px-16 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl">
              Submit Report to Compliance Office
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-8 border-l-2 border-gfa-gold pl-3">Investigation Process</h4>
            <div className="space-y-6">
              {[
                { s: "Intake", d: "Record entry and triage." },
                { s: "Review", d: "Document and evidence review." },
                { s: "Response", d: "Official organization rebuttal." },
                { s: "Decision", d: "Formal compliance ruling." },
                { s: "Enforcement", d: "Execution of penalties." }
              ].map((step, i) => (
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
            <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">Possible Outcomes</h4>
            <ul className="text-[10px] text-red-400 font-bold space-y-2 uppercase tracking-widest">
              <li>• Correction Request</li>
              <li>• Refund Requirement</li>
              <li>• Suspension</li>
              <li>• Revocation</li>
              <li>• Global Blacklist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
