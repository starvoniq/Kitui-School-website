import { Link } from 'react-router-dom'
import {
  Target, Eye, BookOpen, Calendar, MapPin, Users,
  Quote, GraduationCap, BedDouble, Trophy, UsersRound,
  ArrowRight, FlaskConical, Monitor,
  Scale, Landmark, HeartHandshake, Radio,
} from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

const eras = [
  {
    period: '1908–1939',
    title: 'Colonial Foundations',
    events: [
      { year: '1908', text: 'Established by the British colonial government as an intermediate school near the Kitui Police Station, the first secular Government African School in the colony, with strong backing from local Akamba communities.' },
      { year: '1938–39', text: 'Outgrew its original site and was relocated to the current permanent grounds, officially renamed Campbell Academy in honour of Provincial Commissioner Mr. Campbell.' },
    ],
  },
  {
    period: '1940s–1950s',
    title: 'Expansion & Co-Education',
    events: [
      { year: '1942', text: 'Temporarily operated as a co-educational facility, with girls also in attendance.' },
      { year: '1947–49', text: 'Officially transitioned into a regional boarding school as the first permanent student dormitories were completed.' },
      { year: '1957', text: 'Upgraded into a full secondary school; its inaugural class of O-Level students graduated in 1960.' },
    ],
  },
  {
    period: '1960s–1980s',
    title: 'Post-Independence & Academic Elevation',
    events: [
      { year: '1971', text: 'Introduced the advanced A-Level tier (Forms 5 and 6) to meet the demands of a newly independent Kenya.' },
      { year: '1980', text: 'Phased out A-Level classes and re-aligned into the standard 8-4-4 secondary system following nationwide reforms.' },
    ],
  },
  {
    period: 'Present',
    title: 'National School Status',
    events: [
      { year: 'Today', text: 'Elevated by the Ministry of Education to a National School for its sterling KCSE performances, now hosting over 1,500 students drawn from all 47 counties of Kenya.' },
    ],
  },
]

const glance = [
  { label: 'Year Founded', value: '1908' },
  { label: 'School Type', value: "Boys' National" },
  { label: 'Location', value: 'Kitui Town' },
  { label: 'Curriculum', value: 'CBC Senior' },
  { label: 'Students', value: '1,500+' },
  { label: 'Teaching Staff', value: '120+' },
  { label: 'Boarding', value: 'Full Boarding' },
]

const alumni = [
  {
    icon: Scale,
    name: 'Willy Mutunga',
    role: 'Retired Chief Justice of Kenya; first Chief Justice under the 2010 Constitution',
  },
  {
    icon: Landmark,
    name: 'Kalonzo Musyoka',
    role: '10th Vice-President of Kenya; diplomat and elder statesman',
  },
  {
    icon: GraduationCap,
    name: 'Makau Mutua',
    role: 'Former Dean, University at Buffalo Law School; globally recognized legal scholar',
  },
  {
    icon: UsersRound,
    name: 'Ngala Mwendwa',
    role: 'Independence-era politician; member of the Kenyan delegation to the 1960 Lancaster House Conference',
  },
  {
    icon: Radio,
    name: 'Leonard Mambo Mbotela',
    role: 'Pioneering veteran Kenyan radio and broadcast journalist',
  },
  {
    icon: Landmark,
    name: 'Muthomi Njuki',
    role: "Governor, Tharaka Nithi County; former Chuka-Igambang'ombe MP (taught Biology, coached rugby)",
  },
  {
    icon: HeartHandshake,
    name: 'Benjamin Nzimbi',
    role: 'Retired Archbishop and Primate, Anglican Church of Kenya',
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
              Kitui High School is a government-aided national boys' boarding secondary school
              in Kitui Central Sub-County, Kitui County, and the only national boys' school in
              the entire county. For over a century it has served as a crucible for leadership,
              academic excellence and character development, shaping some of East Africa's most
              prominent public servants, legal minds and scholars.
            </p>
            <p className="section-sub mb-4">
              Located about 2 kilometres from Kitui town along the Kitui-Mbusyani road, the campus
              today accommodates a vibrant population of over 1,500 students drawn from all 47
              counties of Kenya.
            </p>
            <p className="section-sub mb-4">
              The school is nationally recognized for its ultra-competitive academic environment,
              with a strong focus on STEM subjects (Sciences and Mathematics) alongside holistic
              growth through sports, arts and service.
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
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/20" />
            <div className="space-y-8">
              {eras.map((era) => (
                <div key={era.title} className="relative pl-12">
                  <span className="absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-2 border-white shadow" />
                  <div className="card p-6 md:p-7 hover:border-gold/30">
                    <p className="section-eyebrow mb-1">{era.period}</p>
                    <h3 className="font-serif font-bold text-forest text-xl mb-4">{era.title}</h3>
                    <ul className="space-y-3">
                      {era.events.map((e) => (
                        <li key={e.year}>
                          <p className="text-xs font-bold text-gold uppercase tracking-wide mb-0.5">{e.year}</p>
                          <p className="text-sm text-slate-600 font-sans leading-relaxed">{e.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            { icon: BookOpen, label: 'Our Motto', color: 'text-gold', text: '"Learn To Serve": A commitment to service, integrity and excellence that defines everything we do at Kitui High School.', sub: '"Umiisyo na Wia" (Perseverance and Work): A Kamba saying that reflects our deep cultural roots and hard-working academic culture.' },
          ].map(({ icon: Icon, label, color, text, sub, italics }) => (
            <div key={label} className="glass rounded-xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                <Icon className={color} size={28} />
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-3">{label}</h3>
              <p className={`text-white/70 leading-relaxed text-sm ${italics ? 'italic' : ''}`}>{text}</p>
              {sub && <p className="text-white/70 leading-relaxed text-sm mt-3">{sub}</p>}
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
            <h2 className="section-title">The Kitui School Hall of Fame</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              The history of Kitui School is best mirrored by the caliber of leaders it has
              produced for the nation, from law and politics to education and the church.
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
