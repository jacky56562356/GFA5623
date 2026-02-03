
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
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title={t.support.title} subtitle={t.support.subtitle} />
      
      <div className="mb-32 text-center max-w-3xl mx-auto">
        <p className="text-gfa-gray text-lg leading-relaxed italic border-l-4 border-gfa-gold pl-8 uppercase tracking-widest">
          {t.support.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-40">
        {impactPathways.map((path, i) => (
          <div key={i} className="bg-gfa-darkGray p-12 border border-white/5 group hover:border-gfa-gold transition-all h-full flex flex-col">
            <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{path.icon}</div>
            <h3 className="text-xl font-black mb-8 gold-gradient uppercase tracking-tight">{path.title}</h3>
            <ul className="space-y-4 flex-grow">
              {path.bullets.map((b, idx) => (
                <li key={idx} className="text-[10px] font-black uppercase tracking-widest text-gfa-gray flex items-center gap-3">
                  <span className="text-gfa-gold">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-32">
        {SUPPORT_PROGRAMS_DATA.map((prog, i) => (
          <div key={prog.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
            <div className="lg:w-1/2">
              <img 
                src={`https://picsum.photos/seed/support${i}/1200/800`} 
                alt={prog.title} 
                className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5" 
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] uppercase font-bold tracking-widest mb-6">
                {prog.category}
              </div>
              <h3 className="text-4xl font-black mb-8 gold-gradient uppercase">
                {prog.title}
              </h3>
              <p className="text-gfa-gray text-sm mb-10 leading-relaxed uppercase tracking-widest font-medium opacity-80">
                {prog.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                 {prog.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-gfa-gold rounded-full"></div>
                     <span className="text-white text-[10px] font-black uppercase tracking-widest">{feature}</span>
                   </div>
                 ))}
              </div>

              <button className="bg-gfa-gold text-gfa-black px-12 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all">
                {t.support.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 border-t border-white/5 pt-24 text-center">
        <h3 className="text-3xl font-black mb-12 uppercase tracking-widest">{t.support.howTitle}</h3>
        <p className="text-gfa-gray mb-16 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold leading-relaxed">{t.support.howBody}</p>
        
        <div className="bg-gfa-darkGray p-16 border border-gfa-gold/20 shadow-3xl">
          <h4 className="text-2xl font-black mb-8 gold-gradient uppercase tracking-tight">{t.support.transparencyTitle}</h4>
          <p className="text-gfa-gray text-sm max-w-3xl mx-auto leading-relaxed uppercase tracking-wider font-medium">
            {t.support.transparencyBody}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
