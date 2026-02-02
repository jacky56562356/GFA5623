
import React, { useState } from 'react';
import { useLocale } from '../App.tsx';
import { PARTNERS_DATA } from '../data.ts';

const Partners: React.FC = () => {
  const { t } = useLocale();
  const [filter, setFilter] = useState({ category: 'All', country: 'All' });

  const filtered = PARTNERS_DATA.filter(m => {
    return (filter.category === 'All' || m.category === filter.category) &&
           (filter.country === 'All' || m.country === filter.country);
  });

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-black mb-6 gold-gradient uppercase tracking-tighter">{t.partners.title}</h1>
        <p className="text-gfa-gray text-lg max-w-2xl mx-auto uppercase tracking-widest">{t.partners.intro}</p>
      </div>

      <div className="bg-gfa-darkGray p-6 mb-12 flex flex-wrap gap-8 border border-white/5 items-end">
        <div>
          <label className="block text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-2">Category</label>
          <select 
            onChange={e => setFilter({ ...filter, category: e.target.value })}
            className="bg-gfa-black border border-white/10 text-white p-2 text-xs focus:outline-none"
          >
            <option>All</option>
            <option>Legal</option>
            <option>Production</option>
            <option>Travel</option>
            <option>Insurance</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-2">Country</label>
          <select 
            onChange={e => setFilter({ ...filter, country: e.target.value })}
            className="bg-gfa-black border border-white/10 text-white p-2 text-xs focus:outline-none"
          >
            <option>All</option>
            <option>USA</option>
            <option>China</option>
            <option>UK</option>
          </select>
        </div>
        <div className="ml-auto text-[10px] text-gfa-gray uppercase font-bold tracking-widest">
          Found {filtered.length} Partners
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(m => (
          <div key={m.id} className="bg-gfa-black p-8 border border-white/5 hover:border-gfa-gold/50 transition-all flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <img src={m.logo} alt={m.name} className="w-16 h-16 grayscale hover:grayscale-0 transition-all rounded" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gfa-gold bg-gfa-gold/10 px-3 py-1 border border-gfa-gold/30">{m.category}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{m.name}</h3>
            <p className="text-gfa-gold font-black text-lg mb-4">{m.benefit}</p>
            <p className="text-gfa-gray text-xs mb-8 flex-grow">{m.city}, {m.country}</p>
            <div className="pt-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-gfa-gray">
              Eligibility: {m.eligibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
