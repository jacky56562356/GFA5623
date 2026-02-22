
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
    <div className="bg-gfa-warmWhite min-h-screen relative overflow-hidden">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
          alt="Film Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gfa-warmWhite/70"></div>
      </div>

      {/* Global Cinematic Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.06] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <SEO 
        title={m.title || "Membership"} 
        description={m.intro || "Join the Global Film Alliance professional network. Access talent tiers, organizational accreditation, and industry resources."} 
      />
      
      {/* Cinematic Hero */}
      <header className="relative pt-48 pb-32 px-6 text-center overflow-hidden bg-gfa-inkBlack">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop" 
             alt="Film Premiere Red Carpet" 
             className="w-full h-full object-cover opacity-80"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/80 via-gfa-inkBlack/20 to-gfa-warmWhite/10"></div>
        </div>

        <div className="container-gfa relative z-10">
          <span className="inline-block px-6 py-2 border-2 border-gfa-gold/50 text-gfa-gold text-[11px] font-black uppercase tracking-[0.6em] mb-10 bg-black/60 backdrop-blur-md rounded-full shadow-2xl">{ui.networkBadge}</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-12 leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {m.title}
          </h1>
          <p className="text-xl text-white/90 leading-loose font-medium max-w-3xl mx-auto italic drop-shadow-lg">
            {m.intro}
          </p>
        </div>
      </header>
      
      <div className="container-gfa px-6 pb-32 -mt-16 relative z-20">
        
        {/* Membership Pillars - Graduate Support & Financing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {(m.pillars || []).map((pillar: any, i: number) => (
            <div key={i} className="card-standard bg-white/95 backdrop-blur-xl group hover:border-gfa-gold transition-all overflow-hidden p-0 flex flex-col shadow-2xl border-white">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={
                    i === 0 ? "https://images.unsplash.com/photo-1523240715634-d1c651110e5a?q=80&w=2070&auto=format&fit=crop" :
                    i === 1 ? "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" :
                    "https://images.unsplash.com/photo-1454165833767-02754a40326b?q=80&w=2070&auto=format&fit=crop"
                  } 
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
                <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-gfa-gold flex items-center justify-center text-white text-2xl shadow-[0_10px_20px_rgba(201,162,77,0.4)] border-2 border-white/20">
                  {pillar.icon === '🎓' ? <GraduationCap /> : pillar.icon === '🎬' ? <Film /> : <DollarSign />}
                </div>
              </div>
              <div className="p-10 pt-6 flex-grow">
                <h3 className="text-2xl font-bold mb-4 font-serif text-gfa-inkBlack group-hover:text-gfa-gold transition-colors">{pillar.title}</h3>
                <p className="text-base text-gfa-slate leading-relaxed opacity-90 font-medium">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Join Section */}
        <div className="mb-32 relative py-24 px-12 rounded-[40px] overflow-hidden shadow-2xl border border-white">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop" 
              alt="Cinema Background" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gfa-warmWhite/70 via-transparent to-gfa-warmWhite/70"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-20">
              <span className="gold-badge mb-6 shadow-lg">Value Proposition</span>
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8 drop-shadow-sm">{m.whyJoin?.title}</h2>
              <p className="text-xl text-gfa-slate max-w-3xl mx-auto opacity-90 font-bold leading-relaxed">{m.whyJoin?.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {(m.whyJoin?.items || []).map((item: any, i: number) => (
                <div key={i} className="text-center group bg-white/80 backdrop-blur-2xl p-12 rounded-[32px] border border-white shadow-xl hover:border-gfa-gold/50 transition-all hover:-translate-y-2">
                  <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-5xl mx-auto mb-10 group-hover:scale-110 transition-transform border-4 border-gfa-warmWhite">
                    {item.icon === '🌍' ? <Globe className="text-gfa-gold w-12 h-12" /> : item.icon === '🛡️' ? <ShieldCheck className="text-gfa-gold w-12 h-12" /> : <Users className="text-gfa-gold w-12 h-12" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gfa-inkBlack font-serif">{item.title}</h3>
                  <p className="text-base text-gfa-slate leading-relaxed opacity-90 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Section */}
        <div className="mb-32 relative py-24 px-12 rounded-[40px] overflow-hidden shadow-2xl border border-white">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1932&auto=format&fit=crop" 
              alt="Global Film Network" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gfa-warmWhite/70 via-transparent to-gfa-warmWhite/70"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-20">
              <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">{m.talentTitle}</h3>
              <div className="h-2 w-32 bg-gfa-gold mx-auto opacity-80 rounded-full shadow-lg"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {(m.talentTiers || []).map((tier: any, i: number) => (
                <div 
                  key={i} 
                  className={`p-12 border rounded-[32px] transition-all flex flex-col relative group ${
                    tier.recommended 
                      ? 'border-gfa-gold bg-white shadow-[0_30px_60px_rgba(201,162,77,0.2)] scale-105 z-10' 
                      : 'border-white bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-3'
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gfa-gold via-yellow-300 to-gfa-gold rounded-t-[32px]"></div>
                  )}
                  
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-3 text-gfa-inkBlack font-serif group-hover:text-gfa-gold transition-colors">{tier.name}</h4>
                  <div className="text-5xl font-black text-gfa-gold mb-8 font-serif drop-shadow-sm">{tier.price}</div>
                  
                  <p className="text-sm text-gfa-slate leading-relaxed mb-10 opacity-90 font-bold">
                    {tier.desc}
                  </p>
                  
                  <ul className="space-y-6 mb-12 flex-grow">
                    {(tier.perks || []).map((p: string, idx: number) => (
                      <li key={idx} className="text-xs text-gfa-slate uppercase font-black tracking-widest flex items-start gap-4">
                        <span className="text-gfa-gold text-xl">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-6 text-xs font-black uppercase tracking-[0.3em] rounded-full transition-all shadow-xl ${tier.recommended ? 'bg-gfa-gold text-gfa-black hover:brightness-110 hover:scale-105' : 'border-2 border-gfa-gold text-gfa-gold hover:bg-gfa-gold hover:text-white'}`}>
                    {ui.select?.replace('{tier}', tier.name)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-32 bg-white/95 backdrop-blur-2xl p-20 md:p-32 rounded-[40px] border border-white shadow-2xl relative overflow-hidden group">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0 opacity-50 group-hover:scale-105 transition-transform duration-1000">
             <img 
               src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" 
               alt="Film Reel" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8">{m.process?.title}</h2>
              <p className="text-gfa-slate opacity-90 font-bold text-xl max-w-3xl mx-auto leading-relaxed">{m.process?.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-20 left-0 w-full h-2 bg-gfa-gold/10 z-0 rounded-full"></div>
              
              {(m.process?.steps || []).map((step: any, i: number) => (
                <div key={i} className="relative z-10 text-center group/step">
                  <div className="w-40 h-40 rounded-full bg-white border-[12px] border-gfa-warmWhite shadow-2xl flex items-center justify-center text-5xl font-black text-gfa-gold mx-auto mb-12 group-hover/step:scale-110 transition-transform group-hover/step:border-gfa-gold/20">
                    0{i + 1}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gfa-inkBlack font-serif group-hover/step:text-gfa-gold transition-colors">{step.title}</h3>
                  <p className="text-base text-gfa-slate leading-relaxed opacity-90 font-bold">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Merchant Benefits Section */}
        <div className="mb-32 relative py-24 px-12 rounded-[40px] overflow-hidden shadow-2xl border border-white">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
              alt="Film Production" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gfa-warmWhite/70 via-transparent to-gfa-warmWhite/70"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
              <div className="max-w-2xl">
                <span className="gold-badge mb-8 shadow-lg">Exclusive Perks</span>
                <h3 className="text-4xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight">{m.merchantBenefits?.title}</h3>
                <p className="text-xl text-gfa-slate opacity-90 font-bold leading-relaxed">{m.merchantBenefits?.subtitle}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gfa-slate opacity-70" />
                  <input 
                    type="text"
                    placeholder={ui.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-16 pr-10 py-5 bg-white border-2 border-white rounded-full text-base font-bold focus:outline-none focus:border-gfa-gold w-full sm:w-96 shadow-2xl"
                  />
                </div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-10 py-5 bg-white border-2 border-white rounded-full text-base font-black focus:outline-none focus:border-gfa-gold shadow-2xl appearance-none cursor-pointer"
                >
                  {(m.merchantBenefits?.categories || []).map((cat: string) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredMerchants.map((merchant: any) => (
                <div key={merchant.id} className="bg-white/90 backdrop-blur-xl p-10 rounded-[32px] border border-white hover:border-gfa-gold transition-all group flex items-center gap-10 shadow-2xl hover:-translate-y-2">
                  <div className="w-24 h-24 rounded-3xl bg-gfa-warmWhite flex items-center justify-center border-2 border-gfa-border group-hover:border-gfa-gold/50 transition-colors shrink-0 overflow-hidden shadow-inner">
                    <img src={merchant.logo} alt={merchant.name} className="w-14 h-14 object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="flex-grow">
                    <div className="text-[11px] font-black text-gfa-gold uppercase tracking-[0.3em] mb-3">{merchant.category}</div>
                    <h4 className="font-bold text-gfa-inkBlack text-xl mb-2">{merchant.name}</h4>
                    <p className="text-base text-gfa-gold font-black drop-shadow-sm">{merchant.benefit}</p>
                  </div>
                  <ChevronRight className="w-8 h-8 text-gfa-border group-hover:text-gfa-gold transition-colors" />
                </div>
              ))}
              {filteredMerchants.length === 0 && (
                <div className="col-span-full py-40 text-center text-gfa-slate italic opacity-70 text-2xl font-black">
                  No benefits found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Organization Section */}
        <div className="mb-32 bg-gfa-inkBlack text-white p-20 md:p-32 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden group">
          {/* Subtle Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-[2000ms]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gfa-gold/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gfa-gold/10 blur-[150px] rounded-full"></div>
          
          <div className="text-center mb-24 relative z-10">
            <h3 className="text-4xl md:text-7xl font-bold font-serif text-white mb-8 drop-shadow-2xl">{m.orgTitle}</h3>
            <p className="text-gfa-gold text-base font-black uppercase tracking-[0.5em] drop-shadow-lg">{ui.orgSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
            {(m.orgTiers || []).map((tier: any, i: number) => (
              <div key={i} className="p-16 border border-white/10 bg-white/5 flex flex-col text-center rounded-[40px] hover:border-gfa-gold/70 transition-all hover:bg-white/10 backdrop-blur-2xl group/card shadow-2xl hover:-translate-y-4 duration-500">
                <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 font-serif text-white group-hover/card:text-gfa-gold transition-colors">{tier.name}</h4>
                <div className="text-6xl font-black text-gfa-gold mb-10 font-serif drop-shadow-lg">{tier.price}</div>
                
                <p className="text-sm text-white/70 leading-relaxed mb-12 font-bold italic">
                  {tier.desc}
                </p>
                
                <ul className="space-y-6 mb-16 flex-grow text-left">
                  {(tier.perks || []).map((p: string, idx: number) => (
                    <li key={idx} className="text-sm text-white/90 font-black flex items-start gap-5">
                      <span className="text-gfa-gold mt-0.5 text-2xl">✦</span> {p}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-7 text-xs font-black uppercase tracking-[0.4em] border-2 border-gfa-gold/50 text-gfa-gold hover:bg-gfa-gold hover:text-gfa-black transition-all rounded-full shadow-[0_15px_30px_rgba(201,162,77,0.3)] hover:scale-105">
                  {ui.joinAs?.replace('{tier}', tier.name)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-32 max-w-5xl mx-auto relative py-32 px-12 rounded-[40px] overflow-hidden shadow-2xl border border-white">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
               alt="Cinema Hall" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-gfa-warmWhite/90 via-transparent to-gfa-warmWhite/90"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-bold font-serif text-gfa-inkBlack mb-8">{m.faq?.title}</h2>
              <div className="h-2 w-32 bg-gfa-gold mx-auto opacity-80 rounded-full shadow-lg"></div>
            </div>
            
            <div className="space-y-8">
              {(m.faq?.items || []).map((item: any, i: number) => (
                <div key={i} className="bg-white/95 backdrop-blur-2xl border border-white rounded-[32px] overflow-hidden shadow-2xl">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-12 py-10 flex justify-between items-center text-left hover:bg-gfa-warmWhite/50 transition-colors"
                  >
                    <span className="text-2xl font-bold text-gfa-inkBlack font-serif">{item.q}</span>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${openFaq === i ? 'bg-gfa-gold text-white rotate-180' : 'bg-gfa-warmWhite text-gfa-gold'}`}>
                      {openFaq === i ? <Minus className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-12 pb-12 text-lg text-gfa-slate leading-relaxed font-bold opacity-90 animate-in fade-in slide-in-from-top-6 duration-700">
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
