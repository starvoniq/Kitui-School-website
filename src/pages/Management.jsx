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
import { images } from "../assets/images.js";

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
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri, 8:00 AM – 4:30 PM",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 720 302 123 / +254 722 323 456",
  },
  { icon: Mail, label: "Email", value: "info@kituihigh.ac.ke" },
  {
    icon: MapPin,
    label: "Address",
    value: "Kitui – Machakos Road, P.O. Box 71, Kitui, Kenya",
  },
];

export default function Management() {
  return (
    <>
      <PageHero
        crumbs={["Home", "Leadership & Administration"]}
        eyebrow="School Leadership"
        title="Leadership & Governance"
        subtitle="Leading with integrity, service and excellence to create an inspiring environment where every learner thrives."
        bgImage={images.heroes.management}
      />

      {/* ══ LEADERSHIP PHILOSOPHY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="section-eyebrow mb-3">Our Leadership Philosophy</p>
            <div className="gold-bar mx-auto mb-4" />
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
          </div>

          {/* Full-width banner image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[21/9] relative group mb-10">
            <img
              src={images.campus.adminTower}
              alt="Kitui High School Administration Building"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>

          {/* Values grid, now full width */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm">{label}</p>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRINCIPAL ══ */}
      <section id="principal" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Meet Our Principal</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto card p-8 md:p-10 hover:border-gold/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center text-center">
                <img
                  src={images.people.principal}
                  alt="Mr. Bernard M. Mutua, Chief Principal"
                  className="w-36 h-36 rounded-full object-cover border-4 border-gold/30 shadow-lg"
                />
                <h3 className="font-serif font-bold text-forest text-xl mt-5">
                  Mr. Bernard M. Mutua, OGW
                </h3>
                <p className="text-gold font-semibold text-sm mt-1 font-sans">
                  Chief Principal
                </p>
                <p className="text-xs text-slate-400 font-sans">
                  Kitui High School
                </p>
              </div>

              <div>
                <p className="text-gold text-5xl font-serif mb-2">&ldquo;</p>
                <p className="text-slate-600 leading-relaxed mb-5 italic">
                  Welcome to Kitui High School. Our unwavering commitment is to
                  nurture disciplined, responsible and academically excellent
                  young men who will emerge as ethical leaders and
                  transformative changemakers in Kenya and across the globe.
                </p>
                <div className="font-serif italic text-forest text-lg mb-4 border-b border-forest/20 pb-2 w-fit">
                  Bernard M. Mutua
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Chief Principal & Secretary to BOM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEPUTY PRINCIPALS ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Deputy Principals</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deputies.map((d) => (
              <div key={d.name} className="card p-6 hover:border-gold/30">
                <div className="flex gap-4 items-start">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold/30 shadow shrink-0"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-forest text-lg">
                      {d.name}
                    </h4>
                    <p className="text-gold text-xs font-semibold font-sans mt-0.5 mb-2">
                      {d.title}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP STRUCTURE (ORG CHART) — now its own full-width section ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">School Leadership Structure</p>
            <div className="gold-bar mx-auto mb-4" />
            <p className="section-sub max-w-2xl mx-auto">
              Hover over any role to see who holds it.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* ══ HEADS OF DEPARTMENTS — own full-width section ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">
              Heads of Academic Departments
            </p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 max-w-5xl mx-auto">
            {deptHeads.map((h) => (
              <div
                key={h.name}
                className="card p-4 text-center hover:border-gold/30"
              >
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-gold/30 shadow"
                />
                <p className="font-semibold text-forest text-sm leading-tight">
                  {h.name}
                </p>
                <p className="text-[11px] text-gold font-sans font-medium mt-1">
                  {h.subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOARD OF MANAGEMENT — own full-width section ══ */}
      <section id="board" className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="section-eyebrow mb-3">Board of Management</p>
            <div className="gold-bar mx-auto mb-4" />
            <p className="section-sub">
              The Board provides strategic governance and ensures the school is
              managed in the best interest of learners, staff and the wider
              community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {board.map((b) => (
              <div
                key={b.name}
                className="card p-4 text-center hover:border-gold/30"
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-gold/20 shadow"
                />
                <p className="font-semibold text-forest text-sm">{b.name}</p>
                <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                  {b.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ADMINISTRATION OFFICE — own full-width section ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Administration Office</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
            {adminOffice.map((a) => (
              <div
                key={a.label}
                className="flex gap-4 items-start bg-cream rounded-xl p-4 border border-parchment"
              >
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="font-semibold text-forest text-sm">{a.label}</p>
                  <p className="text-xs text-slate-500 font-sans">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Office hours & contact — its own row of info tiles */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {officeInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card p-5 text-center hover:border-gold/30"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="text-gold" size={18} />
                </div>
                <p className="font-semibold text-forest text-xs uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="text-sm text-slate-600 font-sans leading-snug">
                  {value}
                </p>
              </div>
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
            Learn To Serve — Since 1938
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
