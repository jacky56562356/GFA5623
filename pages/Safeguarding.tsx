import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { 
  Shield, FileText, CheckCircle, AlertCircle, 
  Scale, BookOpen, Heart, Users, Eye, PhoneCall
} from 'lucide-react';

const Safeguarding: React.FC = () => {
  const { t } = useLocale();
  const sg = t.safeguarding || {};
  const sections = Array.isArray(sg.sections) ? sg.sections : [];
  const commitment = sg.commitment || { title: "Our Commitment to Youth", desc: "The Global Film Alliance is fundamentally dedicated to ensuring that every young person entering the film industry does so in a safe, nurturing, and highly regulated environment." };
  const principles = sg.principles || { title: "Core Principles", items: [] };
  const reporting = sg.reporting || { title: "Report a Concern", desc: "If you have witnessed or experienced a violation of our youth protection standards by any GFA-certified entity, please contact our compliance team immediately. All reports are strictly confidential.", button: "Submit Confidential Report" };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-[80px] pb-24 relative">
      <SEO title={sg.title || "Youth Protection Framework"} description={sg.subtitle} />

      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" 
          alt="Youth Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Document Header */}
      <div className="relative bg-gfa-inkBlack py-32 mb-16 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
            alt="Header Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/60 via-gfa-inkBlack/80 to-gfa-inkBlack"></div>
        
        <div className="container-gfa relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="gold-badge mb-8 animate-fade-up">
              {sg.kicker || "GFA Regulatory Standard"}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              {sg.title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-3xl mx-auto italic font-serif animate-fade-up delay-200">
              {sg.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa relative z-10">
        
        {/* Commitment Section (New) */}
        <section className="mb-24 bg-white rounded-[40px] shadow-xl border border-gfa-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gfa-gold/10 rounded-2xl flex items-center justify-center text-gfa-gold mb-8">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-8">{commitment.title}</h2>
              <p className="text-xl text-gfa-slate leading-relaxed font-light italic border-l-4 border-gfa-gold/30 pl-6">
                "{commitment.desc}"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-8 bg-gfa-warmWhite">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Youth" className="w-full h-48 object-cover rounded-2xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=2070&auto=format&fit=crop" alt="Filming" className="w-full h-64 object-cover rounded-2xl shadow-md" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" alt="Mentorship" className="w-full h-64 object-cover rounded-2xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Community" className="w-full h-48 object-cover rounded-2xl shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles (New) */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">{principles.title}</h2>
            <div className="h-1 w-24 bg-gfa-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(principles.items || []).map((item: any, i: number) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border border-gfa-border shadow-sm hover:shadow-xl hover:border-gfa-gold/30 transition-all group text-center">
                <div className="w-20 h-20 mx-auto bg-gfa-warmWhite rounded-full flex items-center justify-center text-gfa-gold mb-8 group-hover:bg-gfa-gold group-hover:text-white transition-colors">
                  {i === 0 ? <Shield className="w-10 h-10" /> : i === 1 ? <BookOpen className="w-10 h-10" /> : <Scale className="w-10 h-10" />}
                </div>
                <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{item.title}</h3>
                <p className="text-gfa-slate leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gfa-border">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-8 border-b border-gfa-border pb-4">Document Sections</h3>
                <nav className="space-y-4">
                  {sections.map((section: any, i: number) => (
                    <a 
                      key={i} 
                      href={`#section-${i}`}
                      className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group"
                    >
                      <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-10 bg-gfa-inkBlack text-white rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                  <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" alt="Audit" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <AlertCircle className="w-10 h-10 text-gfa-gold mb-6" />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Compliance Note</h4>
                  <p className="text-sm text-white/70 leading-relaxed italic font-serif">
                    {sg.footer}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <main className="lg:col-span-9">
            <div className="bg-white border border-gfa-border rounded-[40px] shadow-2xl overflow-hidden mb-16">
              
              {/* Document Metadata Strip */}
              <div className="bg-gfa-warmWhite border-b border-gfa-border px-10 py-6 flex flex-wrap gap-12 text-[10px] font-bold uppercase tracking-widest text-gfa-slate">
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Effective Date:</span>
                  <span className="text-gfa-inkBlack">January 01, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Status:</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Active Regulatory Standard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Jurisdiction:</span>
                  <span className="text-gfa-inkBlack">Global / Multi-market</span>
                </div>
              </div>

              <div className="p-10 md:p-20 space-y-32">
                {sections.map((section: any, i: number) => (
                  <section key={i} id={`section-${i}`} className="scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-16">
                      <div className="flex-grow">
                        <div className="flex items-start gap-8 mb-12">
                          <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                            0{i + 1}
                          </div>
                          <div className="pt-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                              {section.title}
                            </h2>
                            <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                          </div>
                        </div>

                        {section.intro && (
                          <p className="text-gfa-slate mb-12 font-light italic text-xl leading-relaxed border-l-4 border-gfa-gold/30 pl-8 opacity-90">
                            {section.intro}
                          </p>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {(section.items || []).map((item: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-6 p-8 bg-gfa-warmWhite border border-gfa-border rounded-[24px] group hover:border-gfa-gold/30 transition-all hover:shadow-xl">
                              <div className="mt-1">
                                <CheckCircle className="w-5 h-5 text-gfa-gold opacity-30 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <span className="text-base font-bold text-gfa-inkBlack leading-relaxed font-serif italic">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Section Image */}
                      <div className="w-full md:w-80 shrink-0">
                        <div className="aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-[12px] border-gfa-warmWhite group">
                          <img 
                            src={
                              i === 0 ? "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" :
                              i === 1 ? "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" :
                              i === 2 ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" :
                              i === 3 ? "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" :
                              "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                            } 
                            alt={section.title}
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                ))}

                {/* Footer / Signature Area */}
                <div className="pt-20 mt-20 border-t border-gfa-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate mb-8 opacity-50">Institutional Endorsement</h4>
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-gfa-warmWhite border border-gfa-border rounded-full flex items-center justify-center shadow-inner">
                          <Shield className="w-10 h-10 text-gfa-gold" />
                        </div>
                        <div>
                          <span className="block text-lg font-bold text-gfa-inkBlack font-serif">GFA Compliance Board</span>
                          <span className="block text-sm text-gfa-slate font-light italic">Youth Protection Division</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gfa-warmWhite p-10 rounded-[32px] border border-gfa-border shadow-sm">
                      <div className="flex items-center gap-3 mb-6 text-amber-600">
                        <AlertCircle className="w-5 h-5" />
                        <h4 className="text-xs font-bold uppercase tracking-widest">Legal Notice</h4>
                      </div>
                      <p className="text-sm text-gfa-slate leading-relaxed font-light italic">
                        This framework is a proprietary regulatory document of the Global Film Alliance. Unauthorized reproduction or distribution is prohibited. Compliance is verified through periodic audits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reporting Section (New) */}
            <div className="bg-gfa-inkBlack text-white rounded-[40px] p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 shrink-0">
                  <PhoneCall className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold font-serif mb-4">{reporting.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light mb-8 max-w-2xl">
                    {reporting.desc}
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold uppercase text-xs tracking-[0.2em] py-4 px-8 rounded-xl transition-colors">
                    {reporting.button}
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

export default Safeguarding;
