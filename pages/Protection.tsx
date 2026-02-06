
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const Protection: React.FC = () => {
  const { t } = useLocale();
  const pr = t.protection;

  const officialCAInks = [
    { 
      name: t.locale === 'zh' ? '加州经纪执照在线查验 (DIR/DLSE)' : 'Official CA Talent Agency License Search', 
      url: 'https://www.dir.ca.gov/dlse/Talent_Agency_License.html',
      type: 'AGENCY',
      desc: t.locale === 'zh' ? '核实经纪公司是否持有加州劳工部颁发的合法执照。没有执照的经纪是非法的。' : 'Verify if an agency holds a valid DLSE license. Unlicensed agencies are illegal in California.'
    },
    { 
      name: t.locale === 'zh' ? '5 万美金法定保证金名录 (培训/学校)' : 'CA $50,000 Bonded Services Registry', 
      url: 'https://www.dir.ca.gov/dlse/Fee-Related_Talent_Services.html',
      type: 'BOND',
      desc: t.locale === 'zh' ? '查询所有在加州劳工部缴纳 5 万美金保证金的培训学校和摄影工作室。' : 'Search for schools, photo studios, and services that have posted the mandatory $50k bond.'
    },
    { 
      name: t.locale === 'zh' ? '加州未成年人工作许可在线验证' : 'Minor Entertainment Work Permit Verification', 
      url: 'https://permits.dir.ca.gov/ewp/',
      type: 'PERMIT',
      desc: t.locale === 'zh' ? '在线核实孩子的娱乐行业工作许可证状态，确保片场工作合法。' : 'Verify the validity of a minor\'s work permit to ensure legal employment on set.'
    }
  ];

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <SectionHeading 
        title={pr.title} 
        subtitle={pr.subtitle} 
      />

      {/* 1. PARENTAL VERIFICATION WIZARD (Toolkit) */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] gold font-montserrat">
            {t.locale === 'zh' ? '家长核实工具包：三步确认合法性' : 'Parental Toolkit: 3 Steps to Verify Legality'}
          </h3>
          <p className="text-gfa-gray text-[10px] uppercase tracking-widest mt-4 font-bold opacity-60">
            {t.locale === 'zh' ? '不要轻易交费，先核实以下法定资质' : 'Do not pay any fees before verifying these statutory requirements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 border-t-4 border-gfa-gold rounded-lg flex flex-col">
            <div className="text-3xl mb-6">🏢</div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-4">
              {t.locale === 'zh' ? '1. 确认机构是否真实' : '1. Verify Institution'}
            </h4>
            <p className="text-[10px] text-gfa-gray leading-relaxed flex-grow uppercase font-bold opacity-70">
              {t.locale === 'zh' ? '检查是否有真实的办公地址，而非仅仅是酒店试镜。合法的经纪公司必须有经审计的实体经营场所。' : 'Check for a physical office. Legal agencies must have audited premises, not just temporary hotel auditions.'}
            </p>
          </div>
          <div className="glass-panel p-8 border-t-4 border-gfa-gold rounded-lg flex flex-col">
            <div className="text-3xl mb-6">💰</div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-4">
              {t.locale === 'zh' ? '2. 查验 5 万美金保证金' : '2. Check $50k Bond'}
            </h4>
            <p className="text-[10px] text-gfa-gray leading-relaxed flex-grow uppercase font-bold opacity-70">
              {t.locale === 'zh' ? '根据加州 Krekorian 法案，任何收费培训机构必须在劳工部缴纳 5 万美金保证金。未缴纳者即为违法。' : 'Per the Krekorian Act, any fee-charging school must maintain a $50,000 bond. No bond means an illegal operation.'}
            </p>
          </div>
          <div className="glass-panel p-8 border-t-4 border-gfa-gold rounded-lg flex flex-col">
            <div className="text-3xl mb-6">📜</div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-4">
              {t.locale === 'zh' ? '3. 核对经纪执照' : '3. Verify License'}
            </h4>
            <p className="text-[10px] text-gfa-gray leading-relaxed flex-grow uppercase font-bold opacity-70">
              {t.locale === 'zh' ? '经纪人必须持有 DLSE 颁发的 Talent Agency License。试镜本身绝对不能收取任何费用。' : 'Agents must hold a DLSE Talent Agency License. Auditions MUST ALWAYS be free of charge.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. DIRECT CA GOV DATABASE LINKS (The Search Portal) */}
      <div className="mb-20 bg-gfa-darkGray/30 p-10 border border-gfa-gold/20 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/5 blur-3xl -mr-16 -mt-16"></div>
        <div className="text-center mb-12 relative z-10">
          <div className="inline-block px-3 py-1 border border-gfa-gold/30 text-gfa-gold text-[8px] font-black uppercase tracking-[0.4em] mb-4 bg-gfa-gold/5 font-montserrat">
            STATE OF CALIFORNIA • DIR OFFICIAL DATABASES
          </div>
          <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter gold font-montserrat">
            {t.locale === 'zh' ? '加州政府官方查验入口' : 'Official CA Gov Search Portal'}
          </h3>
          <p className="text-[10px] text-gfa-gray uppercase tracking-widest mt-2 font-bold opacity-50">
            {t.locale === 'zh' ? '以下链接直接跳转至加州劳工部 (DIR) 官方实时名录' : 'These links redirect to live Department of Industrial Relations registries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {officialCAInks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gfa-black/50 p-6 border border-white/5 hover:border-gfa-gold/50 transition-all flex flex-col shadow-xl rounded-md"
            >
              <div className="text-gfa-gold font-black text-[8px] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {link.type} DATABASE
              </div>
              <h4 className="text-white font-black uppercase text-[11px] tracking-widest mb-4 border-b border-white/5 pb-3 leading-snug">
                {link.name}
              </h4>
              <p className="text-gfa-gray text-[10px] leading-relaxed opacity-60 flex-grow mb-6 uppercase tracking-wider font-bold">
                {link.desc}
              </p>
              <div className="flex items-center gap-3 text-gfa-gold text-[9px] font-black uppercase tracking-widest">
                {t.locale === 'zh' ? '进入官方系统搜索' : 'Search Database'} 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. CALIFORNIA IRONCLAD RULES (Zero Tolerance) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <div className="bg-white/5 border border-white/10 p-10 rounded-lg">
          <h4 className="text-lg font-black text-white uppercase tracking-widest mb-6 font-montserrat">
            {t.locale === 'zh' ? '加州法律合规红线' : 'California Legal Compliance Rules'}
          </h4>
          <ul className="space-y-4">
            {[
              t.locale === 'zh' ? '试镜收费：任何以试镜、面试名义收取的费用均为非法。' : 'Audition Fees: Charging for an audition is a statutory violation.',
              t.locale === 'zh' ? '承诺角色：任何承诺“必进组/必拿角色”的宣传均为欺诈。' : 'Guaranteed Roles: Promises of casting are legally defined as fraud.',
              t.locale === 'zh' ? '影子机构：没有固定办公地址、仅在咖啡厅/酒店会面的机构存在极高安全风险。' : 'Shadow Offices: Agencies without a fixed physical address are high-risk.',
              t.locale === 'zh' ? '未缴保证金：收费却无法提供 5 万美金保证金凭证的机构将被上报取缔。' : 'Unbonded Services: Charging fees without a $50k bond is an illegal act.'
            ].map((rule, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-gfa-gold font-bold">✓</span>
                <span className="text-[10px] text-gfa-gray uppercase font-black tracking-widest leading-relaxed opacity-80">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-in px-6">
          <h3 className="text-xl md:text-2xl font-black mb-6 gold uppercase tracking-tighter leading-tight font-montserrat">
            {t.locale === 'zh' ? '守护加州未来，从核实开始' : 'Protecting California\'s Future'}
          </h3>
          <p className="text-gfa-gray text-base mb-8 leading-relaxed uppercase font-medium tracking-wider border-l-2 border-gfa-gold/30 pl-6 opacity-80">
            {t.locale === 'zh' ? 'GFA 协助家长通过官方渠道识破行业骗局。加州法律赋予您查验每一分钱去向、查验每一份保证金状态的权利。' : 'GFA empowers parents to see through industry scams. California law gives you the right to verify every bond and every license.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pr.modelItems.map(i => (
              <div key={i} className="flex items-center gap-3 bg-gfa-darkGray/50 p-4 border border-white/5 group hover:border-gfa-gold/30 transition-all rounded-md">
                <span className="text-gfa-gold text-base">✓</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/80 leading-tight">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FINAL ACTIONS */}
      <div className="text-center p-12 border border-white/5 bg-gfa-darkGray/20 rounded-xl">
         <h4 className="text-lg font-black mb-6 uppercase tracking-widest text-white font-montserrat">
           {t.locale === 'zh' ? '您的孩子是否在接受不安全的代理？' : 'Is your Agent or School Legal?'}
         </h4>
         <p className="text-gfa-gray text-[10px] mb-10 uppercase tracking-widest font-bold opacity-60 max-w-2xl mx-auto leading-loose">
           {t.locale === 'zh' ? '如果您怀疑所处机构未缴纳 5 万美金保证金或无照经营，请立即查验并报告。' : 'If you suspect an entity lacks the mandatory $50k bond or license, verify it now and report violations immediately.'}
         </p>
         <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/verify" 
              className="bg-gfa-gold text-gfa-black px-12 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl rounded-md"
            >
              {t.common.searchRegistry}
            </Link>
            <Link 
              to="/reporting" 
              className="border border-white/20 text-white px-12 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all rounded-md"
            >
              {t.locale === 'zh' ? '向 GFA 反馈违规机构' : 'Provide Feedback to GFA'}
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Protection;
