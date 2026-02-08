
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { GFAEvent } from '../types.ts';

const Events: React.FC = () => {
  const { t } = useLocale();
  const eventsList: GFAEvent[] = t.eventsList || [];

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">Industry Calendar</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {t.events.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {t.events.intro}
          </p>
        </header>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {eventsList.map(event => (
            <div key={event.id} className="group cursor-pointer bg-white border border-gfa-border p-6 flex flex-col rounded-card shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden aspect-video mb-8 rounded-sm">
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-3 left-3 bg-gfa-gold text-gfa-black px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] rounded-sm shadow-md">
                  {event.type}
                </div>
              </div>
              <div className="flex-grow px-2">
                 <h3 className="text-xl font-bold mb-3 group-hover:text-gfa-gold transition-colors uppercase tracking-tight text-gfa-inkBlack font-serif">{event.title}</h3>
                 <p className="text-gfa-gold text-[10px] uppercase tracking-[0.2em] mb-4 font-black">{event.date}</p>
                 <p className="text-gfa-slate text-sm leading-relaxed mb-8 opacity-80 font-medium">{event.description}</p>
              </div>
              <button className="w-full py-4 border border-gfa-border text-gfa-inkBlack text-[10px] font-black uppercase tracking-widest group-hover:bg-gfa-inkBlack group-hover:text-white transition-all rounded-btn">
                {t.events.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-gfa-border pt-24">
           <div>
              <h3 className="text-2xl font-bold mb-8 text-gfa-inkBlack uppercase tracking-tighter font-serif">{t.events.sections.competitions}</h3>
              <div className="space-y-4">
                 {[1, 2].map(i => (
                   <div key={i} className="bg-white p-6 border-l-4 border-gfa-gold shadow-sm rounded-r-sm">
                      <div className="text-[9px] text-gfa-gold font-black uppercase tracking-widest mb-1">{t.events.eventStatus[0]}</div>
                      <div className="text-gfa-inkBlack font-bold text-sm uppercase font-serif">{t.events.sections.competitions} {i}</div>
                   </div>
                 ))}
              </div>
           </div>
           <div>
              <h3 className="text-2xl font-bold mb-8 text-gfa-inkBlack uppercase tracking-tighter font-serif">{t.events.sections.screenings}</h3>
              <div className="space-y-4">
                 {[1, 2].map(i => (
                   <div key={i} className="bg-white p-6 border-l-4 border-gfa-slate shadow-sm rounded-r-sm">
                      <div className="text-[9px] text-gfa-slate font-black uppercase tracking-widest mb-1">{t.events.eventStatus[1]}</div>
                      <div className="text-gfa-inkBlack font-bold text-sm uppercase font-serif">{t.events.sections.screenings} {i}</div>
                   </div>
                 ))}
              </div>
           </div>
           <div>
              <h3 className="text-2xl font-bold mb-8 text-gfa-inkBlack uppercase tracking-tighter font-serif">{t.events.sections.workshops}</h3>
              <div className="space-y-4">
                 {[1, 2].map(i => (
                   <div key={i} className="bg-white p-6 border-l-4 border-gfa-slate shadow-sm rounded-r-sm">
                      <div className="text-[9px] text-gfa-slate font-black uppercase tracking-widest mb-1">{t.events.eventStatus[2]}</div>
                      <div className="text-gfa-inkBlack font-bold text-sm uppercase font-serif">{t.events.sections.workshops} {i}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
        
        <div className="mt-24 text-center">
           <p className="text-gfa-slate text-[11px] font-bold uppercase tracking-widest italic opacity-50">{t.events.note}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
