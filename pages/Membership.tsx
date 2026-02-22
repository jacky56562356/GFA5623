
import React, { useState, useMemo } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { Search, ChevronRight, Star, Gift, Briefcase, Film, DollarSign, GraduationCap, Globe, ShieldCheck, Users, Plus, Minus } from 'lucide-react';

const Membership: React.FC = () => {
  const { t } = useLocale();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const m = t.membership || {};
  const partnersList = t.partnersList || [];
  
  const ui = m.ui || {
    networkBadge: "GFA Professional Network",
    orgSubtitle: "Institutional Access for Companies & Schools",
    joinAs: "Join as {tier}",
    select: "Select {tier}",
    benefitsTitle: "Exclusive Member Benefits",
    searchPlaceholder: "Search merchant benefits..."
  };

  const filteredMerchants = useMemo(() => {
    const cats = m.merchantBenefits?.categories || [];
    const allLabel = cats[0] || 'All';
    
    return partnersList.filter((p: any) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.benefit.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === allLabel || p.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [partnersList, searchTerm, selectedCategory, m.merchantBenefits]);

  return (
    <div className="bg-gfa-warmWhite min-h-screen relative">
      {/* Global Cinematic Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <SEO 
        title={m.title || "Membership"} 
        description={m.intro || "Join the Global Film Alliance professional network. Access talent tiers, organizational accreditation, and industry resources."} 
      />
      
      {/* Cinematic Hero */}
      <header className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-gfa-inkBlack">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2031&auto=format&fit=crop" 
             alt="Film Premiere Red Carpet" 
             className="w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/90 via-gfa-inkBlack/70 to-gfa-warmWhite"></div>
        </div>

        <div className="container-gfa relative z-10">
          <span className="inline-block px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 bg-black/40 backdrop-blur-sm rounded-full">{ui.networkBadge}</span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-10 leading-tight drop-shadow-2xl">
            {m.title}
          </h1>
          <p className="text-lg text-white/70 leading-loose font-medium opacity-90 max-w-2xl mx-auto italic">
            {m.intro}
          </p>
        </div>
      </header>
      
      <div className="container-gfa px-6 pb-32 -mt-10 relative z-20">
        
        {/* Membership Pillars - Graduate Support & Financing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {(m.pillars || []).map((pillar: any, i: number) => (
            <div key={i} className="card-standard bg-white/80 backdrop-blur-md group hover:border-gfa-gold transition-all">
              <div className="w-14 h-14 rounded-2xl bg-gfa-gold/10 flex items-center justify-center text-2xl mb-8 group-hover:bg-gfa-gold group-hover:text-white transition-colors">
                {pillar.icon === '🎓' ? <GraduationCap /> : pillar.icon === '🎬' ? <Film /> : <DollarSign />}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-gfa-inkBlack">{pillar.title}</h3>
              <p className="text-sm text-gfa-slate leading-relaxed opacity-80">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Join Section */}
        <div className="mb-32 relative py-20 px-10 rounded-card overflow-hidden">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop" 
              alt="Cinema Background" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gfa-warmWhite via-transparent to-gfa-warmWhite"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="gold-badge mb-4">Value Proposition</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6">{m.whyJoin?.title}</h2>
              <p className="text-gfa-slate max-w-2xl mx-auto opacity-70">{m.whyJoin?.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {(m.whyJoin?.items || []).map((item: any, i: number) => (
                <div key={i} className="text-center group bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/40 hover:border-gfa-gold/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mx-auto mb-8 group-hover:scale-110 transition-transform">
                    {item.icon === '🌍' ? <Globe className="text-gfa-gold" /> : item.icon === '🛡️' ? <ShieldCheck className="text-gfa-gold" /> : <Users className="text-gfa-gold" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gfa-inkBlack font-serif">{item.title}</h3>
                  <p className="text-sm text-gfa-slate leading-relaxed opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Section */}
        <div className="mb-32 relative py-20 px-10 rounded-card overflow-hidden">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1932&auto=format&fit=crop" 
              alt="Global Film Network" 
              className="w-full h-full object-cover opacity-[0.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gfa-warmWhite via-transparent to-gfa-warmWhite"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{m.talentTitle}</h3>
              <div className="h-1 w-20 bg-gfa-gold mx-auto opacity-50 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(m.talentTiers || []).map((tier: any, i: number) => (
                <div 
                  key={i} 
                  className={`p-8 border rounded-card transition-all flex flex-col relative group ${
                    tier.recommended 
                      ? 'border-gfa-gold bg-gradient-to-br from-white via-gfa-gold/5 to-white shadow-2xl scale-105 z-10' 
                      : 'border-gfa-border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gfa-gold via-yellow-300 to-gfa-gold"></div>
                  )}
                  
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-2 text-gfa-inkBlack font-serif">{tier.name}</h4>
                  <div className="text-3xl font-black text-gfa-gold mb-4 font-serif">{tier.price}</div>
                  
                  <p className="text-[11px] text-gfa-slate leading-relaxed mb-8 opacity-70 font-medium">
                    {tier.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {(tier.perks || []).map((p: string, idx: number) => (
                      <li key={idx} className="text-[11px] text-gfa-slate uppercase font-bold tracking-wide flex items-start gap-3">
                        <span className="text-gfa-gold text-sm">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 text-[11px] font-black uppercase tracking-widest rounded-btn transition-all ${tier.recommended ? 'bg-gfa-gold text-gfa-black shadow-lg hover:brightness-105' : 'border border-gfa-border text-gfa-slate hover:border-gfa-gold hover:text-gfa-gold hover:bg-gfa-gold/5'}`}>
                    {ui.select?.replace('{tier}', tier.name)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-32 bg-white p-12 md:p-20 rounded-card border border-gfa-border shadow-sm relative overflow-hidden">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0 opacity-[0.03]">
             <img 
               src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" 
               alt="Film Reel" 
               className="w-full h-full object-cover"
             />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">{m.process?.title}</h2>
              <p className="text-gfa-slate opacity-70">{m.process?.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gfa-border z-0"></div>
              
              {(m.process?.steps || []).map((step: any, i: number) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-gfa-warmWhite border-4 border-white shadow-xl flex items-center justify-center text-2xl font-black text-gfa-gold mx-auto mb-8">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gfa-inkBlack font-serif">{step.title}</h3>
                  <p className="text-sm text-gfa-slate leading-relaxed opacity-80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Merchant Benefits Section */}
        <div className="mb-32 relative py-20 px-10 rounded-card overflow-hidden">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
              alt="Film Production" 
              className="w-full h-full object-cover opacity-[0.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gfa-warmWhite via-transparent to-gfa-warmWhite"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-xl">
                <span className="gold-badge mb-4">{ui.benefitsTitle}</span>
                <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">{m.merchantBenefits?.title}</h3>
                <p className="text-gfa-slate opacity-70">{m.merchantBenefits?.subtitle}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate opacity-40" />
                  <input 
                    type="text"
                    placeholder={ui.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-6 py-3 bg-white border border-gfa-border rounded-full text-sm focus:outline-none focus:border-gfa-gold w-full sm:w-64"
                  />
                </div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 bg-white border border-gfa-border rounded-full text-sm focus:outline-none focus:border-gfa-gold"
                >
                  {(m.merchantBenefits?.categories || []).map((cat: string) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMerchants.map((merchant: any) => (
                <div key={merchant.id} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gfa-border hover:border-gfa-gold/50 transition-all group flex items-center gap-6 shadow-sm hover:shadow-md">
                  <div className="w-16 h-16 rounded-xl bg-gfa-warmWhite flex items-center justify-center border border-gfa-border group-hover:border-gfa-gold/20 transition-colors shrink-0">
                    <img src={merchant.logo} alt={merchant.name} className="w-10 h-10 object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-black text-gfa-gold uppercase tracking-widest mb-1">{merchant.category}</div>
                    <h4 className="font-bold text-gfa-inkBlack mb-1">{merchant.name}</h4>
                    <p className="text-xs text-gfa-slate font-bold">{merchant.benefit}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gfa-border group-hover:text-gfa-gold transition-colors" />
                </div>
              ))}
              {filteredMerchants.length === 0 && (
                <div className="col-span-full py-20 text-center text-gfa-slate italic opacity-50">
                  No benefits found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Organization Section */}
        <div className="mb-32 bg-gfa-inkBlack text-white p-12 md:p-20 rounded-card shadow-2xl relative overflow-hidden">
          {/* Subtle Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/10 blur-3xl rounded-full"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">{m.orgTitle}</h3>
            <p className="text-white/60 text-sm font-medium uppercase tracking-widest">{ui.orgSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
            {(m.orgTiers || []).map((tier: any, i: number) => (
              <div key={i} className="p-10 border border-white/10 bg-white/5 flex flex-col text-center rounded-sm hover:border-gfa-gold/30 transition-all hover:bg-white/10 backdrop-blur-sm group">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2 font-serif text-white group-hover:text-gfa-gold transition-colors">{tier.name}</h4>
                <div className="text-4xl font-black text-gfa-gold mb-4 font-serif">{tier.price}</div>
                
                <p className="text-[11px] text-white/50 leading-relaxed mb-8 font-medium">
                  {tier.desc}
                </p>
                
                <ul className="space-y-4 mb-12 flex-grow text-left">
                  {(tier.perks || []).map((p: string, idx: number) => (
                    <li key={idx} className="text-xs text-white/60 font-medium flex items-start gap-4">
                      <span className="text-gfa-gold mt-0.5">✦</span> {p}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 text-[10px] font-black uppercase tracking-widest border border-gfa-gold/50 text-gfa-gold hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-sm">
                  {ui.joinAs?.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-32 max-w-3xl mx-auto relative py-20">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
               alt="Cinema Hall" 
               className="w-full h-full object-cover"
             />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">{m.faq?.title}</h2>
              <div className="h-1 w-20 bg-gfa-gold mx-auto opacity-50 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {(m.faq?.items || []).map((item: any, i: number) => (
                <div key={i} className="bg-white/90 backdrop-blur-sm border border-gfa-border rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gfa-warmWhite transition-colors"
                  >
                    <span className="font-bold text-gfa-inkBlack font-serif">{item.q}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-gfa-gold" /> : <Plus className="w-5 h-5 text-gfa-gold" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-8 pb-8 text-sm text-gfa-slate leading-relaxed opacity-80 animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="bg-gradient-to-r from-[#C9A24D] to-[#E3C67B] p-16 text-center text-gfa-black rounded-card shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight font-serif">{m.entTitle}</h3>
            <p className="max-w-2xl mx-auto mb-12 font-medium text-lg opacity-90 leading-relaxed">{m.entDesc}</p>
            <button className="bg-gfa-black text-white px-12 py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-all shadow-2xl rounded-btn hover:shadow-black/20">
              {m.entCta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
