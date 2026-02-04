import React, { useState } from 'react';
import { useLocale } from '../App';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Safeguarding: React.FC = () => {
  const { t } = useLocale();
  const sg = t.safeguarding;
  const [isGenerating, setIsGenerating] = useState(false);

  // Professional PDF Generation Logic
  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      const margin = 20;
      let cursorY = 20;

      // Header - Institutional Branding
      doc.setFontSize(22);
      doc.setTextColor(212, 175, 55); // GFA Gold
      doc.text(t.meta.siteName.toUpperCase(), margin, cursorY);
      cursorY += 10;
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${sg.title.toUpperCase()} | VERSION 2024.1`, margin, cursorY);
      cursorY += 15;

      // Divider
      doc.setDrawColor(212, 175, 55);
      doc.line(margin, cursorY, 190, cursorY);
      cursorY += 15;

      // Section 1: Institutional Mission
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text(`1. ${t.nav.about.toUpperCase()}`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(10);
      const missionText = doc.splitTextToSize(sg.mission, 170);
      doc.text(missionText, margin, cursorY);
      cursorY += (missionText.length * 6) + 10;

      // Section 2: Opportunity Verification (Pillar A)
      doc.setFontSize(14);
      doc.text(`2. ${sg.pillars.p1.title.toUpperCase()}`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(9);
      sg.pillars.p1.items.forEach((item) => {
        const lines = doc.splitTextToSize(`[ ] ${item}`, 170);
        doc.text(lines, margin + 5, cursorY);
        cursorY += (lines.length * 6);
      });
      cursorY += 10;

      // Section 3: Mandatory Red Lines (Non-Negotiable)
      doc.setFontSize(14);
      doc.setTextColor(200, 0, 0); // Red for warning
      doc.text(`3. ${sg.pillars.p3.redLinesTitle.toUpperCase()}`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      sg.pillars.p3.redLines.forEach((line) => {
        const lines = doc.splitTextToSize(`[X] ${line}`, 170);
        doc.text(lines, margin + 5, cursorY);
        cursorY += (lines.length * 6);
      });
      cursorY += 10;

      // Section 4: On-Site Operational Protocols
      if (cursorY > 250) { doc.addPage(); cursorY = 20; }
      doc.setFontSize(14);
      doc.text(`4. ${sg.pillars.p3.onsiteTitle.toUpperCase()}`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(9);
      sg.pillars.p3.onsite.forEach((item) => {
        const lines = doc.splitTextToSize(`[ ] ${item}`, 170);
        doc.text(lines, margin + 5, cursorY);
        cursorY += (lines.length * 6);
      });
      cursorY += 10;

      // Section 5: Fee Transparency & Anti-Bundling
      if (cursorY > 250) { doc.addPage(); cursorY = 20; }
      doc.setFontSize(14);
      doc.text(`5. ${sg.pillars.p2.title.toUpperCase()}`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(9);
      sg.pillars.p2.items.forEach((item) => {
        const lines = doc.splitTextToSize(`[ ] ${item}`, 170);
        doc.text(lines, margin + 5, cursorY);
        cursorY += (lines.length * 6);
      });
      cursorY += 10;

      // Footer
      cursorY = 285;
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`REPORT VIOLATIONS: GFA-ALLIANCE.ORG/${t.nav.certGov.reporting.toUpperCase()}`, margin, cursorY);

      doc.save(`GFA_Safeguarding_${t.locale.toUpperCase()}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-grid-12 max-w-7xl mx-auto px-4 overflow-hidden">
      {/* 1. Mission Header */}
      <div className="text-center mb-grid-16 animate-fade-up">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-red-500/30 text-red-500 text-xs font-black uppercase tracking-[0.4em] mb-10 bg-red-500/5 rounded-full font-montserrat">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          Institutional Safeguarding Framework
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter font-montserrat leading-[0.9]">
          {sg.title}
        </h1>
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-gfa-black/60 p-10 border border-white/10 rounded-lg">
            <p className="text-gfa-gray text-xl md:text-2xl font-medium uppercase tracking-widest leading-relaxed text-left border-l-4 border-red-600 pl-8">
              {sg.mission}
            </p>
          </div>
        </div>
      </div>

      {/* 2. The Four Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-6 mb-grid-16">
        {/* Pillar A: Verified Opportunities */}
        <div className="bg-gfa-darkGray/40 border border-white/5 p-12 hover:border-gfa-gold/30 transition-all group flex flex-col rounded-xl">
          <div className="flex justify-between items-start mb-10">
            <div className="text-gfa-gold font-black text-xs uppercase tracking-[0.5em]">PILLAR A</div>
            <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">🔍</div>
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 font-montserrat">{sg.pillars.p1.title}</h3>
          <ul className="space-y-6 mb-12 flex-grow">
            {sg.pillars.p1.items.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-gfa-gold font-serif mt-1">✦</span>
                <span className="text-xs font-black uppercase tracking-widest text-gfa-gray group-hover:text-white transition-colors leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/verify" className="btn-gold w-full text-xs py-5 shadow-2xl">{sg.pillars.p1.cta}</Link>
        </div>

        {/* Pillar B: Fee Transparency */}
        <div className="bg-gfa-darkGray/40 border border-white/5 p-12 hover:border-gfa-gold/30 transition-all group flex flex-col rounded-xl">
          <div className="flex justify-between items-start mb-10">
            <div className="text-gfa-gold font-black text-xs uppercase tracking-[0.5em]">PILLAR B</div>
            <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">💰</div>
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 font-montserrat">{sg.pillars.p2.title}</h3>
          <ul className="space-y-6 mb-12 flex-grow">
            {sg.pillars.p2.items.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-gfa-gold font-serif mt-1">✓</span>
                <span className="text-xs font-black uppercase tracking-widest text-gfa-gray group-hover:text-white transition-colors leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/transparency" className="btn-gold w-full text-xs py-5 shadow-2xl">{sg.pillars.p2.cta}</Link>
        </div>
      </div>

      {/* 3. Mandatory Rules for Minors (The "Red Lines") */}
      <div className="bg-red-950/20 border border-red-500/20 rounded-2xl mb-grid-16 relative overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.05)]">
        <div className="absolute top-0 right-0 p-grid-12 opacity-[0.03]">
          <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
        </div>
        
        <div className="relative z-10 p-10 md:p-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-red-500 uppercase tracking-tighter font-montserrat">{sg.pillars.p3.title}</h2>
            <div className="flex gap-4">
               <button 
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="bg-white text-gfa-black px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-gfa-gold transition-all rounded shadow-2xl flex items-center gap-3 group disabled:opacity-50"
               >
                 <span>{isGenerating ? '⏳' : '📥'}</span> {isGenerating ? 'Generating...' : sg.pillars.p3.cta}
               </button>
               <Link to="/reporting" className="bg-red-600 text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-red-700 transition-all rounded shadow-2xl">
                 🚩 {t.nav.certGov.reporting}
               </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 border-l-4 border-red-500 pl-6 font-montserrat">
                {sg.pillars.p3.redLinesTitle}
              </h4>
              <div className="space-y-4">
                {sg.pillars.p3.redLines.map((line, i) => (
                  <div key={i} className="flex gap-6 items-center bg-red-500/5 p-6 border border-red-500/10 rounded group hover:bg-red-500/10 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-xs">✕</div>
                    <p className="text-xs font-black uppercase tracking-widest text-red-100/60 group-hover:text-red-100 transition-colors leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black text-white uppercase tracking-widest mb-10 border-l-4 border-white/20 pl-6 font-montserrat">
                {sg.pillars.p3.onsiteTitle}
              </h4>
              <div className="space-y-4">
                {sg.pillars.p3.onsite.map((item, i) => (
                  <div key={i} className="flex gap-6 items-center bg-white/5 p-6 border border-white/5 rounded group hover:border-gfa-gold/30 transition-all">
                    <span className="text-gfa-gold text-xl group-hover:scale-110 transition-transform">🛡️</span>
                    <p className="text-xs font-black uppercase tracking-widest text-gfa-gray group-hover:text-white transition-colors leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Investigation & Result Mechanism */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-grid-16">
        <div className="lg:col-span-1 bg-gfa-darkGray p-12 border border-white/5 rounded-xl flex flex-col justify-center">
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 font-montserrat">{sg.pillars.p4.title}</h3>
           <div className="bg-red-500/10 p-6 border-l-4 border-red-500 mb-10">
              <p className="text-red-500 micro-text font-black uppercase tracking-[0.2em] leading-loose">
                 {sg.pillars.p4.response}
              </p>
           </div>
           <Link to="/reporting" className="btn-gold bg-red-600 text-white border-none hover:bg-red-700 font-black uppercase text-xs tracking-[0.3em] py-5">
             🚩 {t.nav.certGov.reporting}
           </Link>
        </div>
        
        <div className="lg:col-span-1 bg-gfa-black/40 p-12 border border-white/5 rounded-xl shadow-inner">
           <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.5em] mb-10">{sg.pillars.p4.levelsTitle}</h4>
           <div className="space-y-10">
              {sg.pillars.p4.levels.map((lvl, i) => (
                <div key={i} className="group cursor-default">
                   <div className="text-xs font-black text-gfa-gold uppercase tracking-[0.1em] mb-2 flex items-center gap-3">
                      <span className="w-4 h-0.5 bg-gfa-gold"></span> LEVEL 0{i+1}
                   </div>
                   <p className="text-xs font-bold uppercase tracking-widest text-gfa-gray group-hover:text-white transition-colors leading-relaxed">{lvl}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-1 bg-gfa-darkGray/60 p-12 border border-white/5 rounded-xl">
           <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.5em] mb-10">{sg.pillars.p4.outcomesTitle}</h4>
           <div className="space-y-6">
              {sg.pillars.p4.outcomes.map((out, i) => (
                <div key={i} className="flex gap-5 items-center p-4 bg-white/5 border border-white/5 rounded group hover:border-red-500/30 transition-all">
                   <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-red-400' : 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]'}`}></div>
                   <p className="text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">{out}</p>
                </div>
              ))}
           </div>
           <div className="mt-12 pt-8 border-t border-white/5">
             <Link to="/reporting" className="text-xs text-gfa-gold font-black uppercase tracking-[0.3em] hover:underline">
               {sg.pillars.p4.cta} →
             </Link>
           </div>
        </div>
      </div>

      {/* 5. Resource Center Grid */}
      <div className="border-t border-white/10 pt-grid-16">
        <h3 className="text-3xl font-black text-center mb-16 uppercase tracking-[0.2em] font-montserrat">{sg.resources.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {sg.resources.items.map((res, i) => (
             <div key={i} className="p-10 bg-gfa-darkGray/80 border border-white/5 hover:border-gfa-gold transition-all cursor-pointer group text-center flex flex-col rounded-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-gfa-gold transition-all"></div>
                <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 duration-700">
                  {i === 0 ? '📘' : i === 1 ? '📝' : i === 2 ? '🚨' : '🚫'}
                </div>
                <h4 className="text-xs font-black uppercase text-white tracking-[0.2em] mb-4 group-hover:text-gfa-gold transition-colors">{res.title}</h4>
                <p className="text-xs text-gfa-gray uppercase font-bold tracking-widest opacity-60 group-hover:opacity-100 mb-10 leading-relaxed">{res.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/5 text-gfa-gold text-xs font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform inline-flex items-center justify-center gap-3">
                   Access {t.locale === 'zh' ? '立即访问' : 'NOW'} →
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Footer Statement */}
      <div className="mt-grid-16 text-center border-y border-white/5 py-10">
         <p className="text-gfa-gray text-xs font-black uppercase tracking-[0.6em] opacity-20 italic">
            Protecting the Future of Film • GFA Global Compliance Standards • Since 2024
         </p>
      </div>
    </div>
  );
};

export default Safeguarding;