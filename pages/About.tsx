
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const About: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title={t.about.title} subtitle={t.about.missionTitle} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-full h-full border-4 border-gfa-gold -z-10 opacity-20"></div>
          <img src="https://picsum.photos/seed/about1/800/1000" alt={t.meta.siteName} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-8 gold-gradient">{t.about.missionTitle}</h3>
          <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
            {t.about.missionBody}
          </p>
          
          <h3 className="text-3xl font-bold mb-8 gold-gradient">{t.about.visionTitle}</h3>
          <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
            {t.about.visionBody}
          </p>
        </div>
      </div>

      <div className="bg-gfa-darkGray p-12 mb-32 border border-gfa-gold/20">
         <h3 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">{t.about.whatTitle}</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.whatBullets.map((bullet, i) => (
              <div key={i} className="flex gap-4 items-start">
                 <div className="flex-shrink-0 w-8 h-8 bg-gfa-gold flex items-center justify-center font-bold text-gfa-black rounded-sm text-xs">
                   {String(i + 1).padStart(2, '0')}
                 </div>
                 <p className="text-gfa-gray text-sm pt-1">{bullet}</p>
              </div>
            ))}
         </div>
      </div>

      <SectionHeading title={t.about.transparencyTitle} centered />
      <div className="max-w-3xl mx-auto text-center">
         <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
           {t.about.transparencyBody}
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-16">
           <div className="border border-white/5 p-8 bg-gfa-darkGray/30">
             <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t.about.accTitle}</h4>
             <p className="text-gfa-gray text-[10px]">{t.about.accDesc}</p>
           </div>
           <div className="border border-white/5 p-8 bg-gfa-darkGray/30">
             <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t.about.outTitle}</h4>
             <p className="text-gfa-gray text-[10px]">{t.about.outDesc}</p>
           </div>
         </div>
      </div>
    </div>
  );
};

export default About;
