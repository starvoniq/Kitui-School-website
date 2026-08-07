import { Link } from 'react-router-dom'
import {
  Target, Eye, BookOpen, Calendar, MapPin, Users,
  Quote, GraduationCap, BedDouble, Trophy, UsersRound,
  ArrowRight, FlaskConical, Monitor, Star,
  Scale, Landmark, HeartHandshake,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

const milestones = [
  { year: '1908', title: 'Founded', desc: 'Established as an intermediate school in Kitui.' },
  { year: '1948', title: 'Boarding School', desc: 'Became a boarding school, then known as Campbell Academy.' },
  { year: '1971', title: 'A-Level Classes', desc: 'Started offering advanced-level classes for the first time.' },
  { year: '2000s', title: 'Modernisation', desc: 'Modern laboratories, library and ICT facilities introduced.' },
  { year: '2010s', title: 'Growth & Innovation', desc: 'New infrastructure and co-curricular excellence nationally.' },
  { year: 'Today', title: 'Forward Together', desc: 'Embracing CBC and global opportunities while upholding values.', highlight: true },
]

const glance = [
  { label: 'Year Founded', value: '1908' },
  { label: 'School Type', value: "Boys' National" },
  { label: 'Location', value: 'Kitui Town' },
  { label: 'Curriculum', value: 'CBC Senior' },
  { label: 'Students', value: '1,500' },
  { label: 'Teaching Staff', value: '120+' },
  { label: 'Boarding', value: 'Full Boarding' },
]

const alumni = [
  {
    icon: Scale,
    name: 'Willy Mutunga',
    role: 'Retired Chief Justice of Kenya',
  },
  {
    icon: Landmark,
    name: 'Kalonzo Musyoka',
    role: '10th Vice-President of Kenya',
  },
  {
    icon: GraduationCap,
    name: 'Makau Mutua',
    role: 'Former Dean, University of Buffalo Law School',
  },
  {
    icon: UsersRound,
    name: 'Ngala Mwendwa',
    role: 'Member, Kenyan delegation to the 1960 Lancaster House Conference',
  },
  {
    icon: Landmark,
    name: 'Muthomi Njuki',
    role: "Governor, Tharaka Nithi County; former Chuka-Igambang'ombe MP (taught Biology, coached rugby)",
  },
  {
    icon: HeartHandshake,
    name: 'Benjamin Nzimbi',
    role: 'Retired Archbishop & Primate, Anglican Church of Kenya',
  },
]

const facilities = [
  { icon: FlaskConical, label: 'Modern Laboratories', desc: 'Well equipped for practical learning' },
  { icon: BookOpen, label: 'Vast Library', desc: 'Resources for knowledge and research' },
  { icon: Monitor, label: 'ICT Centre', desc: 'Technology driven learning and innovation' },
  { icon: Trophy, label: 'Sports Facilities', desc: 'Nurturing talent, building champions' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumbs={['Home', 'About']}
        eyebrow="About Kitui High School"
        title="Our Heritage & Legacy"
        subtitle="Over a century of nurturing young men of character, discipline, leadership and academic excellence."
        bgImage={images.heroes.about}
      />

      {/* ══ OUR STORY ══ */}
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img
              src={images.campus.adminTower}
              alt="Kitui High School Heritage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>

          <div>
            <p className="section-eyebrow mb-3">Our Story</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-5">A Legacy That Continues to Inspire</h2>
            <p className="section-sub mb-4">
              Kitui High School is a boys' boarding national secondary school in Kitui County, the
              only national boys' secondary school in the county. It began as an intermediate school
              in 1908 before becoming a boarding school in 1948, then known as Campbell Academy, and
              started offering A-level classes in 1971.
            </p>
            <p className="section-sub mb-4">
              Located about 2 kilometres from Kitui town along the Kitui-Mbusyani road, the school
              today hosts a population of 1,500 students.
            </p>
            <p className="section-sub mb-7">
              Today, as a premier national school, we remain committed to academic excellence,
              holistic development and building character anchored on our motto <em className="text-gold font-semibold not-italic">Learn To Serve</em>.
            </p>
            <Link to="/contact" className="btn-outline-dark inline-flex items-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HERITAGE TIMELINE ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Our Heritage</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Over a Century of History</h2>
          </div>
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gold/20" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 z-10 border-2 ${
                      m.highlight
                        ? 'bg-gold border-gold text-forest font-bold'
                        : 'bg-white border-gold/40 text-forest font-semibold'
                    }`}
                  >
                    {m.highlight ? (
                      <Star size={16} className="text-forest fill-forest" />
                    ) : (
                      <span className="text-xs font-serif">{m.year.slice(-2) === 's' ? m.year : m.year.slice(-2)}</span>
                    )}
                  </div>
                  <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${m.highlight ? 'text-gold font-bold' : 'text-forest'}`}>
                    {m.year}
                  </p>
                  <p className="font-serif font-semibold text-forest text-sm mb-1">{m.title}</p>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION / MOTTO ══ */}
      <section className="section-pad bg-forest-gradient text-white">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, label: 'Our Mission', color: 'text-gold', text: 'To provide quality education that nurtures holistic development, instils strong moral values and prepares students to excel and serve the society.' },
            { icon: Eye, label: 'Our Vision', color: 'text-sky-300', text: 'To be a leading institution of academic excellence and character development, producing empowered leaders who transform the world.' },
            { icon: BookOpen, label: 'Our Motto', color: 'text-gold', text: '"Learn To Serve": A commitment to service, integrity and excellence that defines everything we do at Kitui High School.', italics: true },
          ].map(({ icon: Icon, label, color, text, italics }) => (
            <div key={label} className="glass rounded-xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                <Icon className={color} size={28} />
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-3">{label}</h3>
              <p className={`text-white/70 leading-relaxed text-sm ${italics ? 'italic' : ''}`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ AT A GLANCE ══ */}
      <section className="section-pad-sm bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Kitui High School at a Glance</p>
            <div className="gold-bar mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {glance.map((g) => (
              <div
                key={g.label}
                className="bg-cream rounded-xl p-4 text-center border border-parchment hover:border-gold/40 hover:shadow-card transition-all duration-200"
              >
                <p className="font-serif font-bold text-forest text-xl md:text-2xl">{g.value}</p>
                <p className="text-xs text-slate-500 mt-1 font-sans uppercase tracking-wide leading-tight">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAMPUS TODAY ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-eyebrow mb-3">Campus Today</p>
            <div className="gold-bar mb-4" />
            <h2 className="section-title mb-4">A Heritage. A Home. A Future.</h2>
            <p className="section-sub mb-6">
              Our serene and beautiful campus continues to grow, blending heritage with modern
              facilities to create the best environment for learning, discovery and personal growth.
            </p>
            <div className="grid grid-cols-2 gap-5 mb-8">
              {facilities.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-forest text-sm">{label}</p>
                    <p className="text-xs text-slate-500 font-sans leading-tight">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/3d-tour" className="btn-outline-dark inline-flex items-center gap-2">
              Explore Our Campus in 3D <ArrowRight size={16} />
            </Link>
          </div>

          {/* Aerial photo */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img
              src={images.campus.aerialCampus}
              alt="Kitui High School Campus Today"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ══ ACHIEVEMENTS PREVIEW ══ */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Our Achievements</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Excellence Is Our Tradition</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                <Trophy className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-forest text-lg mb-1">Sports Excellence</h4>
                <p className="section-sub text-sm">
                  We cultivate discipline, teamwork and resilience through a wide range of sports,
                  producing champions at regional and national stages, including rugby, athletics, hockey and more.
                </p>
              </div>
            </div>
            <div className="card p-6 flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-forest/5 border border-forest/15 flex items-center justify-center shrink-0">
                <UsersRound className="text-forest" size={26} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-forest text-lg mb-1">Clubs & Societies</h4>
                <p className="section-sub text-sm">
                  Our vibrant clubs and societies nurture leadership, service and innovation
                  among our students, from Science Club to Drama and Debate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NOTABLE ALUMNI ══ */}
      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="text-center mb-10">
            <p className="section-eyebrow mb-3">Notable Alumni</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Alumni Making a Difference</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Our alumni have gone on to serve the nation and the world in law, politics,
              education and the church.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <div key={a.name} className="card p-6 flex gap-4 hover:border-gold/30">
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <a.icon className="text-gold" size={26} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-forest text-lg leading-snug">{a.name}</h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed mt-1">{a.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE BANNER ══ */}
      <section className="bg-forest-dark py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="text-center text-[400px] font-serif text-white leading-none select-none">&ldquo;</div>
        </div>
        <div className="container-page relative z-10">
          <p className="text-gold text-5xl font-serif mb-2">&ldquo;</p>
          <h2 className="text-white font-serif text-3xl md:text-4xl font-semibold mb-2">
            Learn To Serve.
          </h2>
          <p className="text-white/70 font-sans text-lg italic">
            More than a motto. A way of life.
          </p>
          <p className="text-gold/70 text-sm font-sans mt-3 tracking-widest font-semibold">Since 1908</p>
        </div>
      </section>

      <CtaBanner
        title="Experience the Kitui High School Difference"
        subtitle="Visit our campus, meet our team and discover how we shape future leaders."
        primaryLabel="Book a Visit"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </>
  )
}
