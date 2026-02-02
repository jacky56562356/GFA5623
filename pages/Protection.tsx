
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Protection: React.FC = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Youth Protection & Guardian Controls" 
        subtitle="Independent safeguards designed to protect young talent within the film industry." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div>
          <h3 className="text-3xl font-black mb-8 gold-gradient uppercase tracking-tight">Guardian-First Model</h3>
          <p className="text-gfa-gray text-lg mb-10 leading-relaxed uppercase font-medium tracking-wider">
            For minors, the platform is structured around parental authority. No action can be taken without guardian oversight.
          </p>
          <div className="space-y-4">
            {[
              "Parents control accounts",
              "Parents approve participation",
              "Parents approve payments",
              "Parents approve media release"
            ].map(i => (
              <div key={i} className="flex items-center gap-4 bg-gfa-darkGray p-6 border border-white/5">
                <span className="text-gfa-gold">✓</span>
                <span className="text-sm font-black uppercase tracking-widest text-white">{i}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square bg-gfa-darkGray border border-gfa-gold/20 flex items-center justify-center">
           <div className="text-center p-12">
             <div className="text-8xl mb-8">🛡️</div>
             <h4 className="text-xl font-black text-gfa-gold uppercase tracking-widest">Active Safeguards</h4>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div className="p-10 border border-white/5 bg-gfa-darkGray/50">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-6">Audition Safety</h4>
          <ul className="text-[10px] text-gfa-gray space-y-3 font-bold uppercase tracking-widest">
            <li>• Platform-managed communication</li>
            <li>• No private direct contact</li>
            <li>• Scheduled locations disclosed</li>
            <li>• System-only self-tape uploads</li>
            <li>• Digital audit trail</li>
          </ul>
        </div>
        <div className="p-10 border border-white/5 bg-gfa-darkGray/50">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-6">Training Safety</h4>
          <ul className="text-[10px] text-gfa-gray space-y-3 font-bold uppercase tracking-widest">
            <li>• Verified instructors only</li>
            <li>• No private unsupervised sessions</li>
            <li>• Transparent curriculum</li>
            <li>• Formal complaint mechanism</li>
          </ul>
        </div>
        <div className="p-10 border border-white/5 bg-gfa-darkGray/50">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-6">Media Protection</h4>
          <ul className="text-[10px] text-gfa-gray space-y-3 font-bold uppercase tracking-widest">
            <li>• Tiered visibility controls</li>
            <li>• Guardian consent required</li>
            <li>• Immediate withdrawal right</li>
            <li>• Encrypted storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Protection;
