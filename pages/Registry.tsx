
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
    <div className="bg-white min-h-screen pt-[140px] pb-sect-lg">
      <SEO 
        title={reg.title || "Registry Search"} 
        description={reg.subtitle || "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards."} 
      />

      <div className="container-gfa">
        <div className="mb-16">
          <span className="gold-badge mb-6">Audited Institutional Database</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {reg.title}
          </h1>
          <p className="text-lg text-gfa-slate max-w-2xl font-medium italic opacity-80">{reg.subtitle}</p>
        </div>

        {/* Search & Filters */}
        <div className="bg-gfa-warmWhite border border-gfa-border p-10 mb-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <label className="text-[10px] font-black uppercase tracking-widest text-gfa-slate mb-2 block">Search (Name / ID / City)</label>
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.common.searchPlaceholder}
                className="w-full h-12 px-4 border border-gfa-border rounded-sm text-sm"
              />
            </div>
            
            <div className="col-span-6 lg:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gfa-slate mb-2 block">{t.common.category}</label>
              <select className="w-full h-12 px-4 border border-gfa-border rounded-sm text-sm" value={filters.category} onChange={(e) => setFilters({...filters, category: e.target.value})}>
                <option value="All">All Categories</option>
                {options.categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="col-span-6 lg:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gfa-slate mb-2 block">{t.common.region}</label>
              <select className="w-full h-12 px-4 border border-gfa-border rounded-sm text-sm" value={filters.region} onChange={(e) => setFilters({...filters, region: e.target.value})}>
                <option value="All">All Regions</option>
                {options.regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div className="col-span-12 lg:col-span-3 flex gap-2 items-end">
              <div className="flex-grow">
                 <label className="text-[10px] font-black uppercase tracking-widest text-gfa-slate mb-2 block">{t.common.status}</label>
                 <select className="w-full h-12 px-4 border border-gfa-border rounded-sm text-sm" value={filters.status} onChange={(e) => setFilters({...filters, status: e.target.value})}>
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
                className="btn-secondary h-12 px-4 border border-gfa-border hover:bg-gfa-gold hover:border-gfa-gold transition-colors"
              >
                {t.common.reset}
              </button>
            </div>
          </div>
        </div>

        {/* Registry Table */}
        <div className="overflow-x-auto border border-gfa-border bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gfa-warmWhite border-b border-gfa-border">
                {reg.tableHeaders.map((h: string, i: number) => (
                  <th key={i} className="p-4 text-[10px] font-black uppercase tracking-widest text-gfa-slate">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-24 text-gfa-slate italic uppercase tracking-widest opacity-50">
                    {reg.ui.noResults}
                  </td>
                </tr>
              ) : filteredData.map((o) => (
                <tr key={o.orgId} className="hover:bg-gfa-warmWhite transition-colors border-b border-gfa-border/50">
                  <td className="p-4">
                    <div className="font-black uppercase tracking-tight text-gfa-inkBlack">{o.name}</div>
                    <div className="text-[10px] text-gfa-slate mt-1 font-mono uppercase">GFA-ID: {o.orgId}</div>
                  </td>
                  <td className="p-4"><span className="text-[11px] font-bold uppercase tracking-wider">{o.categories[0]}</span></td>
                  <td className="p-4"><div className="text-[12px] font-medium uppercase">{o.city}, {o.country}</div></td>
                  <td className="p-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${o.certification.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>
                      {o.certification.status}
                    </span>
                  </td>
                  <td className="p-4"><span className="text-[11px] font-mono">{o.certification.validTo}</span></td>
                  <td className="p-4">
                    <button 
                      onClick={() => setSelectedOrg(o)}
                      className="text-[11px] font-black uppercase text-gfa-gold border-b border-gfa-gold/30 hover:border-gfa-gold transition-all"
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

      {/* DETAIL DIALOG - Institutional Logic */}
      {selectedOrg && (
        <OrgDetailsDialog org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      )}
    </div>
  );
};

export default Registry;
