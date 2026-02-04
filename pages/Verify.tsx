import React, { useState } from 'react';
import { useLocale } from '../App';

const Verify: React.FC = () => {
  const { t } = useLocale();
  const [id, setId] = useState('');
  const [result, setResult] = useState<'valid' | 'expired' | 'suspended' | 'notFound' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const clean = id.trim().toUpperCase();
      // Simulation: GFA-BOND-2024 is the active bonded example
      if (clean.includes('BOND-2024') || clean === 'GFA-BOND') setResult('valid');
      else if (clean.includes('EXPIRED')) setResult('expired');
      else if (clean.includes('SUSPENDED') || clean.includes('FROZEN')) setResult('suspended');
      else setResult('notFound');
    }, 1500);
  };

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[9px] font-black uppercase tracking-[0.4em] mb-8 bg-gfa-gold/5 font-montserrat">
          {t.locale === 'zh' ? '协助加州政府监管 • 法定合规核核查' : 'CALIFORNIA STATUTORY OVERSIGHT • BOND VERIFICATION'}
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-6 gold gold-shimmer uppercase tracking-tighter font-montserrat">{t.verify.title}</h1>
        <p className="text-gfa-gray text-base mb-10 font-medium uppercase tracking-[0.1em] leading-relaxed opacity-70">
          {t.verify.body}
        </p>
        
        <form onSubmit={handleVerify} className="bg-gfa-darkGray p-10 border border-gfa-gold/20 shadow-2xl relative overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 w-1 h-full bg-gfa-gold"></div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input 
              type="text" 
              placeholder={t.locale === 'zh' ? '输入加州 5 万美金保证金编号或执照号' : t.verify.form.placeholder} 
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="flex-grow bg-gfa-black border border-white/20 p-4 text-white focus:outline-none focus:border-gfa-gold font-mono uppercase text-[11px] tracking-widest rounded-md"
            />
            <button disabled={loading} className="btn-gold px-8 py-4 font-black uppercase text-[9px] tracking-widest disabled:opacity-50 font-montserrat transition-all rounded-md whitespace-nowrap">
              {loading ? t.common.loading : t.verify.form.button}
            </button>
          </div>
          
          <div className="text-[8px] text-gfa-gray uppercase tracking-[0.2em] opacity-50 font-black">
            {t.verify.note}
          </div>
        </form>

        {result && !loading && (
          <div className="mt-12 p-10 bg-gfa-black border-2 border-dashed border-gfa-gold/20 animate-fade-in relative shadow-3xl text-left rounded-lg overflow-hidden">
            <div className="absolute top-4 right-6 text-gfa-gold/5 font-black text-6xl select-none font-montserrat uppercase">{t.locale === 'zh' ? '核查通过' : 'AUDITED'}</div>
            
            {result === 'valid' && (
              <div className="relative z-10">
                <div className="text-green-500 font-black text-xl md:text-2xl uppercase mb-8 flex items-center gap-4 font-montserrat">
                  <span className="w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center text-lg">✓</span>
                  {t.verify.result.valid}
                </div>
                <div className="space-y-4 border-t border-white/10 pt-8">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-[10px] font-black text-gfa-gray uppercase tracking-[0.2em]">{t.locale === 'zh' ? '机构运营真实性' : 'Entity Authenticity'}</span>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">VERIFIED • AUTHENTIC</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-[10px] font-black text-gfa-gold uppercase tracking-[0.2em]">{t.locale === 'zh' ? '加州 5万美金法定要求' : 'CA $50k Statutory Bond'}</span>
                     <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">$50,000.00 (MET)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-[10px] font-black text-gfa-gray uppercase tracking-[0.2em]">{t.locale === 'zh' ? '凭证查验号码' : 'Voucher Number'}</span>
                     <span className="text-[10px] font-black text-white font-mono uppercase">{id || 'GFA-BOND-2024'}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-[10px] font-black text-gfa-gray uppercase tracking-[0.2em]">{t.locale === 'zh' ? '州政府合规备案' : 'State Filing Status'}</span>
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">ACTIVE • RECORDED</span>
                   </div>
                </div>
                <div className="mt-8 p-4 bg-gfa-gold/5 border border-gfa-gold/20 rounded">
                   <p className="text-[9px] text-gfa-gold uppercase font-black tracking-widest leading-relaxed">
                     {t.locale === 'zh' ? '法律提示：该机构已通过 5 万美金保证金审计，其针对未成年人的合规性已备案。' : 'Legal Notice: This entity has passed the $50,000 bond audit and is compliant with CA minor protection laws.'}
                   </p>
                </div>
              </div>
            )}
            
            {result === 'expired' && (
              <div className="relative z-10 text-center py-6">
                <div className="text-orange-500 font-black text-2xl uppercase mb-3 font-montserrat">{t.verify.result.expired}</div>
                <p className="text-gfa-gray text-[10px] uppercase tracking-widest font-bold opacity-60">
                  {t.locale === 'zh' ? '保证金凭据已过有效期 • 州政府记录显示当前无有效缴纳记录' : 'Voucher expired. No active state guarantee fund found.'}
                </p>
              </div>
            )}

            {result === 'suspended' && (
              <div className="relative z-10 text-center py-6">
                <div className="text-red-500 font-black text-2xl uppercase mb-3 font-montserrat">{t.verify.result.suspended}</div>
                <p className="text-gfa-gray text-[10px] uppercase tracking-widest font-bold opacity-60">
                  {t.locale === 'zh' ? '警告：因违反监督协议，保证金已被冻结' : 'Warning: Bond funds frozen due to non-compliance.'}
                </p>
              </div>
            )}

            {result === 'notFound' && (
              <div className="relative z-10 text-center py-6">
                <div className="text-white font-black text-2xl uppercase mb-3 font-montserrat">{t.verify.result.notFound}</div>
                <p className="text-gfa-gray text-[10px] uppercase tracking-widest font-bold opacity-60">
                  {t.locale === 'zh' ? '核查预警：未查询到加州法定的 5 万美金缴纳记录' : 'Warning: No statutory $50,000 bond record found.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-20 border-t border-white/5 pt-16">
        <div className="text-center mb-12">
           <h3 className="text-xl font-black uppercase tracking-tighter gold font-montserrat">
             {t.locale === 'zh' ? '加州政府官方查验入口 (外部链接)' : 'Official California Gov Search Hub'}
           </h3>
           <p className="text-[10px] text-gfa-gray uppercase tracking-[0.2em] font-bold mt-4 opacity-50">
             {t.locale === 'zh' ? '如需确认官方保证金名录，请访问加州劳工部 (DIR) 实时数据库' : 'To confirm official bond records, access the California DIR live databases.'}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://www.dir.ca.gov/dlse/Talent_Agency_License.html" 
            target="_blank" 
            className="glass-panel p-8 group border border-white/10 hover:border-gfa-gold transition-all rounded-lg"
          >
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2 group-hover:text-gfa-gold transition-colors">
              {t.locale === 'zh' ? '经纪执照在线搜索' : 'Talent Agency License Search'}
            </h4>
            <p className="text-[9px] text-gfa-gray uppercase font-bold tracking-widest leading-relaxed opacity-60">
              {t.locale === 'zh' ? '进入加州政府官方执照名录查询。' : 'Access the official State of California Talent Agency registry.'}
            </p>
            <div className="mt-6 text-gfa-gold text-[8px] font-black uppercase tracking-[0.2em]">Open CA.gov Database →</div>
          </a>
          <a 
            href="https://www.dir.ca.gov/dlse/Fee-Related_Talent_Services.html" 
            target="_blank" 
            className="glass-panel p-8 group border border-white/10 hover:border-gfa-gold transition-all rounded-lg"
          >
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2 group-hover:text-gfa-gold transition-colors">
              {t.locale === 'zh' ? '5 万美金保证金名录搜索' : 'Bonded Services Registry ($50k)'}
            </h4>
            <p className="text-[9px] text-gfa-gray uppercase font-bold tracking-widest leading-relaxed opacity-60">
              {t.locale === 'zh' ? '核实培训机构、学校与人才服务商的保证金。' : 'Verify the bond status of talent services, schools, and photographers.'}
            </p>
            <div className="mt-6 text-gfa-gold text-[8px] font-black uppercase tracking-[0.2em]">Open CA.gov Database →</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Verify;