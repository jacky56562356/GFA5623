
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Governance: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Governance, Standards & Youth Protection" 
        subtitle="Independent certification, transparent pricing, and guardian-first safeguards for minors." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
        <div className="bg-gfa-darkGray p-12 border border-white/5">
          <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">Section 1 — Our Role</h3>
          <div className="space-y-6 text-gfa-gray leading-loose text-sm uppercase tracking-wide">
            <p>
              GFA is an independent nonprofit standards and certification organization. We establish voluntary industry standards to improve safety, transparency, and professionalism across auditions, competitions, showcases, and training programs involving minors.
            </p>
            <p>
              GFA does not act as a government regulator. Participation in GFA certification is voluntary.
            </p>
            <p className="text-white font-black border-l-2 border-gfa-gold pl-4">
              However, only authorized programs may be listed, promoted, or supported within the GFA ecosystem.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">Section 2 — Core Principles</h3>
          {[
            { id: '1', title: 'Child Safety First', desc: 'The safety and well-being of minors take priority over commercial interests.' },
            { id: '2', title: 'Transparency Over Marketing', desc: 'All fees, policies, and conditions must be clearly disclosed.' },
            { id: '3', title: 'No Hidden Costs', desc: 'Parents must never face unexpected or forced charges.' },
            { id: '4', title: 'Guardian Control', desc: 'Parents or guardians control all participation decisions for minors.' },
            { id: '5', title: 'Accountability', desc: 'Certified organizations are subject to review, audits, and possible revocation.' }
          ].map(p => (
            <div key={p.id} className="flex gap-6 items-start p-6 border border-white/5 hover:bg-white/5 transition-colors">
              <span className="text-gfa-gold font-black text-xl">{p.id}.</span>
              <div>
                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">{p.title}</h4>
                <p className="text-gfa-gray text-xs leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gfa-gold p-16 text-gfa-black">
        <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Section 3 — “Authorization Before Promotion” Policy</h3>
        <p className="text-lg font-bold mb-10 max-w-4xl leading-relaxed">
          To protect families and ensure credibility: Any audition, competition, showcase, or training activity involving minors that wishes to be listed on GFA, recruit through GFA, use GFA branding, receive GFA support, or access GFA talent network <span className="underline">must obtain GFA Authorization</span>.
        </p>
        <div className="text-xs font-black uppercase tracking-widest bg-black text-white px-6 py-4 inline-block">
          Programs operating independently without authorization are not reviewed or endorsed by GFA.
        </div>
      </div>
    </div>
  );
};

export default Governance;
