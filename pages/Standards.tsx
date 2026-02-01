
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Standards: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Certification & Authorization Standards" 
        subtitle="Clear, objective, and professional review criteria." 
      />

      <div className="mb-24 text-center">
        <h3 className="text-3xl font-black uppercase tracking-tighter gold-gradient">审核分 4 大类别</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {/* Category A */}
        <div className="bg-gfa-darkGray p-10 border border-white/5 h-full">
          <div className="text-gfa-gold font-black text-4xl mb-6">A</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Organization Verification Standards</h4>
          <div className="space-y-8">
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">Required Documents</h5>
              <ul className="grid grid-cols-1 gap-2 text-xs text-gfa-gray font-bold">
                {['Legal business registration', 'Responsible persons list', 'Physical address verification', 'Contact transparency', 'Past activity history'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span>✦</span> {i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">Must Demonstrate</h5>
              <p className="text-xs text-gfa-gray leading-relaxed uppercase">Legitimate operations, identifiable leadership, and traceable accountability.</p>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20">
              <h5 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">Disqualification</h5>
              <p className="text-[10px] text-red-400 uppercase tracking-widest">Fake addresses, shell companies, unverifiable ownership, history of fraud.</p>
            </div>
          </div>
        </div>

        {/* Category B */}
        <div className="bg-gfa-darkGray p-10 border border-white/5 h-full">
          <div className="text-gfa-gold font-black text-4xl mb-6">B</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Youth Protection Standards</h4>
          <div className="space-y-8">
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">Guardian Requirements</h5>
              <ul className="grid grid-cols-1 gap-2 text-xs text-gfa-gray font-bold">
                {['Consent required before participation', 'Approval for all payments', 'Approval for media use', 'Access to schedules and locations'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span>✦</span> {i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">On-site Safety</h5>
              <p className="text-xs text-gfa-gray leading-relaxed uppercase">Venue information published, emergency contacts, adult supervision, no private 1-on-1 closed sessions.</p>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20">
              <h5 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">Prohibited Conduct</h5>
              <p className="text-[10px] text-red-400 uppercase tracking-widest">Harassment, grooming behavior, pressure selling, coercive contracts. Violation → Immediate Suspension.</p>
            </div>
          </div>
        </div>

        {/* Category C */}
        <div className="bg-gfa-darkGray p-10 border border-white/5 h-full">
          <div className="text-gfa-gold font-black text-4xl mb-6">C</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Pricing Transparency Standards</h4>
          <div className="space-y-8">
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">Mandatory Public Disclosure</h5>
              <p className="text-xs text-gfa-gray uppercase leading-relaxed">Publication of registration fees, audition fees, training fees, optional services, and refund rules in an itemized price table format.</p>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20">
              <h5 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">Strictly Prohibited</h5>
              <p className="text-[10px] text-red-400 uppercase tracking-widest">Hidden fees, forced packages, surprise charges, "pay more = higher chance" claims, guaranteed casting promises.</p>
            </div>
            <p className="text-[10px] text-white font-black uppercase tracking-widest border-l-2 border-gfa-gold pl-3">Billing compliance: Invoices must match published prices exactly. Mismatch → Violation.</p>
          </div>
        </div>

        {/* Category D */}
        <div className="bg-gfa-darkGray p-10 border border-white/5 h-full">
          <div className="text-gfa-gold font-black text-4xl mb-6">D</div>
          <h4 className="text-xl font-black text-white uppercase tracking-tight mb-8">Professional & Educational Value</h4>
          <div className="space-y-8">
            <div>
              <h5 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">Requirement</h5>
              <p className="text-xs text-gfa-gray uppercase leading-relaxed">Qualified instructors or judges, structured curriculum, clear learning or artistic outcomes, real development opportunities.</p>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20">
              <h5 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">Not Allowed</h5>
              <p className="text-[10px] text-red-400 uppercase tracking-widest">Purely profit-driven "photo events", fake awards, meaningless certificates with no educational or artistic value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
