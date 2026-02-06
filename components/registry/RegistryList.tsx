import React from 'react';
import { RegistryOrg } from '../../lib/registry/types';
import { useLocale } from '../../LocaleContext.tsx';
import { calculateTrustGrade } from '../../lib/registry/scoring.ts';
import { Link } from 'react-router-dom';

function statusClass(status: string) {
  switch (status) {
    case "Active":
      return "border-green-600/30 text-green-500 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]";
    case "Suspended":
      return "border-orange-500/30 text-orange-500 bg-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.1)]";
    case "Revoked":
    case "Expired":
      return "border-red-600/30 text-red-500 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.1)]";
    default:
      return "border-white/10 text-white/40 bg-white/5";
  }
}

export default function RegistryList({
  items,
  loading,
  onOpen,
}: {
  items: RegistryOrg[];
  loading: boolean;
  onOpen: (org: RegistryOrg) => void;
}) {
  const { t } = useLocale();

  if (loading && items.length === 0) {
    return (
      <div className="grid gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-sm border border-white/5 bg-white/5 h-48 animate-pulse shadow-xl"
          />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-sm border border-white/5 bg-white/5 py-40 text-center shadow-4xl group">
        <div className="text-8xl mb-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">🏛️</div>
        <p className="text-[11px] text-white/20 uppercase tracking-[0.5em] font-black max-w-sm mx-auto">
          No institutional records match your current criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {items.map((o) => (
        <div
          key={o.orgId}
          onClick={() => onOpen(o)}
          className="rounded-sm border border-white/10 bg-gfa-darkGray/30 p-8 md:p-10 hover:border-gfa-gold/30 transition-all duration-500 group relative overflow-hidden shadow-4xl cursor-pointer"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 h-full w-1.5 bg-gfa-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Logo / Placeholder */}
              <div className="h-24 w-24 rounded-sm bg-gfa-black/80 border border-white/10 flex items-center justify-center font-black text-4xl gold shrink-0 group-hover:border-gfa-gold/40 transition-all duration-500 shadow-inner">
                {o.name.slice(0, 1).toUpperCase()}
              </div>

              <div className="text-center md:text-left flex-grow">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-5">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight group-hover:text-gfa-gold transition-all duration-300 font-cinzel leading-none">
                    {o.name}
                  </h3>
                  <span
                    className={`text-[9px] px-4 py-1.5 font-black uppercase tracking-[0.2em] border rounded-sm transition-all duration-500 ${statusClass(
                      o.certification.status
                    )}`}
                  >
                    {o.certification.status}
                  </span>
                  <span className="text-[9px] px-4 py-1.5 font-black uppercase tracking-[0.2em] border border-gfa-gold/20 text-gfa-gold bg-gfa-gold/5 rounded-sm">
                    {o.certification.level}
                  </span>
                </div>

                <div className="text-[11px] text-gfa-gray/60 uppercase font-bold tracking-[0.3em] mb-4 font-montserrat">
                  {o.categories.slice(0, 3).join(" • ")}
                  {o.categories.length > 3 ? " • …" : ""}
                </div>

                <div className="text-[10px] text-gfa-gray/40 uppercase font-black tracking-widest flex flex-wrap items-center justify-center md:justify-start gap-4 font-montserrat">
                  <span className="flex items-center gap-2">📍 {o.city}, {o.country}</span>
                  <span className="w-1.5 h-1.5 bg-white/10 rounded-full hidden md:block"></span>
                  <span className="flex items-center gap-2">🆔 AUDIT: <span className="text-white/30 font-mono">{o.orgId}</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-8 border-t md:border-t-0 border-white/5 pt-10 md:pt-0">
              <div className="text-center md:text-right">
                <div className="flex items-center gap-4 md:justify-end">
                  <span className="text-[10px] text-gfa-gray/40 uppercase font-black tracking-[0.4em] font-montserrat">{t.registry.trustScore}</span>
                  <span className={`text-4xl font-black font-serif tracking-tighter transition-colors duration-500 ${o.trustScore > 80 ? 'text-gfa-gold' : 'text-red-500/60'}`}>
                    {o.trustScore}
                  </span>
                  <span className="text-sm font-serif opacity-30">({calculateTrustGrade(o.trustScore)})</span>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-5 md:justify-end">
                  {Object.entries(o.indicators).map(([k, v]) => (
                    <div
                      key={k}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] transition-all duration-700 ${
                        v ? "border-green-600/20 text-green-500 bg-green-600/5 shadow-[0_0_10px_rgba(34,197,94,0.05)]" : "border-white/5 text-white/10"
                      }`}
                      title={k.replace(/([A-Z])/g, " $1")}
                    >
                      {v ? '✓' : '×'}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button
                  className="flex-grow md:flex-grow-0 text-[10px] px-8 py-4 font-black uppercase tracking-[0.2em] border border-white/10 hover:border-gfa-gold text-white hover:text-gfa-gold transition-all duration-300 rounded-sm bg-white/5 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen(o);
                  }}
                >
                  {t.registry.viewDetails}
                </button>
                <Link
                  to={`/complaints?orgId=${encodeURIComponent(o.orgId)}&orgName=${encodeURIComponent(o.name)}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-grow md:flex-grow-0 text-[10px] px-8 py-4 font-black uppercase tracking-[0.2em] border border-red-900/40 text-red-500/70 hover:text-red-500 hover:bg-red-950/20 transition-all duration-300 rounded-sm text-center shadow-lg"
                >
                  {t.registry.reportConcern}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}