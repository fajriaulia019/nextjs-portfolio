export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  status: "ACTIVE" | "COMPLETED";
  description: string[];
  tech: string[];
  category: "FRONTEND" | "BACKEND";
};

export const experiences: ExperienceType[] = [
  {
    role: "Full-Stack Web Developer",
    company: "TechVanguard Solutions",
    period: "Nov 2024 - Present",
    status: "ACTIVE",
    category: "FRONTEND",
    tech: ["Next.js", "Laravel", "PHP", "TypeScript", "Tailwind CSS", "GSAP"],
    description: [
      "Membangun aplikasi web full-stack interaktif menggunakan Next.js App Router dan Laravel backend API.",
      "Mengimplementasikan integrasi state global secara real-time dan animasi scroll presisi menggunakan GSAP.",
      "Mengoptimalkan performa pemuatan laman web serta rancangan basis data relasional.",
    ],
  },
  {
    role: "Web Developer",
    company: "Neo Nexus Labs",
    period: "Jan 2023 - Oct 2024",
    status: "COMPLETED",
    category: "BACKEND",
    tech: ["Laravel", "PHP", "MySQL", "Redis", "Rest API"],
    description: [
      "Merancang dan mengembangkan arsitektur API RESTful dan sistem administrasi internal menggunakan Laravel.",
      "Mengoptimalkan performa kueri database SQL serta mekanisme caching menggunakan Redis.",
      "Menulis rangkaian pengujian otomatis terintegrasi menggunakan PHPUnit untuk memvalidasi alur bisnis.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "PixelForge Studio",
    period: "Aug 2022 - Dec 2022",
    status: "COMPLETED",
    category: "BACKEND",
    tech: ["Laravel", "JavaScript", "Bootstrap", "MySQL", "Git"],
    description: [
      "Membangun portal informasi instansi serta sistem manajemen inventaris memanfaatkan backend Laravel.",
      "Mengintegrasikan fitur kelola autentikasi ganda pengguna dan proteksi csrf security pada alur pendaftaran.",
      "Membantu setup administrasi server awal untuk proses rilis server hosting berbasis Nginx.",
    ],
  },
];
