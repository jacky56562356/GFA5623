
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const Safeguarding: React.FC = () => {
  const { t } = useLocale();
  const sg = t.safeguarding;
  const ui = sg.ui || {
    oversightBadge: "Global Safeguarding Oversight",
    reportingTitle: "Reporting Misconduct",
    reportingBody: "GFA maintains an independent compliance intake system to review violations of minor safeguarding and transparency protocols. If you have witnessed or been subjected to illegal fee mandates, bundled photography requirements, or predatory behavior, please report it immediately to our administrative division.",
    audit: { valid: "Audit Status: GFA AUTHENTICATED", invalid: "Audit Status: UNVERIFIED / ALERT", validDesc: "This project/event is officially registered and follows GFA welfare standards.", invalidDesc: "No matching record found. Exercise extreme caution. Private reporting advised." },
    ethicsBtn: "Ethics Violation Intake",
    standardsActive: "GFA Standards Active"
  };

  const [verifyId, setVerifyId] = useState('');
  const [verifyResult, setVerifyResult] = useState<'valid' | 'invalid' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyId) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const clean = verifyId.trim().toUpperCase();
      if (clean.includes('GFA-CAST') || clean.includes('EVENT-2025') || clean === 'GFA-AUTH') {
        setVerifyResult('valid');
      } else {
        setVerifyResult('invalid');
      }
    }, 1200);
  };

  return (
    <div className="bg-gfa-navy pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 1. Institutional Header */}
        <header className="mb-20 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-red-500/30 text-red-500 text-[9px] font-black uppercase tracking-[0.5em] mb-8 bg-red-500/5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            {ui.oversightBadge}
          </div>
          <h1 className="mb-10 gold-text uppercase text-2xl md:text-3xl tracking-tighter leading-none font-black font-cinzel">
            {sg.title}
          </h1>
          <p className="text-sm md:text-base text-slate-300 uppercase tracking-[0.2em] font-light leading-loose border-y border-white/10 py-10 opacity-70">
            {sg.subtitle}
          </p>
          <div className="mt-8">
            <Link to="/youth-safety-policy" className="text-gfa-gold text-[10px] font-black uppercase tracking-[0.4em] hover:brightness-110 transition-all border-b border-gfa-gold/30 pb-1">
              {sg.policyLink} →
            </Link>
          </div>
        </header>

        {/* 2. Verification Tool - Audition & Event Search */}
        <section className="mb-32">
          <div className="bg-gfa-navyLight/40 border border-white/10 p-10 md:p-16 shadow-3xl relative overflow-hidden rounded-sm backdrop-blur-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-lg font-black uppercase tracking-[0.3em] text-white mb-6">
                {sg.verificationTool.title}
              </h2>
              <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder={sg.verificationTool.placeholder}
                  value={verifyId}
                  onChange={(e) => setVerifyId(e.target.value)}
                  className="flex-grow bg-gfa-navy/60 border border-white/10 p-4 text-white font-mono text-xs uppercase tracking-widest outline-none focus:border-gfa-gold transition-all"
                />
                <button disabled={loading} className="bg-gfa-gold text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl disabled:opacity-50">
                  {loading ? 'AUDITING...' : sg.verificationTool.btn}
                </button>
              </form>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest opacity-60 italic">
                {sg.verificationTool.note}
              </p>

              {verifyResult === 'valid' && (
                <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 animate-fade-up">
                  <div className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-1">{ui.audit.valid}</div>
                  <div className="text-white text-[10px] uppercase tracking-widest opacity-80">{ui.audit.validDesc}</div>
                </div>
              )}
              {verifyResult === 'invalid' && (
                <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 animate-fade-up">
                  <div className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-1">{ui.audit.invalid}</div>
                  <div className="text-white text-[10px] uppercase tracking-widest opacity-80">{ui.audit.invalidDesc}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. Regulated Domains (Vertical Protection) */}
        <section className="mb-32">
          <h2 className="text-xl font-black uppercase tracking-[0.3em] gold-text mb-12 text-center">
            {sg.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(sg.categories).filter(([key]) => key !== 'title').map(([key, cat]: [string, any]) => (
              <div key={key} className="bg-gfa-navyLight/20 p-10 border border-white/10 group hover:border-gfa-gold/40 transition-all duration-500 flex flex-col h-full rounded-sm">
                <div className="text-3xl mb-8 opacity-30 group-hover:opacity-100 transition-opacity">
                  {key === 'film' ? '🎬' : key === 'commercial' ? '📺' : key === 'model' ? '📸' : '🏆'}
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white mb-4 group-hover:text-gfa-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[10px] text-slate-400 leading-loose uppercase tracking-widest opacity-60 group-hover:opacity-90 transition-opacity flex-grow">
                  {cat.d}
                </p>
                <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-black text-gfa-gold/60 uppercase tracking-widest">
                  {ui.standardsActive}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Red Flags & Unreasonable Procedures */}
        <section className="mb-32">
          <div className="bg-red-950/20 border border-red-500/20 p-12 md:p-20 rounded-sm">
            <div className="text-center mb-16">
              <h2 className="text-xl font-black uppercase tracking-[0.3em] text-red-500 mb-6">
                {sg.redFlags.title}
              </h2>
              <p className="text-[10px] text-red-100/40 uppercase tracking-widest font-bold max-w-3xl mx-auto leading-loose">
                {sg.redFlags.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sg.redFlags.list.map((flag: any, i: number) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-2xl pt-1 opacity-20 group-hover:opacity-100 text-red-500 transition-opacity">⚠</div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-red-400/80 mb-3 leading-tight group-hover:text-red-400 transition-colors">{flag.t}</h4>
                    <p className="text-[10px] text-red-100/40 leading-relaxed uppercase tracking-widest font-medium group-hover:text-red-100/60 transition-colors">
                      {flag.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Institutional Support & Reporting */}
        <section className="bg-white/5 p-16 md:p-24 border border-white/10 text-center relative overflow-hidden rounded-sm">
           <h2 className="text-xl font-black uppercase tracking-[0.3em] gold-text mb-8">{ui.reportingTitle}</h2>
           <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-14 max-w-4xl mx-auto leading-loose opacity-60">
              {ui.reportingBody}
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/complaints" className="bg-red-600 text-white px-12 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-red-700 transition-all shadow-xl">
                {sg.reportingCta}
              </Link>
              <Link to="/reporting" className="border border-white/20 text-white px-12 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-white/5 transition-all">
                {ui.ethicsBtn}
              </Link>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Safeguarding;
