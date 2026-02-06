
import React, { useState } from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const Directory: React.FC = () => {
  const { t } = useLocale();
  const d = t.directory;
  const [searchTerm, setSearchTerm] = useState('');

  const mockRegistry = [
    { name: "Beijing Youth Cinema Academy (HQ)", id: "GFA-AUTH-0001", voucher: "GFA-BOND-9901", status: 'active', audit: 'Passed 2024', type: 'Training', period: '2024-2025' },
    { name: "London Global Talent Showcase", id: "GFA-AUTH-0042", voucher: "GFA-BOND-8842", status: 'active', audit: 'Passed 2024', type: 'Event', period: '2024-2025' },
    { name: "Hollywood Star Agency", id: "GFA-AUTH-1022", voucher: "GFA-BOND-1022", status: 'active', audit: 'Passed 2024', type: 'Agency', period: '2024-2025' },
    { name: "NYC Digital Audition Hub", id: "GFA-AUTH-0088", voucher: "REVOKED-0088", status: 'rev', audit: 'Revoked May 2024', type: 'Casting', period: 'N/A' },
    { name: "Paris Fashion Models", id: "GFA-AUTH-2041", voucher: "GFA-BOND-2041", status: 'active', audit: 'Passed 2024', type: 'Modeling', period: '2023-2025' },
    { name: "LA Emerging Actors Workshop", id: "GFA-AUTH-0112", voucher: "PENDING-0112", status: 'pending', audit: 'In Progress', type: 'Training', period: '2024-2025' },
  ];

  const filtered = mockRegistry.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.voucher.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-grid-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
         <div className="inline-block px-4 py-1 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-gfa-gold/5 font-montserrat">
            Official Certification Portal
         </div>
         <h1 className="text-5xl md:text-6xl font-black mb-8 gold-gradient uppercase tracking-tighter font-montserrat">{d.title}</h1>
         <p className="text-gfa-gray text-lg max-w-4xl mx-auto font-medium uppercase tracking-widest">{d.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search by Entity Name, Certification Number, or Bond ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gfa-darkGray border border-gfa-gold/20 p-6 text-white text-base focus:outline-none focus:border-gfa-gold transition-all rounded-md shadow-2xl uppercase tracking-widest font-bold font-mono"
          />
          <div className="absolute top-0 right-0 h-full px-8 flex items-center text-gfa-gold opacity-50 group-hover:opacity-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      <div className="mb-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gfa-gray border-b border-white/5 pb-6 gap-6">
        <span>{d.registryCount}: {filtered.length}</span>
        <div className="flex flex-wrap justify-center gap-8">
          <span className="flex items-center gap-2 text-green-500"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ACTIVE</span>
          <span className="flex items-center gap-2 text-orange-500">🟠 PENDING</span>
          <span className="flex items-center gap-2 text-red-500">🔴 REVOKED</span>
        </div>
      </div>

      <div className="overflow-x-auto shadow-4xl border border-white/10 rounded-lg">
        <table className="w-full text-left border-collapse bg-gfa-darkGray/50 backdrop-blur-md">
          <thead>
            <tr className="bg-gfa-darkGray/80 border-y border-white/10 text-gfa-gold font-black uppercase text-[10px] tracking-[0.3em] font-montserrat">
              <th className="p-8">{d.tableHeaders[0]}</th>
              <th className="p-8">Validity Period</th>
              <th className="p-8">{d.tableHeaders[2]}</th>
              <th className="p-8">{d.tableHeaders[3]}</th>
              <th className="p-8 text-right">{d.tableHeaders[4]}</th>
            </tr>
          </thead>
          <tbody className="text-[10px] font-black uppercase tracking-widest text-white">
            {filtered.map((prog, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                <td className="p-8">
                   <div className="font-bold text-sm tracking-tight group-hover:text-gfa-gold transition-colors">{prog.name}</div>
                   <div className="micro-text text-gfa-gray opacity-50 mt-1 uppercase font-montserrat">ID: {prog.id}</div>
                   <div className="micro-text text-gfa-gold opacity-50 mt-1 uppercase font-montserrat">Bond: {prog.voucher}</div>
                </td>
                <td className="p-8 text-gfa-gray">
                   {prog.period}
                </td>
                <td className="p-8">
                   <div className="micro-text font-black uppercase tracking-widest px-3 py-1 bg-white/5 inline-block rounded border border-white/5">
                      {prog.type}
                   </div>
                </td>
                <td className="p-8">
                   <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${prog.status === 'active' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : prog.status === 'rev' ? 'bg-red-500' : 'bg-orange-500'}`}></span>
                      {prog.status.toUpperCase()}
                   </div>
                </td>
                <td className="p-8 text-right">
                  <div className="text-white font-bold">{prog.audit}</div>
                  <div className="micro-text text-red-500 uppercase mt-1 opacity-50">Complaint: None</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-24 p-12 border border-gfa-gold/20 bg-gfa-darkGray/30 text-center relative overflow-hidden rounded-xl">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold"></div>
        <p className="text-[11px] text-gfa-gray uppercase tracking-[0.4em] leading-loose max-w-4xl mx-auto italic font-bold">
          Transparency builds trust. If you find discrepancies, please report them to our compliance office.
        </p>
      </div>
    </div>
  );
};

export default Directory;
