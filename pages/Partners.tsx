
import React, { useState } from 'react';
import { useLocale } from '../App';
import { PARTNERS_DATA } from '../data';

const Partners: React.FC = () => {
  const { t } = useLocale();
  const [filter, setFilter] = useState({ category: 'All', country: 'All' });

  const categories = t.locale === 'zh' 
    ? ['全部', '法律', '制作', '旅游', '保险', '餐饮', '零售'] 
    : ['All', 'Legal', 'Production', 'Travel', 'Insurance', 'Dining', 'Retail'];

  const countries = t.locale === 'zh'
    ? ['全部', '美国', '中国', '英国', '法国', '澳大利亚', '意大利']
    : ['All', 'USA', 'China', 'UK', 'France', 'Australia', 'Italy'];

  const getCatEN = (cat: string) => {
    if (t.locale !== 'zh') return cat;
    const map: Record<string, string> = { '全部': 'All', '法律': 'Legal', '制作': 'Production', '旅游': 'Travel', '保险': 'Insurance', '餐饮': 'Dining', '零售': 'Retail' };
    return map[cat] || cat;
  };

  const getCountryEN = (c: string) => {
    if (t.locale !== 'zh') return c;
    const map: Record<string, string> = { '全部': 'All', '美国': 'USA', '中国': 'China', '英国': 'UK', '法国': 'France', '澳大利亚': 'Australia', '意大利': 'Italy' };
    return map[c] || c;
  };

  const filtered = PARTNERS_DATA.filter(m => {
    const catMatch = filter.category === categories[0] || m.category === getCatEN(filter.category);
    const countryMatch = filter.country === countries[0] || m.country === getCountryEN(filter.country);
    return catMatch && countryMatch;
  });

  return (
    <div className="py-32 max-w-7xl mx-auto px-4">
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-black mb-6 gold-gradient uppercase tracking-tighter">{t.partners.title}</h1>
        <p className="text-gfa-gray text-lg max-w-2xl mx-auto uppercase tracking-widest">{t.partners.intro}</p>
      </div>

      <div className="bg-gfa-darkGray p-6 mb-12 flex flex-wrap gap-8 border border-white/5 items-end">
        <div>
          <label className="block text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-2">{t.partners.catLabel}</label>
          <select 
            onChange={e => setFilter({ ...filter, category: e.target.value })}
            className="bg-gfa-black border border-white/10 text-white p-2 text-xs focus:outline-none"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[10px] text-gfa-gold font-black uppercase tracking-widest mb-2">{t.partners.countryLabel}</label>
          <select 
            onChange={e => setFilter({ ...filter, country: e.target.value })}
            className="bg-gfa-black border border-white/10 text-white p-2 text-xs focus:outline-none"
          >
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="ml-auto text-[10px] text-gfa-gray uppercase font-bold tracking-widest">
          {t.partners.found.replace('{n}', filtered.length.toString())}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(m => (
          <div key={m.id} className="bg-gfa-black p-8 border border-white/5 hover:border-gfa-gold/50 transition-all flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <img src={m.logo} alt={m.name} className="w-16 h-16 grayscale hover:grayscale-0 transition-all rounded" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gfa-gold bg-gfa-gold/10 px-3 py-1 border border-gfa-gold/30">
                {t.locale === 'zh' ? (categories.find(c => getCatEN(c) === m.category)) : m.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{m.name}</h3>
            <p className="text-gfa-gold font-black text-lg mb-4">{m.benefit}</p>
            <p className="text-gfa-gray text-xs mb-8 flex-grow">
              {m.city}, {t.locale === 'zh' ? (countries.find(c => getCountryEN(c) === m.country)) : m.country}
            </p>
            <div className="pt-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-gfa-gray">
              {t.partners.card.eligibility}: {m.eligibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
