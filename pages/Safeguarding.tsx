
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
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
      doc.text(`1. ABOUT GFA`, margin, cursorY);
      cursorY += 10;
      doc.setFontSize(10);
      const missionText = doc.splitTextToSize(sg.mission, 170);
      doc.text(missionText, margin, cursorY);
      cursorY += (missionText.length * 6) + 10;

      // ... rest of PDF logic ...
      doc.save(`GFA_Safeguarding_${t.locale.toUpperCase()}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="text-center mb-16 animate-fade-up">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <div className="bg-gfa-darkGray/40 border border-white/5 p-12 hover:border-gfa-gold/30 transition-all group flex flex-col rounded-xl">
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 font-montserrat">Verification</h3>
           <Link to="/verify" className="btn-gold w-full text-xs py-5 shadow-2xl">Verify Now</Link>
        </div>
        <div className="bg-gfa-darkGray/40 border border-white/5 p-12 hover:border-gfa-gold/30 transition-all group flex flex-col rounded-xl">
           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 font-montserrat">Reporting</h3>
           <Link to="/complaints" className="btn-gold w-full text-xs py-5 shadow-2xl bg-red-600 border-none hover:bg-red-700">Report Violation</Link>
        </div>
      </div>
    </div>
  );
};

export default Safeguarding;
