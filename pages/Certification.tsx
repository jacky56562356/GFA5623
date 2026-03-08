
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { Shield, CheckCircle, FileText, Scale, BadgeCheck, Clock, Printer, Download, Info } from 'lucide-react';

const Certification: React.FC = () => {
  const { t } = useLocale();
  const cert = t.certification || {};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-[80px] pb-24 relative">
      <SEO title={cert.title || "Accreditation Framework"} description={cert.subtitle} />

      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
          alt="Film Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Document Header */}
      <div className="relative bg-gfa-inkBlack py-32 mb-12 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" 
            alt="Header Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/60 via-gfa-inkBlack/80 to-gfa-inkBlack"></div>
        
        <div className="container-gfa relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="gold-badge mb-8 animate-fade-up">
              Regulatory Standard
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              {cert.title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-2xl mx-auto italic font-serif animate-fade-up delay-200">
              {cert.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gfa-border">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-8 border-b border-gfa-border pb-4">Framework Sections</h3>
                <nav className="space-y-4">
                  <a href="#categories" className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group">
                    <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Accreditation Categories
                  </a>
                  <a href="#criteria" className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group">
                    <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Evaluation Criteria
                  </a>
                  <a href="#validity" className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group">
                    <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Accreditation Validity
                  </a>
                </nav>
              </div>

              <div className="p-10 bg-gfa-inkBlack text-white rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                  <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Legal" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <Shield className="w-10 h-10 text-gfa-gold mb-6" />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Regulatory Note</h4>
                  <p className="text-sm text-white/70 leading-relaxed italic font-serif">
                    {t.disclaimer?.statutory}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <main className="lg:col-span-9">
            <div className="bg-white border border-gfa-border rounded-[40px] shadow-2xl overflow-hidden">
              
              {/* Document Metadata Strip */}
              <div className="bg-gfa-warmWhite border-b border-gfa-border px-10 py-6 flex flex-wrap gap-12 text-[10px] font-bold uppercase tracking-widest text-gfa-slate">
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Document Type:</span>
                  <span className="text-gfa-inkBlack">Accreditation Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Status:</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Revision:</span>
                  <span className="text-gfa-inkBlack">2024.01</span>
                </div>
              </div>

              <div className="p-10 md:p-20 space-y-32">
                {/* Categories */}
                <section id="categories" className="scroll-mt-24">
                  <div className="flex items-start gap-8 mb-16">
                    <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                      01
                    </div>
                    <div className="pt-2">
                      <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                        {cert.categoriesTitle}
                      </h2>
                      <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(cert.categories || []).map((cat: any, i: number) => (
                      <div key={i} className="p-10 bg-gfa-warmWhite border border-gfa-border rounded-[32px] hover:border-gfa-gold/30 transition-all hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gfa-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                          {i === 0 ? <Shield className="w-8 h-8" /> : i === 1 ? <CheckCircle className="w-8 h-8" /> : <Scale className="w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold text-gfa-inkBlack mb-6 font-serif leading-tight">{cat.title}</h3>
                        <p className="text-sm text-gfa-slate leading-relaxed font-light opacity-80">
                          {cat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Criteria */}
                <section id="criteria" className="scroll-mt-24">
                  <div className="flex items-start gap-8 mb-16">
                    <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                      02
                    </div>
                    <div className="pt-2">
                      <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                        {cert.criteriaTitle}
                      </h2>
                      <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(cert.criteria || []).map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-6 p-8 bg-white border border-gfa-border rounded-[24px] shadow-sm hover:border-gfa-gold/30 transition-all group">
                        <div className="w-10 h-10 bg-gfa-gold/10 text-gfa-gold rounded-full flex items-center justify-center shrink-0 group-hover:bg-gfa-gold group-hover:text-white transition-all">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="text-base font-bold text-gfa-inkBlack font-serif italic">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Validity */}
                <section id="validity" className="scroll-mt-24">
                  <div className="flex items-start gap-8 mb-16">
                    <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                      03
                    </div>
                    <div className="pt-2">
                      <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                        {cert.validityTitle}
                      </h2>
                      <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-12 md:p-20 bg-gfa-inkBlack text-white rounded-[48px] relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                      <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop" alt="Time" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                      <div className="w-24 h-24 bg-gfa-gold rounded-3xl flex items-center justify-center text-gfa-inkBlack shadow-2xl shrink-0 animate-float">
                        <Clock className="w-12 h-12" />
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
                          {cert.validityDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              {/* Document Footer */}
              <div className="bg-gfa-warmWhite border-t border-gfa-border p-16 text-center">
                <p className="text-[10px] text-gfa-slate font-bold uppercase tracking-[0.4em] mb-10 opacity-50">
                  Official GFA Accreditation Standard
                </p>
                <div className="flex justify-center gap-8">
                  <button className="btn-primary h-16 px-16 text-lg">
                    Start Application
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Certification;
