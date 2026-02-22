
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { GraduationCap, Users, CheckCircle, Calendar, ArrowRight, Star, Briefcase, FileText, Network, Award } from 'lucide-react';

const GraduateSupport = () => {
  const { t } = useLocale();
  const cap = t.careerAccess || {};
  // Fallback content if translation is missing
  const pathways = t.graduatePathways || [
    { id: "01", t: "Director Support Fund", d: "Financial grants for emerging directors working on their first feature film." },
    { id: "02", t: "Project Matchmaking", d: "Connecting verified talent with certified productions looking for specific skills." },
    { id: "03", t: "IMDb Verification", d: "Assistance with verifying professional credits on industry databases." },
    { id: "04", t: "Network Access", d: "Exclusive invitations to industry networking events and workshops." }
  ];

  const pillarIcons = {
    mentorship: <Users className="w-10 h-10" />,
    funding: <Award className="w-10 h-10" />,
    placement: <Briefcase className="w-10 h-10" />
  };

  return (
    <div className="bg-gfa-warmWhite pt-32 pb-32 px-6 min-h-screen font-sans">
      <SEO 
        title={cap.title || "Career Access"} 
        description={cap.subtitle || "Supporting the next generation of film professionals through mentorship, funding, and project matchmaking."} 
      />

      <div className="container-gfa max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gfa-gold/10 border border-gfa-gold/20 mb-8">
            <GraduationCap className="w-4 h-4 text-gfa-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gfa-gold">Professional Industry Program</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight">{cap.title}</h1>
          
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gfa-gold rounded-full"></div>
            <p className="text-xl text-gfa-slate leading-relaxed pt-12 font-serif italic opacity-80">
              {cap.subtitle}
            </p>
          </div>
        </header>

        {/* Intro Block */}
        <section className="mb-32 max-w-5xl mx-auto">
          <div className="bg-white border border-gfa-border p-12 md:p-16 rounded-2xl shadow-sm relative overflow-hidden group hover:border-gfa-gold/30 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-gfa-inkBlack group-hover:bg-gfa-gold transition-colors"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <Star className="w-64 h-64 text-gfa-inkBlack" />
            </div>
            <p className="text-2xl text-gfa-inkBlack leading-relaxed font-serif italic relative z-10 text-center">
              "{cap.intro}"
            </p>
          </div>
        </section>

        {/* Program Pillars */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(cap.pillars || {}).map(([key, pillar]: [string, any], index) => (
              <div key={key} className="bg-white border border-gfa-border p-8 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-gfa-warmWhite flex items-center justify-center text-gfa-slate mb-8 group-hover:bg-gfa-gold group-hover:text-gfa-inkBlack transition-colors">
                  {index === 0 ? <Users className="w-8 h-8" /> : index === 1 ? <Award className="w-8 h-8" /> : <Briefcase className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-gfa-inkBlack mb-4 font-serif group-hover:text-gfa-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gfa-slate leading-relaxed font-medium opacity-80">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white border border-gfa-border rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Pathways */}
            <div className="p-12 md:p-16 bg-gfa-inkBlack text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gfa-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-serif mb-12 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gfa-gold rounded-full"></span>
                  Supported Pathways
                </h2>
                <div className="space-y-10">
                  {pathways.map((item: any) => (
                    <div key={item.id} className="group pl-6 border-l border-white/10 hover:border-gfa-gold transition-colors">
                      <span className="text-[10px] font-bold text-gfa-gold uppercase tracking-[0.2em] mb-2 block opacity-70">Step {item.id}</span>
                      <h4 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-gfa-gold transition-colors">{item.t}</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-12 md:p-16 bg-white">
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-8">
                {cap.inquiryTitle}
              </h3>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert("Inquiry Received. Our team will support your request within 48 hours."); }}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Full Identity</label>
                  <div className="relative">
                    <input type="text" required className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all" placeholder="Legal Name" />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Institution</label>
                  <div className="relative">
                    <input type="text" required className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all" placeholder="University or Organization" />
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Program Pathway</label>
                  <div className="relative">
                    <select className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all cursor-pointer appearance-none">
                      <option>Director Support Fund</option>
                      <option>Project Matchmaking</option>
                      <option>IMDb Verification</option>
                      <option>Network Access</option>
                    </select>
                    <Network className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-gfa-slate/50 rotate-90" />
                    </div>
                  </div>
                </div>
                <button className="btn-primary w-full !py-4 shadow-lg flex items-center justify-center gap-2 group">
                  {cap.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="mt-8 text-[10px] text-gfa-slate font-bold uppercase tracking-widest text-center opacity-50">
                {cap.inquiryNote}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-24 pt-12 border-t border-gfa-border text-center">
           <p className="text-[10px] text-gfa-slate uppercase tracking-[0.3em] font-bold opacity-40">
              Non-Profit Industry Service • Est. 2024 • Supportive Excellence
           </p>
        </div>
      </div>
    </div>
  );
};

// Helper component for the form icon
const Building = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);

export default GraduateSupport;
