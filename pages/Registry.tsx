
import React, { useState, useMemo, useEffect } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { RegistryOrg, RegistryQuery, OrgCategory } from '../lib/registry/types';
import { MOCK_REGISTRY } from '../lib/registry/mockData.ts';
import RegistryFilters from '../components/registry/RegistryFilters.tsx';
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
  const ui = t.registry.ui || {
    portalLabel: "Official Certification Portal",
    active: "INSTITUTIONAL ACTIVE",
    pending: "PENDING / UNDER REVIEW",
    revoked: "REVOKED / SUSPENDED",
    noResults: "No institutional records match your criteria."
  };

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
    <div className="bg-gfa-warmWhite pt-48 pb-40 px-6 min-h-screen">
      <div className="container-gfa">
        {/* Institutional Header */}
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 border border-gfa-border text-gfa-slate text-[9px] font-black uppercase tracking-[0.4em] bg-white mb-10 rounded-sm">
            {ui.portalLabel}
          </div>
          
          <h2 className="text-[36px] font-bold text-gfa-inkBlack mb-6 font-serif">
            {t.registry.title}
          </h2>
          <p className="text-[18px] text-gfa-slate leading-relaxed font-normal opacity-90 mb-12">
            {t.registry.subtitle}
          </p>

          {/* Mandatory Legal Notice */}
          <div className="bg-white border border-gfa-border p-8 text-left relative overflow-hidden group shadow-sm rounded-sm">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold/30 group-hover:bg-gfa-gold transition-colors"></div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gfa-gold mb-6">
              {t.disclaimer.title}
            </div>
            <div className="text-[13px] text-gfa-slate leading-loose font-bold italic">
              {t.disclaimer.statutory}
            </div>
          </div>
        </header>

        <RegistryFilters 
          query={query} 
          setQuery={setQuery} 
          options={options}
          loading={loading}
        />

        <div className="mb-12 flex flex-col md:flex-row justify-between items-center text-[11px] font-black uppercase tracking-widest text-gfa-slate/60 border-b border-gfa-border pb-10 gap-10">
          <span>
            {t.registry.registryCount}: <span className="text-gfa-inkBlack ml-2 font-mono text-base">{filteredOrgs.length}</span>
          </span>
          <div className="flex flex-wrap justify-center gap-10">
            <span className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span> 
              {ui.active}
            </span>
            <span className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gfa-grayLight"></span> 
              {ui.pending}
            </span>
            <span className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> 
              {ui.revoked}
            </span>
          </div>
        </div>

        {/* Directory Table Layout */}
        <div className="overflow-x-auto border border-gfa-border rounded-sm shadow-sm bg-white min-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gfa-warmWhite border-b border-gfa-border text-gfa-slate font-black uppercase text-[10px] tracking-[0.2em]">
                {t.registry.tableHeaders.map((h: string, i: number) => (
                  <th key={i} className="p-6">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[11px] font-bold uppercase tracking-wide text-gfa-inkBlack">
              {loading ? (
                 <tr>
                    <td colSpan={5} className="p-20 text-center text-gfa-slate opacity-50 uppercase tracking-widest">
                       {t.common.loading}
                    </td>
                 </tr>
              ) : filteredOrgs.length === 0 ? (
                 <tr>
                    <td colSpan={5} className="p-20 text-center text-gfa-slate opacity-50 uppercase tracking-widest">
                       {ui.noResults}
                    </td>
                 </tr>
              ) : filteredOrgs.map((org) => (
                <tr 
                  key={org.orgId} 
                  onClick={() => setSelectedOrg(org)}
                  className="border-b border-gfa-border hover:bg-gfa-warmWhite transition-colors cursor-pointer group last:border-0"
                >
                  <td className="p-6">
                    <div className="text-[13px] font-black font-serif text-gfa-inkBlack group-hover:text-gfa-gold transition-colors">{org.name}</div>
                    <div className="text-[9px] text-gfa-slate opacity-60 mt-1 font-mono">ID: {org.orgId}</div>
                  </td>
                  <td className="p-6 text-gfa-slate font-medium">
                    {org.certification.validFrom} — {org.certification.validTo}
                  </td>
                  <td className="p-6">
                    <span className="bg-gfa-warmWhite border border-gfa-border px-3 py-1 rounded-sm text-[9px] font-black text-gfa-slate">
                      {org.categories[0]}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full ${org.certification.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                       {org.certification.status}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                       <span className={`text-lg font-black font-serif ${org.trustScore >= 90 ? 'text-gfa-gold' : 'text-gfa-slate'}`}>{org.trustScore}</span>
                       <span className="text-[9px] text-gfa-slate opacity-50">/100</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination/Bottom Callout */}
        <div className="mt-32 pt-16 border-t border-gfa-border text-center">
          <p className="text-[11px] text-gfa-slate uppercase tracking-[0.5em] font-bold opacity-30 italic">
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
