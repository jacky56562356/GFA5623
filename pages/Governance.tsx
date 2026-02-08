import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';

const Governance: React.FC = () => {
  const { t } = useLocale();
  const gov = t.governance;

  return (
    <div className="bg-gfa-warmWhite pt-40 pb-32 px-6 min-h-screen">
      <div className="container-gfa">
        {/* Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">Institutional Transparency</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {gov.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {gov.subtitle}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 bg-white p-10 border border-gfa-border rounded-card shadow-sm">
              <h3 className="text-lg font-bold font-serif mb-6 border-b border-gfa-border pb-4 text-gfa-inkBlack">Official Documents</h3>
              <div className="space-y-4">
                <button className="btn-secondary w-full !h-14 !text-[13px] hover:!bg-gfa-gold hover:!border-gfa-gold hover:!text-gfa-inkBlack transition-all">
                   📄 {gov.downloads.charter}
                </button>
                <button className="btn-secondary w-full !h-14 !text-[13px] hover:!bg-gfa-gold hover:!border-gfa-gold hover:!text-gfa-inkBlack transition-all">
                   📜 {gov.downloads.bylaws}
                </button>
              </div>
              <div className="mt-10 pt-8 border-t border-gfa-border">
                <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-gfa-slate">
                  <li className="flex justify-between"><span>Registry Version:</span> <span className="text-gfa-inkBlack">2025.1.4</span></li>
                  <li className="flex justify-between"><span>Audit Cycle:</span> <span className="text-gfa-gold">Quarterly</span></li>
                  <li className="flex justify-between"><span>Next Review:</span> <span className="text-gfa-inkBlack">APR 2025</span></li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8 space-y-24">
            {/* Charter Summary */}
            <section className="py-0">
              <h2 className="text-3xl font-bold font-serif mb-10 text-gfa-inkBlack">{gov.summaryTitle}</h2>
              <div className="bg-white border border-gfa-border p-12 rounded-card shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gfa-gold"></div>
                <p className="text-lg text-gfa-slate leading-loose font-medium opacity-90 italic">
                  "{gov.summaryBody}"
                </p>
              </div>
            </section>

            {/* Board Structure */}
            <section className="py-0">
              <h2 className="text-3xl font-bold font-serif mb-10 text-gfa-inkBlack">{gov.roleTitle}</h2>
              <p className="text-lg text-gfa-slate mb-12 leading-relaxed font-medium">
                {gov.roleBody}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gov.board.map((member: any, i: number) => (
                  <div key={i} className="bg-white p-8 border border-gfa-border rounded-btn hover:border-gfa-gold transition-colors group">
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gfa-gold mb-3 opacity-60 group-hover:opacity-100">{member.role}</h4>
                    <p className="text-lg font-bold font-serif text-gfa-inkBlack">{member.title}</p>
                    <div className="mt-6 h-1 w-12 bg-gfa-border group-hover:w-full transition-all duration-700"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Statutory Adherence Callout */}
            <section className="py-0 bg-gfa-inkBlack text-white p-12 md:p-20 rounded-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/5 blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-3xl font-bold font-serif mb-10 text-gfa-gold">Supportive Framework</h2>
              <p className="text-lg leading-relaxed mb-12 opacity-80 font-medium italic">
                The GFA Charter is a voluntary commitment. Participation signals an organization's dedication to professional safety and structural transparency without replacing statutory legal obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/certification" className="btn-primary">Apply for Recognition</Link>
                <Link to="/about" className="btn-secondary !text-white !border-white/30 hover:!bg-white/10">Read Mission Statement</Link>
              </div>
            </section>
          </main>
        </div>

        <footer className="mt-32 pt-16 border-t border-gfa-border text-center">
          <p className="text-[11px] text-gfa-slate font-bold uppercase tracking-[0.5em] opacity-30 italic">
            Institutional Governance Document • Transparency Disclosure Cycle 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Governance;