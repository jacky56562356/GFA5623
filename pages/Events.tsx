
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading.tsx';
import { useLocale } from '../App.tsx';
import { EVENTS_DATA } from '../data.ts';

const Events: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title={t.events.title} subtitle={t.events.intro} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
        {EVENTS_DATA.map(event => (
          <div key={event.id} className="group cursor-pointer bg-gfa-darkGray/20 border border-white/5 p-4 flex flex-col">
            <div className="relative overflow-hidden aspect-video mb-6">
               <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute top-2 left-2 bg-gfa-gold text-gfa-black px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em]">
                {event.type}
              </div>
            </div>
            <div className="flex-grow">
               <h3 className="text-xl font-black mb-2 group-hover:text-gfa-gold transition-colors uppercase tracking-tight">{event.title}</h3>
               <p className="text-gfa-gray text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">{event.date}</p>
               <p className="text-gfa-gray text-xs leading-relaxed mb-6">{event.description}</p>
            </div>
            <button className="w-full py-4 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-widest group-hover:bg-gfa-gold group-hover:text-gfa-black transition-all">
              {t.events.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-white/5 pt-24">
         <div>
            <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tighter">{t.events.sections.competitions}</h3>
            <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="bg-gfa-darkGray p-6 border-l-2 border-gfa-gold">
                    <div className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-1">Coming Soon</div>
                    <div className="text-white font-bold text-sm uppercase">Competition Showcase {i}</div>
                 </div>
               ))}
            </div>
         </div>
         <div>
            <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tighter">{t.events.sections.screenings}</h3>
            <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="bg-gfa-darkGray p-6 border-l-2 border-gfa-gold">
                    <div className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-1">Regional Event</div>
                    <div className="text-white font-bold text-sm uppercase">Community Screening {i}</div>
                 </div>
               ))}
            </div>
         </div>
         <div>
            <h3 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tighter">{t.events.sections.workshops}</h3>
            <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="bg-gfa-darkGray p-6 border-l-2 border-gfa-gold">
                    <div className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-1">Member Exclusive</div>
                    <div className="text-white font-bold text-sm uppercase">Masterclass Session {i}</div>
                 </div>
               ))}
            </div>
         </div>
      </div>
      
      <div className="mt-24 text-center">
         <p className="text-gfa-gray text-xs italic">{t.events.note}</p>
      </div>
    </div>
  );
};

export default Events;
