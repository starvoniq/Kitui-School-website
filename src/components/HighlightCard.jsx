import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable card for the Highlights of Excellence section.
 * Implements glassmorphism with subtle overlapping tilt and animated stat callouts.
 */
export default function HighlightCard({ h }) {
  const IconComponent = h.icon;
  return (
    <div
      className={`group relative rounded-2xl border ${h.borderColor} bg-white/30 backdrop-blur-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30 pointer-events-none" />

      {/* Top Bar: Tag + Icon */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${h.badgeColor}`}>
          {h.tag}
        </span>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${h.iconColor} group-hover:scale-110 transition-transform`}
        >
          <IconComponent size={20} />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-forest text-lg leading-snug mb-2 group-hover:text-gold transition-colors">
        {h.title}
      </h3>

      {/* Hero Stat Box – At‑a‑Glance */}
      <div className={`rounded-xl p-4 mb-3 bg-gradient-to-r ${h.accentColor} border border-slate-100 flex flex-col gap-1 shadow-inner`}
      >
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-extrabold font-serif text-forest tracking-tight animate-bounce">
            {h.mainStat}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-forest/10 text-forest">
            {h.gradeBadge}
          </span>
        </div>
        <div className="text-[11px] pt-1 border-t border-slate-200/60 font-sans text-slate-600">
          {h.rankBadge}
        </div>
      </div>

      {/* Metric Pills */}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        {h.pills.map((pill) => (
          <div key={pill.label} className="bg-slate-50/80 border border-slate-100 rounded-lg p-1.5 text-center">
            <p className="text-[9px] text-slate-400 uppercase font-sans font-semibold tracking-wider truncate">
              {pill.label}
            </p>
            <p className="text-xs font-bold text-forest mt-0.5">{pill.val}</p>
          </div>
        ))}
      </div>

      {/* Highlights List */}
      <ul className="space-y-1.5 mb-4 font-sans">
        {h.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Footer CTA */}
      <div className="pt-3 border-t border-slate-100 mt-auto">
        <Link
          to={h.to}
          className="btn-ghost text-xs font-semibold w-full justify-between flex items-center group-hover:translate-x-1 transition-transform"
        >
          <span>{h.cta}</span>
          <ArrowRight size={14} className="text-gold" />
        </Link>
      </div>
    </div>
  );
}
