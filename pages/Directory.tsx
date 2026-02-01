
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const Directory: React.FC = () => {
  const authorizedPrograms = [
    { name: 'Beijing Youth Cinema Academy', id: 'GFA-2024-001', status: 'Authorized', expiry: '2025-12-31' },
    { name: 'Global Talent Showcase NY', id: 'GFA-2024-005', status: 'Authorized', expiry: '2025-06-30' },
    { name: 'Emerging Actors Workshop London', id: 'GFA-2024-012', status: 'Under Review', expiry: '--' },
    { name: 'Shanghai Digital Casting Day', id: 'GFA-2023-088', status: 'Suspended', expiry: '2024-10-15' },
    { name: 'Pacific Film Arts Institute', id: 'GFA-2024-022', status: 'Authorized', expiry: '2026-01-01' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Authorized': return <span className="text-green-500 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">🟢 Authorized</span>;
      case 'Under Review': return <span className="text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">🟡 Under Review</span>;
      case 'Suspended': return <span className="text-red-500 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">🔴 Suspended</span>;
      default: return null;
    }
  };

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title="Authorized Auditions & Events" 
        subtitle="Only programs that meet GFA standards appear here." 
      />

      <div className="mb-12 flex justify-between items-center text-xs font-black uppercase tracking-[0.2em] text-gfa-gray">
        <span>Verified Registry Count: {authorizedPrograms.length}</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">🟢 Active</span>
          <span className="flex items-center gap-1">🟡 Pending</span>
          <span className="flex items-center gap-1">🔴 Inactive</span>
        </div>
      </div>

      <div className="overflow-x-auto bg-gfa-darkGray border border-white/10 shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gfa-gold/30">
              {['Organization', 'Certificate ID', 'Status', 'Expiry', 'Actions'].map(h => (
                <th key={h} className="p-6 text-[10px] font-black uppercase tracking-widest text-gfa-gold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs text-gfa-gray font-bold uppercase tracking-widest">
            {authorizedPrograms.map((prog, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                <td className="p-6 text-white">{prog.name}</td>
                <td className="p-6 font-mono text-[10px]">{prog.id}</td>
                <td className="p-6">{getStatusBadge(prog.status)}</td>
                <td className="p-6">{prog.expiry}</td>
                <td className="p-6 space-x-4">
                  <button className="text-gfa-gold hover:underline">View Pricing</button>
                  <button className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20 p-8 border border-white/5 bg-gfa-darkGray/30 text-center">
        <p className="text-[10px] text-gfa-gray uppercase tracking-widest leading-relaxed">
          If you are attending a program not listed here that uses the GFA name or logo, please verify its authorization immediately. Organizations operating without authorization are not sanctioned by GFA.
        </p>
      </div>
    </div>
  );
};

export default Directory;
