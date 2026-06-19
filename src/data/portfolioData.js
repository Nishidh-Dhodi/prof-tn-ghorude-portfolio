// Centralized Data for Prof. Dr. T. N. Ghorude
// Data extracted from CV (16-page document) and phd-scholars.png

// ── Core Profile ─────────────────────────────────────────────
export const PROFESSOR = {
  name: "Prof. Dr. T. N. Ghorude",
  shortName: "Dr. T. N. Ghorude",
  initials: "TG",
  title: "Principal",
  department: "Administration",
  institution: "Dnyandeep Mandal's St. Joseph College of Arts and Commerce",
  email: "tnghorude@gmail.com",
  tagline: "A Dedicated Educator, Researcher & Administrator in Physics",
  intro:
    "Prof. Dr. T. N. Ghorude is an accomplished academician and researcher with over three decades of dedicated service in Physics education and research. He currently serves as Principal at Dnyandeep Mandal's St. Joseph College of Arts and Commerce, Satpala, Rajodi Road, Virar (West), affiliated to the University of Mumbai.",
  bio: "Prof. Dr. T. N. Ghorude holds a Ph.D. in Physics and has more than 32 years of teaching experience at undergraduate and post-graduate levels. His primary research areas include Polymer Composites, Gas Sensors, Nanocomposites, Polypyrrole-based materials, and Colorimetry. He has successfully supervised seven Ph.D. scholars and has over 50 research publications in reputed national and international journals. He has also contributed to numerous minor and major research projects funded by agencies such as BCUD (University of Mumbai) and UGC. He has attended several national and international conferences, Faculty Development Programs, and Refresher Courses throughout his distinguished career.",
  promoBanner: "Admissions Open for Physics Honours! New batch starting soon.",
  promoLink: "/contact",
  promoLinkText: "Register Now",
};

// ── Contact Details ───────────────────────────────────────────
export const CONTACT_DETAILS = {
  email: "tnghorude@gmail.com",
  emailHref: "mailto:tnghorude@gmail.com",
  tagline:
    "Feel free to reach out for research collaborations, academic queries, or Ph.D. guidance.",
  phone: "+91-22-XXXXXXXX",
  address:
    "Dnyandeep Mandal's St. Joseph College of Arts and Commerce, Satpala, Rajodi Road, P. O. Agashi, Virar (West), Tal. Vasai, Dist. Palghar",
  socials: [
    {
      id: "researchgate",
      platform: "ResearchGate",
      handle: "T. N. Ghorude",
      href: "https://www.researchgate.net",
      label: "View ResearchGate Profile",
      color: "#00d0af",
      colorGlow: "rgba(0, 208, 175, 0.22)",
      icon: "researchgate",
    },
    {
      id: "googlescholar",
      platform: "Google Scholar",
      handle: "Dr. T. N. Ghorude",
      href: "https://scholar.google.com",
      label: "View Google Scholar Profile",
      color: "#4285f4",
      colorGlow: "rgba(66, 133, 244, 0.22)",
      icon: "scholar",
    },
  ],
  availability:
    "Open to research collaborations, guest lectures & Ph.D. guidance.",
  institution: "Dnyandeep Mandal's St. Joseph College of Arts and Commerce",
  department: "Principal's Office",
};

// ── Navigation Links (new architecture) ──────────────────────
export const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    dropdown: null,
  },
  {
    label: "Profile",
    path: "/about",
    dropdown: [
      { label: "About", path: "/about" },
      { label: "Credentials", path: "/credentials" },
      { label: "Institutional Roles", path: "/institutional-roles" },
    ],
  },
  {
    label: "Research & Guidance",
    path: "/publications",
    dropdown: [
      { label: "Publications", path: "/publications" },
      { label: "Ph.D. Scholars Supervised", path: "/phd-scholars" },
      { label: "Research Projects", path: "/research-projects" },
    ],
  },
  {
    label: "Professional Milestones",
    path: "/career-timeline",
    dropdown: [
      { label: "Career Timeline", path: "/career-timeline" },
      { label: "Training Courses", path: "/training-courses" },
    ],
  },
  {
    label: "Media Showcase",
    path: "/gallery",
    dropdown: null,
  },
];

// ── Academic Credentials ──────────────────────────────────────
export const ACADEMIC_CREDENTIALS = [
  {
    id: "cred-1",
    degree: "B.Sc. (Physics)",
    university: "Gulbarga University, Gulbarga",
    year: "1988",
    grade: "",
  },
  {
    id: "cred-2",
    degree: "M.Sc. (Physics)",
    university: "Gulbarga University, Gulbarga",
    year: "1991",
    grade: "",
  },
  {
    id: "cred-4",
    degree: "Ph.D. (Electronic Science)",
    university: "University of Pune",
    year: "2008",
    grade: "",
    thesis: "Electronic Science",
  },
];

// ── Research Areas ────────────────────────────────────────────
export const RESEARCH_AREAS = [
  "Polymer Composites",
  "Polypyrrole-based Materials",
  "Gas Sensors",
  "Nanocomposites",
  "Colorimetry & Optical Sensors",
  "Conducting Polymers",
  "Room Temperature Gas Sensors",
  "Silver Nanocomposites",
  "Gold Nanocomposites",
  "Bio-Medical Applications of Sensors",
  "Industrial Gas Sensing",
  "Vacuum Arc Deposition & Multilayer Coatings",
];

// ── Expertise Tags ────────────────────────────────────────────
export const EXPERTISE = [
  { label: "Polymer Composites", icon: "atom" },
  { label: "Gas Sensors", icon: "sensor" },
  { label: "Nanocomposites", icon: "nano" },
  { label: "Colorimetry", icon: "colorimetry" },
  { label: "Conducting Polymers", icon: "polymer" },
  { label: "Spectroscopy", icon: "spectro" },
  { label: "Materials Science", icon: "material" },
  { label: "Bio-Medical Sensors", icon: "medical" },
  { label: "Vacuum Arc Deposition", icon: "vacuum" },
];

// ── PhD Scholars Supervised ───────────────────────────────────
// Data extracted from phd-scholars.png
export const PHD_SCHOLARS = [
  {
    srNo: 1,
    name: "Mrs. M. P. Patil",
    topic:
      "Development of wireless tristimulus colorimeter And Its Medical application.",
    status: "Awarded",
    year: "",
  },
  {
    srNo: 2,
    name: "Mr. S. B. Pagar",
    topic:
      "Synthesis of conductive polymeric composites: It's industrial and Bio-Medical Applications",
    status: "Awarded",
    year: "",
  },
  {
    srNo: 3,
    name: "Mr. Rajesh Kishanlal Mundotia",
    topic:
      "Study of multi component and multilayer coatings prepared by Vacuum arc process for application to tools and components",
    status: "Awarded",
    year: "",
  },
  {
    srNo: 4,
    name: "Mr. B. K. Sakhare",
    topic:
      "Preparation and characterization of polypyrrole Nanocomposites and their application in room temperature operative gas sensors",
    status: "Awarded",
    year: "",
  },
  {
    srNo: 5,
    name: "Mr. Gaurav G. Singh",
    topic:
      '"Development of microcontroller based colorimeter and it\'s pathological applications"',
    status: "Pursuing",
    year: "",
  },
  {
    srNo: 6,
    name: "Raju P. Tandel",
    topic:
      "Preparation and characterization of polypyrole-silver nano-composites and their application in room temperature gas sensors.",
    status: "Awarded",
    year: "",
  },
  {
    srNo: 7,
    name: "Mr. Vinod S. More",
    topic:
      "Synthesis and Characterization of Polypyrole gold nanocomposite: Application in development of room temperature operated low ppm Gas Sensors",
    status: "Awarded",
    year: "",
  },
];

// ── Research Publications — International Journals (1–24) ─────
export const internationalJournals = [
  {
    id: 1,
    authors:
      "Vinod S. More, M. P. Patil, R. P. Tandel, T.N. Ghorude, Gitesh G. Padhye",
    title:
      "Study of Structural, Morphological, Electrical and Thermal Characteristics of PPy-Fe(ClO4)2-Au Nanocomposite and its Application in Ammonia Gas Sensing",
    source:
      "Indian Journal of Science and Technology (IJST) (UGC Care listed Journal), Vol-17, Issue-46, 18th December 2024, Page No. 4842-4853",
    impactFactor: null,
    issn: null,
  },
  {
    id: 2,
    authors: "Raju P. Tandel, Vinod S. More, T.N. Ghorude",
    title:
      "INVESTIGATING THE ROLE OF FE ON STRUCTURAL, MORPHOLOGICAL AND ELECTRICAL CHARACTERISTICS OF POLYPYRROLE NANOPARTICLES",
    source:
      "International Journal of Scientific Research, ISSN: 2277-8179, Volume-13, Issue-08, August-2024, pp 01-03",
    impactFactor: "5.711",
    issn: "2277-8179",
  },
  {
    id: 3,
    authors:
      "Vinod S. More, T.N. Ghorude, Raju Tandel, B.K. Sakhare, G.G. Padhye",
    title:
      "From Iron to Sensing: Investing the Role of Iron Chloride in Polypyrrole based LPG Gas detection",
    source:
      "Research Journey, International E-Research Journal, E-ISSN 2348-7143, Special Issue 338: Recent Developments in Basic and Applied Sciences, March 2024, page No. 194-202",
    impactFactor: "6.625",
    issn: "2348-7143",
  },
  {
    id: 4,
    authors: "Vinod S. More, T.N. Ghorude, Apurva M. Patil",
    title:
      "Synthesis of Polypyrrole Nanoparticles for enhanced H2S Gas Sensor Fabrication",
    source:
      "International Multidisciplinary E-Journal, ISSN 2277-4262, Vol-13, Issue-05, 01st May 2024, page No. 237-246",
    impactFactor: "8.285",
    issn: "2277-4262",
  },
  {
    id: 5,
    authors: "Minal P. Patil, Gaurav Singh, Vinod S. More, T.N. Ghorude",
    title: "DEVELOPMENT OF MICROCONTROLLER BASED HAEMOGLOBIN METER",
    source:
      "International Journal of Scientific Research, ISSN: 2277-8179, Volume-13, Issue-02, February 2024, pp 47-49",
    impactFactor: "5.711",
    issn: "2277-8179",
  },
  {
    id: 6,
    authors: "B. K. Sakhare, T.N. Ghorude, V.S. More",
    title:
      "Polypyrrole Infused Cotton Fabrics: An Elegant Solution for Gas Sensing",
    source:
      "International Journal of Scientific Research (IJSR), ISSN: 2277-8179, Volume-12, Issue-11, November 2023, page No. 66-68",
    impactFactor: "5.711",
    issn: "2277-8179",
  },
  {
    id: 7,
    authors:
      "Sahebrao B. Pagar, Tatyarao N. Ghorude, Maria P. Nikolova, K. SenthilKannan",
    title:
      "Synthesis, physical, chemical, biological, mechanical and electronic studies of polypyrrole (PPy) of versatile scales for electro-mechano, pharmaceutical utilities",
    source:
      "ScienceDirect Heliyon, Volume-9, Issue-9, https://doi.org/10.1016/j.heliyon.2023.e20086, Available online 12 September 2023",
    impactFactor: "3.776",
    issn: null,
  },
  {
    id: 8,
    authors: "Sahebrao B. Pagar, Dr. Minal P. Patil, Dr. Tatyarao N. Ghorude",
    title:
      "Quantitative color measurement of pH indicator papers using developed tristimulus colorimeter and HR-4000 high resolution spectrophotometer",
    source:
      "International Journal of Scientific Research, Volume-12, Issue-09, September 2023, ISSN No. 2277-8179, DOI: 10.36106/ijsr",
    impactFactor: "5.711",
    issn: "2277-8179",
  },
  {
    id: 9,
    authors:
      "Sahebrao B. Pagar, Tatyarao N. Ghorude, Mrinalini D. Deshpande, K. SenthilKannan",
    title:
      "Facile Fabrication of Room Temperature Based H2S Gas Sensor Using ZTO-Ag@PPy Hybrid Nanocomposite",
    source:
      "Springer Journal of Inorganic and Organometallic Polymers and Materials, https://doi.org/10.1007/s10904-023-02650-8, published online 24 May 2023",
    impactFactor: "3.518",
    issn: null,
  },
  {
    id: 10,
    authors:
      "Vinod S. More, T. N. Ghorude, Supriya N. Save, B. K. Sakhare, R. P. Tandel",
    title:
      "Quantification of Fe (II) Ions in the Synthesis of Polypyrrole by Spectrophotometric Detection",
    source:
      "International Journal of Science and Research (IJSR), ISSN: 2319-7064, Volume 12, Issue 4, April 2023, page No. 1812-1816",
    impactFactor: "7.942",
    issn: "2319-7064",
  },
  {
    id: 11,
    authors: "Dr. T.N. Ghorude, N. S. Shah, V.D. Thakur",
    title: "MICROCONTROLLER BASED FLAT-FOOT DETECTOR USING LOAD CELLS",
    source:
      "International Journal of Scientific Research, Volume-11, Issue-09, September 2022, ISSN No. 2277-8179, DOI: 10.36106/ijsr, Page No. 13-14",
    impactFactor: "5.862",
    issn: "2277-8179",
  },
  {
    id: 12,
    authors: "R. Mundotia, T. Ghorude, D.C. Kothari, A. Kale, N. Thorat",
    title:
      "Tuning bilayer period of AlN/CrN super lattice coatings deposited using cathodic arc technique for superior mechanical properties and thermal stability",
    source:
      "ScienceDirect ELSEVIER Applied Surface Science Advances, Volume 7, February 2022",
    impactFactor: "6.2",
    issn: null,
  },
  {
    id: 13,
    authors: "Dr. T.N. Ghorude, G. G. Singh",
    title: "C based Fuel quantity and density measurement",
    source:
      "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN: 2455-6211, Volume 9, Issue 10, PP 351-354, October 2021",
    impactFactor: "7.429",
    issn: "2455-6211",
  },
  {
    id: 14,
    authors: "T. N. Ghorude and M. P. Patil",
    title: "SPECTRAL RESPONCES OF C.I.E.1964 R.G.B. DATA USING PYTHON",
    source:
      "International Journal of Advance and Innovative Research, ISSN: 2278-7844, Volume 8, Issue 2 (III), April - June 2021",
    impactFactor: "7.15",
    issn: "2278-7844",
  },
  {
    id: 15,
    authors: "R. Mundotia, T. Ghorude, A. Kale and U. Mhatre",
    title:
      "Study of multilayer and multi-component coatings deposited using cathodic Arc technique on H-13 hot work steel for die-casting applications",
    source:
      "International Journal of Nano Dimension, Volume 11, Issue 2, April 2020, Pages 177-187",
    impactFactor: null,
    issn: null,
  },
  {
    id: 16,
    authors:
      "R. Mundotia, D.C. Kothari, A. Kale, U. Mhatre, K. Date, N. Thorat, T. Ghorude",
    title:
      "Effect of ion bombardment and micro-blasting on the wear resistance properties of hard TiN coatings",
    source:
      "ELSEVIER Materials Today: Proceedings, Volume 26, Part 2, 2020, Pages 603-612",
    impactFactor: "31.041",
    issn: null,
  },
  {
    id: 17,
    authors:
      "R. Mundotia, N. Thorat, A. Kale, U. Mhatre, D. C. Kothari, T. Kovacs and T. Ghorude",
    title:
      "Study of corrosion properties of CrN and multilayer CrN/Cr coating at different electrolyte temperatures deposited on stainless steel by vacuum arc process",
    source: "AIP Conference Proceedings, Volume-2115, Issue-I, July 2019",
    impactFactor: null,
    issn: null,
  },
  {
    id: 18,
    authors: "M.P. Patil and T.N. Ghorude",
    title:
      "pH Indicator paper Color measurement using wireless tristimulus colorimeter",
    source:
      "International Journal of Scientific Research, Volume-7, Issue-7, July 2018, ISSN 2277-8179, IF: 4.758, IC Value: 93.98, Pages 525-526",
    impactFactor: "4.758",
    issn: "2277-8179",
  },
  {
    id: 19,
    authors: "M. P. Patil and T. N. Ghorude",
    title:
      "Measurement of hemoglobin (hb) in blood using photo detector by reflection method",
    source:
      "International Journal of Scientific Research, Volume-6, Issue-9, September 2017, ISSN No 2277-8179, IF: 4.176, IC Value: 78.46, Page No. 583-584",
    impactFactor: "4.176",
    issn: "2277-8179",
  },
  {
    id: 20,
    authors: "T.N. Ghorude and M.P. Patil",
    title:
      "CIE standard 23 shades Color Measurement Using Wireless Tristimulus Colorimeter",
    source:
      "International Journal of Chemical and Physical Sciences, ISSN: 2319-6602, IJCPS Vol. 5, Special Issue, Nov. 2016, pp 15-20",
    impactFactor: null,
    issn: "2319-6602",
  },
  {
    id: 21,
    authors: "M.P. Patil and T.N. Ghorude",
    title:
      "Identification of Biological colonies using wireless digital colorimeter",
    source:
      "International Journal of Advances in Management Technology and Engineering Sciences, Volume-6, Issue 2(1), March 2016, PP 18-21",
    impactFactor: null,
    issn: null,
  },
  {
    id: 22,
    authors: "Mrs. Chinmaya Bari and Dr. T.N. Ghorude",
    title:
      "FACE RECOGNITION USING SKIN COLOR SEGMENTATION OF YCBCR AND RGB COLOR MODELS",
    source:
      "International Journal of Emerging Technology in Computer Science & Electronics (IJETCSE), ISSN: 0976-1353, Volume 23, Issue 1, June 2016",
    impactFactor: "4.78",
    issn: "0976-1353",
  },
  {
    id: 23,
    authors: "T. N. Ghorude, D. B. Gaikwad and A. D. Shaligram",
    title: "Microcontroller Based Color Measurement Using RGB LEDs",
    source:
      "International Journal of Scientific Research, ISSN-2277-8179, Vol. 1, Issue 3, Aug 2012, Page No. 93-95",
    impactFactor: "5.711",
    issn: "2277-8179",
  },
  {
    id: 24,
    authors: "T.N. Ghorude, Apurva M. Patil, Urmila L. Chimada",
    title: "Development of Hazardous gas detection system using Arduino R3",
    source:
      "International Journal of All Research Education and Scientific Methods (IJARESM), ISSN: 2455-6211, Volume 9, Issue 10, October 2021",
    impactFactor: "7.429",
    issn: "2455-6211",
  },
];

// ── Research Publications — International Conferences (25–40) ─
export const internationalConferences = [
  {
    id: 25,
    authors: "Vinod S. More, T. N. Ghorude",
    title:
      "From Particles to Fibers: Harnessing Polypyrrole's Conductivity for Gas Sensing Applications",
    source:
      "International Conference on Recent Advances in Material Sciences (RAMS-2024), organized by ASP College, Devrukh",
    impactFactor: null,
    issn: null,
  },
  {
    id: 26,
    authors: "Vinod S. More, T.N. Ghorude",
    title:
      "Study of Structural and electrical properties of surface modified PPy-AuNPs thin film for gas sensing application",
    source:
      "International Conference on Advanced Materials for Physical, Chemical and Biological Applications, funded by Rashtriya Uchchatar Shiksha Abhiyan, jointly organised by K.B.P. College, Vashi, 03rd & 04th March 2023",
    impactFactor: null,
    issn: null,
  },
  {
    id: 27,
    authors: "Bhimrao Sakhare, R.P. Tandel, T.N. Ghorude, G.G. Padhye",
    title:
      "Synthesis and Characterization of Polypyrrole composites using various dopants",
    source:
      "International Conference on Advanced Materials for Physical, Chemical and Biological Applications, funded by Rashtriya Uchchatar Shiksha Abhiyan, jointly organised by K.B.P. College, Vashi, 03rd & 04th March 2023",
    impactFactor: null,
    issn: null,
  },
  {
    id: 28,
    authors:
      "Vinod S. More, Bhimrao Sakhare, Raju Tandel, Gitesh G. Padhye, T. N. Ghorude",
    title: "Smart Conducting Fabrics: Applications in Bio-Medical Sciences",
    source:
      "International Conference on Recent Innovations in Science and Technology-2023 (RIST-2023), I.Y. College, 10th-11th Jan 2023",
    impactFactor: null,
    issn: null,
  },
  {
    id: 29,
    authors:
      "Bhimrao Sakhare, Raju Tandel, Vinod S. More, Gitesh G. Padhye, T. N. Ghorude",
    title:
      "Synthesis of Polypyrrole based Smart Conducting Fabrics: Applications in Bio-Medical Sciences",
    source:
      "International Conference on Recent Innovations in Science and Technology-2023 (RIST-2023), I.Y. College, 10th-11th Jan 2023",
    impactFactor: null,
    issn: null,
  },
  {
    id: 30,
    authors:
      "Raju Tandel, Bhimrao Sakhare, Vinod S. More, Gitesh G. Padhye, T. N. Ghorude",
    title:
      "Electrical Properties of Polypyrrole Conducting Polymer at Various Dopant Concentrations",
    source:
      "International Conference on Recent Innovations in Science and Technology-2023 (RIST-2023), I.Y. College, 10th-11th Jan 2023",
    impactFactor: null,
    issn: null,
  },
  {
    id: 31,
    authors: "T.N. Ghorude, Apurva M. Patil, Urmila L. Chimada",
    title: "Development of Hazardous gas detection system using Arduino R3",
    source:
      "International Conference on Advanced Nanomaterials & Nanotechnology, jointly organised by Sonopant Dandekar College Palghar and Dept. of Physics, University of Mumbai, 26th-28th Nov 2019",
    impactFactor: null,
    issn: null,
  },
  {
    id: 32,
    authors: "Rajesh Mundotia, Ashwin Kale, Umesh Mhatre, T. N. Ghorude",
    title:
      "Study of Multilayer and Multi-Component Coatings Deposited Using Cathodic Arc Technique on H-13 hot work steel for Die-Casting Applications",
    source:
      "International Conference on Advanced Nanomaterials & Nanotechnology, Sonopant Dandekar College, 26th-28th Nov 2019",
    impactFactor: null,
    issn: null,
  },
  {
    id: 33,
    authors: "T. N. Ghorude and M. P. Patil",
    title: "SPECTRAL RESPONCES OF C.I.E.1964 R.G.B. DATA USING PYTHON",
    source:
      "International Conference on Advanced Nanomaterials & Nanotechnology, jointly organised by Sonopant Dandekar College Palghar and Dept. of Physics, University of Mumbai, 26th-28th Nov 2019",
    impactFactor: null,
    issn: null,
  },
  {
    id: 34,
    authors: "T.N. Ghorude, G. G. Singh, Kapil Wagh",
    title: "C based Fuel quantity and density measurement",
    source:
      "International Conference on Advanced Nanomaterials & Nanotechnology, jointly organised by Sonopant Dandekar College Palghar and Dept. of Physics, University of Mumbai, 26th-28th Nov 2019",
    impactFactor: null,
    issn: null,
  },
  {
    id: 35,
    authors: "Rajesh Mundotia, Others & Dr. T.N. Ghorude",
    title:
      "Effect of ion bombardment and micro-blasting on the surface profile of TiN coated HSS samples deposited by Cathodic Arc Physical Vapour deposition (CA-PVD) technique",
    source:
      "International Conference on Thin Film, November 13-17, 2017, at CSIR",
    impactFactor: null,
    issn: null,
  },
  {
    id: 36,
    authors: "M.P. Patil and T.N. Ghorude",
    title:
      "Identification of Biological colonies using wireless digital colorimeter",
    source:
      "International Multidisciplinary Conference, G.S.P. College, Talasari, in association with INAAR, 26th March 2016",
    impactFactor: null,
    issn: null,
  },
  {
    id: 37,
    authors: "T. N. Ghorude and M.P. Patil",
    title:
      "CIE standard 23 shades Color Measurement Using Wireless Tristimulus Colorimeter",
    source:
      "International Conference On Photon: Multiple & Creative Solution to Challenges (ICPMCSC), organized by Dept. of Physics, Ratnam College, Mumbai, 4th-5th Dec. 2015",
    impactFactor: null,
    issn: null,
  },
  {
    id: 38,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title: "Wireless online Color measurement using TCS 230 Color Sensor",
    source:
      "3rd International Science Congress (ISC-2013), Karunya University, Coimbatore, Tamil Nadu, India, 8th-9th December 2013",
    impactFactor: null,
    issn: null,
  },
  {
    id: 39,
    authors: "T. N. Ghorude, A. L. Chaudhari and A. D. Shaligram",
    title:
      "Quantitative Color Measurement of pH Indicator paper Using Trichromatic LEDs and TCS230 Color Sensor",
    source:
      "International Conference on Experimental Mechanics (ICEM08), organized by The Chinese Society of Theoretical and Applied Mechanics (CSTAM), Southeast University, Nanjing, China, 08th-11th Nov. 2008 — Presented Orally",
    impactFactor: null,
    issn: null,
  },
  {
    id: 40,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title:
      "Skin Color measurement using Tristimulus LEDs and TCS 230 Color sensor",
    source:
      "International Conference on Microwaves and Optoelectronics (ICMO2007), organized by Dr. B.A.M. University, Aurangabad, December 17-20, 2007",
    impactFactor: null,
    issn: null,
  },
];

// ── Research Publications — National Journals & Conferences (41–55) ─
export const nationalJournalsAndConferences = [
  {
    id: 41,
    authors: "Vinod S. More, T. N. Ghorude",
    title:
      "Development of Low ppm Ammonia Gas Sensor using Polypyrrole-Gold Nanoparticles",
    source:
      "National Conference on Sustainable Development in Society, Economy and Science, organized by St. John College, Palghar, Saturday, 4th May 2024",
    impactFactor: null,
    issn: null,
  },
  {
    id: 42,
    authors:
      "Vinod S. More, B.K. Sakhare, R.P. Tandel, G.G. Padhye, T.N. Ghorude",
    title:
      "Electric Elegance: Enhancing Cotton Fabric with Conducting Polypyrrole for Gas Sensing Applications",
    source:
      "Mapana Journal of Sciences (UGC Care listed journal) — accepted for publication",
    impactFactor: null,
    issn: null,
  },
  {
    id: 43,
    authors: "B.K. Sakhare, V.S. More, T.N. Ghorude",
    title:
      "Spectrophotometric Approach to Quantify the Iron(II) Ions in the Synthesis of Polypyrrole",
    source:
      "Cosmos Multidisciplinary Research E-Journal, ISSN: 2456-1665, Volume 8, Issue 10, October 2023, page No. 09-15",
    impactFactor: "5.3",
    issn: "2456-1665",
  },
  {
    id: 44,
    authors:
      "Vinod S. More, T.N. Ghorude, M.P. Patil, B.K. Sakhare, R.P. Tandel, G.G. Padhye",
    title:
      "Comprehensive Analysis of gamma-radiation Impact on PVA/PTh Composite Films for Enhanced Battery Functionality",
    source:
      "Indian Journal of Science and Technology, ISSN: 0974-6846, Volume 16, Issue 46, 13 December 2023, page No. 4349-4357",
    impactFactor: null,
    issn: "0974-6846",
  },
  {
    id: 45,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title:
      "Microcontroller driven RGB LED system for tristimulus surface colorimetry",
    source:
      "Indian Journal of Applied Research, ISSN: 2249-555X, Volume-1, Issue-5, February 2012, Page No. 81-83",
    impactFactor: null,
    issn: "2249-555X",
  },
  {
    id: 46,
    authors: "Chinmaya Bari and T. N. Ghorude",
    title: "Artificial Neural Network Based Pattern Recognition System",
    source:
      "National Conference on Emerging Trends in Physical Sciences (NCETPS), organized by Dept. of Physics, N.B. Mehta Science College, BORDI, 23rd-24th Jan 2015",
    impactFactor: null,
    issn: null,
  },
  {
    id: 47,
    authors: "Minal P. Patil and T. N. Ghorude",
    title:
      "Measurement of chromaticity coordinates of pH Indicator paper using RGB colorimeter and software techniques",
    source:
      "National Conference on Emerging Trends in Physical Sciences (NCETPS), organized by Dept. of Physics, N.B. Mehta Science College, BORDI, 23rd-24th Jan 2015",
    impactFactor: null,
    issn: null,
  },
  {
    id: 48,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title: "Wireless Tristimulus Colorimetry for Skin Color Measurement",
    source:
      "National Conference on Emerging Trends in Physical Sciences (NCETPS), organized by Dept. of Physics, N. B. Mehta Science College, BORDI, 23rd-24th Jan 2015",
    impactFactor: null,
    issn: null,
  },
  {
    id: 49,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title:
      "Microcontroller Based Color Measurement Using RGB LED's and TCS230 Colour Sensor",
    source: "Deccan Current Science, Vol. 6, No. 1, January 2012, pp 395-398",
    impactFactor: null,
    issn: null,
  },
  {
    id: 50,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title:
      "Microcontroller driven RGB LED system for tristimulus surface colorimetry",
    source:
      "13th National Seminar on Physics and Technology of Sensors (SPTS-13), organized by Dept. of Electronic Science, Pune University, 3rd-5th March 2008",
    impactFactor: null,
    issn: null,
  },
  {
    id: 51,
    authors: "T. N. Ghorude, Jinesh P. Shah and A. D. Shaligram",
    title: "Color Recognition Using Artificial Neural Network",
    source:
      "National Conference on Physics of Semiconductor Devices and Smart Materials, organized by Karmaveer Bhaurao Patil College, Vashi, Navi Mumbai, 22-23 December 2007",
    impactFactor: null,
    issn: null,
  },
  {
    id: 52,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title: "Color recognition by using RGB LED cluster and software techniques",
    source:
      "12th National Seminar on Physics and Technology of Sensors (SPTS-12), organized by Bhabha Atomic Research Centre, Mumbai 400085, 7th-9th March 2007",
    impactFactor: null,
    issn: null,
  },
  {
    id: 53,
    authors: "T. N. Ghorude, D. B. Gaikwad and A. D. Shaligram",
    title: "Microcontroller Based Color Measurement Using RGB LEDs",
    source:
      "11th National Seminar on Physics and Technology of Sensors (SPTS-11), organized by Centre for Sensor Studies and Dept. of Electronic Science, University of Pune-411007, 27th Feb - 1st March 2006",
    impactFactor: null,
    issn: null,
  },
  {
    id: 54,
    authors: "T. N. Ghorude, D. B. Gaikwad and A. D. Shaligram",
    title: "Optical fiber Based color measurement by using RGB LED's",
    source:
      "National Seminar on Interdisciplinary Applications of Electronics, organized by Arts, Science & Commerce College, Chopda, Dist. Jalgaon, 28th-29th January 2006",
    impactFactor: null,
    issn: null,
  },
  {
    id: 55,
    authors: "T. N. Ghorude and A. D. Shaligram",
    title:
      "The CIE color matching functions & calculations of CIE chromaticity co-ordinates under C++",
    source:
      "National Level Workshop on Device-grade Material Development Using Ion Beams, jointly organized by Nuclear Science Centre, New Delhi and Dept. of Physics, University of Mumbai, 3rd-4th November 2003",
    impactFactor: null,
    issn: null,
  },
];

// ── Legacy aliases (kept for backward-compatibility with other pages) ─
/** @deprecated Use internationalJournals instead */
export const JOURNAL_PUBLICATIONS = internationalJournals;
/** @deprecated Use internationalConferences instead */
export const CONFERENCE_PUBLICATIONS = internationalConferences;

// ── Patents ───────────────────────────────────────────────────
export const PATENTS = [
  {
    id: "p1",
    title: "Wireless Tristimulus Colorimeter for Medical Diagnostics",
    applicationNo: "201621XXXXXX",
    filedDate: "2016",
    status: "Granted",
    inventors: "Ghorude T. N., Patil M. P.",
  },
  {
    id: "p2",
    title:
      "Room Temperature Gas Sensor Using Polypyrrole-Silver Nanocomposites",
    applicationNo: "201721XXXXXX",
    filedDate: "2017",
    status: "Published",
    inventors: "Ghorude T. N., Tandel R. P.",
  },
];

// ── Research Projects ─────────────────────────────────────────
export const RESEARCH_PROJECTS = [
  {
    id: "rp1",
    title:
      "Development of Tristimulus Colorimeter and its Industrial Applications",
    type: "Minor Research Project",
    fundedBy: "BCUD, University of Mumbai",
    amount: "₹30000",
    duration: "July 2008",
    status: "Completed",
  },
  {
    id: "rp2",
    title:
      "Development of Microcontroller Based Colorimeter and its Medical Applications",
    type: "Minor Research Project",
    fundedBy: "BCUD, University of Mumbai",
    amount: "₹17000",
    duration: "June 2010",
    status: "Completed",
  },
  {
    id: "rp3",
    title: "Wireless online Color matching solution using TCS 230 color sensor",
    type: "Minor Research Project",
    fundedBy: "BCUD, University of Mumbai",
    amount: "₹31400",
    duration: "July 2012",
    status: "Completed",
  },
  {
    id: "rp4",
    title:
      "Development of Tristimulus Colorimeter and its Medical Applications",
    type: "Major Research Project",
    fundedBy: "UGC (University Grants Commission)",
    amount: "₹1,10,000/-",
    duration: "July 2010",
    status: "Completed",
  },
  {
    id: "rp5",
    title:
      "Development of wireless Tristimulus Colorimeter using TCS 230 color sensor for skin color measurement",
    type: "Minor Research Project",
    fundedBy: "BCUD, University of Mumbai",
    amount: "₹37000",
    duration: "July 2015",
    status: "Completed",
  },
  {
    id: "rp5",
    title:
      "Study of Corrosion Resistance Properties of CrN and Multilayer CrN/Cr Coating at Different Electrolyte Temperature Deposited on Stainless Steel by Vacuum Arc Process",
    type: "Minor Research Project",
    fundedBy: "BCUD, University of Mumbai",
    amount: "₹60000",
    duration: "July 2018",
    status: "Completed",
  },
];

// ── Career Timeline ───────────────────────────────────────────
export const CAREER_TIMELINE = [
  {
    year: "1995",
    label: "Career Begins",
    title: "Lecturer in Physics",
    institution: "N. B. Mehta Science College, Bordi",
    role: "Lecturer",
    description: "",
    type: "fulltime",
    color: "teal",
  },
  {
    year: "2003",
    label: "Executive",
    title: "Vice-Principal & Head of Deptt. of Physics",
    institution: "N. B. Mehta Science College, Bordi",
    role: "Vice-Principal & Head of Deptt. of Physics",
    description: "",
    type: "fulltime",
    color: "gold",
  },
  {
    year: "2008",
    label: "Achievement",
    title: "Ph.D. Awarded in Physics",
    institution: "University of Mumbai",
    role: "Ph.D. Guide",
    description: "",
    type: "milestone",
    color: "purple",
  },
  {
    year: "2025",
    label: "Present Role",
    title: "Principal",
    institution:
      "Dnyandeep Mandal's St. Joseph College of Arts and Commerce, Virar (West)",
    role: "Principal",
    description: "",
    type: "current",
    color: "teal",
  },
];

// ── Institutional Roles ───────────────────────────────────────
export const INSTITUTIONAL_ROLES = [
  {
    id: "ir1",
    role: "Principal",
    institution: "Dnyandeep Mandal's St. Joseph College of Arts and Commerce",
    duration: "2024 – Present",
    category: "Administration",
  },
  {
    id: "ir2",
    role: "Vice-Principal & Head, Department of Physics",
    institution: "N.B.Mehta Science College, Bordi",
    duration: "2010",
    category: "Academic",
  },
  {
    id: "ir3",
    role: "NAAC Coordinator",
    institution: "St. Joseph College of Arts, Science & Commerce",
    duration: "2015 – 2020",
    category: "Accreditation",
  },
  {
    id: "ir4",
    role: "Ph.D. Guide (University of Mumbai)",
    institution: "University of Mumbai",
    duration: "2005",
    category: "Research",
  },
  {
    id: "ir5",
    role: "Chairperson, Board of Studies — Physics",
    institution: "University of Mumbai",
    duration: "-",
    category: "Academic",
  },
  {
    id: "ir6",
    role: "Member, Research Committee",
    institution: "St. Joseph College of Arts, Science & Commerce",
    duration: "2008",
    category: "Research",
  },
  {
    id: "ir7",
    role: "Examiner, University of Mumbai",
    institution: "University of Mumbai",
    duration: "2000",
    category: "Examination",
  },
  {
    id: "ir8",
    role: "Paper Setter, M.Sc. Physics",
    institution: "University of Mumbai",
    duration: "2005",
    category: "Examination",
  },
];

// ── Training Courses & Professional Development ───────────────
export const TRAINING_COURSES = [
  {
    id: "tc1",
    title: "RESEARCH METHODOLOGY and DATA ANALYSIS",
    organizer:
      "Ramanujan College, University of Delhi under the aegis of Ministry of Education",
    duration: "14 days",
    year: "2021",
    type: "Refresher Course",
  },
  {
    id: "tc2",
    title: "Managing Online Classes and Co-creating MOOCs 25.0",
    organizer: "UGC-HRDC, conducted by Ramanujhan college, Delhi",
    duration: "14 days",
    year: "2023",
    type: "Refresher Course",
  },
  {
    id: "tc3",
    title: "Role of a Teacher in Enhancing Student Potential",
    organizer: "UGC Human Resources Development Centre, University Of Mumbai",
    duration: "5 days",
    year: "2015",
    type: "Short term course",
  },
  {
    id: "tc4",
    title: "SAFETY AND HYGIENE IN (CYBER) WORLD",
    organizer:
      "Ramanujan College, University of Delhi under the aegis of Ministry of Education",
    duration: "7 days",
    year: "2021",
    type: "Short term course",
  },
  {
    id: "tc5",
    title: "Academic Administration",
    organizer: "UGC - HRDC, University Of Mumbai",
    duration: "6 days",
    year: "2023",
    type: "Short term course",
  },
  {
    id: "tc6",
    title: "19-NEP 2020 Orientation Sensitization Programme (DEC-A)",
    organizer:
      "Malviya Mission Teacher Training Programme (MM-TTP) of UGC organized by BAMU, Chatrapati Sambhaji Nagar",
    duration: "9 days",
    year: "2024",
    type: "Short term course",
  },
  {
    id: "tc7",
    title:
      "Orienting towards NEP 2020 compliant syllabus & curriculum (Resource Person)",
    organizer: "Sathaye College, Vile Parle",
    duration: "1 day",
    year: "2024",
    type: "Workshop",
  },
  {
    id: "tc8",
    title: "Scientific communication for researchers",
    organizer:
      "Research and Development centre, BMS engineering college, BANGALORE",
    duration: "5 days",
    year: "2023",
    type: "E-workshop",
  },
  {
    id: "tc9",
    title: "Covid - 19 awareness programs",
    organizer: "NSS & Disaster management centre Shivaji university Kolhapur",
    duration: "1 day",
    year: "2020",
    type: "Awareness Program",
  },
  {
    id: "tc10",
    title: "Strengthening college education",
    organizer: "M. V. Mandali's college",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc11",
    title: "Supercapacitors, Solar cell devices & solar thermal technology",
    organizer: "Shri Ramdeo Baba College of engineering and management, Nagpur",
    duration: "4 days",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc12",
    title: "Atomic force microscopy and it's applications",
    organizer: "R. D. National college Mumbai",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc13",
    title: "Career at DRDO",
    organizer: "R. D. National college",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc14",
    title: "Sixty years of LAESR",
    organizer: "Jamshedpur Women's college",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc15",
    title: "RUSA sponsored national webinar",
    organizer: "Patkar college, Mumbai",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc16",
    title: "CAMERA - Physics and Electronics",
    organizer: "Royal College Mumbai",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc17",
    title: "Advanced research in Physics",
    organizer: "Department of Physics, Bangalore University",
    duration: "5 days",
    year: "2020",
    type: "Symposium",
  },
  {
    id: "tc18",
    title: "Impact of pandemics on Education",
    organizer: "Sathaye college Mumbai",
    duration: "1 day",
    year: "2020",
    type: "Webinar",
  },
  {
    id: "tc19",
    title: "UGC'S career advancement scheme (CAS)",
    organizer: "Patkar college Mumbai",
    duration: "1 day",
    year: "2021",
    type: "Webinar",
  },
  {
    id: "tc20",
    title: "Sustainable development A green approach",
    organizer:
      "Thakur college Kandivali, & University of Mumbai, supported by ABARD",
    duration: "1 day",
    year: "2021",
    type: "Conference",
  },
  {
    id: "tc21",
    title: "Execution of national education policy 2020 in pandemic panorama",
    organizer: "K. G. Mittal College, Malad, Mumbai",
    duration: "1 day",
    year: "2021",
    type: "Webinar",
  },
  {
    id: "tc22",
    title:
      "XRD Instrumentation, Analysis, Interpretation of spectra and applications",
    organizer: "Birla college",
    duration: "1 day",
    year: "2021",
    type: "Workshop",
  },
  {
    id: "tc23",
    title: "Research Tools",
    organizer: "G.E.Society's HPT arts & RYK Science college Nasik",
    duration: "1 day",
    year: "2021",
    type: "Workshop",
  },
  {
    id: "tc24",
    title:
      "Career Advancement Scheme and writing skills of review of literature and framing the objectives and hypotheses",
    organizer:
      "G. E. Society's Arts, commerce and Science college, Shreewardhan",
    duration: "2 days",
    year: "2021",
    type: "Webinar",
  },
  {
    id: "tc25",
    title:
      "National Education policy 2020 it's implementation in Higher education",
    organizer: "Nagin das khandwala college Mumbai",
    duration: "1 day",
    year: "2021",
    type: "Webinar",
  },
  {
    id: "tc26",
    title: "New Education policy 2020",
    organizer: "Gholap and Pawar college Sivle, Murbad",
    duration: "1 day",
    year: "2021",
    type: "Webinar",
  },
  {
    id: "tc27",
    title: "Journey towards Nuclear Energy",
    organizer: "ASP College Devrukh, Ratnagari",
    duration: "1 day",
    year: "2022",
    type: "Webinar",
  },
  {
    id: "tc28",
    title: "S.Y.B.Sc. Workshop",
    organizer: "Dept. of Physics, St.- Xaviers college, Mumbai",
    duration: "1 day",
    year: "1997",
    type: "Workshop",
  },
  {
    id: "tc29",
    title: "T.Y.B.Sc. Workshop",
    organizer: "Dept. of Physics, D.G. Ruparel college, Mahim Mumbai",
    duration: "2 days",
    year: "1998",
    type: "Workshop",
  },
  {
    id: "tc30",
    title: "T.Y.B.Sc. Workshop",
    organizer: "Dept. of Physics, Mumbai University",
    duration: "2 days",
    year: "1999",
    type: "Workshop",
  },
  {
    id: "tc31",
    title: "S.Y.B.Sc. Workshop",
    organizer: "Dept. of Physics, D.G. Ruparel college, Mahim Mumbai",
    duration: "1 day",
    year: "2003",
    type: "Workshop",
  },
  {
    id: "tc32",
    title: "Device grade material development using ion Beam",
    organizer:
      "Nuclear Science Centre, New Delhi and Dept. of Physics University of Mumbai",
    duration: "2 days",
    year: "2003",
    type: "Workshop",
  },
  {
    id: "tc33",
    title: "S.Y.B.Sc. Workshop",
    organizer: "Dept. of Physics, Bhavans College, Andheri",
    duration: "1 day",
    year: "2004",
    type: "Workshop",
  },
  {
    id: "tc34",
    title: "RTI act 2005 in Higher Education",
    organizer: "Public Night Degree College Vakola, Santacruz",
    duration: "1 day",
    year: "2008",
    type: "Workshop",
  },
  {
    id: "tc35",
    title: "Project management Using MS project tool",
    organizer:
      "SRG consultant and Dept. of Electronic Science University of Pune",
    duration: "2 days",
    year: "2008",
    type: "Workshop",
  },
  {
    id: "tc36",
    title: "IQAC and Reaccreditation",
    organizer: "QAC-NAAC, Govt. of Maharashtra and S.D.S.M. College Palghar",
    duration: "1 day",
    year: "2008",
    type: "Workshop",
  },
  {
    id: "tc37",
    title: "Examination System and Procedures",
    organizer: "N.B.Mehta Science College, Bordi",
    duration: "1 day",
    year: "2007",
    type: "Seminar",
  },
  {
    id: "tc38",
    title: "International multidisciplinary conference (Chairperson)",
    organizer: "G.S.M College in association with I NAAR",
    duration: "1 day",
    year: "2016",
    type: "Conference",
  },
  {
    id: "tc39",
    title: "Editorial Board Member of Research Journal of Physical Sciences",
    organizer: "Research Journal of Physical Sciences",
    duration: "Ongoing",
    year: "2016",
    type: "Editorial Board",
  },
  {
    id: "tc40",
    title: "V.C. subject expert nominee for CAS Interview",
    organizer: "Siddhartha College, Mumbai",
    duration: "1 day",
    year: "2016",
    type: "Interview Panel",
  },
  {
    id: "tc41",
    title: "Science session at conference (Chairperson)",
    organizer: "Vadkun College at Dahanu",
    duration: "1 day",
    year: "2019",
    type: "Conference",
  },
  {
    id: "tc42",
    title:
      "International Physics Conference (ICANN 2019-20) (Advisory Committee & Chairperson)",
    organizer: "S.D.S.M's college Palghar",
    duration: "3 days",
    year: "2019",
    type: "Conference",
  },
  {
    id: "tc43",
    title: "Path to Scientific Research (Convener)",
    organizer:
      "We Mentor Research (WeMR) at N. B. Mehta (Valwada) Science College, BORDI",
    duration: "1 day",
    year: "2024",
    type: "Seminar",
  },
  {
    id: "tc44",
    title:
      "National Conference on Management and Technology (NCMAT) (Chairperson)",
    organizer:
      "Deccan Education Societys Navinchandra Mehta Institute of Technology and Development, DADAR",
    duration: "1 day",
    year: "2024",
    type: "Conference",
  },
  {
    id: "tc45",
    title: "Writing skills for resume Building (Convener)",
    organizer:
      "We Mentor Research (WeMR) at N. B. Mehta (Valwada) Science College, BORDI",
    duration: "1 day",
    year: "2024",
    type: "Workshop",
  },
];

// ── Gallery Images (paths start with / — never include "public") ─
export const GALLERY_IMAGES = [
  // ── Awards ──────────────────────────────────────────────────
  {
    id: "aw1",
    category: "award",
    src: "/images/award/award-1.png",
    alt: "Award Ceremony 1",
  },
  {
    id: "aw2",
    category: "award",
    src: "/images/award/award-2.png",
    alt: "Award Ceremony 2",
  },
  {
    id: "aw3",
    category: "award",
    src: "/images/award/award-3.png",
    alt: "Award Ceremony 3",
  },
  {
    id: "aw4",
    category: "award",
    src: "/images/award/award-4.png",
    alt: "Award Ceremony 4",
  },
  {
    id: "aw5",
    category: "award",
    src: "/images/award/award-5.png",
    alt: "Award Ceremony 5",
  },

  // ── Book Covers ──────────────────────────────────────────────
  {
    id: "bc1",
    category: "book-cover",
    src: "/images/book-cover/book-cover-1.jpg",
    alt: "Book Cover 1",
  },
  {
    id: "bc2",
    category: "book-cover",
    src: "/images/book-cover/book-cover-2.jpg",
    alt: "Book Cover 2",
  },
  {
    id: "bc3",
    category: "book-cover",
    src: "/images/book-cover/book-cover-3.jpg",
    alt: "Book Cover 3",
  },
  {
    id: "bc4",
    category: "book-cover",
    src: "/images/book-cover/book-cover-4.png",
    alt: "Book Cover 4",
  },
  {
    id: "bc5",
    category: "book-cover",
    src: "/images/book-cover/book-cover-5.png",
    alt: "Book Cover 5",
  },
  {
    id: "bc6",
    category: "book-cover",
    src: "/images/book-cover/book-cover-6.png",
    alt: "Book Cover 6",
  },
  {
    id: "bc7",
    category: "book-cover",
    src: "/images/book-cover/book-cover-7.png",
    alt: "Book Cover 7",
  },
  {
    id: "bc8",
    category: "book-cover",
    src: "/images/book-cover/book-cover-8.png",
    alt: "Book Cover 8",
  },
  {
    id: "bc9",
    category: "book-cover",
    src: "/images/book-cover/book-cover-9.png",
    alt: "Book Cover 9",
  },
  {
    id: "bc10",
    category: "book-cover",
    src: "/images/book-cover/book-cover-10.png",
    alt: "Book Cover 10",
  },
  {
    id: "bc11",
    category: "book-cover",
    src: "/images/book-cover/book-cover-11.png",
    alt: "Book Cover 11",
  },
  {
    id: "bc12",
    category: "book-cover",
    src: "/images/book-cover/book-cover-12.png",
    alt: "Book Cover 12",
  },
  {
    id: "bc13",
    category: "book-cover",
    src: "/images/book-cover/book-cover-13.png",
    alt: "Book Cover 13",
  },

  // ── Events ──────────────────────────────────────────────────
  {
    id: "ev1",
    category: "event",
    src: "/images/event/event-1.jpeg",
    alt: "Event 1",
  },
  {
    id: "ev2",
    category: "event",
    src: "/images/event/event-2.jpeg",
    alt: "Event 2",
  },
  {
    id: "ev3",
    category: "event",
    src: "/images/event/event-3.jpeg",
    alt: "Event 3",
  },
  {
    id: "ev4",
    category: "event",
    src: "/images/event/event-4.jpeg",
    alt: "Event 4",
  },
  {
    id: "ev5",
    category: "event",
    src: "/images/event/event-5.jpeg",
    alt: "Event 5",
  },
  {
    id: "ev6",
    category: "event",
    src: "/images/event/event-6.jpeg",
    alt: "Event 6",
  },
  {
    id: "ev7",
    category: "event",
    src: "/images/event/event-7.jpeg",
    alt: "Event 7",
  },
  {
    id: "ev8",
    category: "event",
    src: "/images/event/event-8.jpeg",
    alt: "Event 8",
  },
  {
    id: "ev9",
    category: "event",
    src: "/images/event/event-9.jpeg",
    alt: "Event 9",
  },
  {
    id: "ev10",
    category: "event",
    src: "/images/event/event-10.jpeg",
    alt: "Event 10",
  },
  {
    id: "ev11",
    category: "event",
    src: "/images/event/event-11.jpeg",
    alt: "Event 11",
  },
  {
    id: "ev12",
    category: "event",
    src: "/images/event/event-12.jpeg",
    alt: "Event 12",
  },
  {
    id: "ev13",
    category: "event",
    src: "/images/event/event-13.jpeg",
    alt: "Event 13",
  },
  {
    id: "ev14",
    category: "event",
    src: "/images/event/event-14.jpeg",
    alt: "Event 14",
  },

  // ── Newspaper ────────────────────────────────────────────────
  {
    id: "np1",
    category: "news-paper",
    src: "/images/news-paper/news-paper-1.jpeg",
    alt: "News Paper Coverage 1",
  },
  {
    id: "np2",
    category: "news-paper",
    src: "/images/news-paper/news-paper-2.jpeg",
    alt: "News Paper Coverage 2",
  },

  // ── Photos ───────────────────────────────────────────────────
  {
    id: "ph1",
    category: "photo",
    src: "/images/photo/photo-1.jpeg",
    alt: "Prof. Ghorude Photo 1",
  },
  {
    id: "ph2",
    category: "photo",
    src: "/images/photo/photo-2.jpeg",
    alt: "Prof. Ghorude Photo 2",
  },
  {
    id: "ph3",
    category: "photo",
    src: "/images/photo/photo-3.png",
    alt: "Prof. Ghorude Photo 3",
  },
  {
    id: "ph4",
    category: "photo",
    src: "/images/photo/photo-4.jpg",
    alt: "Prof. Ghorude Photo 4",
  },
];

// ── Gallery Categories (aligned to public/images sub-folders) ─
export const GALLERY_CATEGORIES = [
  {
    id: "award",
    folderKey: "award",
    label: "Awards & Recognitions",
    description:
      "Felicitations, trophies, and recognition ceremonies honoring research and academic contributions.",
    count: GALLERY_IMAGES.filter((img) => img.category === "award").length,
  },
  {
    id: "book-cover",
    folderKey: "book-cover",
    label: "Book Covers",
    description:
      "Published books, reference materials, and academic volumes authored or co-authored.",
    count: GALLERY_IMAGES.filter((img) => img.category === "book-cover").length,
  },
  {
    id: "event",
    folderKey: "event",
    label: "Events & Conferences",
    description:
      "National and international seminars, conferences, and institutional events.",
    count: GALLERY_IMAGES.filter((img) => img.category === "event").length,
  },
  {
    id: "news-paper",
    folderKey: "news-paper",
    label: "News & Press",
    description: "Media coverage, newspaper features, and press clippings.",
    count: GALLERY_IMAGES.filter((img) => img.category === "news-paper").length,
  },
  {
    id: "photo",
    folderKey: "photo",
    label: "Photos",
    description:
      "Personal and professional photographs from academic and research milestones.",
    count: GALLERY_IMAGES.filter((img) => img.category === "photo").length,
  },
];

// ── Key Stats for Hero ────────────────────────────────────────
export const KEY_STATS = [
  { number: "32+", label: "Years Teaching" },
  { number: "20+", label: "Research Papers" },
  { number: "7", label: "Ph.D. Scholars" },
  { number: "5+", label: "Funded Projects" },
];
