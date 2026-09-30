export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tags?: string[];
  featured?: boolean;
  isFallbackImage?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: "map-cgk-expansion",
    slug: "map-perluas-kesiapan-layanan-cgk",
    title: "MAP Perluas Kesiapan Layanan Ground Handling di Bandara Soekarno-Hatta (CGK)",
    category: "Operasional",
    date: "18 Februari 2024",
    readTime: "3 min baca",
    author: "Tim Komunikasi Korporat MAP",
    image: "/Ground-Handling-Operations.png",
    featured: true,
    tags: ["Ground Handling", "CGK", "Bandara Soekarno-Hatta", "Operasional"],
    excerpt:
      "PT Mawaddah Angkasa Prima memperluas kesiapan operasional layanan darat maskapai di Terminal Bandara Soekarno-Hatta dengan standar keselamatan dan on-time performance internasional.",
    content: [
      "Tangerang — PT Mawaddah Angkasa Prima (MAP) resmi memperluas jangkauan kesiapan layanan operasional ground handling di Bandara Internasional Soekarno-Hatta (CGK). Langkah strategis ini merupakan wujud komitmen berkelanjutan perusahaan dalam mendukung kelancaran lalu lintas udara dan ekosistem aviasi Indonesia yang kian bertumbuh pesat.",
      "Kesiapan operasional ini mencakup penempatan personel bersertifikasi resmi Direktorat Kelaikudaraan dan Pengoperasian Pesawat Udara (DKPPU), sistem koordinasi ramp handling terpadu, penanganan penumpang di terminal keberangkatan maupun kedatangan, serta penyiapan unit Ground Support Equipment (GSE) modern.",
      "Melalui ekspansi ini, MAP semakin memperkokoh posisinya sebagai mitra darat terpercaya di 4 hub bandara utama Indonesia, yakni Bandara Internasional Soekarno-Hatta (CGK - Jakarta), Juanda (SUB - Surabaya), Kualanamu (KNO - Deli Serdang/Medan), dan Sultan Hasanuddin (UPG - Makassar).",
      "Manajemen MAP menegaskan bahwa seluruh prosedur operasional di CGK mengacu secara ketat pada standar IATA Safety Audit for Ground Operations (ISAGO) serta regulasi keselamatan Kementerian Perhubungan RI demi menjamin keamanan armada, kru, dan penumpang maskapai mitra.",
    ],
  },
  {
    id: "map-training-batch",
    slug: "map-training-center-sambut-angkatan-baru",
    title: "MAP Training Center Sambut Peserta Pelatihan & Sertifikasi Aviasi Angkatan Baru",
    category: "Pelatihan & Karir",
    date: "10 Januari 2024",
    readTime: "4 min baca",
    author: "Divisi MAP Training Center",
    image: "/services-ramp-agent.jpeg",
    featured: false,
    tags: ["Training Center", "AVSEC", "GSE", "Sertifikasi", "Karir"],
    excerpt:
      "MAP Training Center menyambut puluhan peserta program kualifikasi Aviation Security (AVSEC) dan Operator GSE sebagai langkah awal membangun karir profesional di industri aviasi.",
    content: [
      "Bogor — MAP Training Center kembali membuka dan menyambut puluhan siswa baru untuk program pelatihan dan sertifikasi kejuruan ground handling, Aviation Security (AVSEC), dan pengoperasian Ground Support Equipment (GSE).",
      "Program ini dirancang secara komprehensif dengan memadukan pembelajaran teori regulasi penerbangan sipil internasional (ICAO & IATA), keselamatan apron, simulasi penanganan bagasi, hingga praktik langsung di lapangan.",
      "Instruktur yang mendampingi merupakan praktisi senior aviasi dengan sertifikasi instruktur nasional dan internasional. Seluruh peserta yang lulus uji kompetensi akan memperoleh lisensi resmi dari regulator terkait serta berkesempatan langsung direkrut memperkuat tim operasional MAP.",
    ],
  },
  {
    id: "map-gse-apb-support",
    slug: "penguatan-armada-gse-dan-apb",
    title: "Penguatan Armada Ground Support Equipment (GSE) Siap Dukung Operasional 24/7",
    category: "Armada & Peralatan",
    date: "05 November 2023",
    readTime: "3 min baca",
    author: "Departemen GSE & Maintenance",
    image: "/fleet-jakarta-cgk.jpg",
    featured: false,
    tags: ["GSE", "Apron Bus", "Baggage Tractor", "Ramp Service"],
    excerpt:
      "PT Mawaddah Angkasa Prima menyiapkan armada GSE dan Apron Passenger Bus (APB) berstandar tinggi guna memastikan kelancaran mobilisasi penumpang serta ketepatan ground time pesawat.",
    content: [
      "Jakarta — Menghadapi peningkatan frekuensi penerbangan mitra maskapai domestik dan carter, MAP memperkuat keandalan armada Ground Support Equipment (GSE) di seluruh stasiun pangkalan.",
      "Penambahan armada meliputi unit Baggage Towing Tractor (BTT), Ground Power Unit (GPU), Lavatory Service Truck, Potable Water Unit, serta armada bus apron (Apron Passenger Bus - APB) berkapasitas besar dengan pendingin udara optimal.",
      "Seluruh armada menjalani proses preventive maintenance berkala dan dioperasikan oleh tenaga berlisensi SIO/TIM demi meminimalkan waktu turnaround (ground time) pesawat di apron secara aman dan presisi.",
    ],
  },
  {
    id: "map-partnership-airline",
    slug: "map-tingkatkan-standar-layanan-passenger-handling",
    title: "MAP Tingkatkan Standar Layanan Passenger & Gate Handling Bersama Mitra Maskapai",
    category: "Kemitraan",
    date: "14 Oktober 2023",
    readTime: "3 min baca",
    author: "Divisi Passenger Service",
    image: "/services-passenger-host.jpg",
    featured: false,
    tags: ["Passenger Service", "DCS", "Gate Handling", "Check-in"],
    excerpt:
      "Peningkatan integrasi sistem Departure Control System (DCS) dan pelatihan hospitality staf garda depan untuk pengalaman penerbangan penumpang yang seamless dan nyaman.",
    content: [
      "Surabaya — PT Mawaddah Angkasa Prima terus mempererat sinergi operasional bersama maskapai mitra melalui peningkatan kualitas layanan penanganan penumpang di area check-in counter, transfer desk, dan boarding gate.",
      "Staf garda depan MAP secara rutin dibekali pelatihan multi-DCS platform (Departure Control System) serta standar hospitality bintang lima untuk memastikan proses registrasi tiket dan bagasi berjalan cepat, ramah, dan akurat.",
      "Program ini terbukti mampu menekan waktu tunggu antrean check-in dan memberikan pengalaman perjalanan yang menyenangkan bagi seluruh penumpang.",
    ],
  },
  {
    id: "map-shuttle-advertising",
    slug: "inovasi-media-promosi-apb-advertising",
    title: "Inovasi Media Promosi Bergerak pada Armada Apron Passenger Bus (APB)",
    category: "Armada & Peralatan",
    date: "28 September 2023",
    readTime: "3 min baca",
    author: "Tim Pemasaran & Media",
    image: "/fleet-bali-dps.jpg",
    featured: false,
    tags: ["Advertising", "APB", "Bus Wrap", "Airport Media"],
    excerpt:
      "Menghadirkan peluang branding eksklusif berdaya jangkau tinggi bagi korporasi melalui media wrap luar ruang pada armada shuttle bus bandara MAP.",
    content: [
      "Jakarta — Unit bisnis Airport Shuttle Bus Advertising dari MAP menawarkan opsi promosi media luar ruang terdepan yang menjangkau langsung penumpang saat mobilisasi menuju pesawat.",
      "Dengan titik penempatan di bandara-bandara tersibuk seperti CGK, SUB, KNO, dan UPG, kehadiran iklan mendapatkan eksposur captive audience yang sangat potensial dari segmen penumpang bisnis dan wisatawan.",
      "Pilihan format media meliputi Full Bus Wrap, Side Panel Wrap, hingga Passenger Hand-Grip Strap Advertising di dalam kabin bus dengan kualitas cetak premium tahan cuaca.",
    ],
  },
  {
    id: "map-safety-first-campaign",
    slug: "komitmen-safety-first-dan-zero-accident",
    title: "Budaya Keselamatan Kerja: Penerapan Ketat SOP Ramp Safety & Zero Accident Policy",
    category: "Operasional",
    date: "12 Agustus 2023",
    readTime: "4 min baca",
    author: "Safety & Quality Assurance",
    image: "/map-ground-handling-photo.jpg",
    featured: false,
    tags: ["Safety", "Ramp Safety", "Zero Accident", "ISAGO"],
    excerpt:
      "Mengutamakan keselamatan kerja personel dan proteksi pesawat udara melalui audit harian, pelatihan FOD (Foreign Object Debris), dan simulasi tanggap darurat.",
    content: [
      "Makassar — Keselamatan adalah fondasi utama dari setiap operasional PT Mawaddah Angkasa Prima. Memasuki kuartal ketiga, MAP kembali menggelar rangkaian kampanye keselamatan kerja 'Safety First, Quality Always' di seluruh area sisi udara.",
      "Kegiatan meliputi pembersihan ramp dari FOD (Foreign Object Debris) secara berkala, inspeksi APD (Alat Pelindung Diri), pengecekan rem parkir armada GSE, serta simulasi penanganan kondisi darurat cuaca ekstrem.",
      "Dengan komitmen Zero Accident Policy, MAP senantiasa menjaga kepercayaan maskapai dan pengelola bandara dalam setiap pergerakan pesawat di apron.",
    ],
  },
];
