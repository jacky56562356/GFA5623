
import React from 'react';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const MemberPortal = () => {
  const { t } = useLocale();

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <span className="text-gfa-gold font-black uppercase tracking-[0.5em] text-[10px] mb-6 block opacity-60 italic">Certified Organization Access</span>
            <h1 className="gold uppercase text-5xl md:text-7xl leading-tight tracking-tighter">Portal Access</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/5 border border-white/10 text-[9px] font-black text-white px-8 py-4 uppercase tracking-widest hover:bg-white/10 transition-all">Support Desk</button>
            <button className="bg-white/5 border border-white/10 text-[9px] font-black text-white px-8 py-4 uppercase tracking-widest hover:bg-white/10 transition-all">Log Out</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-4">
             <div className="bg-gfa-darkGray border border-white/10 p-8 space-y-6">
                <div className="text-center pb-6 border-b border-white/5">
                   <div className="w-20 h-20 bg-gfa-black border border-gfa-gold/30 rounded-sm mx-auto mb-4 flex items-center justify-center text-3xl">🏢</div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-white">Elite Academy</h4>
                   <p className="text-[8px] text-gfa-gold uppercase font-black tracking-widest mt-1">Tier: Accredited</p>
                </div>
                <nav className="space-y-2">
                   <button className="w-full text-left p-4 bg-gfa-gold text-gfa-black text-[10px] font-black uppercase tracking-widest">Profile Control</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Document Bank</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Renewal Center</button>
                   <button className="w-full text-left p-4 text-gfa-gray text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Transparency Scores</button>
                </nav>
             </div>
             <div className="bg-red-950/20 border border-red-500/20 p-6">
                <h5 className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-3">Compliance Alerts</h5>
                <p className="text-[8px] text-red-200/50 uppercase tracking-widest leading-relaxed">No active alerts. Safeguarding policies are current.</p>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Trust Indicator</h5>
                   <div className="text-4xl font-black text-white font-serif">98<span className="text-sm opacity-30">/100</span></div>
                   <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-4">Grade: A+</p>
                </div>
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Certification ID</h5>
                   <div className="text-2xl font-black text-white font-mono">GFA-AUTH-00101</div>
                   <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-4">Status: Active</p>
                </div>
                <div className="bg-gfa-darkGray/40 border border-white/10 p-8">
                   <h5 className="text-[9px] font-black uppercase tracking-widest text-gfa-gold mb-6">Expiry Date</h5>
                   <div className="text-2xl font-black text-white">31 DEC 2026</div>
                   <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-4">Renewal: 18 Months Remaining</p>
                </div>
             </div>

             <div className="bg-gfa-darkGray/40 border border-white/10 p-12">
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-10 border-b border-white/5 pb-4">Document Management</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-sm group hover:border-gfa-gold/30 transition-all">
                      <div>
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-white">Minor Safeguarding Policy</h5>
                         <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-1 opacity-40">Uploaded: 12 Jan 2024 • PDF</p>
                      </div>
                      <button className="text-[9px] font-black uppercase tracking-widest text-gfa-gold underline underline-offset-4">Update File</button>
                   </div>
                   <div className="flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-sm group hover:border-gfa-gold/30 transition-all">
                      <div>
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-white">Fee Structure Disclosure</h5>
                         <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-1 opacity-40">Uploaded: 14 Feb 2024 • PDF</p>
                      </div>
                      <button className="text-[9px] font-black uppercase tracking-widest text-gfa-gold underline underline-offset-4">Update File</button>
                   </div>
                   <div className="flex justify-between items-center p-6 bg-white/5 border border-white/5 rounded-sm group hover:border-gfa-gold/30 transition-all">
                      <div>
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-white">Operational Lease Audit</h5>
                         <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest mt-1 opacity-40">Uploaded: 10 Jan 2024 • PDF</p>
                      </div>
                      <button className="text-[9px] font-black uppercase tracking-widest text-gfa-gold underline underline-offset-4">Update File</button>
                   </div>
                </div>
                <div className="mt-10 pt-8 text-center border-t border-white/5">
                   <button className="btn-gold px-12 py-5 text-[10px]">Add New Institutional Document</button>
                </div>
             </div>

             <div className="bg-gfa-gold/5 border border-gfa-gold/20 p-12">
                <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold mb-10 border-b border-gfa-gold/10 pb-4">Download Brand Assets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 border border-white/5 bg-gfa-black text-center group cursor-pointer hover:border-gfa-gold transition-all">
                      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">🏅</div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Institutional Badge</h4>
                      <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest opacity-40">Accredited Member SVG/PNG</p>
                   </div>
                   <div className="p-8 border border-white/5 bg-gfa-black text-center group cursor-pointer hover:border-gfa-gold transition-all">
                      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">📜</div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Certification PDF</h4>
                      <p className="text-[8px] text-gfa-gray uppercase font-black tracking-widest opacity-40">Official 2024 Document</p>
                   </div>
                </div>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MemberPortal;
