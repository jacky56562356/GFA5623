
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Protection: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Youth Protection & Guardian Controls" 
        subtitle="Ensuring a safe, professional, and transparent environment for the next generation of film talent." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        <div className="bg-gfa-darkGray/50 p-12 border border-gfa-gold/20 flex flex-col justify-center">
          <h3 className="text-3xl font-black mb-8 gold-gradient uppercase tracking-tight">Guardian-First Model</h3>
          <p className="text-gfa-gray mb-10 leading-relaxed font-medium uppercase text-xs tracking-widest">For all minors participating in the GFA ecosystem, the guardian retains absolute authority:</p>
          <div className="space-y-4">
            {['Parents control accounts', 'Parents approve participation', 'Parents approve all payments', 'Parents approve media releases'].map(i => (
              <div key={i} className="flex items-center gap-4 bg-gfa-black p-4 border border-white/5">
                <span className="text-gfa-gold">🛡️</span>
                <span className="text-xs font-black uppercase tracking-widest text-white">{i}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gfa-darkGray p-8 border border-white/5">
            <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-4 border-b border-white/5 pb-2">Audition Safety</h4>
            <ul className="text-[10px] text-gfa-gray space-y-2 uppercase font-bold tracking-wider leading-relaxed">
              <li>• Platform-managed communication only</li>
              <li>• No private direct contact with minors</li>
              <li>• Scheduled locations disclosed in advance</li>
              <li>• Self-tape uploads only through secure system</li>
              <li>• Comprehensive digital audit trail</li>
            </ul>
          </div>
          <div className="bg-gfa-darkGray p-8 border border-white/5">
            <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-4 border-b border-white/5 pb-2">Training Safety</h4>
            <ul className="text-[10px] text-gfa-gray space-y-2 uppercase font-bold tracking-wider leading-relaxed">
              <li>• Verified instructors only</li>
              <li>• No private unsupervised sessions</li>
              <li>• Transparent curriculum public disclosure</li>
              <li>• Independent complaint mechanism</li>
            </ul>
          </div>
          <div className="bg-gfa-darkGray p-8 border border-white/5">
            <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-4 border-b border-white/5 pb-2">Media & Image Protection</h4>
            <ul className="text-[10px] text-gfa-gray space-y-2 uppercase font-bold tracking-wider leading-relaxed">
              <li>• Granular visibility options (Internal / Public)</li>
              <li>• Explicit guardian consent required</li>
              <li>• Right to immediate withdrawal and deletion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
