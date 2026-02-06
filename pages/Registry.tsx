
import React, { useState, useMemo, useEffect } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { RegistryOrg, RegistryQuery, OrgCategory } from '../lib/registry/types';
import { MOCK_REGISTRY } from '../lib/registry/mockData.ts';
import RegistryFilters from '../components/registry/RegistryFilters.tsx';
import RegistryList from '../components/registry/RegistryList.tsx';
import OrgDetailsDialog from '../components/registry/OrgDetailsDialog.tsx';

const Registry = () => {
  const { t } = useLocale();
  const [query, setQuery] = useState<RegistryQuery>({
    q: '',
    category: 'All',
    level: 'All',
    status: 'All',
    country: 'All',
    city: 'All',
    sort: 'score_desc'
  });
  const [selectedOrg, setSelectedOrg] = useState<RegistryOrg | null>(null);
  const [loading, setLoading] = useState(true);

  const options = useMemo(() => {
    const cats = new Set<OrgCategory>();
    const countries = new Set<string>();
    const cities = new Set<string>();
    MOCK_REGISTRY.forEach(org => {
      org.categories.forEach(c => cats.add(c));
      countries.add(org.country);
      cities.add(org.city);
    });
    return {
      categories: Array.from(cats).sort(),
      countries: Array.from(countries).sort(),
      cities: Array.from(cities).sort()
    };
  }, []);

  const filteredOrgs = useMemo(() => {
    let result = MOCK_REGISTRY.filter(org => {
      const q = query.q?.toLowerCase() || '';
      const matchesSearch = 
        org.name.toLowerCase().includes(q) || 
        org.certification.certificationId.toLowerCase().includes(q) ||
        org.city.toLowerCase().includes(q);
      const matchesLevel = query.level === 'All' || org.certification.level === query.level;
      const matchesCategory = query.category === 'All' || org.categories.includes(query.category as OrgCategory);
      const matchesStatus = query.status === 'All' || org.certification.status === query.status;
      const matchesCountry = query.country === 'All' || org.country === query.country;
      const matchesCity = query.city === 'All' || org.city === query.city;
      return matchesSearch && matchesLevel && matchesCategory && matchesStatus && matchesCountry && matchesCity;
    });
    result.sort((a, b) => {
      if (query.sort === 'score_desc') return b.trustScore - a.trustScore;
      if (query.sort === 'name_asc') return a.name.localeCompare(b.name);
      if (query.sort === 'review_desc') {
        return new Date(b.certification.lastReviewedAt).getTime() - new Date(a.certification.lastReviewedAt).getTime();
      }
      return 0;
    });
    return result;
  }, [query]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="bg-gfa-black pt-40 pb-40 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="inline-block px-6 py-2 border border-gfa-gold/30 text-gfa-gold text-[9px] font-black uppercase tracking-[0.5em] bg-gfa-gold/5 rounded-sm backdrop-blur-md shadow-2xl">
              OFFICIAL SUPERVISORY DATA PORTAL
            </div>
            <div className="flex items-center gap-2 text-[8px] font-black text-gfa-gold/60 uppercase tracking-widest opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-gfa-gold animate-ping"></span>
              Live Audit Database Connected
            </div>
          </div>
          
          <h1 className="mb-8 gold uppercase text-2xl md:text-4xl tracking-tighter font-cinzel leading-none font-black">
            {t.registry.title}
          </h1>
          <p className="text-sm md:text-base text-gfa-gray uppercase tracking-[0.2em] font-light max-w-3xl mx-auto leading-loose opacity-60 font-montserrat">
            {t.registry.subtitle}
          </p>
          
          <div className="mt-12 p-8 bg-white/2 border border-white/5 rounded-sm inline-block text-left max-w-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gfa-gold opacity-30 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gfa-gold mb-4 font-montserrat">
              {t.disclaimer.title}
            </div>
            <div className="text-[10px] text-white/40 leading-loose uppercase tracking-[0.1em] font-bold font-montserrat">
              {t.disclaimer.legal}
            </div>
          </div>
        </header>

        <RegistryFilters 
          query={query} 
          setQuery={setQuery} 
          options={options}
          loading={loading}
        />

        <div className="mb-10 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-gfa-gray/40 border-b border-white/10 pb-8 gap-6 animate-fade-in">
          <span className="font-montserrat">
            {t.common.results}: <span className="text-white/70 font-mono text-sm ml-2">{filteredOrgs.length}</span>
          </span>
          <div className="flex flex-wrap justify-center gap-10 font-montserrat">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gfa-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></span> 
              INSTITUTIONAL ACTIVE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></span> 
              SUSPENDED / REVOKED
            </span>
          </div>
        </div>

        <div className="animate-fade-in relative">
          <RegistryList 
            items={filteredOrgs} 
            loading={loading} 
            onOpen={setSelectedOrg} 
          />
        </div>
      </div>

      <OrgDetailsDialog 
        org={selectedOrg} 
        onClose={() => setSelectedOrg(null)} 
      />
    </div>
  );
};

export default Registry;
