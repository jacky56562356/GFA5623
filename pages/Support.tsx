import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';
import { SUPPORT_PROGRAMS_DATA } from '../data';

const Support: React.FC = () => {
  const { t } = useLocale();

  const impactPathways = [
    { title: t.support.p1Title, bullets: t.support.p1Bullets, icon: '🏆' },
    { title: t.support.p2Title, bullets: t.support.p2Bullets, icon: '🎨' },
    { title: t.support.p3Title, bullets: t.support.p3Bullets, icon: '🤝' },
  ];

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <SectionHeading title={t.support.title} subtitle={t.support.subtitle} />
      
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <p className="text-gfa-gray text-base md:text-lg leading-relaxed italic border-l-4 border-gfa-gold/60 pl-8 uppercase tracking-widest font-medium opacity-70">
          {t.support.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
        {impactPathways.map((path, i) => (
          <div key={i} className="bg-gfa-darkGray/50 p-10 border border-white/5 group hover:border-gfa-gold/30 transition-all h-full flex flex-col shadow-lg rounded-md">
            <div className="text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all">{path.icon}</div>
            <h3 className="text-lg font-black mb-8 gold-gradient uppercase tracking-tight font-montserrat">{path.title}</h3>
            <ul className="space-y-4 flex-grow">
              {path.bullets.map((b, idx) => (
                <li key={idx} className="text-[10px] font-black uppercase tracking-widest text-gfa-gray/80 flex items-center gap-3">
                  <span className="text-gfa-gold/60 text-base">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-24">
        {SUPPORT_PROGRAMS_DATA.map((prog, i) => (
          <div key={prog.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="lg:w-1/2 group">
              <div className="overflow-hidden shadow-2xl rounded-md">
                 <img 
                  src={`https://picsum.photos/seed/support${i}/1000/600`} 
                  alt={prog.title} 
                  className="w-full h-[350px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 border border-white/5" 
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 border border-gfa-gold/20 text-gfa-gold text-[9px] uppercase font-black tracking-[0.3em] mb-6 bg-gfa-gold/5 font-montserrat">
                {prog.category}
              </div>
              <h3 className="text-2xl md:text-4xl font-black mb-6 gold-gradient uppercase font-montserrat leading-tight">
                {prog.title}
              </h3>
              <p className="text-gfa-gray text-sm md:text-base mb-8 leading-relaxed uppercase tracking-widest font-bold opacity-60">
                {prog.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                 {prog.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-gfa-gold/60 rounded-full"></div>
                     <span className="text-white/80 text-[10px] font-black uppercase tracking-widest font-montserrat">{feature}</span>
                   </div>
                 ))}
              </div>

              <button className="bg-gfa-gold text-gfa-black px-12 py-4 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all shadow-md font-montserrat rounded-md">
                {t.support.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 border-t border-white/10 pt-20 text-center">
        <h3 className="text-2xl font-black mb-10 uppercase tracking-[0.2em] font-montserrat">{t.support.howTitle}</h3>
        <p className="text-gfa-gray/60 mb-16 max-w-3xl mx-auto uppercase tracking-[0.3em] text-[9px] font-bold leading-relaxed">{t.support.howBody}</p>
        
        <div className="bg-gfa-darkGray/30 p-12 border border-gfa-gold/15 shadow-xl relative overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gfa-gold/5 -mr-10 -mt-10 rotate-45"></div>
          <h4 className="text-xl font-black mb-8 gold-gradient uppercase tracking-tight font-montserrat">{t.support.transparencyTitle}</h4>
          <p className="text-gfa-gray text-sm md:text-lg max-w-4xl mx-auto leading-loose uppercase tracking-widest font-bold opacity-60">
            {t.support.transparencyBody}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;