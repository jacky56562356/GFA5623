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

  // Derive unique options from mock data for dynamic filters
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

  // Filtering & Sorting Logic
  const filteredOrgs = useMemo(() => {
    let result = MOCK_REGISTRY.filter(org => {
      const q = query.q?.toLowerCase() || '';
      const matchesSearch = 
        org.name.toLowerCase().includes(q) || 
        org.orgId.toLowerCase().includes(q) ||
        org.city.toLowerCase().includes(q);
      
      const matchesLevel = query.level === 'All' || org.certification.level === query.level;
      const matchesCategory = query.category === 'All' || org.categories.includes(query.category as OrgCategory);
      const matchesStatus = query.status === 'All' || org.certification.status === query.status;
      const matchesCountry = query.country === 'All' || org.country === query.country;
      const matchesCity = query.city === 'All' || org.city === query.city;
      
      return matchesSearch && matchesLevel && matchesCategory && matchesStatus && matchesCountry && matchesCity;
    });

    // Sorting implementation
    result.sort((a, b) => {
      if (query.sort === 'score_desc') return b.trustScore - a.trustScore;
      if (query.sort === 'name_asc') return a.name.localeCompare(b.name);
      if (query.sort === 'review_desc') {
        const dateA = new Date(a.certification.lastReviewedAt).getTime();
        const dateB = new Date(b.certification.lastReviewedAt).getTime();
        return dateB - dateA;
      }
      return 0;
    });

    return result;
  