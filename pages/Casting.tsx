
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Casting: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <SectionHeading title={t.casting.title} />
      
      <div className="bg-gfa-black border border-gfa-gold/10 p-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
           <h3 className="text-3xl font-bold mb-6 gold-gradient uppercase tracking-tight">{t.casting.title}</h3>
           <p className="text-gfa-gray text-lg mb-8 leading-relaxed">
             {t.casting.intro}
           </p>
           <div className="flex flex-wrap gap-4">
              <button className="bg-gfa-gold text-gfa-black px-8 py-3 font-black uppercase text-xs tracking-widest">
                {t.casting.ctaBrowse}
              </button>
              <button className="border border-white/20 text-white px-8 py-3 font-black uppercase text-xs tracking-widest hover:bg-white/5">
                {t.casting.ctaPost}
              </button>
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

      <div className="mb-24">
         <h3 className="text-2xl font-black mb-12 uppercase tracking-widest text-center">{t.casting.featuresTitle}</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.casting.features.map((feature, i) => (
              <div key={i} className="bg-gfa-darkGray/30 p-8 border border-white/5 text-center group hover:border-gfa-gold transition-all flex flex-col items-center justify-center h-full">
                 <div className="text-2xl mb-4 text-gfa-gold">✦</div>
                 <div className="text-[10px] text-white uppercase font-black tracking-widest leading-relaxed">{feature}</div>
              </div>
            ))}
         </div>
      </div>

      <div className="max-w-2xl mx-auto text-center p-8 border border-white/5 bg-gfa-darkGray/20">
         <p className="text-gfa-gray text-xs italic">{t.casting.note}</p>
      </div>
    </div>
  );
};

export default Casting;
