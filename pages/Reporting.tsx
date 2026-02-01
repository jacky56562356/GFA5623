
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Reporting: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Report Misconduct or Overcharging" 
        subtitle="Help protect minors and families. Your reports ensure the integrity of the film alliance." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <form className="bg-gfa-darkGray p-12 border border-white/5 shadow-2xl space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Report received. GFA Compliance Office will investigate.'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Report Type</label>
                <select className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold font-bold uppercase text-[10px] tracking-widest">
                  <option>Hidden Fees / Overcharging</option>
                  <option>Unsafe Environment</option>
                  <option>Harassment / Misconduct</option>
                  <option>False Promises / Scam</option>
                  <option>Unprofessional Conduct</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Organization Name</label>
                <input required type="text" className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Incident Description (Details, Dates, Witnesses)</label>
              <textarea required rows={8} className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs leading-relaxed"></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">Contact Email (For follow-up)</label>
              <input required type="email" className="w-full bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold text-xs font-bold" />
            </div>

            <button type="submit" className="bg-gfa-gold text-gfa-black px-16 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-xl w-full sm:w-auto">
              Submit Report to Compliance Office
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-black mb-6 gold-gradient uppercase tracking-tight">Investigation Process</h3>
            <div className="space-y-4">
              {['Step 1 — Intake & Triage', 'Step 2 — Document Review', 'Step 3 — Organization Response', 'Step 4 — Final Decision', 'Step 5 — Enforcement Action'].map((s, i) => (
                <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gfa-gray">
                  <span className="text-gfa-gold w-4">{i + 1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 border border-red-500/20 bg-red-500/5">
            <h3 className="text-sm font-black mb-4 text-red-500 uppercase tracking-widest">Possible Outcomes</h3>
            <ul className="text-[10px] text-gfa-gray space-y-2 uppercase font-bold tracking-wider leading-relaxed">
              <li>• Formal Correction Request</li>
              <li>• Mandatory Refund Order</li>
              <li>• Public Suspension</li>
              <li>• Permanent Revocation</li>
              <li>• Industry Blacklisting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
