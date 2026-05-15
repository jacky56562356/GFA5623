
import React, { Dispatch, SetStateAction } from "react";
import { useLocale } from "../../LocaleContext.tsx";
import { RegistryQuery, OrgCategory } from "../../lib/registry/types.ts";

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
    <div className="rounded-sm border border-gfa-border bg-white p-10 mb-3 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold/40 group-hover:bg-gfa-gold transition-colors duration-700"></div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-gfa-border pb-3">
          <div className="text-[11px] font-black uppercase tracking-[0.4em] text-gfa-gold font-sans">
            {t.common.filters}
          </div>
          <button
            className="text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-sm border border-gfa-border text-gfa-slate hover:text-gfa-inkBlack hover:border-gfa-inkBlack transition-all"
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-12 lg:col-span-5">
            <div className="text-[10px] text-gfa-slate font-black uppercase tracking-widest mb-3 px-1">{/* [中文内容待填入] */} Keywords / Institutional ID </div>
            <input
              value={query.q || ""}
              onChange={(e) => setQuery((p) => ({ ...p, q: e.target.value }))}
              placeholder={t.common.searchPlaceholder}
              className="w-full rounded-sm bg-gfa-warmWhite border border-gfa-border px-5 py-4 text-sm font-bold uppercase tracking-widest text-gfa-inkBlack outline-none focus:border-gfa-gold transition-colors"
            />
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <div className="text-[10px] text-gfa-slate font-black uppercase tracking-widest mb-3 px-1">{t.common.category}</div>
            <select
              value={query.category || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, category: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-warmWhite border border-gfa-border px-4 py-4 text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">{/* [中文内容待填入] */} All Categories </option>
              {options.categories.map((c) => (
                <option value={c} key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
            <div className="text-[10px] text-gfa-slate font-black uppercase tracking-widest mb-3 px-1">{t.common.level}</div>
            <select
              value={query.level || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, level: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-warmWhite border border-gfa-border px-4 py-4 text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">{/* [中文内容待填入] */} All Levels </option>
              <option value="Verified">{/* [中文内容待填入] */} Verified </option>
              <option value="Certified">{/* [中文内容待填入] */} Certified </option>
              <option value="Accredited">{/* [中文内容待填入] */} Accredited </option>
            </select>
          </div>

          <div className="md:col-span-12 lg:col-span-2">
            <div className="text-[10px] text-gfa-slate font-black uppercase tracking-widest mb-3 px-1">{t.common.status}</div>
            <select
              value={query.status || "All"}
              onChange={(e) =>
                setQuery((p) => ({ ...p, status: e.target.value as any }))
              }
              className="w-full rounded-sm bg-gfa-warmWhite border border-gfa-border px-4 py-4 text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack outline-none focus:border-gfa-gold transition-colors cursor-pointer"
            >
              <option value="All">{/* [中文内容待填入] */} All Statuses </option>
              <option value="Active">{/* [中文内容待填入] */} Active </option>
              <option value="Suspended">{/* [中文内容待填入] */} Suspended </option>
              <option value="Expired">{/* [中文内容待填入] */} Expired </option>
              <option value="Revoked">{/* [中文内容待填入] */} Revoked </option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-[10px] text-gfa-gold font-black uppercase tracking-[0.4em] animate-pulse mt-4 text-center">
            {t.common.loading}
          </div>
        ) : null}
      </div>
    </div>
  );
}
