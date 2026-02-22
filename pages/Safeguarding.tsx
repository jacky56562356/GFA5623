import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { 
  Shield, AlertTriangle, Search, FileText, Lock, Users, AlertCircle, 
  CheckCircle, HelpCircle, Eye, Download, ChevronDown, ChevronUp, BookOpen, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DomainVisuals from '../components/DomainVisuals.tsx';

const Safeguarding: React.FC = () => {
  const { t } = useLocale();
  const sg = t.safeguarding || {};
  
  // Safe access to arrays
  const redFlagsList = Array.isArray(sg.redFlags?.list) ? sg.redFlags.list : [];
  const principlesList = Array.isArray(sg.principles?.list) ? sg.principles.list : [];
  const tipsList = Array.isArray(sg.tips?.list) ? sg.tips.list : [];
  const processList = Array.isArray(sg.process?.steps) ? sg.process.steps : [];
  const checklistList = Array.isArray(sg.familyChecklist?.list) ? sg.familyChecklist.list : [];
  const faqList = Array.isArray(sg.faq?.list) ? sg.faq.list : [];
  const standardsList = Array.isArray(sg.standards?.list) ? sg.standards.list : [];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gfa-inkBlack text-white font-sans pt-[80px] pb-16 relative overflow-hidden">
      <SEO title={sg.title || "Safeguarding"} description={sg.subtitle} />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-gfa-inkBlack via-[#1a1c23] to-gfa-inkBlack opacity-80"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gfa-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="container-gfa relative z-10">
        
      {/* HERO SECTION - Immersive */}
      <header className="relative py-32 mb-16 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
            alt="Safeguarding Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack via-gfa-inkBlack/80 to-gfa-inkBlack"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm animate-fade-in">
            <Shield className="w-4 h-4 text-gfa-gold" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gfa-gold">{sg.kicker}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-serif leading-tight tracking-tight text-gradient-gold animate-fade-up">
            {sg.title}
          </h1>
          
          <p className="text-xl text-gfa-slate max-w-2xl mx-auto leading-relaxed mb-10 font-light animate-fade-up delay-200">
            {sg.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-up delay-300">
            <Link to="/reporting" className="btn-primary shadow-[0_0_30px_rgba(201,162,77,0.3)] !px-8 !py-4">
              {sg.reportingCta}
            </Link>
            <Link to="/resources" className="btn-secondary-white hover:bg-white hover:text-gfa-inkBlack !px-8 !py-4 flex items-center gap-3">
              <Download className="w-5 h-5" />
              {sg.guideTitle}
            </Link>
          </div>
        </div>
      </header>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT COLUMN: Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Section */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                <div className="w-full md:w-2/5 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop" 
                    alt={sg.intro?.imageAlt || "Film set safety"} 
                    className="rounded-xl shadow-2xl border border-white/10 w-full object-cover aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold font-serif mb-6 text-white leading-tight">{sg.intro?.title}</h2>
                  <p className="text-lg text-gfa-slate leading-relaxed mb-8 font-light">
                    {sg.intro?.body}
                  </p>
                  <div className="p-6 bg-black/40 rounded-xl border-l-4 border-gfa-gold shadow-inner">
                    <p className="text-base text-white/90 italic font-serif leading-relaxed">"{sg.why?.body}"</p>
                  </div>
                  
                  {/* Content Prompt / Callout */}
                  <div className="mt-10 p-6 bg-gfa-gold/10 border border-gfa-gold/20 rounded-xl flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-gfa-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Institutional Responsibility</h4>
                      <p className="text-xs text-gfa-slate leading-relaxed">
                        Every production certified by the GFA must appoint a dedicated Safeguarding Officer. This is not just a guideline, but a mandatory requirement for maintaining professional standing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Principles */}
            <section>
              <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2">
                <Scale className="w-5 h-5 text-gfa-gold" />
                {sg.principles?.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principlesList.map((p: any, i: number) => (
                  <div key={i} className="card-standard !bg-white/5 !p-5 hover:!bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{p.icon}</span>
                      <h4 className="font-bold text-white text-sm">{p.t}</h4>
                    </div>
                    <p className="text-xs text-gfa-slate leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety Standards */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gfa-gold/5 to-transparent rounded-3xl -m-6 pointer-events-none"></div>
              <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3 relative z-10">
                <BookOpen className="w-6 h-6 text-gfa-gold" />
                {sg.standards?.title}
              </h3>
              <div className="space-y-4 relative z-10">
                {standardsList.map((s: any, i: number) => (
                  <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-gfa-gold/20 flex-shrink-0 flex items-center justify-center text-gfa-gold text-sm font-black group-hover:bg-gfa-gold group-hover:text-black transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-gfa-gold transition-colors">{s.t}</h4>
                      <p className="text-sm text-gfa-slate leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section>
              <h3 className="text-xl font-bold font-serif mb-8 text-center">{sg.process?.title}</h3>
              <div className="relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {processList.map((step: any, i: number) => (
                    <div key={i} className="text-center bg-gfa-inkBlack p-4 rounded-xl border border-white/5 md:border-none md:bg-transparent">
                      <div className="w-12 h-12 mx-auto bg-gfa-inkBlack border border-white/20 rounded-full flex items-center justify-center mb-3 relative z-10 shadow-lg">
                        <span className="text-sm font-black text-gfa-gold">0{i + 1}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2">{step.t}</h4>
                      <p className="text-xs text-gfa-slate">{step.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="text-xl font-bold font-serif mb-6">{sg.faq?.title}</h3>
              <div className="space-y-3">
                {faqList.map((item: any, i: number) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-bold text-sm">{item.q}</span>
                      {openFaq === i ? <ChevronUp className="w-4 h-4 text-gfa-gold" /> : <ChevronDown className="w-4 h-4 text-gfa-slate" />}
                    </button>
                    {openFaq === i && (
                      <div className="p-4 pt-0 text-xs text-gfa-slate border-t border-white/5">
                        <p className="mt-2 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: Sidebar / Tools (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Verification Tool Widget */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Search className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-lg font-bold font-serif mb-2 flex items-center gap-2 relative z-10">
                <Lock className="w-4 h-4 text-gfa-gold" />
                {sg.verificationTool?.title}
              </h3>
              <p className="text-xs text-gfa-slate mb-4 relative z-10">{sg.verificationTool?.note}</p>
              <div className="space-y-3 relative z-10">
                <input 
                  type="text" 
                  placeholder={sg.verificationTool?.placeholder} 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gfa-gold transition-all"
                />
                <button className="w-full btn-primary !py-2 !text-sm justify-center">
                  {sg.verificationTool?.btn}
                </button>
              </div>
            </div>

            {/* Family Checklist Widget */}
            <div className="bg-white text-gfa-inkBlack rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-black uppercase tracking-wide">{sg.familyChecklist?.title}</h3>
              </div>
              <p className="text-gfa-slate mb-4 text-xs font-medium">{sg.familyChecklist?.desc}</p>
              <div className="space-y-2 mb-4">
                {checklistList.slice(0, 3).map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded bg-gfa-warmWhite/50">
                    <div className="w-3 h-3 rounded-sm border border-gfa-slate/30 flex-shrink-0 mt-1"></div>
                    <span className="text-xs font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full btn-secondary text-xs justify-center py-2 border border-gfa-border">
                {sg.btns?.checklist || "View Full Checklist"}
              </button>
            </div>

            {/* Red Flags Widget */}
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">{sg.redFlags?.title}</h3>
              </div>
              <div className="space-y-3">
                {redFlagsList.map((flag: any, i: number) => (
                  <div key={i} className="bg-black/20 border border-red-500/10 rounded-lg p-3">
                    <h4 className="text-red-300 font-bold mb-1 text-xs uppercase">{flag.t}</h4>
                    <p className="text-xs text-white/60 leading-tight">{flag.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips Widget */}
            <div className="bg-gfa-gold/10 border border-gfa-gold/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-gfa-gold">
                <HelpCircle className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">{sg.tips?.title}</h3>
              </div>
              <div className="space-y-3">
                {tipsList.map((tip: any, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-gfa-gold font-bold text-xs mt-0.5">{i + 1}.</span>
                    <div>
                      <h4 className="font-bold text-white text-xs mb-0.5">{tip.t}</h4>
                      <p className="text-[10px] text-white/60 leading-tight">{tip.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM: Regulated Domains (Full Width) */}
        <section className="mb-16 border-t border-white/10 pt-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gfa-gold/30 to-transparent"></div>
          <h2 className="text-2xl font-bold font-serif mb-8 text-center text-gradient-gold">{sg.categories?.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { ...sg.categories?.film, icon: <Users className="w-5 h-5" /> },
              { ...sg.categories?.commercial, icon: <FileText className="w-5 h-5" /> },
              { ...sg.categories?.model, icon: <AlertCircle className="w-5 h-5" /> },
              { ...sg.categories?.talent, icon: <Shield className="w-5 h-5" /> }
            ].map((cat: any, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors text-center group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gfa-gold mb-3 mx-auto group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-xs text-gfa-slate leading-relaxed">{cat.d}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-bold font-serif mb-4 text-center text-gfa-gold uppercase tracking-widest">AI Generated Domain Visuals</h3>
            <p className="text-center text-xs text-gfa-slate mb-8 italic">Visualizing our regulated domains through artificial intelligence.</p>
            <DomainVisuals />
          </div>
        </section>

        {/* REPORTING CTA - Compact */}
        <section className="bg-gradient-to-br from-gfa-gold via-yellow-600 to-gfa-goldDark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors duration-700"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-black text-gfa-inkBlack mb-2 font-serif">
                {sg.report?.title}
              </h2>
              <p className="text-gfa-inkBlack/80 text-sm font-medium">
                {sg.report?.contact} <span className="font-bold">{sg.report?.email}</span>
              </p>
            </div>
            <Link to="/reporting" className="whitespace-nowrap px-8 py-3 bg-gfa-inkBlack text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-gfa-inkBlack transition-all shadow-lg text-sm">
              {sg.reportingCta}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Safeguarding;
