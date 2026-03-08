
import React, { useState, useMemo } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { MOCK_REGISTRY } from '../lib/registry/mockData.ts';
import { RegistryOrg, OrgCategory } from '../lib/registry/types.ts';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.tsx';
import OrgDetailsDialog from '../components/registry/OrgDetailsDialog.tsx';

const Registry = () => {
  const { t } = useLocale();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    region: 'All',
    status: 'All',
    level: 'All'
  });
  const [selectedOrg, setSelectedOrg] = useState<RegistryOrg | null>(null);

  const reg = t.registry;

  const options = useMemo(() => {
    const cats = new Set<string>();
    const regions = new Set<string>();
    MOCK_REGISTRY.forEach(o => {
      o.categories.forEach(c => cats.add(c));
      regions.add(o.country);
    });
    return {
      categories: Array.from(cats).sort(),
      regions: Array.from(regions).sort()
    };
  }, []);

  const filteredData = useMemo(() => {
    return MOCK_REGISTRY.filter(o => {
      const matchesSearch = 
        o.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        o.orgId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCat = filters.category === 'All' || o.categories.includes(filters.category as OrgCategory);
      const matchesRegion = filters.region === 'All' || o.country === filters.region;
      const matchesStatus = filters.status === 'All' || o.certification.status === filters.status;
      const matchesLevel = filters.level === 'All' || o.certification.level === filters.level;

      return matchesSearch && matchesCat && matchesRegion && matchesStatus && matchesLevel;
    });
  }, [searchTerm, filters]);

  return (
    <div className="bg-gfa-warmWhite min-h-screen pt-[140px] pb-sect-lg relative overflow-hidden">
      <SEO 
        title={reg.title || "Registry Search"} 
        description={reg.subtitle || "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards."} 
      />

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gfa-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <div className="container-gfa relative z-10">
        <div className="mb-20 animate-fade-in">
          <div className="gold-badge mb-8 animate-fade-up">Audited Institutional Database</div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight drop-shadow-sm">
            {reg.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-slate max-w-3xl font-light italic font-serif leading-relaxed opacity-90">
            {reg.subtitle}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gfa-border mb-20 animate-fade-up">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate mb-4 block opacity-60">Search (Name / ID / City)</label>
              <div className="relative group">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t.common.searchPlaceholder}
                  className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/10 transition-all outline-none"
                />
              </div>
            </div>
            
            <div className="col-span-6 lg:col-span-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate mb-4 block opacity-60">{t.common.category}</label>
              <select className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-gfa-gold transition-all outline-none" value={filters.category} onChange={(e) => setFilters({...filters, category: e.target.value})}>
                <option value="All">All Categories</option>
                {options.categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate mb-4 block opacity-60">{t.common.region}</label>
              <select className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-gfa-gold transition-all outline-none" value={filters.region} onChange={(e) => setFilters({...filters, region: e.target.value})}>
                <option value="All">All Regions</option>
                {options.regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div className="col-span-12 lg:col-span-3 flex gap-4 items-end">
              <div className="flex-grow">
                 <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate mb-4 block opacity-60">{t.common.status}</label>
                 <select className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-gfa-gold transition-all outline-none" value={filters.status} onChange={(e) => setFilters({...filters, status: e.target.value})}>
                    <option value="All">Status</option>
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                 </select>
              </div>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ category: 'All', region: 'All', status: 'All', level: 'All' });
                }}
                className="h-16 w-16 flex items-center justify-center bg-gfa-warmWhite border border-gfa-border rounded-2xl hover:bg-gfa-gold hover:text-white transition-all group"
                title={t.common.reset}
              >
                <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 absolute"></div>
                <span className="group-hover:opacity-0 transition-opacity">↺</span>
              </button>
            </div>
          </div>
        </div>

        {/* Registry Table */}
        <div className="bg-white rounded-[40px] shadow-2xl border border-gfa-border overflow-hidden animate-fade-up delay-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gfa-warmWhite border-b border-gfa-border">
                  {reg.tableHeaders.map((h: string, i: number) => (
                    <th key={i} className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate opacity-60">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gfa-border/30">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-40 text-gfa-slate italic font-serif text-2xl opacity-30">
                      {reg.ui.noResults}
                    </td>
                  </tr>
                ) : filteredData.map((o) => (
                  <tr key={o.orgId} className="hover:bg-gfa-warmWhite/50 transition-all group">
                    <td className="px-8 py-8">
                      <div className="text-xl font-bold text-gfa-inkBlack font-serif leading-tight group-hover:text-gfa-gold transition-colors">{o.name}</div>
                      <div className="text-[10px] text-gfa-slate mt-2 font-mono uppercase tracking-widest opacity-60">GFA-ID: {o.orgId}</div>
                    </td>
                    <td className="px-8 py-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-gfa-slate bg-gfa-warmWhite px-4 py-1.5 rounded-full border border-gfa-border">
                        {o.categories[0]}
                      </span>
                    </td>
                    <td className="px-8 py-8">
                      <div className="text-sm font-medium text-gfa-inkBlack font-serif italic">{o.city}, {o.country}</div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${o.certification.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}></div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${o.certification.status === 'Active' ? 'text-emerald-600' : 'text-red-500'}`}>
                          {o.certification.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <span className="text-xs font-mono text-gfa-slate opacity-80">{o.certification.validTo}</span>
                    </td>
                    <td className="px-8 py-8">
                      <button 
                        onClick={() => setSelectedOrg(o)}
                        className="btn-primary h-10 px-6 text-[10px] rounded-full"
                      >
                        {t.common.view}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DETAIL DIALOG - Institutional Logic */}
      {selectedOrg && (
        <OrgDetailsDialog org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      )}
    </div>
  );
};

export default Registry;
