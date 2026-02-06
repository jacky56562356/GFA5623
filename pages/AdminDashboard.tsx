
import React from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const AdminDashboard = () => {
  const { t } = useLocale();

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <span className="text-gfa-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block opacity-60 italic">Internal Compliance Division</span>
            <h1 className="gold uppercase text-5xl md:text-7xl leading-tight tracking-tighter">Admin Control</h1>
          </div>
          <div className="flex gap-4">
            <span className="bg-gfa-gold/10 border border-gfa-gold/20 text-[9px] font-black text-gfa-gold px-8 py-4 uppercase tracking-widest">Master Access</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-4">
             <div className="bg-gfa-darkGray border border-white/10 p-8 space-y-4">
                <nav className="space-y-2">
                   <button className="w-full text-left p-4 bg-gfa-gold text-gfa-black text-[10px] font-black uppercase tracking-widest">Pending Audits (12)</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Registry Control</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Intake Queue (3)</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Scoring Logic</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">System Analytics</button>
                </nav>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Total Organizations</h5>
                   <div className="text-4xl font-black text-white">412</div>
                </div>
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Active Accreditations</h5>
                   <div className="text-4xl font-black text-white">86</div>
                </div>
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-6">Suspended Status</h5>
                   <div className="text-4xl font-black text-white/40">14</div>
                </div>
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Renewal Alert</h5>
                   <div className="text-4xl font-black text-white">31</div>
                </div>
             </div>

             <div className="bg-gfa-darkGray/40 border border-white/10 p-12">
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-10 border-b border-white/5 pb-4">Audit Review Queue</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-center p-8 bg-white/5 border border-white/5 rounded-sm hover:border-gfa-gold/30 transition-all group">
                      <div className="flex gap-10 items-center">
                         <div className="w-12 h-12 bg-gfa-black border border-white/10 flex items-center justify-center text-xl">🏫</div>
                         <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-white">San Fran Film Collective</h5>
                            <p className="text-[9px] text-gfa-gray uppercase font-black tracking-widest mt-2 opacity-50">Submitted: 20 Mar 2024 • Tier: Certified</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="bg-gfa-gold/10 border border-gfa-gold/30 text-[9px] font-black text-gfa-gold px-6 py-3 uppercase tracking-widest hover:bg-gfa-gold hover:text-gfa-black transition-all">Open Review</button>
                         <button className="bg-white/5 border border-white/10 text-[9px] font-black text-white/40 px-6 py-3 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all">Dismiss</button>
                      </div>
                   </div>
                   <div className="flex justify-between items-center p-8 bg-white/5 border border-white/5 rounded-sm hover:border-gfa-gold/30 transition-all group opacity-60">
                      <div className="flex gap-10 items-center">
                         <div className="w-12 h-12 bg-gfa-black border border-white/10 flex items-center justify-center text-xl">⭐</div>
                         <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-white">Tokyo Motion Lab</h5>
                            <p className="text-[9px] text-gfa-gray uppercase font-black tracking-widest mt-2 opacity-50">Submitted: 18 Mar 2024 • Tier: Verified</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="bg-gfa-gold/10 border border-gfa-gold/30 text-[9px] font-black text-gfa-gold px-6 py-3 uppercase tracking-widest">Open Review</button>
                         <button className="bg-white/5 border border-white/10 text-[9px] font-black text-white/40 px-6 py-3 uppercase tracking-widest">Dismiss</button>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white/5 border border-white/10 p-12">
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-10 border-b border-white/5 pb-4">Institutional Intake Feed (Recent)</h3>
                <div className="space-y-4">
                   <div className="bg-gfa-black/60 p-8 border border-white/5 flex flex-col gap-6">
                      <div className="flex justify-between items-start">
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-white">Case #INT-2024-811: Starlight Mgmt</h5>
                         <span className="bg-gfa-gold/10 text-[8px] text-gfa-gold font-black tracking-widest px-3 py-1">PRIORITY: HIGH</span>
                      </div>
                      <p className="text-[10px] text-gfa-gray uppercase tracking-widest opacity-60 leading-relaxed italic">"Concerns reported regarding minor supervision protocols during London pilot audition session. Evidence attached."</p>
                      <div className="flex gap-4 pt-4 border-t border-white/5">
                         <button className="text-[9px] font-black uppercase tracking-widest text-gfa-gold hover:underline">Update Registry Score</button>
                         <button className="text-[9px] font-black uppercase tracking-widest text-white hover:underline">Forward to Compliance Lead</button>
                      </div>
                   </div>
                </div>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
