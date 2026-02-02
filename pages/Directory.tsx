import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { useLocale } from '../App';

const Directory: React.FC = () => {
  const { t } = useLocale();
  const d = t.directory;

  const mockPrograms = [
    { name: "Beijing Youth Cinema Academy", id: "GFA-2026-0001", status: 'active', expiry: "2026-12-31" },
    { name: "London Global Talent Showcase", id: "GFA-2026-0042", status: 'active', expiry: "2026-06-30" },
    { name: "LA Emerging Actors Workshop", id: "GFA-2025-0112", status: 'pending', expiry: "--" },
    { name: "NYC Digital Audition Hub", id: "GFA-2024-0088", status: 'blocked', expiry: "2024-11-20" },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active': return <span className="bg-green-500/10 text-green-500 border border-green-500/30 px-3 py-1 text-[8px] font-black uppercase">🟢 {d.statuses.active}</span>;
      case 'pending': return <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-3 py-1 text-[8px] font-black uppercase">🟡 {d.statuses.pending}</span>;
      case 'blocked': return <span className="bg-red-500/10 text-red-500 border border-red-500/30 px-3 py-1 text-[8px] font-black uppercase">🔴 {d.statuses.blocked}</span>;
      default: return <span className="bg-gray-500/10 text-gray-500 border border-gray-500/30 px-3 py-1 text-[8px] font-black uppercase">⚫ {d.statuses.rev}</span>;
    }
  };

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={d.title} 
        subtitle={d.subtitle} 
      />

      <div className="mb-12 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gfa-gray border-b border-white/5 pb-4">
        <span>{d.registryCount}: {mockPrograms.length}</span>
        <div className="flex gap-6">
          <span className="flex items-center gap-2">🟢 {d.statuses.active}</span>
          <span className="flex items-center gap-2">🟡 {d.statuses.pending}</span>
          <span className="flex items-center gap-2">🔴 {d.statuses.blocked}</span>
        </div>
      </div>

      <div className="overflow-x-auto shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gfa-darkGray border-y border-white/10 text-gfa-gold font-black uppercase text-[10px] tracking-widest">
              {d.tableHeaders.map((header, i) => (
                <th key={i} className="p-6">{header}</th>
              ))}
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[10px] font-black uppercase tracking-widest text-white">
            {mockPrograms.map((prog, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6">{prog.name}</td>
                <td className="p-6 font-mono text-gfa-gold">{prog.id}</td>
                <td className="p-6">{getStatusBadge(prog.status)}</td>
                <td className="p-6 text-gfa-gray">{prog.expiry}</td>
                <td className="p-6 text-right space-x-4">
                  <button className="text-gfa-gold hover:underline">Info</button>
                  <button className="text-red-500/50 hover:text-red-500">Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 p-8 border border-white/5 bg-gfa-darkGray/30 text-center">
        <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
          {d.note}
        </p>
      </div>
    </div>
  );
};

export default Directory;