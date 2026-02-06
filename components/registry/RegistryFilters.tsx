import React, { Dispatch, SetStateAction } from "react";
import { useLocale } from "../../LocaleContext.tsx";
import { RegistryQuery, OrgCategory } from "../../lib/registry/types";

type Options = {
  countries: string[];
  cities: string[];
  categories: OrgCategory[];
};

export default function RegistryFilters({
  query,
  setQuery,
  options,
  loading,
}: {
  query: RegistryQuery;
  setQuery: Dispatch<SetStateAction<RegistryQuery>>;
  options: Options;
  loading: boolean;
}) {
  const { t } = useLocale();

  return (
    <div className="rounded-sm border border-white/10 bg-gfa-darkGray/40 p-8 mb-12 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold/40 group-hover:bg-gfa-gold transition-colors duration-700"></div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gfa-gold font-montserrat">
            {t.common.filters}
          </div>
          <button
            className="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-sm border border-white/10 text-white/70 hover:text-white hover:border-gfa-gold transition-all"
            onClick={() =>
              setQuery({
                q: "",
                category: "All",
                level: "All",
                status: "All",
                country: "All",
                city: "All",
                sort: "score_desc",
              })
            }
          >
            {t.common.reset}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-12 lg:col-span-5">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">Keywords / Org ID</div>
            <input
              value={query.q || ""}
              onChange={(e) => setQuery((p) => ({ ...p, q: e.target.value }))}
              placeholder={t.common.searchPlaceholder}
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors font-montserrat"
            />
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.category}</div>
            <select
              value={query.category || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, category: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">All Categories</option>
              {options.categories.map((c) => (
                <option value={c} key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.level}</div>
            <select
              value={query.level || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, level: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Verified">Verified</option>
              <option value="Certified">Certified</option>
              <option value="Accredited">Accredited</option>
            </select>
          </div>

          <div className="md:col-span-12 lg:col-span-3">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.status}</div>
            <select
              value={query.status || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, status: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Expired">Expired</option>
              <option value="Revoked">Revoked</option>
            </select>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.country}</div>
            <select
              value={query.country || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, country: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">Global (All)</option>
              {options.countries.map((c) => (
                <option value={c} key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-6 lg:col-span-4">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.city}</div>
            <select
              value={query.city || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, city: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">All Cities</option>
              {options.cities.map((c) => (
                <option value={c} key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-12 lg:col-span-4">
            <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-2 px-1">{t.common.sort}</div>
            <select
              value={query.sort || "score_desc"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, sort: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-black/60 border border-white/10 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-white outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="score_desc">Trust Index ↓</option>
              <option value="review_desc">Recently Audited</option>
              <option value="name_asc">Name A–Z</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-[9px] text-gfa-gold font-black uppercase tracking-[0.4em] animate-pulse mt-4 text-center">
            {t.common.loading}
          </div>
        ) : null}
      </div>
    </div>
  );
}