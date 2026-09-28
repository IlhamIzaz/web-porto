import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, InsightArticle } from "../types/portfolio";

export const PERSONAL_INFO = {
  name: "Ilham Izaz Amanullah",
  role: "Junior Data Analyst & Data Science Enthusiast",
  subRole: "S1 Sistem Informasi (UBSI) • RHCSA Certified",
  tagline: "Lulusan Sistem Informasi (UBSI) pemegang sertifikasi Red Hat Certified System Administrator (RHCSA) dengan pengalaman kepemimpinan operasional lini di PT Indofood CBP Sukses Makmur Tbk.",
  location: "Indonesia",
  email: "ilhamkyuubi@gmail.com",
  github: "https://github.com/IlhamIzaz",
  linkedin: "https://linkedin.com/in/ilhamizaz",
  status: "Open for Junior Data Roles & Entry-Level Opportunities",
  bio: `Saya adalah Ilham Izaz Amanullah, lulusan Sarjana Sistem Informasi dari Universitas Bina Sarana Informatika (UBSI) yang juga memegang sertifikasi resmi Red Hat Certified System Administrator (RHCSA aktif berlaku hingga Desember 2026). Saya memiliki pengalaman kerja nyata di lantai produksi PT Indofood CBP Sukses Makmur Tbk (Food Seasoning Division) periode Juni 2025 – November 2026. Di sana, saya dipercaya memimpin koordinasi satu lini produksi untuk mengatur pembagian kloter istirahat anggota tim secara presisi sesuai SOP pabrik tanpa menghentikan kelancaran alur produksi. Kombinasi unik antara latar belakang keilmuan Sistem Informasi (SQL, basis data, analitika data), keahlian sistem Linux enterprise & scripting Bash (RHCSA), serta kedisiplinan kerja industri manufaktur menjadi keunggulan saya untuk beralih karier (career switch) ke dunia Data Analytics & Data Science.`,
  stats: [
    { label: "Pendidikan Formal", value: "S1 SI", change: "Universitas BSI" },
    { label: "Sertifikasi Resmi", value: "RHCSA", change: "Red Hat (Valid s/d Des 2026)" },
    { label: "Pengalaman Industri", value: "Indofood", change: "Food Seasoning Div." },
    { label: "Proyek Hands-on", value: "6+ Kasus", change: "SQL, Python & Data Viz" },
  ]
};

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Sarjana (S1)",
    major: "Sistem Informasi",
    institution: "Universitas Bina Sarana Informatika (UBSI)",
    period: "Sarjana Komputer (S.Kom)",
    description: "Memperoleh pemahaman komprehensif mengenai analisis kebutuhan sistem informasi, arsitektur basis data relasional (RDBMS), pemodelan proses bisnis, logika algoritma pemrograman, serta statistika analitik.",
    relevantCourses: [
      "Manajemen Basis Data (SQL)",
      "Analisis & Perancangan Sistem Informasi",
      "Statistika & Probabilitas Bisnis",
      "Algoritma & Logika Pemrograman",
      "Pengantar Data Mining & Analitika"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Analysis & Querying",
    description: "Fondasi ekstraksi kueri database relasional dan manipulasi data terstruktur.",
    iconName: "Database",
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: "Proficient", highlight: "SELECT, JOINs, GROUP BY, Subqueries, aggregations" },
      { name: "Python (Pandas & NumPy)", level: "Proficient", highlight: "Data cleaning, filtering, handling missing values" },
      { name: "Microsoft Excel & Spreadsheets", level: "Advanced", highlight: "VLOOKUP/XLOOKUP, Pivot Tables, summary reporting" },
      { name: "Relational Database Concepts", level: "Proficient", highlight: "ERD design, primary/foreign keys, normalization" },
    ]
  },
  {
    title: "Business Intelligence & Data Viz",
    description: "Penyusunan dashboard visual dan data storytelling untuk pemantauan performa bisnis.",
    iconName: "BarChart3",
    skills: [
      { name: "Tableau & Power BI", level: "Proficient", highlight: "Perancangan grafik interaktif, filter, KPI cards" },
      { name: "Matplotlib & Seaborn (Python)", level: "Proficient", highlight: "Exploratory Data Analysis (EDA) charts & distribution" },
      { name: "Data Storytelling", level: "Proficient", highlight: "Menyampaikan wawasan data teknis ke bahasa operasional" },
      { name: "Streamlit Basics", level: "Familiar", highlight: "Membangun dashboard web data science interaktif sederhana" },
    ]
  },
  {
    title: "Machine Learning & Statistik",
    description: "Pemahaman algoritma dasar pembelajaran mesin dan evaluasi performa model.",
    iconName: "Cpu",
    skills: [
      { name: "Supervised Learning", level: "Proficient", highlight: "Klasifikasi (Logistic Regression, Random Forest, XGBoost)" },
      { name: "Model Evaluation Metrics", level: "Proficient", highlight: "Accuracy, Precision, Recall, F1-Score, ROC-AUC" },
      { name: "Statistika Deskriptif & Inferensial", level: "Proficient", highlight: "Mean, Median, Standard Deviation, Hypothesis testing" },
      { name: "Unsupervised Learning", level: "Familiar", highlight: "K-Means Clustering untuk segmentasi data" },
    ]
  },
  {
    title: "Linux, Shell & System Admin (RHCSA)",
    description: "Keahlian sistem operasi enterprise untuk otomasi pipeline data, server, dan database.",
    iconName: "Server",
    skills: [
      { name: "Red Hat Enterprise Linux (RHEL)", level: "Advanced", highlight: "Certified RHCSA (Aktif s/d Desember 2026)" },
      { name: "Bash Shell Scripting & Automation", level: "Advanced", highlight: "Cron jobs, text processing (grep, awk, sed), piping" },
      { name: "System, Services & Security", level: "Advanced", highlight: "Systemd, user & group management, permissions, storage/LVM" },
      { name: "Kepemimpinan Operasional Lini", level: "Advanced", highlight: "Koordinasi shift & SOP di PT Indofood CBP Sukses Makmur Tbk" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "telecom-customer-churn",
    title: "Studi Kasus: Prediksi Churn Pelanggan Telekomunikasi",
    tagline: "Proyek portofolio machine learning untuk mengidentifikasi pelanggan yang berisiko berhenti berlangganan.",
    category: "Machine Learning",
    description: "Menganalisis dataset perilaku pelanggan telekomunikasi untuk mendeteksi indikator utama churn dan melatih model klasifikasi prediktif berbasis Python.",
    problem: "Tingginya churn pelanggan mengakibatkan penurunan revenue bulanan. Manajemen membutuhkan sistem berbasis data untuk mendeteksi pelanggan kritis sebelum masa kontrak berakhir.",
    approach: [
      "Eksplorasi data awal (EDA) untuk memeriksa korelasi antara biaya bulanan, lama langganan (tenure), dan jenis kontrak.",
      "Pembersihan data: imputasi nilai hilang, encoding variabel kategorikal, dan normalisasi fitur numerik.",
      "Pelatihan model machine learning: Logistic Regression, Random Forest, dan XGBoost.",
      "Evaluasi model menggunakan metrik ROC-AUC dan Confusion Matrix untuk meminimalkan false negatives.",
      "Merancang antarmuka simulasi prediktif sederhana berbasis Streamlit."
    ],
    metrics: [
      { label: "ROC-AUC Score", value: "0.89" },
      { label: "Precision-Recall F1", value: "0.84" },
      { label: "Dataset Dianalisis", value: "7,043 Baris" },
      { label: "Model Terbaik", value: "XGBoost" }
    ],
    technologies: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Matplotlib", "Streamlit"],
    datasetInfo: "Telco Customer Churn Public Benchmark Dataset.",
    githubUrl: "https://github.com/ilhamizaz/telco-churn-prediction-shap",
    demoUrl: "https://telco-churn-analyzer.streamlit.app",
    featured: true,
    publishedDate: "2025"
  },
  {
    id: "ecommerce-executive-bi",
    title: "Dashboard Analitik Penjualan & Kohort E-Commerce",
    tagline: "Perancangan dashboard Business Intelligence di Power BI / Tableau untuk memantau KPI penjualan dan retensi pembeli.",
    category: "Business Intelligence",
    description: "Mengolah lebih dari 500,000 baris transaksi e-commerce ke dalam model data relasional dan visualisasi interaktif yang mudah dipahami manajemen.",
    problem: "Data transaksi mentah tersebar di banyak berkas tanpa visualisasi terpadu, membuat manajemen kesulitan melihat produk terlaris dan tren retensi pelanggan bulanan.",
    approach: [
      "Menggunakan kueri SQL untuk agregasi data penjualan bulanan, rata-rata nilai pesanan (AOV), dan Repeat Purchase Rate.",
      "Menyusun tabel kohort retensi untuk melihat persentase pelanggan yang kembali berbelanja di bulan berikutnya.",
      "Membangun dashboard interaktif di Tableau / Power BI dengan filter kategori produk, wilayah negara, dan rentang tanggal.",
      "Menyusun ringkasan kesimpulan dan wawasan bisnis utama."
    ],
    metrics: [
      { label: "Total Transaksi", value: "540,000+" },
      { label: "Periode Analisis", value: "24 Bulan" },
      { label: "Dimensi Visualisasi", value: "6 Panel KPI" },
      { label: "Metodologi", value: "Cohort Analysis" }
    ],
    technologies: ["SQL", "Power BI", "Tableau", "Excel", "Data Modeling"],
    datasetInfo: "Online Retail Global Transactional Dataset.",
    githubUrl: "https://github.com/ilhamizaz/ecommerce-cohort-bi-dashboard",
    demoUrl: "https://public.tableau.com/profile/ilhamizaz",
    featured: true,
    publishedDate: "2025"
  },
  {
    id: "production-line-efficiency",
    title: "Analisis Efisiensi Lini & Simulasi Penjadwalan Istirahat",
    tagline: "Studi kasus optimasi operasional berbasis data terinspirasi dari pengalaman nyata di industri manufaktur.",
    category: "Statistical Analysis",
    description: "Simulasi alur produksi dan pembagian kloter istirahat tim kerja untuk meminimalkan waktu henti (idle time) dan menjaga konsistensi output lini.",
    problem: "Pada lini produksi berkecepatan tinggi, pergantian waktu istirahat yang tidak terstruktur dapat memicu penurunan throughput output hingga 15% pada jam transisi.",
    approach: [
      "Mencatat dan memodelkan variabel waktu siklus mesin (cycle time), kapasitas pekerja per stasiun, dan durasi istirahat SOP.",
      "Melakukan analisis distribusi statistik waktu transisi pergantian operator menggunakan Python.",
      "Merancang simulasi rotasi kloteran bertahap (staggered rest break) untuk memastikan stasiun kritis selalu terisi.",
      "Menyusun dashboard evaluasi output per jam sebelum dan sesudah optimasi jadwal."
    ],
    metrics: [
      { label: "Optimasi Waktu Henti", value: "-22% Downtime" },
      { label: "Kepatuhan SOP Lini", value: "100% SOP" },
      { label: "Output Konsistensi", value: "+12.5%" },
      { label: "Fokus Studi", value: "Lini Manufaktur" }
    ],
    technologies: ["Python", "Pandas", "Excel Advanced", "Descriptive Statistics", "Seaborn"],
    datasetInfo: "Data simulasi operasional lini produksi & pencatatan throughput.",
    githubUrl: "https://github.com/ilhamizaz/production-line-efficiency-simulation",
    featured: true,
    publishedDate: "2026"
  },
  {
    id: "linux-data-pipeline-automation",
    title: "Otomasi Pipeline Ekstraksi Data dengan Bash & Linux RHEL",
    tagline: "Memanfaatkan keahlian RHCSA untuk mengotomatisasi ekstraksi log database dan pembersihan data berkala via shell script.",
    category: "Data Engineering",
    description: "Merancang automated cron job dan Bash script di lingkungan Linux Enterprise untuk melakukan backup harian data transaksi, ekstraksi CSV, dan pengiriman notifikasi status pipeline.",
    problem: "Proses transfer dan validasi data log transaksi harian sering macet jika dijalankan secara manual oleh staf.",
    approach: [
      "Menyusun Bash script dengan error handling, logging rotasi, dan notifikasi status otomatis.",
      "Mengonfigurasi penjadwalan crontab dan systemd timer pada server Linux (RHEL).",
      "Memanfaatkan utilitas command line Linux (awk, sed, grep) untuk preprocessing teks log sebelum dimuat ke database PostgreSQL.",
      "Mengatur izin akses direktori dan file permissions yang aman sesuai standar keamanan enterprise."
    ],
    metrics: [
      { label: "Waktu Otomasi", value: "100% Otomatis" },
      { label: "Sistem Operasi", value: "RHEL (Linux)" },
      { label: "Scripting Toolkit", value: "Bash & Cron" },
      { label: "SLA Keandalan", value: "99.9%" }
    ],
    technologies: ["Linux (RHEL)", "Bash Scripting", "Cron", "PostgreSQL", "Systemd"],
    datasetInfo: "Server System Telemetry & Transactional Audit Logs.",
    githubUrl: "https://github.com/ilhamizaz/linux-data-pipeline-automation",
    featured: false,
    publishedDate: "2025"
  },
  {
    id: "rfm-customer-segmentation",
    title: "Segmentasi Pelanggan Menggunakan Analisis RFM & K-Means",
    tagline: "Pengelompokan profil pelanggan berbasis Recency, Frequency, dan Monetary value untuk strategi pemasaran bertarget.",
    category: "Machine Learning",
    description: "Menerapkan kueri SQL untuk mengekstrak metrik RFM dan algoritma K-Means Clustering di Python untuk mengidentifikasi segmen pelanggan loyal vs rentan lepas.",
    problem: "Tim marketing mengirimkan promo yang sama ke semua pelanggan tanpa personalisasi segmen, mengakibatkan rendahnya efektivitas biaya promosi.",
    approach: [
      "Agregasi SQL: menghitung hari sejak pembelian terakhir (Recency), total transaksi (Frequency), dan total belanja (Monetary).",
      "Pembersihan outlier dan standarisasi nilai menggunakan StandardScaler.",
      "Menentukan jumlah klaster optimal menggunakan Elbow Method dan Silhouette Score.",
      "Menghasilkan 4 persona pelanggan (Champions, Loyalists, At Risk, Hibernating) beserta rekomendasi promosi yang sesuai."
    ],
    metrics: [
      { label: "Silhouette Score", value: "0.64" },
      { label: "Klaster Dihasilkan", value: "4 Segmen" },
      { label: "Dataset Pelanggan", value: "4,300+ Akun" },
      { label: "Algoritma", value: "K-Means" }
    ],
    technologies: ["SQL", "Python", "K-Means", "Scikit-Learn", "Seaborn"],
    datasetInfo: "E-Commerce Customer Behavior Dataset.",
    githubUrl: "https://github.com/ilhamizaz/rfm-kmeans-segmentation",
    featured: false,
    publishedDate: "2025"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Helper Produksi (Koordinator Lini)",
    company: "PT Indofood CBP Sukses Makmur Tbk (Food Seasoning Division)",
    location: "Indonesia",
    period: "Juni 2025 – November 2026",
    type: "Full-Time",
    description: "Bertanggung jawab atas kelancaran operasional lini produksi bumbu makanan (food seasoning), memastikan kepatuhan SOP pabrik, serta memimpin koordinasi pembagian jadwal istirahat tim lini.",
    highlights: [
      "Memimpin koordinasi satu lini produksi untuk mengatur pembagian jadwal kloteran istirahat anggota tim secara teratur sesuai SOP tanpa mengganggu kelangsungan alur mesin produksi.",
      "Menjaga kedisiplinan standar kebersihan pangan, keamanan kerja (K3), dan target throughput harian di lingkungan manufaktur FMCG berskala besar.",
      "Mengasah kepemimpinan langsung di lapangan, komunikasi interpersonal dengan rekan tim, serta kepekaan terhadap kendala operasional (bottleneck).",
      "Memperoleh pemahaman langsung tentang alur proses bisnis manufaktur, rantai pasok (supply chain), dan pentingnya konsistensi pencatatan data produksi."
    ],
    tools: ["Manajemen Lini Produksi", "Kepatuhan SOP Pabrik", "Koordinasi Tim & Shift", "Kontrol Kualitas"]
  },
  {
    id: "exp-2",
    role: "Proyek & Pembelajaran Mandiri Data Analytics",
    company: "Portofolio Mandiri & Capstone Projects",
    location: "Indonesia",
    period: "2025 – Sekarang",
    type: "Freelance",
    description: "Mendedikasikan waktu intensif untuk memperdalam keterampilan praktis dalam pengolahan data, SQL database, eksplorasi data dengan Python, otomatisasi Linux, dan visualisasi data bisnis.",
    highlights: [
      "Menyelesaikan berbagai proyek studi kasus analitik terapan: prediksi customer churn, segmentasi RFM, dan dashboard penjualan e-commerce.",
      "Mempraktikkan penulisan kueri SQL untuk database relasional dan eksplorasi data statistik dengan Python (Pandas, Scikit-learn).",
      "Membangun visualisasi interaktif di Power BI dan Tableau untuk mengasah kemampuan data storytelling.",
      "Mengintegrasikan keahlian RHCSA Linux untuk otomasi penarikan data dan penjadwalan pipeline otomatis berbasis Bash script."
    ],
    tools: ["SQL", "Python", "Tableau", "Power BI", "Linux RHEL", "Bash Scripting"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-rhcsa",
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat, Inc.",
    issueDate: "Aktif berlaku s/d Desember 2026",
    credentialUrl: "https://www.redhat.com/en/services/certification/rhcsa",
    skillsCovered: [
      "Red Hat Enterprise Linux (RHEL)",
      "Bash Shell Scripting & Task Automation",
      "Process & Service Management (systemd)",
      "File Systems, Storage Management & LVM",
      "User Security, Permissions & Access Control",
      "Network Configuration & Server Diagnostics"
    ]
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "art-1",
    title: "Mengapa Pemahaman Linux (RHCSA) Menjadi Nilai Plus Kuat bagi Calon Data Analyst",
    readTime: "4 menit baca",
    date: "2026",
    category: "System & Data Engineering",
    summary: "Banyak analis data kesulitan ketika berhadapan dengan server Linux, remote database, atau otomasi cron script. Memahami RHEL dan Bash membuat alur ekstraksi data jauh lebih mandiri dan tangguh.",
    keyTakeaway: "Keahlian sistem operasi enterprise menjembatani celah antara analisis data analitik murni dengan kebutuhan infrastruktur operasional IT."
  },
  {
    id: "art-2",
    title: "Pelajaran dari Lantai Pabrik: Mengapa Alur Operasional Nyata Sangat Mirip dengan Pipeline Data",
    readTime: "4 menit baca",
    date: "2026",
    category: "Career Switch & Perspective",
    summary: "Dari pengalaman memimpin lini produksi di Indofood CBP, saya menyadari bahwa mengatasi bottleneck mesin dan mengatur kloteran istirahat tim memiliki filosofi yang sama dengan mengoptimalkan pipeline pemrosesan data.",
    keyTakeaway: "Disiplin operasional dan pemahaman alur kerja lapangan membuat analisis data menjadi jauh lebih membumi dan relevan bagi bisnis."
  },
  {
    id: "art-3",
    title: "Langkah Demi Langkah Belajar SQL untuk Lulusan Sistem Informasi",
    readTime: "5 menit baca",
    date: "2025",
    category: "SQL Foundation",
    summary: "Bagaimana mengaitkan teori basis data yang dipelajari di perkuliahan dengan kebutuhan praktis seorang Junior Data Analyst dalam mengekstrak insight bisnis.",
    keyTakeaway: "Kuasai logika JOINs, agregasi GROUP BY, dan pemfilteran data sebelum melompat ke kueri kompleks."
  }
];
