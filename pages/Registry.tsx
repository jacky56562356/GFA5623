
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

  // Derive unique options from mock data for filters
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

  // Filtering & Sorting
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
    <div className="bg-gfa-black pt-48 pb-40 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="inline-block px-8 py-2.5 border border-gfa-gold/30 text-gfa-gold text-[10px] font-black uppercase tracking-[0.6em] bg-gfa-gold/5 rounded-sm backdrop-blur-md shadow-2xl">
              OFFICIAL SUPERVISORY DATA PORTAL
            </div>
            <div className="flex items-center gap-3 text-[9px] font-black text-green-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              Live Audit Database Connected
            </div>
          </div>
          
          <h1 className="mb-12 gold uppercase text-6xl md:text-9xl tracking-tighter font-cinzel leading-none font-black">
            {t.registry.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-gray uppercase tracking-[0.3em] font-light max-w-4xl mx-auto leading-relaxed opacity-60 font-montserrat">
            {t.registry.subtitle}
          </p>
          
          <div className="mt-20 p-10 bg-white/2 border border-white/5 rounded-sm inline-block text-left max-w-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gfa-gold opacity-30 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gfa-gold mb-5 font-montserrat">
              {t.disclaimer.title}
            </div>
            <div className="text-[11px] text-white/40 leading-loose uppercase tracking-[0.2em] font-bold font-montserrat">
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

        {/* Results Summary Bar */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-gfa-gray/40 border-b border-white/10 pb-10 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="font-montserrat">
            {t.common.results}: <span className="text-white/70 font-mono text-base ml-2">{filteredOrgs.length}</span>
          </span>
          <div className="flex flex-wrap justify-center gap-12 font-montserrat">
            <span className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]"></span> 
              INSTITUTIONAL ACTIVE
            </span>
            <span className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]"></span> 
              SUSPENDED / REVOKED
            </span>
          </div>
        </div>

        <div className="animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
          {/* Audit Scanning Overlay Effect */}
          {loading && (
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gfa-gold to-transparent animate-[shimmer_2s_infinite] z-20 opacity-30 pointer-events-none"></div>
          )}
          <RegistryList 
            items={filteredOrgs} 
            loading={loading} 
            onOpen={setSelectedOrg} 
          />
        </div>

        {/* Accountability Legend */}
        <div className="mt-40 pt-20 border-t border-white/5 text-center">
           <div className="opacity-[0.15] hover:opacity-40 transition-opacity duration-1000 mb-10 inline-block">
              <img src="https://i.ibb.co/B582n2Dk/1755827874220993959.png" alt="GFA Official Seal" className="h-24 w-auto grayscale" />
           </div>
           <p className="text-[9px] text-gfa-gray/30 uppercase tracking-[0.6em] font-black max-w-2xl mx-auto italic leading-loose">
             {t.registry.disclaimerBody}
           </p>
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
