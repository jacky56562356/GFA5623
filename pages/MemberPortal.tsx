
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const MemberPortal = () => {
  const { t } = useLocale();
  const mp = t.memberPortal;

  return (
    <div className="bg-gfa-warmWhite pt-40 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-gfa-border pb-10">
          <div>
            <span className="text-gfa-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block opacity-80 italic">{mp.header.subtitle}</span>
            <h1 className="text-gfa-inkBlack uppercase text-4xl md:text-5xl leading-tight tracking-tighter font-serif font-bold">{mp.header.title}</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-gfa-border text-[10px] font-black text-gfa-inkBlack px-8 py-3 uppercase tracking-widest hover:border-gfa-gold transition-all rounded-btn">{mp.header.support}</button>
            <Link to="/" className="bg-gfa-inkBlack text-[10px] font-black text-white px-8 py-3 uppercase tracking-widest hover:bg-gfa-gold transition-all rounded-btn">{mp.header.logout}</Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-6">
             <div className="bg-white border border-gfa-border p-8 space-y-6 rounded-card shadow-sm">
                <div className="text-center pb-6 border-b border-gfa-border">
                   <div className="w-20 h-20 bg-gfa-warmWhite border border-gfa-border rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-inner">🏢</div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-gfa-inkBlack">{mp.sidebar.academy}</h4>
                   <p className="text-[9px] text-gfa-gold uppercase font-black tracking-widest mt-2">{mp.sidebar.tier}</p>
                </div>
                <nav className="space-y-2">
                   <button className="w-full text-left p-4 bg-gfa-gold text-gfa-black text-[10px] font-black uppercase tracking-widest rounded-btn shadow-md">{mp.sidebar.profile}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-btn transition-all">{mp.sidebar.docs}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-btn transition-all">{mp.sidebar.renewal}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-btn transition-all">{mp.sidebar.scores}</button>
                </nav>
             </div>
             <div className="bg-red-50 border border-red-100 p-6 rounded-card">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">{mp.sidebar.alerts}</h5>
                <p className="text-[9px] text-red-800/60 uppercase tracking-widest leading-relaxed font-bold">{mp.sidebar.alertsBody}</p>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-6">{mp.stats.trust}</h5>
                   <div className="text-4xl font-black text-gfa-inkBlack font-serif">98<span className="text-sm opacity-30 text-gfa-slate">/100</span></div>
                   <p className="text-[9px] text-gfa-slate uppercase font-black tracking-widest mt-4">{mp.stats.grade}: A+</p>
                </div>
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-6">{mp.stats.certId}</h5>
                   <div className="text-2xl font-black text-gfa-inkBlack font-mono">GFA-AUTH-00101</div>
                   <p className="text-[9px] text-gfa-slate uppercase font-black tracking-widest mt-4">{mp.stats.status}</p>
                </div>
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-6">{mp.stats.expiry}</h5>
                   <div className="text-2xl font-black text-gfa-inkBlack">31 DEC 2026</div>
                   <p className="text-[9px] text-gfa-slate uppercase font-black tracking-widest mt-4">{mp.stats.remaining}</p>
                </div>
             </div>

             <div className="bg-white border border-gfa-border p-12 rounded-card shadow-sm">
                <h3 className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack mb-10 border-b border-gfa-border pb-4 font-serif">{mp.docs.title}</h3>
                <div className="space-y-4">
                   {[
                     { title: "Minor Safeguarding Policy", date: "12 Jan 2024" },
                     { title: "Fee Structure Disclosure", date: "14 Feb 2024" },
                     { title: "Operational Lease Audit", date: "10 Jan 2024" }
                   ].map((doc, i) => (
                     <div key={i} className="flex justify-between items-center p-6 bg-gfa-warmWhite border border-gfa-border rounded-btn group hover:border-gfa-gold transition-all">
                        <div>
                           <h5 className="text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack">{doc.title}</h5>
                           <p className="text-[9px] text-gfa-slate uppercase font-bold tracking-widest mt-1 opacity-60">Uploaded: {doc.date} • PDF</p>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-gfa-gold hover:underline">Update File</button>
                     </div>
                   ))}
                </div>
                <div className="mt-10 pt-8 text-center border-t border-gfa-border">
                   <button className="btn-primary text-[11px] !px-10">{mp.docs.addBtn}</button>
                </div>
             </div>

             <div className="bg-gfa-inkBlack text-white p-12 rounded-card shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gfa-gold/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-gfa-gold mb-10 border-b border-white/10 pb-4 relative z-10 font-serif">{mp.assets.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                   <div className="p-8 border border-white/10 bg-white/5 text-center group cursor-pointer hover:bg-white/10 transition-all rounded-sm">
                      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">🏅</div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2">{mp.assets.badge}</h4>
                      <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Accredited Member SVG/PNG</p>
                   </div>
                   <div className="p-8 border border-white/10 bg-white/5 text-center group cursor-pointer hover:bg-white/10 transition-all rounded-sm">
                      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">📜</div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2">{mp.assets.cert}</h4>
                      <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Official 2024 Document</p>
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
