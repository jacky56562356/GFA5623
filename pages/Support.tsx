
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { MOCK_PROGRAMS } from '../constants';

const Support: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title="Support Programs" subtitle="Investing in the Future of Cinema" />
      
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <p className="text-gfa-gray text-lg leading-relaxed italic">
          "The greatest barrier to filmmaking is access. GFA provides the tools, the space, and the mentorship required to bring bold visions to life, regardless of financial background."
        </p>
      </div>

      <div className="space-y-32">
        {MOCK_PROGRAMS.map((prog, i) => (
          <div key={prog.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
            <div className="lg:w-1/2">
              <img 
                src={`https://picsum.photos/seed/support${i}/1200/800`} 
                alt={prog.title} 
                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] uppercase font-bold tracking-widest mb-6">
                Program Category: {prog.category}
              </div>
              <h3 className="text-4xl font-black mb-8 gold-gradient uppercase">{prog.title}</h3>
              <p className="text-gfa-gray text-sm mb-10 leading-relaxed">
                Whether you are a recent film school graduate or an independent creator, our {prog.category.toLowerCase()} support initiative is designed to remove bottlenecks in your production workflow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                 {/* Fix: Use prog.features instead of prog.details */}
                 {prog.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-gfa-gold rounded-full"></div>
                     <span className="text-white text-sm font-medium">{feature}</span>
                   </div>
                 ))}
              </div>

              <div className="p-6 bg-gfa-darkGray border-l-4 border-gfa-gold mb-12">
                 <h5 className="text-white text-xs font-bold uppercase mb-2">Eligibility</h5>
                 <p className="text-gfa-gray text-xs">Available to GFA Pro Members and selected Graduate Foundation applicants.</p>
              </div>

              <button className="bg-gfa-gold text-gfa-black px-12 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-gfa-black transition-all">
                Submit Application
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 pt-24 border-t border-white/5">
        <h3 className="text-2xl font-bold mb-12 text-center">Transparency: Supported Projects</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {[1,2,3,4,5].map(i => (
             <div key={i} className="aspect-square bg-gfa-darkGray flex flex-col items-center justify-center p-4 text-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all border border-white/5">
                <div className="w-12 h-12 mb-2 bg-gfa-gold/20 flex items-center justify-center text-xl">🎬</div>
                <div className="text-[10px] font-bold text-white uppercase mb-1">Project Delta</div>
                <div className="text-[8px] text-gfa-gold uppercase tracking-tighter">VFX SUPPORT 2024</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
