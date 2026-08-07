import { Play, MapPin, Monitor, BookOpen, Utensils, Dumbbell, BedDouble, FlaskConical, ArrowRight } from 'lucide-react'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../assets/images.js'

const locations = [
  { n: 1, icon: MapPin, title: 'Main Entrance Gate', text: 'Welcome to Kitui High School. The iconic school gate that has welcomed generations of national leaders.', image: images.gate },
  { n: 2, icon: MapPin, title: 'Administration Block', text: 'The heart of leadership and management where decisions are made, records kept and guidance given.', image: images.campus.adminTower },
  { n: 3, icon: FlaskConical, title: 'Science Laboratories', text: 'Well-equipped labs for Physics, Chemistry and Biology, where curiosity meets practical discovery.', image: images.academics.physicsLab },
  { n: 4, icon: BookOpen, title: 'School Library & Research', text: 'A quiet haven for research, reading and inspiration with thousands of volumes and digital resources.', image: images.academics.library },
  { n: 5, icon: Monitor, title: 'ICT Centre & Coding Lab', text: 'Modern technology for innovation, software development and 21st-century digital skills.', image: images.academics.computerLab },
  { n: 6, icon: BedDouble, title: 'Boarding Houses', text: 'Safe, comfortable and conducive boarding environment, a true home away from home.', image: images.campus.boarding },
  { n: 7, icon: Utensils, title: 'Dining Hall', text: 'Nutritious, balanced meals served in a clean, hygienic and spacious dining hall.', image: images.campus.dining },
  { n: 8, icon: Dumbbell, title: 'Sports Grounds', text: 'Where champions are made, teamwork thrives and national sporting trophies are won.', image: images.campus.sportsField },
]

export default function Tour3D() {
  return (
    <>
      {/* Hero with background photo */}
      <section className="relative min-h-[50vh] flex items-center bg-forest-dark overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={images.heroes.tour3d}
            alt="Kitui High School 3D Tour"
            className="w-full h-full object-cover object-center brightness-[0.88]"
          />
          {/* Transparent gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold z-10" />

        <div className="container-page py-20 md:py-24 relative z-10 drop-shadow-md">
          <p className="section-eyebrow mb-3 animate-fade-up text-gold-light drop-shadow-sm">Virtual Campus Experience</p>
          <div className="gold-bar mb-4 shadow-sm" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-2xl leading-tight mb-5 animate-fade-up-200 text-white drop-shadow-lg">
            Explore Kitui High School in <span className="text-gold-light">3D</span>
          </h1>
          <p className="text-white/95 max-w-xl mb-8 font-sans leading-relaxed text-base animate-fade-up-400 drop-shadow-md">
            Step inside our campus from anywhere in the world. Explore our classrooms, science
            laboratories, library and boarding facilities in interactive 3D.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-600">
            <button className="btn-primary-lg">
              Launch 3D Viewer <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Tour viewer interactive frame */}
      <section className="bg-forest-dark py-0 relative z-20">
        <div className="container-page">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative -mt-10 aspect-video max-h-[520px] bg-black group cursor-pointer">
            <img
              src={images.gate}
              alt="360 Tour Preview"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/20 transition-all flex flex-col items-center justify-center text-center gap-4 p-8">
              <div className="w-20 h-20 rounded-full border-2 border-gold/60 flex items-center justify-center bg-forest/80 backdrop-blur-md shadow-md group-hover:scale-110 transition-transform">
                <Play size={32} className="text-gold fill-gold ml-1" />
              </div>
              <div>
                <p className="text-white font-serif font-bold text-2xl drop-shadow">360° Virtual Campus Tour</p>
                <p className="text-white/70 text-sm font-sans mt-1">
                  Click to launch interactive panoramic walk-through
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour locations with real photos */}
      <section className="section-pad bg-white pt-16">
        <div className="container-page">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Campus Locations</p>
            <div className="gold-bar mx-auto mb-4" />
            <h2 className="section-title">Experience KHS Like Never Before</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto font-sans text-sm">
              Our 3D tour gives you an interactive look at our world-class facilities,
              modern learning spaces, serene environment and vibrant student life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <div key={loc.n} className="card overflow-hidden group cursor-pointer hover:border-gold/30">
                <div className="aspect-video relative overflow-hidden bg-forest-dark">
                  <img
                    src={loc.image}
                    alt={loc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-forest text-gold border border-gold/40 flex items-center justify-center font-bold text-xs font-sans shadow">
                    {loc.n}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-semibold text-forest mb-1 group-hover:text-gold transition-colors line-clamp-1">{loc.title}</h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-2">{loc.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Visit Us In Person"
        subtitle="We'd love to welcome you to our campus. Book a physical visit or speak to our team."
        primaryLabel="Book a Visit"
        primaryTo="/contact"
        secondaryLabel="Explore Academics"
        secondaryTo="/academics"
      />
    </>
  )
}
