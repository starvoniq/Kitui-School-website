import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Sparkles,
  Feather,
  UserCheck,
  Trophy,
  ChevronDown,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { sports, clubs, faithGroups, IMAGES } from "../data/studentLifeData.js";

// ─── Global styles (add the equivalent keyframes to index.css if you'd rather
//     not ship a <style> tag — see the note at the bottom of this file) ─────
function StudentLifeStyles() {
  return (
    <style>{`
      @keyframes kenburns {
        0%   { transform: scale(1) translate(0, 0); }
        100% { transform: scale(1.12) translate(-1%, -1%); }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0) translateX(0); }
        50%      { transform: translateY(-18px) translateX(6px); }
      }
      @keyframes floatSlower {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(14px); }
      }
      @keyframes shimmerText {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes sweep {
        0%   { transform: translateX(-120%) skewX(-15deg); }
        100% { transform: translateX(220%) skewX(-15deg); }
      }
      @keyframes drawLine {
        from { width: 0%; }
        to   { width: 100%; }
      }
      @keyframes pulseGlow {
        0%, 100% { opacity: .35; transform: scale(1); }
        50%      { opacity: .65; transform: scale(1.06); }
      }
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes bounceSoft {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(6px); }
      }
      @keyframes countUpFade {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .kenburns-img { animation: kenburns 18s ease-in-out infinite alternate; }
      .float-slow   { animation: floatSlow 7s ease-in-out infinite; }
      .float-slower { animation: floatSlower 9s ease-in-out infinite; }
      .spin-slow    { animation: spinSlow 14s linear infinite; }
      .bounce-soft  { animation: bounceSoft 2s ease-in-out infinite; }

      .shimmer-text {
        background: linear-gradient(90deg, #F5C542 0%, #ffffff 25%, #F5C542 50%, #ffffff 75%, #F5C542 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: shimmerText 5s linear infinite;
      }

      .underline-draw {
        position: relative;
        display: inline-block;
      }
      .underline-draw::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        height: 3px;
        width: 0%;
        background: linear-gradient(90deg, #F5C542, transparent);
        transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .underline-draw.in-view::after { width: 60%; }

      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        will-change: transform;
      }
      .tilt-card .sheen {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.3s ease;
        background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), transparent 60%);
        mix-blend-mode: overlay;
        pointer-events: none;
      }
      .tilt-card:hover .sheen { opacity: 1; }

      .shine-sweep {
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
        transform: translateX(-120%) skewX(-15deg);
        pointer-events: none;
      }
      .group:hover .shine-sweep { animation: sweep 0.9s ease forwards; }

      .btn-shine {
        position: relative;
        overflow: hidden;
      }
      .btn-shine::before {
        content: '';
        position: absolute;
        top: 0; left: -60%;
        width: 40%; height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
        transform: skewX(-20deg);
        transition: left 0.65s ease;
      }
      .btn-shine:hover::before { left: 140%; }

      .grain-overlay {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      }

      @media (prefers-reduced-motion: reduce) {
        .kenburns-img, .float-slow, .float-slower, .spin-slow, .bounce-soft,
        .shimmer-text, .tilt-card, .shine-sweep, .btn-shine::before {
          animation: none !important;
          transition: none !important;
        }
      }
    `}</style>
  );
}

// ─── Scroll-reveal hook for the underline-draw effect ──────────────────────
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Tilt wrapper: subtle 3D tilt + light sheen that follows the cursor ────
function TiltWrap({ children, className = "", maxTilt = 6 }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotY = (px - 0.5) * (maxTilt * 2);
    const rotX = (0.5 - py) * (maxTilt * 2);
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }
  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
    >
      <div className="sheen rounded-xl" />
      {children}
    </div>
  );
}

// ─── Reusable preview card for Sports ───────────────────────────────────────
function SportCard({ item }) {
  return (
    <TiltWrap>
      <Link
        to={`/student-life/sports/${item.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-forest/10">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <span className="shine-sweep" />
          {/* Sport name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1 shadow-sm"
              style={{ backgroundColor: item.accentColor }}
            >
              {item.tag}
            </span>
            <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
              {item.name}
            </h3>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
            {item.description}
          </p>
          <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
            <div>
              <span className="text-slate-400">Patron: </span>
              <span className="font-semibold text-forest">{item.patron}</span>
            </div>
            <span
              className="flex items-center gap-1 font-semibold transition-all duration-300 group-hover:gap-2"
              style={{ color: item.accentColor }}
            >
              View <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </TiltWrap>
  );
}

// ─── Reusable preview card for Clubs ────────────────────────────────────────
function ClubCard({ item }) {
  return (
    <TiltWrap>
      <Link
        to={`/student-life/clubs/${item.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-forest/10">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <span className="shine-sweep" />
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1 shadow-sm"
              style={{ backgroundColor: item.accentColor }}
            >
              {item.tag}
            </span>
            <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
              {item.name}
            </h3>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
            {item.description}
          </p>
          <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
            <div>
              <span className="text-slate-400">In charge: </span>
              <span className="font-semibold text-forest">
                {item.patronShort || item.patron}
              </span>
            </div>
            <span
              className="flex items-center gap-1 font-semibold transition-all duration-300 group-hover:gap-2"
              style={{ color: item.accentColor }}
            >
              View <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </TiltWrap>
  );
}

// ─── Faith card ──────────────────────────────────────────────────────────────
function FaithCard({ item }) {
  const iconMap = { ycs: Sparkles, cu: Heart, muslim: BookOpen };
  const Icon = iconMap[item.id] || Heart;

  return (
    <TiltWrap>
      <Link
        to={`/student-life/faith/${item.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-forest/10">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <span className="shine-sweep" />
          {/* Icon badge top-right */}
          <div
            className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg float-slow"
            style={{ backgroundColor: item.accentColor }}
          >
            <Icon size={18} />
          </div>
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-1 shadow-sm"
              style={{ backgroundColor: item.accentColor }}
            >
              {item.tag}
            </span>
            <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
              {item.name}
            </h3>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p
            className="text-xs italic font-semibold mb-2"
            style={{ color: item.accentColor }}
          >
            {item.tagline}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3 flex-1">
            {item.description}
          </p>
          <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
            <div>
              <span className="text-slate-400">Patron: </span>
              <span className="font-semibold text-forest">{item.patron}</span>
            </div>
            <span
              className="flex items-center gap-1 font-semibold transition-all duration-300 group-hover:gap-2"
              style={{ color: item.accentColor }}
            >
              View <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </TiltWrap>
  );
}

// ─── Section heading with animated underline ────────────────────────────────
function SectionHead({
  eyebrow,
  title,
  subtitle,
  viewAllTo,
  viewAllLabel,
  dark = false,
}) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
    >
      <div>
        <span className={`section-eyebrow ${dark ? "text-gold-light" : ""}`}>
          {eyebrow}
        </span>
        <h2
          className={`section-title mt-1 underline-draw ${inView ? "in-view" : ""} ${dark ? "text-white" : ""}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-sm mt-3 max-w-lg leading-relaxed ${dark ? "text-white/60" : "text-slate-500"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {viewAllTo && (
        <Link
          to={viewAllTo}
          className={`group inline-flex items-center gap-2 text-sm font-semibold border-b-2 transition-all duration-200 pb-0.5 shrink-0 ${
            dark
              ? "text-gold hover:text-gold-light border-gold hover:border-gold-light"
              : "text-forest hover:text-gold border-forest hover:border-gold"
          }`}
        >
          {viewAllLabel || "View All"}
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}

// ─── Animated stat ───────────────────────────────────────────────────────────
function StatBlock({ value, label, delay }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="py-4 group cursor-default"
      style={
        inView
          ? { animation: `countUpFade 0.7s ease ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      <p className="text-3xl md:text-4xl font-serif font-bold text-forest transition-colors duration-300 group-hover:text-gold">
        {value}
      </p>
      <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
        {label}
      </p>
      <div className="h-0.5 w-8 bg-gold/0 group-hover:bg-gold/70 mx-auto mt-2 transition-all duration-300 group-hover:w-12" />
    </div>
  );
}

// ─── Main Hub Page ────────────────────────────────────────────────────────────
export default function StudentLife() {
  const featuredSports = sports.slice(0, 4);
  const featuredClubs = clubs.slice(0, 6);

  return (
    <div className="bg-white min-h-screen">
      <StudentLifeStyles />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-dark text-white overflow-hidden min-h-[560px] md:min-h-[640px] flex items-center">
        {/* Background mosaic with slow ken-burns drift */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <div className="relative overflow-hidden col-span-2">
            <img
              src={IMAGES.sports}
              alt="Sports at Kitui School"
              className="kenburns-img w-full h-full object-cover object-center brightness-50"
            />
          </div>
          <div className="flex flex-col gap-0">
            <div className="relative overflow-hidden flex-1">
              <img
                src={IMAGES.drama}
                alt="Drama at Kitui School"
                className="kenburns-img w-full h-full object-cover object-center brightness-50"
                style={{ animationDelay: "2s" }}
              />
            </div>
            <div className="relative overflow-hidden flex-1">
              <img
                src={IMAGES.prizeGiving}
                alt="Kitui School achievements"
                className="kenburns-img w-full h-full object-cover object-center brightness-50"
                style={{ animationDelay: "4s" }}
              />
            </div>
          </div>
        </div>

        {/* Ambient gold glows */}
        <div className="absolute top-10 right-16 w-72 h-72 rounded-full bg-gold/20 blur-3xl float-slow pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-gold/10 blur-3xl float-slower pointer-events-none" />

        {/* Fine grain for a premium filmic texture */}
        <div className="grain-overlay" />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 to-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-forest-dark/30" />

        {/* Gold accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gold via-gold-light to-gold z-10" />

        {/* Hero content */}
        <div className="container-page relative z-10 py-24 md:py-32">
          <p className="section-eyebrow text-gold-light mb-3 animate-fade-up flex items-center gap-2">
            <Sparkles size={14} className="text-gold" />
            Beyond The Classroom
          </p>
          <div
            className="gold-bar mb-5"
            style={{
              animation: "drawLine 1.2s cubic-bezier(0.16,1,0.3,1) both",
            }}
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight max-w-3xl mb-5 animate-fade-up-200 drop-shadow-lg">
            Life at <span className="shimmer-text">Kitui School</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed mb-8 animate-fade-up-400">
            Where champions are forged on the pitch, artists find their voice on
            stage, and leaders are shaped through purpose-driven clubs,
            spiritual devotion, and a relentless pursuit of excellence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-600">
            <Link to="/student-life/sports" className="btn-primary btn-shine">
              Explore Sports <ArrowRight size={16} />
            </Link>
            <Link to="/student-life/clubs" className="btn-outline btn-shine">
              Discover Clubs
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-white/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="bounce-soft" />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden z-10">
          <svg
            viewBox="0 0 1440 24"
            fill="white"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d="M0,24 C360,0 1080,0 1440,24 L1440,24 L0,24 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "15+", label: "Clubs & Societies" },
            { value: "9+", label: "Sports Disciplines" },
            { value: "3", label: "Faith Denominations" },
            { value: "100%", label: "Student Participation" },
          ].map(({ value, label }, i) => (
            <StatBlock
              key={label}
              value={value}
              label={label}
              delay={i * 120}
            />
          ))}
        </div>
      </div>

      {/* ── BEST ME CLUB SPOTLIGHT ───────────────────────────────────────── */}
      <Reveal>
        <section className="container-page py-14">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white p-8 md:p-12 shadow-xl border border-gold/20 group">
            {/* Decorative */}
            <div className="absolute -right-12 -top-12 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none float-slow" />
            <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none float-slower" />
            {/* Rotating conic ring accent, barely visible */}
            <div
              className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full opacity-20 spin-slow pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #F5C542, transparent 60%)",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/25 text-gold border border-gold/40 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles size={12} className="animate-pulse" /> Feature
                  Spotlight
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 leading-tight">
                  Best Me Club —{" "}
                  <span className="text-gold">"Wings to Fly"</span>
                </h2>
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base max-w-xl">
                  Supporting students to develop personal growth,
                  self-awareness, and positive behaviour. Through regular
                  interactive sessions, members become the best versions of
                  themselves — academically, socially, and emotionally.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      title: "Character",
                      desc: "Goal setting, decision-making & discipline",
                    },
                    {
                      title: "Mentorship",
                      desc: "Peer support, motivation & self-improvement",
                    },
                    {
                      title: "Compiled by",
                      desc: "Alex Kasau — The Campbell Talks",
                    },
                  ].map(({ title, desc }) => (
                    <div
                      key={title}
                      className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/15 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <p className="font-bold text-gold text-sm mb-1">
                        {title}
                      </p>
                      <p className="text-white/70 text-xs leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative bg-white/10 rounded-2xl p-6 border border-white/15 text-center w-full max-w-xs transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 relative">
                    <div
                      className="absolute inset-0 rounded-full bg-gold/30 blur-xl"
                      style={{ animation: "pulseGlow 3s ease-in-out infinite" }}
                    />
                    <Feather size={32} className="text-gold relative z-10" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">
                    Shaping Leaders
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed italic">
                    "Creating an environment where students encourage one
                    another to reach their full potential."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── SPORTS PREVIEW ──────────────────────────────────────────────── */}
      <section className="relative bg-cream/60 py-14 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-forest/5 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <Reveal>
            <SectionHead
              eyebrow="Athletic Excellence"
              title="Sports & Games"
              subtitle="Nine disciplines competing across county, regional, and national stages. Find your sport."
              viewAllTo="/student-life/sports"
              viewAllLabel="View All Sports"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredSports.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <SportCard item={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUBS PREVIEW ───────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="container-page">
          <Reveal>
            <SectionHead
              eyebrow="Academic & Co-Curricular"
              title="Clubs & Societies"
              subtitle="From the newsroom to the science lab — 15+ clubs where students discover their passions and lead."
              viewAllTo="/student-life/clubs"
              viewAllLabel="View All Clubs"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredClubs.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.07}>
                <ClubCard item={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAITH & SPIRITUAL ───────────────────────────────────────────── */}
      <section className="relative bg-forest-dark py-14 overflow-hidden">
        {/* Ambient starlight dots for a devotional mood */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, #F5C542 0, transparent 60%), radial-gradient(1px 1px at 60% 70%, #F5C542 0, transparent 60%), radial-gradient(1px 1px at 80% 20%, #F5C542 0, transparent 60%), radial-gradient(1px 1px at 40% 85%, #F5C542 0, transparent 60%)",
            backgroundSize: "200px 200px",
          }}
        />
        <div className="container-page relative">
          <Reveal>
            <SectionHead
              eyebrow="Spiritual Foundation"
              title="Faith & Spiritual Life"
              subtitle="Three vibrant faith communities that ground Kitui School students in purpose, character, and devotion."
              viewAllTo="/student-life/faith"
              dark
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faithGroups.map((f, i) => (
              <Reveal key={f.id} delay={i * 0.09}>
                <FaithCard item={f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP STRIP ────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-12 border-y border-slate-100 bg-cream/40">
          <div className="container-page">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  icon: UserCheck,
                  title: "Peer Counseling",
                  desc: "Led by Mrs. David. Confidential student support for emotional health, conflict resolution, and academic stress.",
                },
                {
                  icon: Trophy,
                  title: "President's Award",
                  desc: "Bronze, Silver & Gold award tracks under Mr. Kyalo Reuben. Building self-reliance and leadership.",
                },
                {
                  icon: Sparkles,
                  title: "Best Me Club",
                  desc: "Goal setting, character, and personal growth — empowering students to become their best selves.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-6 bg-white rounded-xl shadow-card border border-slate-100 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mx-auto mb-4 transition-all duration-300 group-hover:bg-gold/15 group-hover:text-gold group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-forest text-lg mb-2 transition-colors duration-300 group-hover:text-gold-dark">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <CtaBanner
        title="Ready to Get Involved?"
        subtitle="Every student at Kitui School has a place — on the pitch, on stage, in the lab, or in the community. Find yours today."
        primaryLabel="Contact Admissions"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </div>
  );
}

/*
  NOTE — this file assumes `.gold-bar`, `.section-eyebrow`, `.section-title`,
  `.btn-primary`, `.btn-outline`, `.container-page` already exist in your
  global CSS (they were used in your original file) — untouched here.

  `Reveal`'s `delay` prop is in seconds (it feeds straight into Framer
  Motion), so the staggers above use `i * 0.08` etc. rather than
  millisecond values.
*/
