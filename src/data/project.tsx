export type ProjectType = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  role: string;
  date: string;
  tech: string;
  image: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectType[] = [
  {
    title: "PPDB Online Admission System",
    slug: "ppdb-system",
    description:
      "Sistem penerimaan siswa baru online yang dibangun untuk mendigitalisasi alur pendaftaran, unggah dokumen, dan validasi nilai.",
    longDescription:
      "Sebuah aplikasi web manajemen penerimaan siswa skala penuh yang dirancang untuk institusi pendidikan. Platform ini mendigitalisasi alur pendaftaran manual, memungkinkan calon siswa mendaftar secara online, mengunggah dokumen administrasi, dan mengikuti tes masuk secara interaktif. Administrator mendapatkan akses ke dashboard khusus untuk memverifikasi berkas, menilai ujian secara otomatis, dan memperbarui hasil kelulusan secara dinamis.",
    role: "Lead Full-Stack Web Developer & QA",
    date: "Agustus 2025 - Januari 2026",
    tech: "Laravel, PHP, MySQL, Tailwind CSS, Blade Template",
    image: "/projects/contoh.png",
    features: [
      "Formulir registrasi siswa multi-tahap yang dinamis",
      "Validasi unggahan berkas siswa yang aman dan terenkripsi",
      "Mesin ujian online interaktif dengan penilaian otomatis hasil tes",
      "Dashboard status pendaftaran kandidat real-time dengan cetak laporan PDF",
      "Sistem manajemen alur kerja admin dengan otorisasi berbasis peran (RBAC)",
    ],
    demoUrl: "https://ppdb-demo.example.com",
    githubUrl: "https://github.com/fajriaulia019/laravel-ppdb",
  },
  {
    title: "Premium Interactive Portfolio",
    slug: "web-portfolio",
    description:
      "Portofolio pengembang web interaktif berkualitas tinggi yang menampilkan fisika 3D, animasi scroll GSAP, dan kursor kustom.",
    longDescription:
      "Portofolio frontend kreatif yang dirancang untuk memamerkan proyek melalui elemen interaktif yang responsif. Menggabungkan canvas HTML WebGL 3D untuk simulasi fisika lanyard kartu nama kustom, dikombinasikan dengan animasi ScrollTrigger GSAP untuk memunculkan seksi konten secara dinamis berdasarkan tinggi scroll.",
    role: "Front-End Developer & UX Specialist",
    date: "Juli 2026",
    tech: "Next.js, TS, Tailwind CSS, GSAP, React Three Fiber",
    image: "/projects/contoh.png",
    features: [
      "Transisi dan animasi kemunculan elemen berbasis ScrollTrigger GSAP",
      "Kursor kustom yang mendeteksi konteks interaksi (label VIEW/DRAG)",
      "Badge lanyard 3D mengambang interaktif dengan simulasi fisika rapier/Three.js",
      "Komponen efek magnetis menggunakan GSAP untuk menarik tombol aksi",
      "Estetika tema gelap premium yang menyoroti keahlian teknis dan daftar proyek",
    ],
    demoUrl: "https://fajriaulia.example.com",
    githubUrl: "https://github.com/fajriaulia019/nextjs-portfolio",
  },
];
