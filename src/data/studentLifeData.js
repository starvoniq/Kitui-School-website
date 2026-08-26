/**
 * studentLifeData.js
 * Central data store for all Student Life activities.
 * Images are imported via the existing images.js registry.
 */
import { images } from '../assets/images.js'

// ─── Image shortcuts ───────────────────────────────────────────────────────
export const IMAGES = {
  sports:        images.gallery.athletics,
  drama:         images.gallery.drama,
  compound:      images.campus.compound,
  classroom:     images.academics.studentsClass,
  prizeGiving:   images.gallery.prizeGiving,
  studentLeader: images.testimonials.student,
  teachers:      images.people.leadershipGroup,
  alumni:        images.testimonials.alumni,
  computerLab:   images.academics.ictCentre,
  scienceLab:    images.academics.physicsLab,
  library:       images.academics.library,
  admin:         images.campus.adminTower,
  gate:          images.gate,
}

// ─── Sports & Games ────────────────────────────────────────────────────────
export const sports = [
  {
    id: 'rugby',
    slug: 'rugby',
    name: 'Rugby',
    fullName: 'Rugby (15s & 7s Teams)',
    category: 'sports',
    patron: 'Mr. Kioko',
    accentColor: '#dc2626',   // red
    image: IMAGES.sports,
    tag: 'Contact Sport',
    tagline: 'Fierce. Fast. Fearless.',
    description:
      'Kitui School Rugby is the pride of the school — a team forged through grit, resilience, and teamwork. Running two squads (15s and 7s), the program competes at regional and national level with distinction.',
    fullDescription:
      'Rugby at Kitui School is more than just a sport — it is a tradition of excellence. With both the Rugby 15s and Rugby 7s teams active, students benefit from structured training sessions, tactical coaching, and high-intensity competition. The program builds mental fortitude, leadership, and physical conditioning, qualities that serve students well beyond the school pitch.',
    poem:
      'Rugby warriors, fierce and fast. Charging forward, none surpassed. With grit and grace, they break the line, Their courage etched in every spine.',
    highlights: [
      'Dual squads — 15s and 7s — active throughout the year',
      'Regular regional and national inter-school competitions',
      'Structured training under experienced coaching staff',
      'Builds discipline, resilience, and team leadership',
    ],
    achievements: [
      'Regional semi-finalists (15s)',
      'Consistent top-10 national ranking (7s)',
      'Multiple MVP awards in county competitions',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'hockey',
    slug: 'hockey',
    name: 'Hockey',
    fullName: 'Hockey Team',
    category: 'sports',
    patron: 'Mr. Mark',
    accentColor: '#d97706',   // amber
    image: IMAGES.sports,
    tag: 'Field Sport',
    tagline: 'Swift, Precise & Unstoppable.',
    description:
      'The Kitui School Hockey team is built on precision, speed, and tactical intelligence. They dominate the turf with seamless coordination and razor-sharp stick work.',
    fullDescription:
      'Hockey at Kitui School is a display of athleticism and tactical brilliance. The team trains rigorously on field positioning, stick handling, and defensive plays. Mr. Mark leads a squad that punches above its weight in regional leagues, inspiring students with the spirit of never giving up.',
    poem:
      'Hockey heroes, swift and keen, Their sticks command the turf so clean. In icy focus, they defend and strike, A symphony of teamwork, sharp and like.',
    highlights: [
      'Competitive in regional inter-school field hockey leagues',
      'Emphasis on stick skills, positioning, and teamwork',
      'Combined strength and agility training program',
    ],
    achievements: [
      'County hockey champions (Field Hockey)',
      'Top 5 finishes in regional tournaments',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'basketball',
    slug: 'basketball',
    name: 'Basketball',
    fullName: 'Basketball Team',
    category: 'sports',
    patron: 'Mr. Musyoki',
    accentColor: '#1e5631',   // forest
    image: IMAGES.sports,
    tag: 'Court Sport',
    tagline: 'Dribble. Drive. Dominate.',
    description:
      'The Basketball team brings fast-paced excitement to Kitui School. Known for clutch plays, precision shooting, and relentless energy, the team is a crowd favourite.',
    fullDescription:
      'Basketball at Kitui School has grown into a powerhouse program. Under Mr. Musyoki\'s guidance, players develop their dribbling, passing, and shooting abilities. The team participates in multiple tournaments annually, consistently advancing to later rounds. The culture of the team centres on discipline and collective excellence.',
    poem:
      'Basketball stars, leap and soar, Precision shots, the crowd wants more. Dribbling dreams with every play, They light the court in dazzling display.',
    highlights: [
      'Competitive in county and regional basketball leagues',
      'Fast-break offense and structured half-court defense',
      'Regular inter-school friendly matches and tournaments',
    ],
    achievements: [
      'County basketball runners-up',
      'Regional quarter-final appearances',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.studentLeader],
  },
  {
    id: 'volleyball',
    slug: 'volleyball',
    name: 'Volleyball',
    fullName: 'Volleyball Team',
    category: 'sports',
    patron: 'Mr. Mali',
    accentColor: '#059669',   // emerald
    image: IMAGES.sports,
    tag: 'Net Sport',
    tagline: 'Spike. Block. Repeat.',
    description:
      'Volleyball at Kitui School is characterised by powerful spikes, tight net defence, and exceptional team coordination. Mr. Mali has built a team that thrives under pressure.',
    fullDescription:
      'The Volleyball team is one of the most active squads at Kitui School. Training sessions focus on serve receive, attacking, and blocking techniques. The team competes at county and regional levels, often advancing deep into championships. Off the court, the team culture promotes brotherhood and mutual support.',
    highlights: [
      'Strong serve-receive and attack combinations',
      'County-level competition appearances',
      'Consistent team bonding and leadership development',
    ],
    achievements: [
      'County volleyball semi-finalists',
      'Best sportsmanship award recipients',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'badminton',
    slug: 'badminton',
    name: 'Badminton',
    fullName: 'Badminton Club',
    category: 'sports',
    patron: 'Mr. Kitonga',
    accentColor: '#2563eb',   // blue
    image: IMAGES.sports,
    tag: 'Racket Sport',
    tagline: 'Agile. Accurate. Relentless.',
    description:
      'Badminton demands lightning reflexes and pinpoint accuracy — qualities that define Kitui School\'s Badminton Club. The squad participates in both singles and doubles competitions.',
    fullDescription:
      'Under Mr. Kitonga\'s coaching, the Badminton Club has developed a reputation for producing technically gifted players. Students learn footwork, smash techniques, and rally consistency. The club welcomes players of all abilities and provides a pathway from beginner to competitive level.',
    highlights: [
      'Singles and doubles competition participation',
      'Focus on footwork, smash technique, and court awareness',
      'Open to all skill levels — from beginners to advanced players',
    ],
    achievements: [
      'County badminton doubles finalists',
      'Multiple individual singles medallists',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'handball',
    slug: 'handball',
    name: 'Handball',
    fullName: 'Handball Team',
    category: 'sports',
    patron: 'Sports Department',
    accentColor: '#0891b2',   // cyan
    image: IMAGES.sports,
    tag: 'Team Sport',
    tagline: 'Power, Speed & Precision.',
    description:
      'Handball at Kitui School showcases explosive athleticism, aggressive defense, and seamless offensive plays that keep the opposition guessing from start to finish.',
    fullDescription:
      'The Handball team is guided by the Sports Department and has developed into a cohesive unit known for its high-tempo playing style. Training focuses on jump shots, fast breaks, and structured defensive formations. The team embodies the spirit of collective effort.',
    poem:
      'Handball masters, fierce and true. They pass with power, break right through. Agile minds and lightning hands, They rule the game with bold commands.',
    highlights: [
      'Explosive offensive plays and structured defense',
      'Regular participation in inter-school tournaments',
      'Developing young talent across the county',
    ],
    achievements: [
      'County handball quarter-finalists',
      'Recognised for best teamwork at regional galas',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'lawn-tennis',
    slug: 'lawn-tennis',
    name: 'Lawn Tennis',
    fullName: 'Lawn Tennis Club',
    category: 'sports',
    patron: 'Sports Department',
    accentColor: '#d97706',   // amber
    image: IMAGES.sports,
    tag: 'Racket Sport',
    tagline: 'Finesse Meets Power.',
    description:
      'Kitui School\'s Lawn Tennis Club is home to players who combine elegant baseline rallies with powerful serves, competing in individual and doubles formats.',
    fullDescription:
      'Lawn Tennis at Kitui School is a sport of mental focus and physical endurance. The club trains on serve mechanics, groundstrokes, and match-play strategy. Both singles and doubles players represent the school at county-level competitions, and the program continues to grow in participation and competitive results.',
    highlights: [
      'Individual and doubles formats',
      'Focus on consistency, serve strength, and court strategy',
      'County-level competition participation',
    ],
    achievements: [
      'County tennis doubles finalists',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'swimming',
    slug: 'swimming',
    name: 'Swimming',
    fullName: 'Swimming Team',
    category: 'sports',
    patron: 'Sports Department',
    accentColor: '#0ea5e9',   // sky
    image: IMAGES.sports,
    tag: 'Aquatic Sport',
    tagline: 'Every Stroke Counts.',
    description:
      'The Swimming Team competes in freestyle, backstroke, breaststroke, and relay events, delivering explosive performances at regional galas.',
    fullDescription:
      'The Kitui School Swimming Team is one of the school\'s most celebrated squads, with a history of strong performances in regional galas. Swimmers are trained to excel in multiple strokes, with particular strength in freestyle and relay events. The team fosters determination, personal improvement, and gold-medal ambition.',
    poem:
      'Swimming champions, sleek and strong. They glide through waves where they belong. Each stroke a promise, each lap a fight. They chase the gold with pure delight.',
    highlights: [
      'Freestyle, backstroke, breaststroke, and relay specialties',
      'Consistent regional gala participation',
      'Individual time-trial improvements tracked each season',
    ],
    achievements: [
      'Regional swimming gala top-5 finishes',
      'Multiple individual event medallists',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'athletics',
    slug: 'athletics',
    name: 'Athletics',
    fullName: 'Athletics Legends',
    category: 'sports',
    patron: 'Sports Department',
    accentColor: '#e11d48',   // rose
    image: IMAGES.sports,
    tag: 'Track & Field',
    tagline: 'Run. Jump. Throw. Conquer.',
    description:
      'From sprints to long jump, hurdles to javelin — Kitui School Athletics produces multi-event champions who push the limits of human speed and endurance.',
    fullDescription:
      'Athletics at Kitui School is a comprehensive track and field program covering sprints, middle distance, long jump, high jump, javelin, discus, and shot put. Students are coached on technique, strength, and race strategy. The school has produced several county and regional champions over the years.',
    poem:
      'Athletics legends, fleet of feet. They race the wind, never retreat. From sprints to jumps, they own the track. With every finish, never look back.',
    highlights: [
      'Full track and field program — sprints, distance, jumps, throws',
      'County and regional competition participation',
      'Strength and conditioning training included',
    ],
    achievements: [
      'County athletics champions (sprint relay)',
      'Multiple individual county medallists',
      'Regional long jump and high jump finalists',
    ],
    galleryImages: [IMAGES.sports, IMAGES.compound, IMAGES.prizeGiving, IMAGES.alumni],
  },
]

// ─── Clubs & Societies ─────────────────────────────────────────────────────
export const clubs = [
  {
    id: 'drama-music',
    slug: 'drama-music',
    name: 'Drama & Music',
    fullName: 'Drama & Music Team',
    category: 'clubs',
    patron: 'Md. Mutuku (Assisted by Mr. Sebastian, Mr. James, Mr. Karani, Mrs. Musyoka)',
    patronShort: 'Md. Mutuku',
    accentColor: '#9333ea',   // purple
    image: IMAGES.drama,
    tag: 'Performing Arts',
    tagline: 'Where Stories Come Alive.',
    description:
      'National-level contenders in choral verse, solo vocals, folk songs, creative dance, and stage drama. The Drama & Music team is the creative heartbeat of Kitui School.',
    fullDescription:
      'The Drama & Music Team at Kitui School is a powerhouse of creativity that competes at the highest national levels. Students explore classical and contemporary performance arts — from Shakespearean stage productions to vibrant African folk performances. The team has won multiple accolades at the Kenya National Drama Festival and the Kenya Music Festival.',
    highlights: [
      'Kenya National Drama Festival participants',
      'Kenya Music Festival competitors — choral verse, folk song, solo',
      'Annual school concert performances open to the public',
      'Creative arts development workshops',
    ],
    achievements: [
      'National Drama Festival finalists',
      'Kenya Music Festival top performers (choral verse)',
      'Best Creative Arts Team Award — county level',
    ],
    galleryImages: [IMAGES.drama, IMAGES.prizeGiving, IMAGES.compound, IMAGES.studentLeader],
  },
  {
    id: 'journalism',
    slug: 'journalism',
    name: 'Journalism & Media',
    fullName: 'Journalism & Media Club',
    category: 'clubs',
    patron: 'Mr. Kavele',
    patronShort: 'Mr. Kavele',
    accentColor: '#0f766e',   // teal
    image: IMAGES.teachers,
    tag: 'Press & Media',
    tagline: 'The Voice of Kitui School.',
    description:
      '"The Campbell Talks" — Kitui School\'s award-winning magazine — is the flagship product of the Journalism & Media Club. Photography, reporting, and broadcast production all live here.',
    fullDescription:
      'The Journalism & Media Club is the newsroom of Kitui School. Students learn the craft of news writing, feature journalism, photography, and digital content creation. The club produces "The Campbell Talks" — the school\'s annual magazine — which has become a treasured publication documenting school life, achievements, and student voices.',
    highlights: [
      'Produces "The Campbell Talks" annual school magazine',
      'Photography, feature writing, and news reporting skills',
      'Covers all major school events and competitions',
      'Mentorship by experienced teaching staff',
    ],
    achievements: [
      'Best School Magazine — county journalism award',
      'Students admitted to university journalism programs',
    ],
    galleryImages: [IMAGES.teachers, IMAGES.prizeGiving, IMAGES.classroom, IMAGES.compound],
  },
  {
    id: 'history-club',
    slug: 'history-club',
    name: 'History Club',
    fullName: 'History Club',
    category: 'clubs',
    patron: 'Mr. Kitemange',
    patronShort: 'Mr. Kitemange',
    accentColor: '#b45309',   // amber dark
    image: IMAGES.classroom,
    tag: 'Heritage & Thinking',
    tagline: 'We Don\'t Just Study the Past.',
    description:
      'The History Club explores civilizations, African heritage, and world events through debate, field trips, and original research. "We are the architects of the Why."',
    fullDescription:
      '"Imagine the world as a giant, unfolding map where every street you walk and every screen you swipe is built on history. We are the fingerprints left by rebels, the whispers of failed empires, and the tectonic shifts of thought." — The Campbell Talks. The History Club at Kitui School is a community of critical thinkers and storytellers who dig beneath the surface of world events.',
    quote:
      '"Imagine the world as a giant unfolding map. At History Club, we don\'t just study the past — we perform an autopsy of its secrets."',
    highlights: [
      'Debate sessions on historical and contemporary global issues',
      'Field trips to cultural landmarks and heritage sites',
      'Research and essay competitions',
      'African history and decolonisation discourse',
    ],
    achievements: [
      'National history quiz competition participants',
      'Multiple students admitted to history and law programs',
    ],
    galleryImages: [IMAGES.classroom, IMAGES.teachers, IMAGES.library, IMAGES.compound],
  },
  {
    id: 'red-cross',
    slug: 'red-cross',
    name: 'Kenya Red Cross',
    fullName: 'Kenya Red Cross Society',
    category: 'clubs',
    patron: 'Md. Mutua & Mr. Mark',
    patronShort: 'Md. Mutua & Mr. Mark',
    accentColor: '#dc2626',   // red
    image: IMAGES.compound,
    tag: 'Humanitarian',
    tagline: 'Humanity. Neutrality. Impartiality.',
    description:
      'First aid certification, blood drives, emergency response drills, and community humanitarian aid — the Kenya Red Cross Society at Kitui School saves lives and shapes compassionate leaders.',
    fullDescription:
      'The Kenya Red Cross Society chapter at Kitui School is one of the most active humanitarian organisations in the school. Members receive certified first aid training, participate in blood donation drives, and respond to emergency scenarios on campus. The club also engages in community outreach programs during school holidays.',
    highlights: [
      'Certified first aid training for all members',
      'Annual blood donation drives and awareness campaigns',
      'Emergency response drills and simulation exercises',
      'Community outreach and humanitarian missions',
    ],
    achievements: [
      'County Red Cross best chapter award',
      'Over 100 students first-aid certified annually',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'st-john',
    slug: 'st-john',
    name: "St. John's Ambulance",
    fullName: "St. John's Ambulance Brigade",
    category: 'clubs',
    patron: 'Md. Job',
    patronShort: 'Md. Job',
    accentColor: '#1d4ed8',   // blue
    image: IMAGES.compound,
    tag: 'First Aid & Drills',
    tagline: 'Ready When It Matters Most.',
    description:
      'Paramedic basics, health awareness, ceremonial parades, and first responder training — St. John\'s Ambulance at Kitui School prepares students to protect lives.',
    fullDescription:
      'The St. John\'s Ambulance Brigade is a prestigious and disciplined organisation that equips Kitui School students with life-saving skills. Members undergo rigorous training in patient assessment, bandaging, CPR, and emergency transport. The Brigade also maintains ceremonial standards, appearing at school events in their distinctive uniforms.',
    highlights: [
      'CPR, patient assessment, and emergency response training',
      'Ceremonial parade participation at school functions',
      'Health awareness campaigns on campus',
      'Regular assessments and badging',
    ],
    achievements: [
      'County St. John\'s best drill team',
      'National first aid competition participants',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'integrity-club',
    slug: 'integrity-club',
    name: 'Integrity Club',
    fullName: 'Integrity Club',
    category: 'clubs',
    patron: 'Md. Makilya (Assisted by Mr. Mbithuka)',
    patronShort: 'Md. Makilya',
    accentColor: '#1e5631',   // forest
    image: IMAGES.studentLeader,
    tag: 'Ethics & Values',
    tagline: 'Doing Right, Even When No One Watches.',
    description:
      'Anti-corruption awareness, ethical leadership, accountability, and moral uprightness — the Integrity Club shapes the conscience of Kitui School.',
    fullDescription:
      'The Integrity Club is at the forefront of ethical education at Kitui School. Through workshops, debates, and awareness campaigns, members learn the importance of transparency, honesty, and accountable leadership. The club collaborates with bodies like the Ethics and Anti-Corruption Commission (EACC) and Youth in Parliament programs.',
    highlights: [
      'Anti-corruption workshops and ethics debates',
      'Collaborations with EACC and national integrity programs',
      'Student leadership and accountability training',
      'Annual Integrity Week events',
    ],
    achievements: [
      'County best integrity club chapter',
      'Members elected as school prefects and leaders',
    ],
    galleryImages: [IMAGES.studentLeader, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.compound],
  },
  {
    id: 'wildlife-club',
    slug: 'wildlife-club',
    name: 'Wildlife Club',
    fullName: 'Wildlife & Environment Club',
    category: 'clubs',
    patron: 'Mr. Kitua',
    patronShort: 'Mr. Kitua',
    accentColor: '#16a34a',   // green
    image: IMAGES.compound,
    tag: 'Environment',
    tagline: 'Protect. Preserve. Prosper.',
    description:
      'Tree planting, wildlife conservation trips, environmental activism, and biodiversity education — the Wildlife Club champions a greener Kitui School and a healthier Kenya.',
    fullDescription:
      'The Wildlife & Environment Club is dedicated to instilling an environmental consciousness in Kitui School students. Members participate in tree-planting drives, litter cleanups, recycling initiatives, and educational trips to national parks and game reserves. The club advocates for biodiversity conservation at both local and national levels.',
    highlights: [
      'Annual school compound tree planting drives',
      'Field trips to national parks and wildlife conservancies',
      'Environmental awareness campaigns and school debates',
      'Collaboration with Kenya Wildlife Service (KWS)',
    ],
    achievements: [
      'Planted 500+ trees on school compound',
      'County environmental club commendation',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.alumni, IMAGES.prizeGiving],
  },
  {
    id: 'maths-club',
    slug: 'maths-club',
    name: 'Mathematics Club',
    fullName: 'Mathematics Club',
    category: 'clubs',
    patron: 'Mr. Osiemo',
    patronShort: 'Mr. Osiemo',
    accentColor: '#6d28d9',   // violet
    image: IMAGES.classroom,
    tag: 'STEM & Logic',
    tagline: 'Every Problem Has a Solution.',
    description:
      'Inter-school math contests, Speed Math challenges, Olympiad problem-solving, and peer tutoring — the Mathematics Club turns numbers into superpowers.',
    fullDescription:
      'The Mathematics Club at Kitui School is a hub for logical reasoning, problem-solving, and mathematical excellence. Students compete in Speed Math events, national math olympiads, and inter-school math challenges. Peer tutoring sessions ensure that every student has access to top-quality academic support beyond the classroom.',
    highlights: [
      'National Math Olympiad participation',
      'Speed Math and inter-school competition teams',
      'Peer tutoring and academic support for weaker students',
      'Puzzle and logic challenges open to all students',
    ],
    achievements: [
      'National Math Olympiad top-20 finishers',
      'County Speed Math champions',
    ],
    galleryImages: [IMAGES.classroom, IMAGES.teachers, IMAGES.scienceLab, IMAGES.library],
  },
  {
    id: 'debate-club',
    slug: 'debate-club',
    name: 'Debate & Mjadala',
    fullName: 'Debate & Mjadala Club',
    category: 'clubs',
    patron: 'Mr. Kitemange, Mrs. Mugambi & Mr. Brian',
    patronShort: 'Mr. Kitemange & Mrs. Mugambi',
    accentColor: '#0f172a',   // slate
    image: IMAGES.teachers,
    tag: 'Oratory Excellence',
    tagline: 'The Power of the Spoken Word.',
    description:
      'Parliamentary debates in English and Kiswahili, public speaking mastery, and critical argumentation — the Debate & Mjadala Club sharpens the minds of future leaders.',
    fullDescription:
      'The Debate & Mjadala Club is one of the most intellectually rigorous clubs at Kitui School. Students argue both sides of complex social, economic, and political issues using structured parliamentary procedures. The club competes in English and Kiswahili debate formats, developing students\' articulation, critical thinking, and confidence on the public stage.',
    highlights: [
      'Biannual inter-school debate competitions (English & Kiswahili)',
      'Parliamentary procedure and public speaking workshops',
      'Invitational debate galas with top Kenyan schools',
      'Leadership and critical reasoning development',
    ],
    achievements: [
      'County debate champions (Kiswahili division)',
      'Regional English debate semi-finalists',
    ],
    galleryImages: [IMAGES.teachers, IMAGES.classroom, IMAGES.prizeGiving, IMAGES.compound],
  },
  {
    id: 'scouts',
    slug: 'scouts',
    name: 'Scouts Movement',
    fullName: 'Scouts Movement',
    category: 'clubs',
    patron: 'Mr. Kyalo Tirus',
    patronShort: 'Mr. Kyalo Tirus',
    accentColor: '#854d0e',   // brown
    image: IMAGES.compound,
    tag: 'Adventure & Drills',
    tagline: 'Be Prepared.',
    description:
      'Outdoor survival, camping expeditions, ceremonial parades, and community service — the Scouts Movement at Kitui School builds leaders one badge at a time.',
    fullDescription:
      'The Scouts Movement at Kitui School follows the World Scout Brotherhood\'s principles of character, citizenship, and competence. Members earn badges in outdoor survival, first aid, navigation, and community leadership. The scouts are a prominent presence at school functions and community events, serving with pride and purpose.',
    highlights: [
      'Badge earning in survival, first aid, and leadership',
      'Annual camping and expedition activities',
      'Ceremonial parades at school and national events',
      'Community service projects during school breaks',
    ],
    achievements: [
      'County Scouts best troop award',
      'National Jamboree participants',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'peer-counsellors',
    slug: 'peer-counsellors',
    name: 'Peer Counsellors',
    fullName: 'Peer Counselling Programme',
    category: 'clubs',
    patron: 'Mrs. David',
    patronShort: 'Mrs. David',
    accentColor: '#be185d',   // pink
    image: IMAGES.studentLeader,
    tag: 'Wellness & Support',
    tagline: 'Listening. Supporting. Uplifting.',
    description:
      'Student-to-student psychological support, mental health awareness, stress management, and peer mentorship — the Peer Counsellors programme puts wellbeing first.',
    fullDescription:
      'The Peer Counselling Programme at Kitui School equips trained student counsellors with the skills to support their fellow students through emotional challenges, peer pressure, academic stress, and life transitions. Under Mrs. David\'s guidance, peer counsellors offer a confidential, compassionate, and non-judgmental space for all students.',
    highlights: [
      'Trained student counsellors available on campus',
      'Mental health awareness campaigns and workshops',
      'Confidential one-on-one peer support sessions',
      'Anti-bullying programs and social inclusion drives',
    ],
    achievements: [
      'Measurable improvement in student wellbeing surveys',
      'County peer counselling best program recognition',
    ],
    galleryImages: [IMAGES.studentLeader, IMAGES.teachers, IMAGES.compound, IMAGES.prizeGiving],
  },
  {
    id: 'young-farmers',
    slug: 'young-farmers',
    name: 'Young Farmers',
    fullName: 'Young Farmers Club',
    category: 'clubs',
    patron: 'Mr. Nzomo',
    patronShort: 'Mr. Nzomo',
    accentColor: '#15803d',   // green
    image: IMAGES.compound,
    tag: 'Agriculture & Tech',
    tagline: 'Feed the Nation, Lead the Future.',
    description:
      'Modern agricultural techniques, hydroponics, crop cultivation, poultry management, and agribusiness projects — the Young Farmers Club makes agriculture exciting.',
    fullDescription:
      'The Young Farmers Club bridges academic theory and agricultural practice. Students learn about crop rotation, soil science, irrigation systems, and poultry management. The club runs a school farm that supplies fresh produce, and members participate in national agricultural shows and competitions.',
    highlights: [
      'School farm management (crops and poultry)',
      'Modern agricultural techniques including hydroponics',
      'National agricultural show participants',
      'Agribusiness entrepreneurship training',
    ],
    achievements: [
      'County Young Farmers best club',
      'National agricultural show 2nd place (vegetables category)',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'presidents-award',
    slug: 'presidents-award',
    name: "President's Award",
    fullName: "President's Award Kenya Programme",
    category: 'clubs',
    patron: 'Mr. Kyalo Reuben',
    patronShort: 'Mr. Kyalo Reuben',
    accentColor: '#c19a3b',   // gold
    image: IMAGES.prizeGiving,
    tag: 'Leadership Award',
    tagline: 'Bronze. Silver. Gold. Greatness.',
    description:
      'Physical challenge, adventurous journeys, community service, and skill building at Bronze, Silver, and Gold levels — the President\'s Award shapes Africa\'s future leaders.',
    fullDescription:
      'The President\'s Award Kenya (PAK) programme at Kitui School is an internationally recognised youth development programme. Students pursue awards at Bronze, Silver, and Gold levels, completing milestones in physical recreation, skill development, service, and adventurous journeys. Graduates of the programme carry a lifelong mark of excellence and perseverance.',
    highlights: [
      'Bronze, Silver, and Gold award tracks',
      'Physical recreation, skills, service, and expedition components',
      'International recognition and certification',
      'Networking with award participants across Kenya and the world',
    ],
    achievements: [
      '30+ Gold Award recipients',
      'National PAK gala participants',
      'Multiple students recognised at the National Award ceremony',
    ],
    galleryImages: [IMAGES.prizeGiving, IMAGES.studentLeader, IMAGES.compound, IMAGES.alumni],
  },
  {
    id: 'science-fair',
    slug: 'science-fair',
    name: 'Science & Innovation',
    fullName: 'Science Fair & Innovation Club',
    category: 'clubs',
    patron: 'Mr. Kitua',
    patronShort: 'Mr. Kitua',
    accentColor: '#0369a1',   // sky
    image: IMAGES.scienceLab,
    tag: 'Innovation & Research',
    tagline: 'Question Everything. Build Tomorrow.',
    description:
      'Physics experiments, chemistry innovations, ICT projects, and Science Congress competitions — the Science & Innovation Club is where Kitui\'s future engineers and scientists are born.',
    fullDescription:
      'The Science Fair & Innovation Club provides a launchpad for Kitui School\'s most curious minds. Students design and execute original scientific projects, entering county and national Science Congress competitions. The club works across STEM disciplines — biology, chemistry, physics, and computer science — to produce well-rounded innovation champions.',
    highlights: [
      'Annual school science fair with public exhibition',
      'County and national science congress participation',
      'ICT software project development',
      'Collaboration with industry professionals and mentors',
    ],
    achievements: [
      'County Science Congress 1st place (Biology category)',
      'National Science Congress participants',
      'Students admitted to top engineering universities',
    ],
    galleryImages: [IMAGES.scienceLab, IMAGES.computerLab, IMAGES.classroom, IMAGES.prizeGiving],
  },
  {
    id: 'amani-club',
    slug: 'amani-club',
    name: 'Amani Club',
    fullName: 'Amani Peace Club',
    category: 'clubs',
    patron: 'Mrs. Wasike',
    patronShort: 'Mrs. Wasike',
    accentColor: '#0e7490',   // cyan
    image: IMAGES.compound,
    tag: 'Peace & Harmony',
    tagline: 'Amani — Peace for All.',
    description:
      'Peaceful coexistence, conflict resolution, social harmony, and cohesion — the Amani Club creates a campus where every student belongs and is valued.',
    fullDescription:
      'The Amani Club promotes a culture of peace, respect, and mutual understanding at Kitui School. Through dialogue circles, conflict mediation training, and cross-cultural events, the club creates a safe and inclusive environment for all students. Mrs. Wasike leads the club with a vision of a harmonious school community.',
    highlights: [
      'Peer mediation and conflict resolution training',
      'Annual peace week events and cultural exchange days',
      'Anti-discrimination and inclusion campaigns',
      'Collaboration with community peace-building organisations',
    ],
    achievements: [
      'County peace club commendation',
      'School conflict incidents reduced by 40% since founding',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.studentLeader, IMAGES.alumni],
  },
]

// ─── Faith & Spiritual Groups ──────────────────────────────────────────────
export const faithGroups = [
  {
    id: 'ycs',
    slug: 'ycs',
    name: 'Young Catholic Students',
    fullName: 'Young Catholic Students (YCS)',
    category: 'faith',
    patron: 'Mr. James',
    patronShort: 'Mr. James',
    accentColor: '#b45309',   // amber
    image: IMAGES.compound,
    tag: 'Catholic Chaplaincy',
    tagline: 'Faith. Fellowship. Service.',
    description:
      'Weekly mass, moral guidance, community service initiatives, and spiritual formation — YCS nurtures the Catholic faith at Kitui School with devotion and joy.',
    fullDescription:
      'The Young Catholic Students (YCS) at Kitui School is a vibrant spiritual community centred on faith, fellowship, and service. Members attend weekly mass celebrations, participate in rosary prayers, engage in sacramental preparation, and carry out charity work in the local community. YCS forms students of deep faith and strong moral conviction.',
    highlights: [
      'Weekly mass and rosary prayer sessions',
      'Sacramental preparation and faith formation programmes',
      'Community service and charity outreach missions',
      'Annual retreats and pilgrimage activities',
    ],
    achievements: [
      'Raised over KES 200,000 for local orphanages',
      'County YCS best chapter award',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'cu',
    slug: 'cu',
    name: 'Christian Union',
    fullName: 'Christian Union (CU)',
    category: 'faith',
    patron: 'Mr. Kavele',
    patronShort: 'Mr. Kavele',
    accentColor: '#16a34a',   // green
    image: IMAGES.compound,
    tag: 'Protestant Fellowship',
    tagline: 'Anchored in Christ. Growing Together.',
    description:
      'Energetic praise & worship sessions, Bible study groups, annual missions, and weekend challenge events — the Christian Union is where faith meets fellowship.',
    fullDescription:
      'The Christian Union (CU) at Kitui School is one of the largest and most active student organisations on campus. Members gather regularly for vibrant praise and worship sessions, structured Bible study, and prayer meetings. Annual missions weeks and weekend retreats deepen students\' faith and provide opportunities for spiritual growth and community bonding.',
    highlights: [
      'Weekly praise & worship and Bible study sessions',
      'Annual missions week and school-wide evangelism events',
      'Weekend retreat and spiritual formation camps',
      'Leadership development through Christian values',
    ],
    achievements: [
      'County CU best fellowship',
      'Successfully organised 3 school-wide missions weeks',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
  {
    id: 'muslim',
    slug: 'muslim',
    name: 'Muslim Students',
    fullName: 'Muslim Students Association (MSA)',
    category: 'faith',
    patron: 'Mr. Mutuku',
    patronShort: 'Mr. Mutuku',
    accentColor: '#0f766e',   // teal
    image: IMAGES.compound,
    tag: 'Islamic Society',
    tagline: 'Unity. Integrity. Devotion.',
    description:
      'Daily prayers, Quranic studies, Islamic ethics, character building, and strong brotherhood — the Muslim Students Association at Kitui School is a community of devotion.',
    fullDescription:
      'The Muslim Students Association (MSA) at Kitui School provides Muslim students with a supportive spiritual home. Members maintain the five daily prayers, engage in Quranic recitation and Islamic studies, observe significant Islamic dates, and participate in community charity work during Ramadan. The MSA promotes Islamic values of justice, compassion, and brotherhood.',
    highlights: [
      'Five daily prayers and congregational Jumu\'ah on Fridays',
      'Quranic memorisation and recitation programs',
      'Ramadan charity and iftar drives',
      'Islamic Studies and ethical leadership development',
    ],
    achievements: [
      'Quranic recitation competition participants',
      'Community Ramadan food drive raised KES 150,000',
    ],
    galleryImages: [IMAGES.compound, IMAGES.teachers, IMAGES.prizeGiving, IMAGES.alumni],
  },
]

// ─── All activities combined ───────────────────────────────────────────────
export const allActivities = [...sports, ...clubs, ...faithGroups]

// ─── Lookup helpers ────────────────────────────────────────────────────────
export function findBySlug(category, slug) {
  return allActivities.find(
    (item) => item.category === category && item.slug === slug
  ) || null
}

export function getRelated(category, currentSlug, limit = 3) {
  return allActivities
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, limit)
}

export function getCategoryItems(category) {
  return allActivities.filter((item) => item.category === category)
}

export const categoryMeta = {
  sports: {
    label: 'Sports & Games',
    eyebrow: 'Athletic Excellence',
    subtitle: 'Nine disciplines, one unstoppable spirit. Discover the sports teams that carry Kitui School\'s pride to every field and court across Kenya.',
    image: IMAGES.sports,
  },
  clubs: {
    label: 'Clubs & Societies',
    eyebrow: 'Academic & Co-Curricular',
    subtitle: 'From the newsroom to the lab, from the debate podium to the stage — discover the clubs shaping Kitui School\'s brightest minds.',
    image: IMAGES.drama,
  },
  faith: {
    label: 'Faith & Spiritual',
    eyebrow: 'Spiritual Foundation',
    subtitle: 'Faith, fellowship, and moral leadership. Discover the faith communities that anchor Kitui School\'s students in purpose and character.',
    image: IMAGES.compound,
  },
}
