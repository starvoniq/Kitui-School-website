import {
  HeartHandshake,
  Users,
  ShieldCheck,
  Target,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import LeadershipOrgChart from "../components/Leadershiporgchart.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionDivider from "../components/Sectiondivider.jsx";
import AnimatedCounter from "../components/Animatedcounter.jsx";
import { images } from "../assets/images.js";
import PropTypes from "prop-types";

/* ─── Data ─── */
const values = [
  {
    icon: HeartHandshake,
    label: "Integrity",
    sub: "Doing what is right always",
  },
  { icon: Users, label: "Service", sub: "Putting others before self" },
  {
    icon: ShieldCheck,
    label: "Accountability",
    sub: "Taking responsibility for our actions",
  },
  { icon: Target, label: "Teamwork", sub: "Together we achieve more" },
];

const deputies = [
  {
    name: "Mr. Charles Nzau",
    title: "Deputy Principal (Academic Affairs)",
    desc: "Oversees academic programs, teaching and learning, national examinations and curriculum development.",
    image: images.people.deputyAcademics,
  },
  {
    name: "Mr. James Kyalo",
    title: "Deputy Principal (Discipline & Administration)",
    desc: "In charge of student discipline, welfare, boarding management and overall student character conduct.",
    image: images.people.deputyAdmin,
  },
];

const deptHeads = [
  {
    name: "Mr. John Mwangi",
    subject: "Sciences",
    image: images.people.deptSciences,
  },
  {
    name: "Mrs. Jane Wambui",
    subject: "Mathematics",
    image: images.people.deptMath,
  },
  {
    name: "Mr. Martin Mutua",
    subject: "Languages",
    image: images.people.deptLanguages,
  },
  {
    name: "Mrs. Mercy Nzilani",
    subject: "Humanities",
    image: images.people.deptHumanities,
  },
  {
    name: "Mr. Joseph Mula",
    subject: "Technical & Applied",
    image: images.people.deptTechnical,
  },
  {
    name: "Mrs. Beatrice Nduku",
    subject: "Guidance & Counselling",
    image: images.people.deptGuidance,
  },
];

const board = [
  {
    name: "Mr. David Musyoka",
    role: "Chairperson, BOM",
    image: images.people.bomChair,
  },
  {
    name: "Mrs. Lucy Muli",
    role: "Vice Chairperson, BOM",
    image: images.people.bomVice,
  },
  {
    name: "Mr. Bernard M. Mutua",
    role: "Secretary / Chief Principal",
    image: images.people.principal,
  },
  {
    name: "Eng. Ziporah Kilonzo",
    role: "Treasurer, BOM",
    image: images.people.bomTreas,
  },
];

const adminOffice = [
  {
    label: "Bursar",
    desc: "Manages school finances, fee structures and procurement",
  },
  {
    label: "Admissions & Records",
    desc: "Student enrollment, academic transcripts and certification",
  },
  {
    label: "ICT Office",
    desc: "Technology infrastructure, network and digital portals",
  },
  {
    label: "Reception & Helpdesk",
    desc: "Visitor management, parent inquiries and campus tours",
  },
];

const officeInfo = [
  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 8:00 AM – 4:30 PM" },
  { icon: Phone, label: "Phone", value: "+254 720 302 123 / +254 722 323 456" },
  { icon: Mail, label: "Email", value: "info@kituihigh.ac.ke" },
  {
    icon: MapPin,
    label: "Address",
    value: "Kitui – Machakos Road, P.O. Box 71, Kitui, Kenya",
  },
];

// Sample figures — replace with the school's real numbers before publishing.
const stats = [
  { to: 88, suffix: "", label: "Years of Excellence" },
  { to: 1200, suffix: "+", label: "Students Enrolled" },
  { to: 65, suffix: "+", label: "Teaching Staff" },
  { to: 50, prefix: "Top ", suffix: "", label: "National Ranking" },
];

/* ─── Small local decorative primitives (no new deps, no external component edits) ─── */

/** Faint academic-crest grid pattern, sits behind a section as ambient texture. */
function CrestPattern({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="crestGrid"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 4 L48 16 V40 L28 52 L8 40 V16 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#crestGrid)"
        className="text-forest"
      />
    </svg>
  );
}

CrestPattern.propTypes = {
  className: PropTypes.string,
};

/** Soft ambient gold glow, used sparingly behind hero-weight sections. */
function AmbientGlow({ position = "top-right" }) {
  const pos = {
    "top-right": "-top-32 -right-24",
    "top-left": "-top-32 -left-24",
    "bottom-right": "-bottom-32 -right-24",
  }[position];
  return (
    <div
      className={`pointer-events-none absolute ${pos} h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-pulse-slow`}
      aria-hidden="true"
    />
  );
}

AmbientGlow.propTypes = {
  position: PropTypes.oneOf(["top-right", "top-left", "bottom-right"]),
};

/** Thin gold accent rule with a center diamond — reinforces the crest/heraldry motif rather than decorating arbitrarily. */
function AccentRule() {
  return (
    <div className="mx-auto mb-4 flex w-24 items-center gap-2">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export default function Management() {
  return (
    <>
      {/* Local, page-scoped keyframes — kept minimal and motion-safe. */}
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow { animation: none; }
        }
        .corner-accent::before,
        .corner-accent::after {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: theme('colors.gold.DEFAULT', #C9A227);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .corner-accent::before {
          top: 8px; left: 8px;
          border-top: 2px solid; border-left: 2px solid;
          transform: translate(4px, 4px);
        }
        .corner-accent::after {
          bottom: 8px; right: 8px;
          border-bottom: 2px solid; border-right: 2px solid;
          transform: translate(-4px, -4px);
        }
        .corner-accent:hover::before,
        .corner-accent:hover::after {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>

      <PageHero
        crumbs={["Home", "Leadership & Administration"]}
        eyebrow="School Leadership"
        title="Leadership & Governance"
        subtitle="Leading with integrity, service and excellence to create an inspiring environment where every learner thrives."
        bgImage={images.heroes.management}
      />

      {/* ══ LEADERSHIP PHILOSOPHY ══ */}
      <section className="section-pad relative overflow-hidden bg-white">
        <CrestPattern />
        <AmbientGlow position="top-right" />
        <div className="container-page relative">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-eyebrow mb-3">Our Leadership Philosophy</p>
            <AccentRule />
            <h2 className="section-title mb-5">
              Guided by Values, Driven by Purpose
            </h2>
            <p className="section-sub">
              Leadership at Kitui High School is founded on integrity,
              accountability, service and teamwork. We are committed to
              nurturing disciplined learners, empowering staff and working with
              parents and the community to achieve our vision of academic
              excellence and holistic development.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="group relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={images.campus.adminTower}
              alt="Kitui High School Administration Building"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <p className="font-serif text-lg text-white/90 drop-shadow">
                Administration Block
              </p>
              <span className="h-px w-16 bg-gold/70" />
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {values.map(({ icon: Icon, label, sub }, i) => (
              <Reveal
                key={label}
                delay={i * 0.08}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 transition-transform duration-300 hover:scale-110 hover:shadow-md hover:shadow-gold/20">
                  <Icon className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest">{label}</p>
                  <p className="mt-0.5 font-sans text-xs text-slate-500">
                    {sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#F4F1EA" />

      {/* ══ LEGACY IN NUMBERS ══ */}
      <section className="relative overflow-hidden bg-cream py-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          aria-hidden="true"
        />
        <div className="container-page">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <AnimatedCounter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  label={s.label}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRINCIPAL ══ */}
      <section
        id="principal"
        className="section-pad relative overflow-hidden bg-white"
      >
        <AmbientGlow position="top-left" />
        <div className="container-page relative">
          <Reveal className="mb-10 text-center">
            <p className="section-eyebrow mb-3">Meet Our Principal</p>
            <AccentRule />
          </Reveal>
          <Reveal
            delay={0.1}
            className="corner-accent relative mx-auto max-w-4xl rounded-2xl border border-parchment bg-white/80 p-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl md:p-10"
          >
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gold/0 blur-md transition-all duration-500 group-hover:bg-gold/20" />
                  <img
                    src={images.people.principal}
                    alt="Mr. Bernard M. Mutua, Chief Principal"
                    className="relative h-36 w-36 rounded-full border-4 border-gold/30 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full ring-4 ring-gold/0 transition-all duration-500 group-hover:ring-gold/20" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-forest">
                  Mr. Bernard M. Mutua, OGW
                </h3>
                <p className="mt-1 font-sans text-sm font-semibold text-gold">
                  Chief Principal
                </p>
                <p className="font-sans text-xs text-slate-400">
                  Kitui High School
                </p>
              </div>

              <div>
                <p className="mb-2 font-serif text-5xl text-gold">&ldquo;</p>
                <p className="mb-5 italic leading-relaxed text-slate-600">
                  Welcome to Kitui High School. Our unwavering commitment is to
                  nurture disciplined, responsible and academically excellent
                  young men who will emerge as ethical leaders and
                  transformative changemakers in Kenya and across the globe.
                </p>
                <div className="mb-4 w-fit border-b border-forest/20 pb-2 font-serif text-lg italic text-forest">
                  Bernard M. Mutua
                </div>
                <p className="font-sans text-xs text-slate-400">
                  Chief Principal & Secretary to BOM
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ DEPUTY PRINCIPALS ══ */}
      <section className="section-pad relative overflow-hidden bg-cream">
        <CrestPattern />
        <div className="container-page relative">
          <Reveal className="mb-10 text-center">
            <p className="section-eyebrow mb-3">Deputy Principals</p>
            <AccentRule />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {deputies.map((d, i) => (
              <Reveal
                key={d.name}
                delay={i * 0.1}
                className="corner-accent group relative rounded-xl border border-parchment bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-20 w-20 shrink-0 rounded-full border-2 border-gold/30 object-cover shadow transition-transform duration-500 group-hover:scale-105"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest">
                      {d.name}
                    </h4>
                    <p className="mb-2 mt-0.5 font-sans text-xs font-semibold text-gold">
                      {d.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP STRUCTURE (ORG CHART) ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal className="mb-10 text-center">
            <p className="section-eyebrow mb-3">School Leadership Structure</p>
            <AccentRule />
            <p className="section-sub mx-auto max-w-2xl">
              Hover over any role to see who holds it — hover the Principal or a
              fork to trace their reporting line.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto max-w-3xl">
            <LeadershipOrgChart
              principal={{
                name: "Bernard M. Mutua, OGW",
                image: images.people.principal,
                title: "Chief Principal",
              }}
              deputies={deputies}
              board={board}
              deptHeads={deptHeads}
            />
          </Reveal>
        </div>
      </section>

      <SectionDivider color="#F4F1EA" />

      {/* ══ HEADS OF DEPARTMENTS ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal className="mb-10 text-center">
            <p className="section-eyebrow mb-3">
              Heads of Academic Departments
            </p>
            <AccentRule />
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
            {deptHeads.map((h, i) => (
              <Reveal
                key={h.name}
                delay={i * 0.06}
                className="group rounded-xl border border-parchment bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
              >
                <img
                  src={h.image}
                  alt={h.name}
                  className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-gold/30 object-cover shadow transition-transform duration-500 group-hover:scale-105"
                />
                <p className="text-sm font-semibold leading-tight text-forest">
                  {h.name}
                </p>
                <p className="mt-1 font-sans text-[11px] font-medium text-gold">
                  {h.subject}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOARD OF MANAGEMENT ══ */}
      <section
        id="board"
        className="section-pad relative overflow-hidden bg-white"
      >
        <AmbientGlow position="bottom-right" />
        <div className="container-page relative">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="section-eyebrow mb-3">Board of Management</p>
            <AccentRule />
            <p className="section-sub">
              The Board provides strategic governance and ensures the school is
              managed in the best interest of learners, staff and the wider
              community.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
            {board.map((b, i) => (
              <Reveal
                key={b.name}
                delay={i * 0.08}
                className={`group rounded-xl border p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  i === 0 || i === 2
                    ? "border-gold/30 bg-gold/5 hover:border-gold/50"
                    : "border-parchment bg-white hover:border-gold/30"
                }`}
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-gold/20 object-cover shadow transition-transform duration-500 group-hover:scale-105"
                />
                <p className="text-sm font-semibold text-forest">{b.name}</p>
                <p className="mt-0.5 font-sans text-[11px] text-slate-500">
                  {b.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="#F4F1EA" />

      {/* ══ ADMINISTRATION OFFICE ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal className="mb-10 text-center">
            <p className="section-eyebrow mb-3">Administration Office</p>
            <AccentRule />
          </Reveal>
          <div className="mx-auto mb-14 grid max-w-3xl gap-4 sm:grid-cols-2">
            {adminOffice.map((a, i) => (
              <Reveal
                key={a.label}
                delay={i * 0.08}
                className="flex items-start gap-4 rounded-xl border border-parchment bg-white p-4 transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="text-sm font-semibold text-forest">{a.label}</p>
                  <p className="font-sans text-xs text-slate-500">{a.desc}</p>
                </div>
              ))}
            </div>
            {/* Office hours */}
            <div className="card p-5 hover:border-gold/30">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-gold" size={18} />
                <p className="font-semibold text-forest">Office Hours</p>
              </div>
              <p className="text-sm text-slate-600 font-sans mb-1">
                Monday-Friday: 8:00 AM to 4:30 PM
              </p>
              <div className="h-px bg-slate-100 my-3" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                  <Phone className="text-gold shrink-0" size={14} />
                  +254 723 636 536
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-sans">
                  <Mail className="text-gold shrink-0" size={14} />
                  info@kituihighschool.sc.ke
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600 font-sans">
                  <MapPin className="text-gold shrink-0 mt-0.5" size={14} />
                  Mbusyani Road, P.O. Box 71, Kitui, Kenya
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-forest">
                  {label}
                </p>
                <p className="font-sans text-sm leading-snug text-slate-600">
                  {value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section className="bg-forest-dark py-16 text-center relative overflow-hidden">
        <div className="container-page relative z-10 max-w-3xl mx-auto">
          <p className="text-gold text-5xl font-serif mb-2">&ldquo;</p>
          <h2 className="text-white font-serif text-2xl md:text-3xl font-semibold mb-2">
            Leadership is not about position, it is about service, sacrifice and
            impacting lives.
          </h2>
          <p className="text-gold/70 text-sm font-sans mt-3 font-semibold tracking-wider uppercase">
            Learn To Serve · Since 1938
          </p>
        </div>
      </section>

      <CtaBanner
        title="Connect With Our Leadership Team"
        subtitle="We're here to partner with you in your child's education journey."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Book a Visit"
        secondaryTo="/contact"
      />
    </>
  );
}
