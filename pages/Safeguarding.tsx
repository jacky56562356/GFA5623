
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Safeguarding: React.FC = () => {
  const { t } = useLocale();
  const sg = t.safeguarding;
  const [isGenerating, setIsGenerating] = useState(false);
  const [verifyId, setVerifyId] = useState('');
  const [verifyResult, setVerifyResult] = useState<'valid' | 'invalid' | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyId) return;
    // Mock verification logic
    if (verifyId.toUpperCase().includes('GFA-CAST') || verifyId.toUpperCase().includes('EVENT-2025')) {
      setVerifyResult('valid');
    } else {
      setVerifyResult('invalid');
    }
  };

  return (
    <div className="bg-gfa-black pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <header className="mb-20 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[9px] font-black uppercase tracking-[0.5em] mb-8 bg-gfa-gold/5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gfa-gold animate-pulse"></span>
            Global Safeguarding Standard
          </div>
          <h1 className="mb-10 gold uppercase text-2xl md:text-4xl tracking-tighter leading-none font-black font-cinzel">
            {sg.title}
          </h1>
          <p className="text-sm md:text-base text-gfa-gray uppercase tracking-[0.2em] font-light leading-loose border-y border-white/10 py-10 opacity-60">
            {sg.subtitle}
          </p>
        </header>

        {/* 2. Real-time Verification Tool */}
        <section className="mb-32">
          <div className="bg-gfa-darkGray/60 border border-white/10 p-10 md:p-14 shadow-3xl relative overflow-hidden rounded-sm backdrop-blur-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold"></div>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-black uppercase tracking-[0.3em] text-white mb-6">
                {sg.verificationTool.title}
              </h2>
              <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder={sg.verificationTool.placeholder}
                  value={verifyId}
                  onChange={(e) => setVerifyId(e.target.value)}
                  className="flex-grow bg-gfa-black/60 border border-white/10 p-4 text-white font-mono text-xs uppercase tracking-widest outline-none focus:border-gfa-gold"
                />
                <button className="btn-gold px-10 py-4 text-[11px] whitespace-nowrap">
                  {sg.verificationTool.btn}
                </button>
              </form>
              <p className="text-[10px] text-gfa-gray uppercase tracking-widest opacity-40 italic">
                {sg.verificationTool.note}
              </p>

              {verifyResult === 'valid' && (
                <div className="mt-8 p-6 bg-gfa-gold/10 border border-gfa-gold/30 animate-fade-up">
                  <div className="text-gfa-gold font-black text-[10px] uppercase tracking-widest mb-1">Status: GFA Authenticated</div>
                  <div className="text-white text-xs uppercase tracking-widest">The project or event is officially registered and audited.</div>
                </div>
              )}
              {verifyResult === 'invalid' && (
                <div className="mt-8 p-6 bg-white/5 border border-white/10 animate-fade-up">
                  <div className="text-white font-black text-[10px] uppercase tracking-widest mb-1">Status: Unverified / Alert</div>
                  <div className="text-white text-xs uppercase tracking-widest opacity-60">No matching record found. Exercise extreme caution.</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. Protection Domains (Categories) */}
        <section className="mb-32">
          <h2 className="text-2xl font-black uppercase tracking-[0.3em] gold mb-12 text-center">
            {sg.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sg.categories).filter(([key]) => key !== 'title').map(([key, cat]: [string, any]) => (
              <div key={key} className="bg-gfa-darkGray/40 p-10 border border-white/10 group hover:border-gfa-gold transition-all duration-500 flex flex-col h-full rounded-sm">
                <div className="text-3xl mb-8 opacity-30 group-hover:opacity-100 transition-opacity">
                  {key === 'film' ? '🎬' : key === 'commercial' ? '📺' : key === 'model' ? '📸' : '🏆'}
                </div>
                <h3 className="text-base font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[10px] text-gfa-gray leading-loose uppercase tracking-widest opacity-60">
                  {cat.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Red Flags & Prohibited Procedures */}
        <section className="mb-32">
          <div className="bg-white/2 border border-white/5 p-12 md:p-20 rounded-sm">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-white mb-6">
                {sg.redFlags.title}
              </h2>
              <p className="text-xs text-gfa-gray uppercase tracking-widest font-bold max-w-3xl mx-auto leading-loose opacity-50">
                {sg.redFlags.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sg.redFlags.list.map((flag: any, i: number) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-2xl pt-1 opacity-20 group-hover:opacity-100 transition-opacity">✦</div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-white/80 mb-3 leading-tight group-hover:text-gfa-gold transition-colors">{flag.t}</h4>
                    <p className="text-[10px] text-gfa-gray leading-relaxed uppercase tracking-widest font-medium opacity-60 group-hover:opacity-90 transition-colors">
                      {flag.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Reporting & Support Pathways */}
        <section className="bg-white/5 p-16 md:p-24 border border-white/10 text-center relative overflow-hidden rounded-sm">
           <h2 className="text-2xl font-black uppercase tracking-[0.3em] gold mb-8">Reporting Misconduct</h2>
           <p className="text-[11px] text-gfa-gray uppercase tracking-widest mb-14 max-w-4xl mx-auto leading-loose opacity-60">
              GFA maintains an independent compliance intake system to review violations of minor safeguarding and transparency protocols. 
              If you have witnessed or been subjected to illegal fee mandates or predatory behavior, please report it immediately.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/complaints" className="bg-white text-gfa-black px-12 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-gfa-gold transition-all shadow-xl">
                Lodge Formal Report
              </Link>
              <Link to="/reporting" className="border border-white/20 text-white px-12 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-white/5 transition-all">
                Ethics Violation Intake
              </Link>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Safeguarding;
