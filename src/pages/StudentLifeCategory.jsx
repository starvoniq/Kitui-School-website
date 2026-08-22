import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Heart,
  Sparkles,
  Trophy,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import { TiltWrap } from "../components/effects.jsx";
import { useInView } from "../hooks/useInView.js";
import {
  getCategoryItems,
  categoryMeta,
  IMAGES,
} from "../data/studentLifeData.js";
import "../styles/studentLife.css";

// ─── Typewriter club name (unchanged) ───────────────────────────────────────
function TypewriterClubName({ name }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setVisibleCharacters(name.length);
      return undefined;
    }

    let characterTimer;
    let repeatTimer;

    const typeName = () => {
      let nextCharacter = 0;
      setVisibleCharacters(0);

      characterTimer = window.setInterval(() => {
        nextCharacter += 1;
        setVisibleCharacters(nextCharacter);

        if (nextCharacter >= name.length) {
          window.clearInterval(characterTimer);
          repeatTimer = window.setTimeout(typeName, 10000);
        }
      }, 70);
    };

    typeName();

    return () => {
      window.clearInterval(characterTimer);
      window.clearTimeout(repeatTimer);
    };
  }, [name]);

  return (
    <>
      {name.slice(0, visibleCharacters)}
      <span aria-hidden="true" className="animate-pulse">
        |
      </span>
    </>
  );
}

// ─── Sport / Club / Faith detail preview card — now with tilt + sheen + shine
function ActivityCard({ item, isClub }) {
  const linkTo = `/student-life/${item.category}/${item.slug}`;
  const [quoteRef, quoteInView] = useInView(0.5);

  return (
    <TiltWrap maxTilt={5}>
      <Link
        to={linkTo}
        className={`group rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full ${
          isClub
            ? "bg-white border border-slate-200/80"
            : "bg-white border border-slate-100"
        }`}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <span className="shine-sweep" />

          {/* Accent badge — soft pulsing glow ring in the item's own color */}
          <div className="absolute top-3 left-3">
            <span
              className="badge-glow text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white shadow-sm"
              style={{
                backgroundColor: item.accentColor,
                "--glow-color": `${item.accentColor}73`,
              }}
            >
              {item.tag}
            </span>
          </div>

          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-md">
              {isClub ? (
                <TypewriterClubName name={item.fullName || item.name} />
              ) : (
                item.fullName || item.name
              )}
            </h3>
            {item.tagline && (
              <p className="text-white/80 text-xs mt-0.5 italic drop-shadow">
                {item.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {/* Poem quote (sports) */}
          {item.poem && (
            <div
              ref={quoteRef}
              className={`quote-panel ${quoteInView ? "in-view" : ""} mb-3 pl-4 pr-3 py-3 rounded-lg bg-cream border border-gold/25`}
            >
              <p className="text-xs italic font-serif leading-relaxed line-clamp-3 text-forest-dark">
                "{item.poem}"
              </p>
            </div>
          )}

          {/* Club quote */}
          {item.quote && !item.poem && (
            <div
              ref={quoteRef}
              className={`quote-panel ${quoteInView ? "in-view" : ""} mb-3 pl-4 pr-3 py-3 rounded-lg bg-gold/10 border border-gold/20`}
            >
              <p className="text-xs italic font-serif leading-relaxed line-clamp-3 text-forest-dark">
                "{item.quote}"
              </p>
            </div>
          )}

          <p className="text-sm leading-relaxed text-slate-600 mb-4 flex-1">
            {item.description}
          </p>

          {/* Highlights preview */}
          {item.highlights && item.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {item.highlights.slice(0, 2).map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-slate-600"
                >
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3 mt-auto">
            <div>
              <span className="text-slate-400">Patron / In Charge: </span>
              <span className="font-semibold text-forest">
                {item.patronShort || item.patron}
              </span>
            </div>
            <span
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 font-bold transition-all duration-300 bg-slate-100 text-forest group-hover:bg-forest group-hover:text-white group-hover:gap-2"
              style={{ color: item.accentColor }}
            >
              Learn More <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </TiltWrap>
  );
}

// ─── Category Listing Page ───────────────────────────────────────────────────
export default function StudentLifeCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  const meta = categoryMeta[category];
  if (!meta) {
    navigate("/student-life");
    return null;
  }

  const items = getCategoryItems(category);

  const tabIcons = {
    sports: Trophy,
    clubs: BookOpen,
    faith: Heart,
  };
  const categories = [
    { id: "sports", label: "Sports & Games" },
    { id: "clubs", label: "Clubs & Societies" },
    { id: "faith", label: "Faith & Spiritual" },
  ];

  return (
    <div className="bg-cream/40 min-h-screen pb-16">
      {/* Hero */}
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.label}
        subtitle={meta.subtitle}
        bgImage={meta.image}
        crumbs={["Home", "Student Life", meta.label]}
      />

      {/* Category switcher tabs */}
      <div className="bg-white border-b border-slate-100 sticky top-[68px] z-30 shadow-sm">
        <div className="container-page">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-none">
            <Link
              to="/student-life"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-forest px-3 py-2 rounded transition-colors whitespace-nowrap"
            >
              <ArrowLeft size={14} /> Student Life Hub
            </Link>
            <div className="w-px h-5 bg-slate-200 mx-1" />
            {categories.map((cat) => {
              const Icon = tabIcons[cat.id];
              const isActive = cat.id === category;
              return (
                <Link
                  key={cat.id}
                  to={`/student-life/${cat.id}`}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 whitespace-nowrap overflow-hidden ${
                    isActive
                      ? "bg-forest text-white shadow-md shadow-forest/30 scale-105"
                      : "text-slate-600 hover:bg-slate-100 hover:text-forest"
                  }`}
                >
                  {isActive && <span className="shine-sweep" />}
                  <Icon
                    size={14}
                    className={isActive ? "text-gold-light" : ""}
                  />
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Listing */}
      <div className="container-page pt-10">
        <Reveal>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-forest">{items.length}</span>{" "}
              {category === "sports"
                ? "sports disciplines"
                : category === "clubs"
                  ? "clubs & societies"
                  : "faith communities"}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <ActivityCard item={item} isClub={category === "clubs"} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14">
        <CtaBanner
          title="Discover More of Student Life"
          subtitle="Sports, clubs, faith, leadership — there is something for every Kitui School student."
          primaryLabel="Back to Student Life"
          primaryTo="/student-life"
          secondaryLabel="Contact Admissions"
          secondaryTo="/contact"
        />
      </div>
    </div>
  );
}
