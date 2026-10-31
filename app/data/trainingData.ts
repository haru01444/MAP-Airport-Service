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
      "/GSE-Training-MAP-Center.jpeg",
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
      "/Aviation-Security-Training.jpeg",
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
    imageUrl: "/pramugara_training.jpeg",
    imageAlt: "Pramugari Training MAP Center",
  },
];
