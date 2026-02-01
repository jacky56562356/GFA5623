
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title="Events & Awards" subtitle="Celebrating Global Excellence" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        {MOCK_EVENTS.map(event => (
          <div key={event.id} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-video mb-6">
               <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute top-4 left-4 bg-gfa-gold text-gfa-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                {event.type}
              </div>
            </div>
            <div className="flex justify-between items-start">
               <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gfa-gold transition-colors">{event.title}</h3>
                  <p className="text-gfa-gray text-sm uppercase tracking-[0.2em]">{event.date}</p>
               </div>
               <div className="w-12 h-12 border border-gfa-gold/30 flex items-center justify-center text-gfa-gold group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">
                  →
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-24">
         <h3 className="text-3xl font-bold mb-16 text-center">Annual Competitions</h3>
         <div className="space-y-4">
            {[
              { title: 'Global Script Award', prize: '$10,000 + Production Support', status: 'Applications Open' },
              { title: 'VFX Innovation Challenge', prize: 'Software Suite + Studio Residency', status: 'Closed' },
              { title: 'Debut Director Grant', prize: 'Equipment Package + Mentorship', status: 'Opening Nov 2024' }
            ].map((comp, i) => (
              <div key={i} className="bg-gfa-darkGray p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-l-4 border-gfa-gold/30 hover:border-gfa-gold transition-all">
                 <div>
                    <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tighter">{comp.title}</h4>
                    <p className="text-gfa-gray text-xs italic">Prize: {comp.prize}</p>
                 </div>
                 <div className="flex items-center gap-8 w-full md:w-auto">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${comp.status.includes('Open') ? 'text-green-500' : 'text-gfa-gray'}`}>
                       {comp.status}
                    </span>
                    <button className="bg-white/5 border border-white/10 px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gfa-gold hover:text-gfa-black transition-all ml-auto md:ml-0">
                       Learn More
                    </button>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Events;
