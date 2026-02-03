
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
        {/* Category A: Auditions */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catA.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1">{s.catA.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">{s.catA.docsTitle}</h4>
              <ul className="space-y-3 text-[11px] text-gfa-gray font-bold uppercase tracking-wider">
                {s.catA.docs.map((d, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-gfa-gold">☐</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 border-l-2 border-gfa-gold pl-3">{s.catA.matrixTitle}</h4>
              <p className="text-xs text-gfa-gray leading-loose mb-6 font-medium uppercase tracking-widest">{s.catA.matrixBody}</p>
              <div className="p-6 bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-widest">
                {s.catA.disqual}
              </div>
            </div>
          </div>
        </div>

        {/* Category B: Training Providers */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catB.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1">{s.catB.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">{s.catB.sub1}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-3 font-black uppercase tracking-widest">
                {s.catB.sub1Items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4 opacity-50">{s.catB.sub2}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-3 font-black uppercase tracking-widest">
                {s.catB.sub2Items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4 opacity-50">{t.locale === 'zh' ? '通过标准' : 'Passing Threshold'}</h4>
              <p className="text-[10px] text-white font-black uppercase leading-loose tracking-widest p-4 border border-gfa-gold/30">
                {s.catB.sub3Body}
              </p>
            </div>
          </div>
        </div>

        {/* Category C: Agencies */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catC.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1">{s.catC.tag}</span>
          </div>
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">{s.catC.discTitle}</h4>
                <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed tracking-widest opacity-80">{s.catC.discBody}</p>
              </div>
              <div>
                <h4 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-4">{s.catC.prohibTitle}</h4>
                <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed tracking-widest opacity-80">{s.catC.prohibBody}</p>
              </div>
            </div>
            <div className="p-6 bg-gfa-black border-l-4 border-gfa-gold text-xs font-black uppercase tracking-[0.2em]">
              {s.catC.compliance}
            </div>
          </div>
        </div>

        {/* Category D: Events */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{s.catD.title}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1">{s.catD.tag}</span>
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-4">{s.catD.critTitle}</h4>
              <p className="text-xs text-gfa-gray uppercase font-bold leading-relaxed tracking-widest opacity-80">{s.catD.critBody}</p>
            </div>
            <div className="p-8 bg-gfa-black border border-white/10 text-center">
              <h4 className="text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-6">{t.locale === 'zh' ? '反向审计 (Reverse Audit)' : 'Reverse Audit Protocol'}</h4>
              <p className="text-[10px] text-gfa-gray uppercase font-black tracking-[0.2em] leading-loose">{s.catD.rejBody}</p>
            </div>
          </div>
        </div>

        {/* Production Unit (Standardized Template) */}
        <div className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-gfa-gold/10 px-10 py-4 border-b border-gfa-gold/20 flex justify-between items-center">
            <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold">{t.locale === 'zh' ? '认证制作单位标准 (Production)' : 'Certified Production Unit'}</h3>
            <span className="text-[10px] font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1">Unit SOP</span>
          </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 opacity-50">{t.locale === 'zh' ? '法律与保险' : 'Legal & Insurance'}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-4 font-black uppercase tracking-widest">
                <li>• {t.locale === 'zh' ? '主体公司合法存续' : 'Corporate Legal Status'}</li>
                <li>• {t.locale === 'zh' ? '片场第三方责任险' : 'On-set Liability Insurance'}</li>
                <li>• {t.locale === 'zh' ? '突发安全预案' : 'Emergency Safety Plan'}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 opacity-50">{t.locale === 'zh' ? '用工规范' : 'Labor Standards'}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-4 font-black uppercase tracking-widest">
                <li>• {t.locale === 'zh' ? '所有职员合同齐全' : 'Standardized Contracts'}</li>
                <li>• {t.locale === 'zh' ? '工时与结算周期明确' : 'Clear Payment Cycles'}</li>
                <li>• {t.locale === 'zh' ? '肖像与版权授权' : 'IP & Portrait Release'}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 opacity-50">{t.locale === 'zh' ? '未成年人保护' : 'Minor Protection'}</h4>
              <ul className="text-[10px] text-gfa-gray space-y-4 font-black uppercase tracking-widest">
                <li>• {t.locale === 'zh' ? '监护人全程陪同制度' : 'Mandatory Guardian Presence'}</li>
                <li>• {t.locale === 'zh' ? '受限拍摄时长' : 'Work Hour Restrictions'}</li>
                <li>• {t.locale === 'zh' ? '餐饮与休息区保障' : 'Facility & Break Standards'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
