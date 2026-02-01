
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Casting: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title="Talent & Casting" subtitle="The Industry's Verified Database" />
      
      <div className="bg-gfa-black border border-gfa-gold/10 p-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
           <h3 className="text-3xl font-bold mb-6">Discover Verified Performers</h3>
           <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
             Our talent database is restricted to GFA-certified actors and technicians. Every profile is vetted for credentials, skills, and professional ethics, ensuring a safe and high-quality casting environment for global productions.
           </p>
           <div className="flex flex-wrap gap-4">
              <button className="bg-gfa-gold text-gfa-black px-8 py-3 font-bold uppercase text-xs tracking-widest">Browse Database</button>
              <button className="border border-white/20 text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white/5">Post a Project</button>
           </div>
        </div>
        <div className="bg-gfa-darkGray p-8 text-center border border-gfa-gold/30">
           <div className="text-5xl mb-4">🛡️</div>
           <h4 className="font-bold text-white mb-2 uppercase tracking-tighter">Minor Protection</h4>
           <p className="text-gfa-gray text-xs leading-relaxed">
             Strict guardian controls and vetted audition environments for all child performers. Compliance is our top priority.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
         {[
           { title: 'Screen Actors', count: '8,400+', icon: '🎭' },
           { title: 'Voice Artists', count: '2,100+', icon: '🎙️' },
           { title: 'Stunt Teams', count: '450+', icon: '💥' },
           { title: 'VFX Technicians', count: '1,200+', icon: '💻' }
         ].map((cat, i) => (
           <div key={i} className="bg-gfa-darkGray/30 p-8 border border-white/5 text-center group hover:border-gfa-gold transition-all">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{cat.icon}</div>
              <div className="text-2xl font-bold mb-1">{cat.count}</div>
              <div className="text-[10px] text-gfa-gold uppercase font-black tracking-widest">{cat.title}</div>
           </div>
         ))}
      </div>

      <h3 className="text-2xl font-bold text-center mb-16 uppercase tracking-widest">Audition Workflow</h3>
      <div className="max-w-4xl mx-auto space-y-4">
         {[
           { step: 'Submit', desc: 'Cast directors post projects and talent submits applications.' },
           { step: 'Self-Tape', desc: 'Verified talent submits digital auditions via GFA secure portal.' },
           { step: 'Callback', desc: 'Live remote or in-person callback sessions coordinated by GFA.' },
           { step: 'Offer', desc: 'Professional contracts issued through GFA legal framework.' }
         ].map((flow, i) => (
           <div key={i} className="flex items-center bg-gfa-darkGray p-6 border-l-4 border-gfa-gold">
              <div className="w-12 text-3xl font-black text-gfa-gold/30 mr-6">0{i+1}</div>
              <div>
                 <h5 className="text-white font-bold uppercase text-sm mb-1">{flow.step}</h5>
                 <p className="text-gfa-gray text-xs">{flow.desc}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default Casting;
