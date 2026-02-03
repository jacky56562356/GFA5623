
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Standards: React.FC = () => {
  const { t } = useLocale();
  const s = t.standards;

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading title={s.title} subtitle={s.subtitle} />

      <div className="space-y-12">
        {/* Category A */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catA.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">{s.catA.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">{s.catA.docsTitle}</h4>
              <ul className="space-y-3 text-xs text-gfa-gray font-bold uppercase tracking-wider">
                {s.catA.docs.map((d, i) => <li key={i}>• {d}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">{s.catA.matrixTitle}</h4>
              <p className="text-xs text-gfa-gray leading-loose mb-6">{s.catA.matrixBody}</p>
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 uppercase tracking-widest">
                {s.catA.disqual}
              </div>
            </div>
          </div>
        </div>

        {/* Category B */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-red-500/10 px-10 py-4 border-b border-red-500/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-red-500">{s.catB.title}</h3>
            <span className="text-[10px] font-black uppercase bg-red-500 text-white px-2 py-1">{s.catB.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">{s.catB.sub1}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-2 font-black uppercase tracking-widest">
                {s.catB.sub1Items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">{s.catB.sub2}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-2 font-black uppercase tracking-widest">
                {s.catB.sub2Items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">{s.catB.sub3}</h4>
              <p className="text-[10px] text-red-400 font-black uppercase leading-relaxed tracking-widest">
                {s.catB.sub3Body}
              </p>
            </div>
          </div>
        </div>

        {/* Category C */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catC.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">{s.catC.tag}</span>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">{s.catC.discTitle}</h4>
                <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed">{s.catC.discBody}</p>
              </div>
              <div>
                <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">{s.catC.prohibTitle}</h4>
                <p className="text-xs text-red-400/70 uppercase font-bold leading-relaxed">{s.catC.prohibBody}</p>
              </div>
            </div>
            <div className="p-6 bg-gfa-black border-l-4 border-gfa-gold text-xs font-bold uppercase tracking-[0.2em]">
              {s.catC.compliance}
            </div>
          </div>
        </div>

        {/* Category D */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catD.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-2 py-1">{s.catD.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">{s.catD.critTitle}</h4>
              <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed">{s.catD.critBody}</p>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/10">
              <h4 className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-4">{s.catD.rejTitle}</h4>
              <p className="text-[10px] text-red-400/60 uppercase font-black tracking-widest">{s.catD.rejBody}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
