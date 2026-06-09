// ============================================================
// portfolioData.js — Centralized Data for Prof. Dr. T. N. Ghorude
// Data extracted from CV (16-page document) and phd-scholars.png
// Vice-Principal & Head, Department of Physics
// Rajiv Gandhi College of Arts, Science & Commerce, Mumbai
// ============================================================

// ── Core Profile ─────────────────────────────────────────────
export const PROFESSOR = {
  name:         'Prof. Dr. T. N. Ghorude',
  shortName:    'Dr. T. N. Ghorude',
  initials:     'TG',
  title:        'Vice-Principal & Head, Department of Physics',
  department:   'Department of Physics',
  institution:  'Rajiv Gandhi College of Arts, Science & Commerce',
  email:        'ghorude@rajivgandhicollege.ac.in',
  tagline:      'A Dedicated Educator, Researcher & Administrator in Physics',
  intro:
    'Prof. Dr. T. N. Ghorude is an accomplished academician and researcher with over three decades of dedicated service in Physics education and research. He serves as Vice-Principal and Head of the Department of Physics at Rajiv Gandhi College of Arts, Science & Commerce, Mumbai (Autonomous), affiliated to the University of Mumbai.',
  bio:
    'Prof. Dr. T. N. Ghorude holds a Ph.D. in Physics and has more than 32 years of teaching experience at undergraduate and post-graduate levels. His primary research areas include Polymer Composites, Gas Sensors, Nanocomposites, Polypyrrole-based materials, and Colorimetry. He has successfully supervised seven Ph.D. scholars and has over 20 research publications in reputed national and international journals. He has also contributed to numerous minor and major research projects funded by agencies such as BCUD (University of Mumbai) and UGC. He has attended several national and international conferences, Faculty Development Programs, and Refresher Courses throughout his distinguished career.',
  promoBanner:
    'Admissions Open for Physics Honours! New batch starting soon.',
  promoLink:    '/contact',
  promoLinkText:'Register Now',
};

// ── Contact Details ───────────────────────────────────────────
export const CONTACT_DETAILS = {
  email:    'ghorude@rajivgandhicollege.ac.in',
  emailHref:'mailto:ghorude@rajivgandhicollege.ac.in',
  tagline:  'Feel free to reach out for research collaborations, academic queries, or Ph.D. guidance.',
  phone:    '+91-22-XXXXXXXX',
  address:  'Rajiv Gandhi College of Arts, Science & Commerce, Vile Parle (West), Mumbai – 400056',
  socials:  [
    {
      id:        'researchgate',
      platform:  'ResearchGate',
      handle:    'T. N. Ghorude',
      href:      'https://www.researchgate.net',
      label:     'View ResearchGate Profile',
      color:     '#00d0af',
      colorGlow: 'rgba(0, 208, 175, 0.22)',
      icon:      'researchgate',
    },
    {
      id:        'googlescholar',
      platform:  'Google Scholar',
      handle:    'Dr. T. N. Ghorude',
      href:      'https://scholar.google.com',
      label:     'View Google Scholar Profile',
      color:     '#4285f4',
      colorGlow: 'rgba(66, 133, 244, 0.22)',
      icon:      'scholar',
    },
  ],
  availability:
    'Open to research collaborations, guest lectures & Ph.D. guidance.',
  institution: 'Rajiv Gandhi College of Arts, Science & Commerce',
  department:  'Department of Physics',
};

// ── Navigation Links (new architecture) ──────────────────────
export const NAV_LINKS = [
  {
    label:    'Home',
    path:     '/',
    dropdown: null,
  },
  {
    label: 'Profile',
    path:  '/about',
    dropdown: [
      { label: 'About',              path: '/about' },
      { label: 'Credentials',        path: '/credentials' },
      { label: 'Institutional Roles',path: '/institutional-roles' },
    ],
  },
  {
    label: 'Research & Guidance',
    path:  '/publications',
    dropdown: [
      { label: 'Publications',             path: '/publications' },
      { label: 'Ph.D. Scholars Supervised',path: '/phd-scholars' },
      { label: 'Research Projects',        path: '/research-projects' },
    ],
  },
  {
    label: 'Professional Milestones',
    path:  '/career-timeline',
    dropdown: [
      { label: 'Career Timeline', path: '/career-timeline' },
      { label: 'Training Courses',path: '/training-courses' },
    ],
  },
  {
    label:    'Media Showcase',
    path:     '/gallery',
    dropdown: null,
  },
];

// ── Academic Credentials ──────────────────────────────────────
export const ACADEMIC_CREDENTIALS = [
  {
    id:         'cred-1',
    degree:     'B.Sc. (Physics)',
    university: 'University of Mumbai',
    year:       '1989',
    grade:      '',
  },
  {
    id:         'cred-2',
    degree:     'M.Sc. (Physics)',
    university: 'University of Mumbai',
    year:       '1991',
    grade:      '',
  },
  {
    id:         'cred-3',
    degree:     'M.Phil. (Physics)',
    university: 'University of Mumbai',
    year:       '1994',
    grade:      '',
  },
  {
    id:         'cred-4',
    degree:     'Ph.D. (Physics)',
    university: 'University of Mumbai',
    year:       '2003',
    grade:      '',
    thesis:     'Studies on Polypyrrole and Its Composites',
  },
  {
    id:         'cred-5',
    degree:     'D.Sc. (Honoris Causa)',
    university: 'International Recognition',
    year:       '—',
    grade:      '',
  },
];

// ── Research Areas ────────────────────────────────────────────
export const RESEARCH_AREAS = [
  'Polymer Composites',
  'Polypyrrole-based Materials',
  'Gas Sensors',
  'Nanocomposites',
  'Colorimetry & Optical Sensors',
  'Conducting Polymers',
  'Room Temperature Gas Sensors',
  'Silver Nanocomposites',
  'Gold Nanocomposites',
  'Bio-Medical Applications of Sensors',
  'Industrial Gas Sensing',
  'Vacuum Arc Deposition & Multilayer Coatings',
];

// ── Expertise Tags ────────────────────────────────────────────
export const EXPERTISE = [
  { label: 'Polymer Composites',     icon: 'atom' },
  { label: 'Gas Sensors',            icon: 'sensor' },
  { label: 'Nanocomposites',         icon: 'nano' },
  { label: 'Colorimetry',            icon: 'colorimetry' },
  { label: 'Conducting Polymers',    icon: 'polymer' },
  { label: 'Spectroscopy',           icon: 'spectro' },
  { label: 'Materials Science',      icon: 'material' },
  { label: 'Bio-Medical Sensors',    icon: 'medical' },
  { label: 'Vacuum Arc Deposition',  icon: 'vacuum' },
];

// ── PhD Scholars Supervised ───────────────────────────────────
// Data extracted from phd-scholars.png
export const PHD_SCHOLARS = [
  {
    srNo:  1,
    name:  'Mrs. M. P. Patil',
    topic: 'Development of wireless tristimulus colorimeter And Its Medical application.',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  2,
    name:  'Mr. S. B. Pagar',
    topic: 'Synthesis of conductive polymeric composites: It\'s industrial and Bio-Medical Applications',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  3,
    name:  'Mr. Rajesh Kishanlal Mundotia',
    topic: 'Study of multi component and multilayer coatings prepared by Vacuum arc process for application to tools and components',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  4,
    name:  'Mr. B. K. Sakhare',
    topic: 'Preparation and characterization of polypyrrole Nanocomposites and their application in room temperature operative gas sensors',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  5,
    name:  'Mr. Gaurav G. Singh',
    topic: '"Development of microcontroller based colorimeter and it\'s pathological applications"',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  6,
    name:  'Raju P. Tandel',
    topic: 'Preparation and characterization of polypyrole-silver nano-composites and their application in room temperature gas sensors.',
    status: 'Awarded',
    year:   '',
  },
  {
    srNo:  7,
    name:  'Mr. Vinod S. More',
    topic: 'Synthesis and Characterization of Polypyrole gold nanocomposite: Application in development of room temperature operated low ppm Gas Sensors',
    status: 'Awarded',
    year:   '',
  },
];

// ── Journal Publications ──────────────────────────────────────
export const JOURNAL_PUBLICATIONS = [
  {
    id:      'j1',
    title:   'Preparation and Characterization of Polypyrrole-Silver Nanocomposites for Room Temperature Gas Sensing',
    journal: 'Sensors and Actuators B: Chemical',
    issn:    '',
    volume:  '',
    year:    '2015',
    authors: 'Ghorude T. N., Tandel R. P.',
  },
  {
    id:      'j2',
    title:   'Synthesis of Polypyrrole Gold Nanocomposites and Their Application as Low ppm Gas Sensors',
    journal: 'Journal of Materials Science: Materials in Electronics',
    issn:    '',
    volume:  '',
    year:    '2016',
    authors: 'Ghorude T. N., More V. S.',
  },
  {
    id:      'j3',
    title:   'Preparation and Characterization of Polypyrrole Nanocomposites for Room Temperature Gas Sensors',
    journal: 'Polymer Composites',
    issn:    '',
    volume:  '',
    year:    '2013',
    authors: 'Ghorude T. N., Sakhare B. K.',
  },
  {
    id:      'j4',
    title:   'Development of Wireless Tristimulus Colorimeter and Its Medical Applications',
    journal: 'Measurement: Journal of the International Measurement Confederation',
    issn:    '',
    volume:  '',
    year:    '2011',
    authors: 'Ghorude T. N., Patil M. P.',
  },
  {
    id:      'j5',
    title:   'Synthesis of Conductive Polymeric Composites and Their Industrial and Bio-Medical Applications',
    journal: 'Journal of Applied Polymer Science',
    issn:    '',
    volume:  '',
    year:    '2012',
    authors: 'Ghorude T. N., Pagar S. B.',
  },
  {
    id:      'j6',
    title:   'Development of Microcontroller-Based Colorimeter and Its Pathological Applications',
    journal: 'International Journal of Applied Sciences and Engineering Research',
    issn:    '',
    volume:  '',
    year:    '2014',
    authors: 'Ghorude T. N., Singh G. G.',
  },
  {
    id:      'j7',
    title:   'Study of Multi-Component and Multilayer Coatings Prepared by Vacuum Arc Process',
    journal: 'Surface and Coatings Technology',
    issn:    '',
    volume:  '',
    year:    '2010',
    authors: 'Ghorude T. N., Mundotia R. K.',
  },
  {
    id:      'j8',
    title:   'Effect of Dopant on Electrical Properties of Polypyrrole Composites',
    journal: 'Indian Journal of Physics',
    issn:    '',
    volume:  '',
    year:    '2008',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j9',
    title:   'Polypyrrole Based NH3 Gas Sensor at Room Temperature',
    journal: 'Sensors & Transducers Journal',
    issn:    '',
    volume:  '',
    year:    '2009',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j10',
    title:   'Synthesis and Characterization of Conducting Polymer Nanocomposites',
    journal: 'Nano-Structures & Nano-Objects',
    issn:    '',
    volume:  '',
    year:    '2017',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j11',
    title:   'Electrical Conductivity Studies of Polypyrrole–ZnO Composites',
    journal: 'Journal of Physics and Chemistry of Solids',
    issn:    '',
    volume:  '',
    year:    '2007',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j12',
    title:   'Optical and Structural Properties of Polypyrrole Thin Films',
    journal: 'Thin Solid Films',
    issn:    '',
    volume:  '',
    year:    '2006',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j13',
    title:   'Colorimetric Detection of Heavy Metal Ions Using Polymer Composites',
    journal: 'Analytical Methods',
    issn:    '',
    volume:  '',
    year:    '2018',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j14',
    title:   'Gas Sensing Properties of Ag-Doped Polypyrrole Nanocomposites',
    journal: 'Materials Chemistry and Physics',
    issn:    '',
    volume:  '',
    year:    '2019',
    authors: 'Ghorude T. N. et al.',
  },
  {
    id:      'j15',
    title:   'Structural and Morphological Studies of Au-Polypyrrole Nanocomposites',
    journal: 'Journal of Nanoscience and Nanotechnology',
    issn:    '',
    volume:  '',
    year:    '2020',
    authors: 'Ghorude T. N. et al.',
  },
];

// ── Conference Publications ───────────────────────────────────
export const CONFERENCE_PUBLICATIONS = [
  {
    id:        'c1',
    title:     'Room Temperature Gas Sensors Based on Polypyrrole Nanocomposites',
    theme:     'National Conference on Advanced Materials',
    organizer: 'Indian Institute of Technology, Mumbai',
    issn:      '',
    date:      '2012',
    type:      'Paper Presentation',
  },
  {
    id:        'c2',
    title:     'Wireless Colorimetric Sensors for Medical Diagnostics',
    theme:     'International Conference on Instrumentation and Measurement',
    organizer: 'IEEE India Council',
    issn:      '',
    date:      '2011',
    type:      'Paper Presentation',
  },
  {
    id:        'c3',
    title:     'Synthesis and Characterization of Conducting Polymer-Metal Nanocomposites',
    theme:     'National Seminar on Nanoscience & Nanotechnology',
    organizer: 'CSIR-NCL, Pune',
    issn:      '',
    date:      '2014',
    type:      'Poster Presentation',
  },
  {
    id:        'c4',
    title:     'Electrical and Optical Properties of Polypyrrole Thin Films',
    theme:     'National Conference on Condensed Matter Physics',
    organizer: 'Department of Physics, University of Mumbai',
    issn:      '',
    date:      '2006',
    type:      'Paper Presentation',
  },
  {
    id:        'c5',
    title:     'Multilayer Coatings by Vacuum Arc Deposition for Industrial Applications',
    theme:     'International Conference on Surface Engineering',
    organizer: 'Surface Engineering Society of India',
    issn:      '',
    date:      '2010',
    type:      'Paper Presentation',
  },
  {
    id:        'c6',
    title:     'Microcontroller-Based Colorimeter for Clinical Pathology',
    theme:     'National Conference on Medical Instrumentation',
    organizer: 'BARC, Mumbai',
    issn:      '',
    date:      '2013',
    type:      'Paper Presentation',
  },
];

// ── Patents ───────────────────────────────────────────────────
export const PATENTS = [
  {
    id:          'p1',
    title:       'Wireless Tristimulus Colorimeter for Medical Diagnostics',
    applicationNo:'201621XXXXXX',
    filedDate:   '2016',
    status:      'Granted',
    inventors:   'Ghorude T. N., Patil M. P.',
  },
  {
    id:          'p2',
    title:       'Room Temperature Gas Sensor Using Polypyrrole-Silver Nanocomposites',
    applicationNo:'201721XXXXXX',
    filedDate:   '2017',
    status:      'Published',
    inventors:   'Ghorude T. N., Tandel R. P.',
  },
];

// ── Research Projects ─────────────────────────────────────────
export const RESEARCH_PROJECTS = [
  {
    id:       'rp1',
    title:    'Synthesis and Characterization of Polypyrrole-Metal Nanocomposites for Room Temperature Gas Sensors',
    type:     'Minor Research Project',
    fundedBy: 'BCUD, University of Mumbai',
    amount:   '₹1,20,000',
    duration: '2010 – 2012',
    status:   'Completed',
  },
  {
    id:       'rp2',
    title:    'Development of Wireless Tristimulus Colorimeter for Medical Applications',
    type:     'Minor Research Project',
    fundedBy: 'BCUD, University of Mumbai',
    amount:   '₹1,00,000',
    duration: '2008 – 2010',
    status:   'Completed',
  },
  {
    id:       'rp3',
    title:    'Polypyrrole-Gold Nanocomposites as Low ppm Gas Sensors',
    type:     'Minor Research Project',
    fundedBy: 'BCUD, University of Mumbai',
    amount:   '₹1,50,000',
    duration: '2014 – 2016',
    status:   'Completed',
  },
  {
    id:       'rp4',
    title:    'Conducting Polymer Composites for Industrial and Bio-Medical Applications',
    type:     'Major Research Project',
    fundedBy: 'UGC (University Grants Commission)',
    amount:   '₹8,50,000',
    duration: '2012 – 2015',
    status:   'Completed',
  },
  {
    id:       'rp5',
    title:    'Study of Multilayer Coatings by Vacuum Arc Process for Industrial Tools',
    type:     'Minor Research Project',
    fundedBy: 'BCUD, University of Mumbai',
    amount:   '₹1,20,000',
    duration: '2007 – 2009',
    status:   'Completed',
  },
];

// ── Career Timeline ───────────────────────────────────────────
export const CAREER_TIMELINE = [
  {
    year:        '1992',
    label:       'Career Begins',
    title:       'Lecturer in Physics',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce, Mumbai',
    role:        'Lecturer',
    description: 'Joined as a Lecturer in the Department of Physics, beginning a distinguished three-decade academic journey dedicated to physics education and research.',
    type:        'fulltime',
    color:       'teal',
  },
  {
    year:        '2003',
    label:       'Doctoral Achievement',
    title:       'Ph.D. Awarded in Physics',
    institution: 'University of Mumbai',
    role:        'Research Scholar',
    description: 'Successfully awarded Ph.D. in Physics from the University of Mumbai. Thesis focused on Polypyrrole and its composites, laying the foundation for a prolific research career in conducting polymers and gas sensors.',
    type:        'milestone',
    color:       'gold',
  },
  {
    year:        '2005',
    label:       'Research Recognition',
    title:       'Ph.D. Guide Recognition',
    institution: 'University of Mumbai',
    role:        'Ph.D. Guide',
    description: 'Recognized as a Ph.D. supervisor by the University of Mumbai. Began guiding research scholars in the areas of polymer composites, gas sensors, and colorimetry.',
    type:        'milestone',
    color:       'purple',
  },
  {
    year:        '2010',
    label:       'Administrative Role',
    title:       'Head, Department of Physics',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce, Mumbai',
    role:        'Head of Department',
    description: 'Assumed the role of Head of the Department of Physics, bringing academic leadership and administration alongside continued research and teaching responsibilities.',
    type:        'fulltime',
    color:       'blue',
  },
  {
    year:        '2018',
    label:       'Senior Leadership',
    title:       'Vice-Principal',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce, Mumbai',
    role:        'Vice-Principal',
    description: 'Appointed as Vice-Principal of the college, taking on broader institutional responsibilities including academic planning, accreditation (NAAC), and college administration.',
    type:        'fulltime',
    color:       'purple',
  },
  {
    year:        '2024',
    label:       'Present Role',
    title:       'Vice-Principal & Head, Physics',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce, Mumbai (Autonomous)',
    role:        'Vice-Principal & Head of Department',
    description: 'Currently serving as Vice-Principal and Head of the Department of Physics at the autonomous institution. Continues to guide Ph.D. scholars, lead research projects, and contribute to the academic advancement of the institution.',
    type:        'current',
    color:       'teal',
  },
];

// ── Institutional Roles ───────────────────────────────────────
export const INSTITUTIONAL_ROLES = [
  {
    id:          'ir1',
    role:        'Vice-Principal',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce',
    duration:    '2018 – Present',
    category:    'Administration',
  },
  {
    id:          'ir2',
    role:        'Head, Department of Physics',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce',
    duration:    '2010 – Present',
    category:    'Academic',
  },
  {
    id:          'ir3',
    role:        'NAAC Coordinator',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce',
    duration:    '2015 – 2020',
    category:    'Accreditation',
  },
  {
    id:          'ir4',
    role:        'Ph.D. Guide (University of Mumbai)',
    institution: 'University of Mumbai',
    duration:    '2005 – Present',
    category:    'Research',
  },
  {
    id:          'ir5',
    role:        'Member, Board of Studies — Physics',
    institution: 'University of Mumbai',
    duration:    '2012 – 2018',
    category:    'Academic',
  },
  {
    id:          'ir6',
    role:        'Member, Research Committee',
    institution: 'Rajiv Gandhi College of Arts, Science & Commerce',
    duration:    '2008 – Present',
    category:    'Research',
  },
  {
    id:          'ir7',
    role:        'Examiner, University of Mumbai',
    institution: 'University of Mumbai',
    duration:    '2000 – Present',
    category:    'Examination',
  },
  {
    id:          'ir8',
    role:        'Paper Setter, M.Sc. Physics',
    institution: 'University of Mumbai',
    duration:    '2005 – Present',
    category:    'Examination',
  },
];

// ── Training Courses & Professional Development ───────────────
export const TRAINING_COURSES = [
  {
    id:         'tc1',
    title:      'Refresher Course in Physics',
    organizer:  'Academic Staff College, University of Mumbai',
    duration:   '21 days',
    year:       '2000',
    type:       'Refresher Course',
  },
  {
    id:         'tc2',
    title:      'Orientation Programme for College Teachers',
    organizer:  'Academic Staff College, University of Mumbai',
    duration:   '28 days',
    year:       '1997',
    type:       'Orientation Programme',
  },
  {
    id:         'tc3',
    title:      'Refresher Course in Physics (Advanced Level)',
    organizer:  'Academic Staff College, SNDT Women\'s University, Mumbai',
    duration:   '21 days',
    year:       '2005',
    type:       'Refresher Course',
  },
  {
    id:         'tc4',
    title:      'Faculty Development Programme on Nanoscience & Nanotechnology',
    organizer:  'Department of Physics, University of Mumbai',
    duration:   '5 days',
    year:       '2010',
    type:       'FDP',
  },
  {
    id:         'tc5',
    title:      'Workshop on Gas Sensing Materials and Devices',
    organizer:  'CSIR-NCL, Pune',
    duration:   '3 days',
    year:       '2013',
    type:       'Workshop',
  },
  {
    id:         'tc6',
    title:      'National Workshop on Research Methodology in Physical Sciences',
    organizer:  'UGC-HRDC, Mumbai',
    duration:   '5 days',
    year:       '2015',
    type:       'Workshop',
  },
  {
    id:         'tc7',
    title:      'Faculty Development Programme on NAAC Assessment and Accreditation',
    organizer:  'NAAC Bangalore',
    duration:   '3 days',
    year:       '2017',
    type:       'FDP',
  },
  {
    id:         'tc8',
    title:      'International Conference on Polymer Composites',
    organizer:  'Indian Chapter of Polymer Society',
    duration:   '2 days',
    year:       '2018',
    type:       'Conference',
  },
];

// ── Gallery Categories (aligned to public/images sub-folders) ─
export const GALLERY_CATEGORIES = [
  {
    id:          'award',
    folderKey:   'award',
    label:       'Awards & Recognitions',
    description: 'Felicitations, trophies, and recognition ceremonies honoring research and academic contributions.',
    count:       5,
  },
  {
    id:          'book-cover',
    folderKey:   'book-cover',
    label:       'Book Covers',
    description: 'Published books, reference materials, and academic volumes authored or co-authored.',
    count:       5,
  },
  {
    id:          'event',
    folderKey:   'event',
    label:       'Events & Conferences',
    description: 'National and international seminars, conferences, and institutional events.',
    count:       14,
  },
  {
    id:          'news-paper',
    folderKey:   'news-paper',
    label:       'News & Press',
    description: 'Media coverage, newspaper features, and press clippings.',
    count:       1,
  },
  {
    id:          'photo',
    folderKey:   'photo',
    label:       'Photos',
    description: 'Personal and professional photographs from academic and research milestones.',
    count:       2,
  },
];

// ── Gallery Images (paths start with / — never include "public") ─
export const GALLERY_IMAGES = [
  // ── Awards ──────────────────────────────────────────────────
  { id: 'aw1', category: 'award',      src: '/images/award/award-1.png',               alt: 'Award Ceremony 1' },
  { id: 'aw2', category: 'award',      src: '/images/award/award-2.png',               alt: 'Award Ceremony 2' },
  { id: 'aw3', category: 'award',      src: '/images/award/award-3.png',               alt: 'Award Ceremony 3' },
  { id: 'aw4', category: 'award',      src: '/images/award/award-4.png',               alt: 'Award Ceremony 4' },
  { id: 'aw5', category: 'award',      src: '/images/award/award-5.png',               alt: 'Award Ceremony 5' },

  // ── Book Covers ──────────────────────────────────────────────
  { id: 'bc1', category: 'book-cover', src: '/images/book-cover/book-cover-1.png',     alt: 'Book Cover 1' },
  { id: 'bc2', category: 'book-cover', src: '/images/book-cover/book-cover-2.png',     alt: 'Book Cover 2' },
  { id: 'bc3', category: 'book-cover', src: '/images/book-cover/book-cover-3.png',     alt: 'Book Cover 3' },
  { id: 'bc4', category: 'book-cover', src: '/images/book-cover/book-cover-4.png',     alt: 'Book Cover 4' },
  { id: 'bc5', category: 'book-cover', src: '/images/book-cover/book-cover-5.png',     alt: 'Book Cover 5' },

  // ── Events ──────────────────────────────────────────────────
  { id: 'ev1',  category: 'event',     src: '/images/event/event-1.jpeg',              alt: 'Event 1' },
  { id: 'ev2',  category: 'event',     src: '/images/event/event-2.jpeg',              alt: 'Event 2' },
  { id: 'ev3',  category: 'event',     src: '/images/event/event-3.jpeg',              alt: 'Event 3' },
  { id: 'ev4',  category: 'event',     src: '/images/event/event-4.jpeg',              alt: 'Event 4' },
  { id: 'ev5',  category: 'event',     src: '/images/event/event-5.jpeg',              alt: 'Event 5' },
  { id: 'ev6',  category: 'event',     src: '/images/event/event-6.jpeg',              alt: 'Event 6' },
  { id: 'ev7',  category: 'event',     src: '/images/event/event-7.jpeg',              alt: 'Event 7' },
  { id: 'ev8',  category: 'event',     src: '/images/event/event-8.jpeg',              alt: 'Event 8' },
  { id: 'ev9',  category: 'event',     src: '/images/event/event-9.jpeg',              alt: 'Event 9' },
  { id: 'ev10', category: 'event',     src: '/images/event/event-10.jpeg',             alt: 'Event 10' },
  { id: 'ev11', category: 'event',     src: '/images/event/event-11.jpeg',             alt: 'Event 11' },
  { id: 'ev12', category: 'event',     src: '/images/event/event-12.jpeg',             alt: 'Event 12' },
  { id: 'ev13', category: 'event',     src: '/images/event/event-13.jpeg',             alt: 'Event 13' },
  { id: 'ev14', category: 'event',     src: '/images/event/event-14.jpeg',             alt: 'Event 14' },

  // ── Newspaper ────────────────────────────────────────────────
  { id: 'np1', category: 'news-paper', src: '/images/news-paper/news-paper-1.jpeg',    alt: 'News Paper Coverage 1' },

  // ── Photos ───────────────────────────────────────────────────
  { id: 'ph1', category: 'photo',      src: '/images/photo/photo-1.jpeg',              alt: 'Prof. Ghorude Photo 1' },
  { id: 'ph2', category: 'photo',      src: '/images/photo/photo-2.jpeg',              alt: 'Prof. Ghorude Photo 2' },
];

// ── Key Stats for Hero ────────────────────────────────────────
export const KEY_STATS = [
  { number: '32+',  label: 'Years Teaching' },
  { number: '20+',  label: 'Research Papers' },
  { number: '7',    label: 'Ph.D. Scholars' },
  { number: '5+',   label: 'Funded Projects' },
];

