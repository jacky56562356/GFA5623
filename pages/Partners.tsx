
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Merchant } from '../types.ts';
import SEO from '../components/SEO.tsx';

const Partners: React.FC = () => {
  const { t } = useLocale();
  const [filter, setFilter] = useState({ category: 'All', country: 'All' });
  const partnersList: Merchant[] = t.partnersList || [];
  const p = t.partners || {};

  const filterOpts = p.filterOptions || {
    categories: ['All', 'Legal', 'Production', 'Travel', 'Insurance', 'Dining', 'Retail'],
    countries: ['All', 'USA', 'China', 'UK', 'France', 'Australia', 'Italy']
  };

  const categories = filterOpts.categories;
  const countries = filterOpts.countries;

  // Since we are now using localized data, we can filter directly against the localized strings
  // However, for 'All', we need to check index 0.
  
  const filtered = partnersList.filter(m => {
    const catMatch = filter.category === categories[0] || m.category === filter.category;
    // Basic fuzzy match for country if data might have slight variations, but strictly == is better if data is consistent
    const countryMatch = filter.country === countries[0] || m.country === filter.country;
    return catMatch && countryMatch;
  });

  return (
    <div className="bg-gfa-warmWhite pt-48 pb-32 px-6 min-h-screen">
      <SEO 
        title={p.title || "Partners"} 
        description={p.intro || "Find verified service providers including legal, insurance, and production vendors for your film projects."} 
      />

      <div className="container-gfa">
        {/* Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">Verified Service Providers</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {p.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {p.intro}
          </p>
        </header>

        {/* Filters */}
        <div className="bg-white p-8 mb-16 flex flex-wrap gap-8 border border-gfa-border items-end rounded-card shadow-sm">
          <div>
            <label className="block text-[11px] text-gfa-slate font-bold uppercase tracking-widest mb-3">{p.catLabel}</label>
            <select 
              onChange={e => setFilter({ ...filter, category: e.target.value })}
              className="bg-gfa-warmWhite border border-gfa-border text-gfa-inkBlack px-4 py-3 text-sm font-medium focus:outline-none focus:border-gfa-gold rounded-btn min-w-[200px]"
            >
              {categories.map((c: string) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[11px] text-gfa-slate font-bold uppercase tracking-widest mb-3">{p.countryLabel}</label>
            <select 
              onChange={e => setFilter({ ...filter, country: e.target.value })}
              className="bg-gfa-warmWhite border border-gfa-border text-gfa-inkBlack px-4 py-3 text-sm font-medium focus:outline-none focus:border-gfa-gold rounded-btn min-w-[200px]"
            >
              {countries.map((c: string) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="ml-auto text-[11px] text-gfa-gold font-black uppercase tracking-widest self-center pt-6">
            {p.found?.replace('{n}', filtered.length.toString())}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(m => (
            <div key={m.id} className="card-standard flex flex-col h-full group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-gfa-warmWhite rounded-btn flex items-center justify-center border border-gfa-border group-hover:border-gfa-gold/30 transition-colors">
                  <img src={m.logo} alt={m.name} className="w-10 h-10 object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gfa-gold bg-gfa-gold/10 px-3 py-1 rounded-sm">
                   {m.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-gfa-inkBlack font-serif">{m.name}</h3>
              <p className="text-gfa-gold font-bold text-sm mb-6">{m.benefit}</p>
              <p className="text-gfa-slate text-xs mb-8 flex-grow font-medium uppercase tracking-wide">
                {m.city}, {m.country}
              </p>
              <div className="pt-6 border-t border-gfa-border text-[10px] font-black uppercase tracking-widest text-gfa-slate/60">
                {p.card?.eligibility}: {m.eligibility}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
