export interface TrainingProgramItem {
  id: string;
  slug: string;
  tag: string;
  code: string;
  icon: string;
  title: string;
  titleFirst: string;
  titleSecond: string;
  color: string;
  bgColor: string;
  badgeBg: string;
  desc: string;
  fullDesc: string;
  duration: string;
  targetCareer: string;
  requirements: string[];
  items: { text: string; icon: string }[];
  imageUrl: string;
  imageAlt: string;
}

export const trainingPrograms: TrainingProgramItem[] = [
  {
    id: "aircraft",
    slug: "aircraft-maintenance",
    tag: "AIRCRAFT MAINTENANCE",
    code: "AMC-01",
    icon: "fa-wrench",
    title: "Aircraft Maintenance",
    titleFirst: "Aircraft",
    titleSecond: "Maintenance",
    color: "#1967D2",
    bgColor: "rgba(25,103,210,0.08)",
    badgeBg: "#E0F2FE",
    desc: "Program pelatihan perawatan & pemeliharaan teknis pesawat udara komprehensif, mencakup kelayakan terbang, inspeksi komponen, dan keselamatan di area ramp & hangar.",
    fullDesc:
      "Program Aircraft Maintenance di MAP Training Center dirancang khusus untuk mencetak teknisi dan personel perawatan pesawat udara yang andal, disiplin, dan menguasai standar regulasi Ditjen Hubud (DKPPU) serta ICAO. Peserta didik mendapatkan kombinasi instruksi teori audio-visual dan simulasi praktek lapangan teknis pesawat.",
    duration: "Intensif • 6 Bulan",
    targetCareer: "Aircraft Technician, Line Maintenance Agent, Quality Control Inspector",
    requirements: [
      "Usia minimal 18 tahun, sehat jasmani & rohani",
      "Pendidikan min. SMA / SMK / D3 / S1 (diutamakan Teknik)",
      "Bebas buta warna & tidak bertato/bertindik (pria)",
      "Memiliki minat tinggi dalam bidang teknis aviasi",
    ],
    items: [
      { text: "Line Maintenance Procedure", icon: "fa-gear" },
      { text: "Aircraft Component Inspection", icon: "fa-plane" },
      { text: "Ground Run & Engine Test", icon: "fa-shield-halved" },
      { text: "Safety & Hazard Awareness", icon: "fa-triangle-exclamation" },
      { text: "Documentation & Technical Log", icon: "fa-file-lines" },
      { text: "Tool Control & GSE Calibration", icon: "fa-screwdriver-wrench" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Aircraft Maintenance Training MAP Center",
  },
  {
    id: "gse",
    slug: "gse-operations",
    tag: "GSE OPERATIONS",
    code: "GSE-02",
    icon: "fa-truck-fast",
    title: "Ground Support Equipment (GSE)",
    titleFirst: "GSE",
    titleSecond: "(Ground Support Equipment)",
    color: "#F5A623",
    bgColor: "rgba(245,166,35,0.08)",
    badgeBg: "#FEF3C7",
    desc: "Pelatihan operasional, pengemudian, dan perawatan armada Ground Support Equipment untuk menjamin ketepatan waktu turn-around time penerbangan di apron.",
    fullDesc:
      "Program GSE Operations membekali peserta dengan keterampilan mengemudikan dan mengoperasikan berbagai jenis peralatan darat pendukung pesawat (BTT, GPU, APB, Lavatory Truck, dll) di area apron bandara secara presisi, aman, dan mematuhi prosedur keselamatan sisi udara (airside safety).",
    duration: "Intensif • 3 Bulan",
    targetCareer: "GSE Operator, Pushback Driver, Ramp Support Staff",
    requirements: [
      "Usia 18 - 27 tahun, sehat jasmani & rohani",
      "Pendidikan min. SMA / SMK sederajat",
      "Memiliki SIM A / SIM B1 aktif",
      "Sehat fisik & memiliki ketahanan kerja di lapangan",
    ],
    items: [
      { text: "GPU (Ground Power Unit)", icon: "fa-plug" },
      { text: "Belt Loader & Tractor Drive", icon: "fa-truck-ramp-box" },
      { text: "Passenger Boarding Stairs", icon: "fa-stairs" },
      { text: "Lavatory & Water Service", icon: "fa-droplet" },
      { text: "Aircraft Towing & Pushback", icon: "fa-truck-arrow-right" },
      { text: "GSE Preventive Maintenance", icon: "fa-wrench" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "GSE Training MAP Center",
  },
  {
    id: "avsec",
    slug: "avsec",
    tag: "AVIATION SECURITY",
    code: "SEC-03",
    icon: "fa-shield-halved",
    title: "Aviation Security (AVSEC)",
    titleFirst: "Aviation",
    titleSecond: "Security (AVSEC)",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    badgeBg: "#FEE2E2",
    desc: "Pelatihan keamanan penerbangan sesuai standar ICAO Annex 17 dan regulasi Ditjen Hubud RI untuk pengamanan area terbatas bandara.",
    fullDesc:
      "Program Aviation Security (AVSEC) mempersiapkan personel pengamanan bandara yang tegas, jeli, dan disiplin tinggi. Kurikulum mencakup pengoperasian alat pemindai X-Ray, pemeriksaan barang bawaan, pengawasan area sensitif, dan penanganan kondisi darurat sesuai regulasi penerbangan resmi.",
    duration: "Lisensi AVSEC • 4 Bulan",
    targetCareer: "AVSEC Officer, Cargo Screener, Airport Patrol",
    requirements: [
      "Usia 18 - 26 tahun",
      "Tinggi badan min. 165 cm (Pria) / 160 cm (Wanita)",
      "Pendidikan min. SMA / SMK sederajat",
      "Bebas catatan kriminal (SKCK) & tidak buta warna",
    ],
    items: [
      { text: "Threat & Risk Assessment", icon: "fa-magnifying-glass-chart" },
      { text: "Passenger & Baggage Screening", icon: "fa-suitcase" },
      { text: "Access Control & ID Badge", icon: "fa-id-badge" },
      { text: "CCTV & Surveillance System", icon: "fa-video" },
      { text: "Emergency Response Procedure", icon: "fa-kit-medical" },
      { text: "X-Ray Machine Operation", icon: "fa-desktop" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Aviation Security Training MAP Center",
  },
  {
    id: "pramugari",
    slug: "pramugari-pramugara",
    tag: "CABIN CREW SERVICES",
    code: "CAB-04",
    icon: "fa-user-nurse",
    title: "Pramugari / Pramugara",
    titleFirst: "Pramugari",
    titleSecond: "/ Pramugara",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    badgeBg: "#F3E8FF",
    desc: "Program pembentukan calon Cabin Crew profesional bersikap ramah, tanggap darurat, dan berstandar pelayanan prima maskapai internasional.",
    fullDesc:
      "Program Pramugari / Pramugara MAP Training Center memberikan pelatihan komprehensif tentang penampilan (grooming), bahasa Inggris penerbangan, pelayanan kabin (in-flight service), penanganan keselamatan darurat, dan etika profesional untuk siap bersaing dalam seleksi maskapai nasional maupun internasional.",
    duration: "Siap Kerja • 4 Bulan",
    targetCareer: "Flight Attendant, Cabin Crew Member, VIP Lounge Host",
    requirements: [
      "Usia 18 - 24 tahun",
      "Tinggi min. 170 cm (Pria) / 160 cm (Wanita), berat proporsional",
      "Pendidikan min. SMA / SMK / D3 / S1",
      "Berkomunikasi Bahasa Inggris aktif & berpenampilan menarik",
    ],
    items: [
      { text: "Aviation & Aircraft Knowledge", icon: "fa-book" },
      { text: "Safety & Emergency Procedure", icon: "fa-life-ring" },
      { text: "Passenger Handling & Care", icon: "fa-users" },
      { text: "In-flight Service Standard", icon: "fa-utensils" },
      { text: "Grooming, Etiquette & Manner", icon: "fa-star" },
      { text: "Aviation English Communication", icon: "fa-language" },
    ],
    imageUrl: "/pramugara_training.jpg",
    imageAlt: "Pramugari Training MAP Center",
  },
];
