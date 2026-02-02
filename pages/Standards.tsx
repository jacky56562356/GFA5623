
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Standards: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Certification & Authorization Standards" 
        subtitle="Clear, objective, and professional review criteria across four essential categories." 
      />

      <div className="space-y-12">
        {/* Category A */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">A. Organization Verification Standards</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">Identity Audit</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">Required Documents</h4>
              <ul className="space-y-3 text-xs text-gfa-gray font-bold uppercase tracking-wider">
                <li>• Legal business registration</li>
                <li>• Responsible persons list</li>
                <li>• Physical address verification</li>
                <li>• Contact transparency</li>
                <li>• Past activity history</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">Compliance Matrix</h4>
              <p className="text-xs text-gfa-gray leading-loose mb-6">Organizations must demonstrate legitimate operations, identifiable leadership, and traceable accountability.</p>
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                Disqualification: Fake addresses, shell companies, unverifiable ownership, history of complaints/fraud.
              </div>
            </div>
          </div>
        </div>

        {/* Category B */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-red-500/10 px-10 py-4 border-b border-red-500/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-red-500">B. Youth Protection Standards (Mandatory)</h3>
            <span className="text-[10px] font-black uppercase bg-red-500 text-white px-2 py-1">Critical Priority</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">Guardian Control</h4>
              <ul className="text-[10px] text-gfa-gray space-y-2 font-black uppercase tracking-widest">
                <li>• Pre-participation Consent</li>
                <li>• Payment Approval Flow</li>
                <li>• Media Release Approval</li>
                <li>• Access to Schedules</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">On-site Safety</h4>
              <ul className="text-[10px] text-gfa-gray space-y-2 font-black uppercase tracking-widest">
                <li>• Published Venue Info</li>
                <li>• Emergency Protocols</li>
                <li>• Adult Supervision Policy</li>
                <li>• No Private 1-on-1s</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">Zero Tolerance</h4>
              <p className="text-[10px] text-red-400 font-black uppercase leading-relaxed tracking-widest">
                Immediate suspension for: Harassment, grooming behavior, pressure selling, or coercive contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Category C */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">C. Pricing Transparency Standards</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">Anti-Overcharging</span>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">Mandatory Disclosure</h4>
                <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed">
                  Organizations must publish an itemized price table covering registration, auditions, training, and optional services.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">Strictly Prohibited</h4>
                <p className="text-xs text-red-400/70 uppercase font-bold leading-relaxed">
                  Hidden fees, forced packages, surprise charges, "pay more = higher chance" claims.
                </p>
              </div>
            </div>
            <div className="p-6 bg-gfa-black border-l-4 border-gfa-gold text-xs font-bold uppercase tracking-[0.2em]">
              Billing Compliance: Invoices must match published prices exactly. Mismatch results in immediate violation.
            </div>
          </div>
        </div>

        {/* Category D */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">D. Professional & Educational Value</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">Quality Audit</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">Core Criteria</h4>
              <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed">
                Qualified instructors/judges, structured curriculum, clear learning outcomes, and real development opportunities.
              </p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/10">
              <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">Rejected Models</h4>
              <p className="text-[10px] text-red-400/60 uppercase font-black tracking-widest">
                Profit-driven "photo events", fake awards, meaningless certificates, no educational value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
