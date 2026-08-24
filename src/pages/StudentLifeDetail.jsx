import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Quote,
  Trophy,
  BookOpen,
  Heart,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { TiltWrap } from "../components/Effects.jsx";
import { useInView } from "../hooks/useInView.js";
import {
  findBySlug,
  getRelated,
  categoryMeta,
} from "../data/studentLifeData.js";
import "../styles/studentLife.css";

// ─── Related Activity mini-card ─────────────────────────────────────────────
function RelatedCard({ item }) {
  return (
    <TiltWrap maxTilt={5}>
      <Link
        to={`/student-life/${item.category}/${item.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      >
        <div className="relative h-36 overflow-hidden bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <span className="shine-sweep" />
          <div className="absolute bottom-0 left-0 p-3">
            <span
              className="badge-glow text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white"
              style={{
                backgroundColor: item.accentColor,
                "--glow-color": `${item.accentColor}73`,
              }}
            >
              {item.tag}
            </span>
            <p className="text-white font-serif font-bold text-sm mt-1 leading-tight drop-shadow">
              {item.name}
            </p>
          </div>
        </div>
        <div className="p-3 flex items-center justify-between text-xs">
          <span className="text-slate-500 truncate mr-2">
            {item.patronShort || item.patron}
          </span>
          <span
            className="flex items-center gap-1 font-semibold shrink-0 transition-all duration-300 group-hover:gap-2"
            style={{ color: item.accentColor }}
          >
            View <ArrowRight size={11} />
          </span>
        </div>
      </Link>
    </TiltWrap>
  );
}

// ─── Detail Page ─────────────────────────────────────────────────────────────
export default function StudentLifeDetail() {
  const { category, slug } = useParams();
  const item = findBySlug(category, slug);

  const [quoteRef, quoteInView] = useInView(0.5);

  if (!item) return <Navigate to="/student-life" replace />;

  const related = getRelated(category, slug, 3);
  const catMeta = categoryMeta[category] || {};
  const catLabel = catMeta.label || "Student Life";
  const catIconMap = { sports: Trophy, clubs: BookOpen, faith: Heart };
  const CatIcon = catIconMap[category] || Star;

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow={item.tag}
        title={item.fullName || item.name}
        subtitle={item.tagline}
        bgImage={item.image}
        crumbs={["Home", "Student Life", catLabel, item.name]}
      />

      {/* ── BREADCRUMB / BACK LINK ──────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-page py-3 flex items-center gap-2 text-xs text-slate-500">
          <Link
            to="/student-life"
            className="hover:text-forest transition-colors"
          >
            Student Life
          </Link>
          <ArrowRight size={10} className="text-slate-300" />
          <Link
            to={`/student-life/${category}`}
            className="hover:text-forest transition-colors"
          >
            {catLabel}
          </Link>
          <ArrowRight size={10} className="text-slate-300" />
          <span className="text-forest font-semibold">{item.name}</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <div className="container-page py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left — main content (2/3) */}
        <div className="lg:col-span-2 space-y-10">
          {/* About section */}
          <Reveal>
            <section>
              <span className="section-eyebrow">About</span>
              <h2 className="section-title underline-draw in-view mt-1 mb-4">
                {item.fullName || item.name}
              </h2>
              <div className="h-1 w-12 bg-gold rounded-full mb-5" />
              <p className="text-slate-700 leading-relaxed text-base">
                {item.fullDescription || item.description}
              </p>
            </section>
          </Reveal>

          {/* Poem / Quote (if exists) — gold border draws in on scroll */}
          {(item.poem || item.quote) && (
            <Reveal>
              <div
                ref={quoteRef}
                className={`quote-panel ${quoteInView ? "in-view" : ""} relative rounded-2xl overflow-hidden`}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: item.accentColor }}
                />
                <div className="bg-cream p-6 md:p-8 pl-8 border border-slate-100 rounded-2xl">
                  <Quote size={32} className="text-gold/40 mb-3" />
                  <p className="text-forest-dark font-serif italic text-lg leading-relaxed">
                    {item.poem || item.quote}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 font-semibold uppercase tracking-wide">
                    — The Campbell Talks, Kitui School
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <Reveal>
              <section>
                <span className="section-eyebrow">Programme Highlights</span>
                <h3 className="text-2xl font-serif font-bold text-forest mt-1 mb-5">
                  What We Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-cream/60 border border-slate-100 hover:border-gold/30 hover:bg-cream transition-all duration-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: item.accentColor }}
                      />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <Reveal>
              <section>
                <span className="section-eyebrow">Track Record</span>
                <h3 className="text-2xl font-serif font-bold text-forest mt-1 mb-5">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {item.achievements.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div
                        className="badge-glow w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 font-bold text-xs"
                        style={{
                          backgroundColor: item.accentColor,
                          "--glow-color": `${item.accentColor}73`,
                        }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-700 font-medium">{a}</p>
                      <Star
                        size={15}
                        className="text-gold ml-auto shrink-0"
                        fill="#c19a3b"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          {/* Gallery strip */}
          {item.galleryImages && item.galleryImages.length > 0 && (
            <Reveal>
              <section>
                <span className="section-eyebrow">Gallery</span>
                <h3 className="text-2xl font-serif font-bold text-forest mt-1 mb-5">
                  In Action
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {item.galleryImages.map((src, i) => (
                    <div
                      key={i}
                      className={`group relative overflow-hidden rounded-xl bg-slate-100 ${
                        i === 0
                          ? "col-span-2 row-span-2 h-52 md:h-full"
                          : "h-24 md:h-28"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`${item.name} gallery ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <span className="shine-sweep" />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          )}
        </div>

        {/* Right sidebar (1/3) */}
        <div className="space-y-6">
          {/* Patron card — floats gently, glow pulses behind icon */}
          <Reveal>
            <div
              className="relative rounded-2xl p-6 text-white shadow-lg overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${item.accentColor}dd, ${item.accentColor}88)`,
              }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-2xl float-slow pointer-events-none" />
              <div className="relative flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full bg-white/20 blur-md"
                    style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
                  />
                  <Users size={22} className="text-white relative z-10" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                    Patron / In Charge
                  </p>
                  <p className="font-serif font-bold text-xl text-white leading-tight">
                    {item.patron}
                  </p>
                </div>
              </div>
              <p className="relative text-white/80 text-sm leading-relaxed">
                Dedicated to nurturing student talent and guiding the{" "}
                {item.name} programme with expertise and passion.
              </p>
              <div className="relative mt-4 pt-4 border-t border-white/20">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1">
                  Programme
                </p>
                <p className="text-white font-bold">
                  {item.fullName || item.name}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Quick facts */}
          <Reveal>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-serif font-bold text-forest text-lg mb-4">
                Quick Facts
              </h4>
              <dl className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-slate-400 shrink-0">Category</dt>
                  <dd className="font-semibold text-slate-700 text-right">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-white text-xs"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      {item.tag}
                    </span>
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="text-slate-400 shrink-0">Patron</dt>
                  <dd className="font-semibold text-forest text-right text-xs">
                    {item.patron}
                  </dd>
                </div>
                {item.achievements && (
                  <div className="flex items-start justify-between gap-2">
                    <dt className="text-slate-400 shrink-0">Achievements</dt>
                    <dd className="font-bold text-forest">
                      {item.achievements.length}
                    </dd>
                  </div>
                )}
                {item.highlights && (
                  <div className="flex items-start justify-between gap-2">
                    <dt className="text-slate-400 shrink-0">Highlights</dt>
                    <dd className="font-bold text-forest">
                      {item.highlights.length}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>

          {/* Join CTA */}
          <Reveal>
            <div className="bg-cream rounded-2xl p-6 border border-gold/20 text-center hover:border-gold/40 hover:shadow-lg transition-all duration-300 group">
              <CatIcon
                size={32}
                className="text-gold mx-auto mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <h4 className="font-serif font-bold text-forest text-lg mb-2">
                Want to Join?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Speak to the patron or visit the admissions office to find out
                how to get involved.
              </p>
              <Link
                to="/contact"
                className="btn-primary btn-shine w-full justify-center"
              >
                Contact Admissions <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* Back links */}
          <Reveal>
            <div className="flex flex-col gap-2">
              <Link
                to={`/student-life/${category}`}
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-forest transition-colors"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />{" "}
                Back to {catLabel}
              </Link>
              <Link
                to="/student-life"
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-forest transition-colors"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />{" "}
                Back to Student Life Hub
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── RELATED ACTIVITIES ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-cream/60 py-12 border-t border-slate-100">
          <div className="container-page">
            <Reveal>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="section-eyebrow">More to Explore</span>
                  <h3 className="text-2xl font-serif font-bold text-forest mt-1">
                    Related {catLabel}
                  </h3>
                </div>
                <Link
                  to={`/student-life/${category}`}
                  className="group text-sm font-semibold text-forest hover:text-gold border-b-2 border-forest hover:border-gold transition-all pb-0.5 flex items-center gap-1"
                >
                  View All{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <Reveal key={r.id} delay={i * 0.08}>
                  <RelatedCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title="Discover Everything Kitui School Has to Offer"
        subtitle="Explore all our sports, clubs, and faith communities — or contact us about admissions."
        primaryLabel="View All Activities"
        primaryTo="/student-life"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </div>
  );
}

/*
  NOTE:
  - Pulls TiltWrap from ../components/Effects.jsx and useInView from
    ../hooks/useInView.js — same two files used by
    StudentLifeCategory.jsx, so there's one shared source for each.
  - Needs '../styles/studentLife.css' imported for .tilt-card, .sheen,
    .shine-sweep, .badge-glow, .quote-panel, and .float-slow. Fix the
    import path if your CSS file lives elsewhere.
  - The `useInView` hook is called unconditionally before the `if (!item)`
    early return, per React's rules of hooks — don't move it below that
    check.
*/
