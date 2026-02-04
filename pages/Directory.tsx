
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Directory: React.FC = () => {
  const { t } = useLocale();
  const d = t.directory;

  const mockPrograms = [
    { name: t.locale === 'zh' ? "北京青少年电影学院 (总部)" : "Beijing Youth Cinema Academy (HQ)", id: "GFA-AUTH-0001", voucher: "GFA-BOND-9901", status: 'active', authenticity: 'Verified' },
    { name: t.locale === 'zh' ? "伦敦全球人才展示会" : "London Global Talent Showcase", id: "GFA-AUTH-0042", voucher: "GFA-BOND-8842", status: 'active', authenticity: 'Verified' },
    { name: t.locale === 'zh' ? "洛杉矶新兴演员研讨会" : "LA Emerging Actors Workshop", id: "GFA-AUTH-0112", voucher: "PENDING-0112", status: 'pending', authenticity: 'In Audit' },
    { name: t.locale === 'zh' ? "纽约数字试镜中心" : "NYC Digital Audition Hub", id: "GFA-AUTH-0088", voucher: "REVOKED-0088", status: 'blocked', authenticity: 'Revoked' },
  ];

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <div className="text-center mb-24">
         <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-gfa-gold/5 font-montserrat">
            Official Statutory Ledger
         </div>
         <h1 className="text-5xl md:text-7xl font-black mb-8 gold-gradient uppercase tracking-tighter font-montserrat">{d.title}</h1>
         <p className="text-gfa-gray text-lg max-w-4xl mx-auto font-medium uppercase tracking-widest">{d.subtitle}</p>
      </div>

      <div className="mb-12 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gfa-gray border-b border-white/5 pb-6">
        <span>{d.registryCount}: {mockPrograms.length}</span>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-green-500">🟢 {d.statuses.active}</span>
          <span className="flex items-center gap-2 text-red-500">🔴 {t.locale === 'zh' ? '保证金已冻结' : 'Bond Frozen'}</span>
        </div>
      </div>

      <div className="overflow-x-auto shadow-4xl border border-white/10">
        <table className="w-full text-left border-collapse bg-gfa-darkGray/50">
          <thead>
            <tr className="bg-gfa-darkGray border-y border-white/10 text-gfa-gold font-black uppercase text-[10px] tracking-[0.3em] font-montserrat">
              <th className="p-8">{t.locale === 'zh' ? '机构全称 (监管对象)' : 'Organization'}</th>
              <th className="p-8">{t.locale === 'zh' ? '保证金凭证' : 'Bond Voucher'}</th>
              <th className="p-8">{t.locale === 'zh' ? '真伪核验' : 'Authenticity'}</th>
              <th className="p-8">{t.locale === 'zh' ? '准入 ID' : 'Admission ID'}</th>
              <th className="p-8 text-right">State Status</th>
            </tr>
          </thead>
          <tbody className="text-[10px] font-black uppercase tracking-widest text-white">
            {mockPrograms.map((prog, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-8">
                   <div className="font-bold text-sm tracking-tight">{prog.name}</div>
                   <div className="text-[8px] text-gfa-gray opacity-50 mt-1 uppercase font-montserrat">State Audited Entity</div>
                </td>
                <td className="p-8">
                   <span className={`font-mono ${prog.status === 'active' ? 'text-green-500' : 'text-orange-500'}`}>{prog.voucher}</span>
                </td>
                <td className="p-8">
                   <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${prog.status === 'active' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`}></span>
                      {prog.authenticity}
                   </div>
                </td>
                <td className="p-8 font-mono text-gfa-gold">{prog.id}</td>
                <td className="p-8 text-right">
                  <span className={`px-4 py-1 border font-black uppercase text-[8px] ${prog.status === 'active' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 'border-red-500/30 text-red-500 bg-red-500/5'}`}>
                     {prog.status === 'active' ? 'COMPLIANT' : 'RISK'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-24 p-12 border border-gfa-gold/20 bg-gfa-darkGray/30 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold"></div>
        <p className="text-[11px] text-gfa-gray uppercase tracking-[0.4em] leading-loose max-w-4xl mx-auto italic font-bold">
          {t.locale === 'zh' ? '协助州政府郑重声明：只有已足额缴纳 5 万美金保证金并完成州政府实地真伪核验的机构方可在此名录展示。违者必究。' : d.note}
        </p>
      </div>
    </div>
  );
};

export default Directory;
