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
    company: "SMA Negeri 1 Matauli Pandan",
    period: "Ags 2025 - Jan 2026",
    status: "COMPLETED",
    category: "BACKEND",
    tech: ["Laravel", "Vite", "Tailwind CSS", "Alpine.js", "MySQL", "PDF.js"],
    description: [
      "Mengembangkan portal web profil resmi sekolah yang saat ini aktif digunakan langsung, lengkap dengan dukungan multibahasa (ID/EN) terintegrasi Spatie Translatable dan modul verifikasi program International Baccalaureate (IB).",
      "Mengimplementasikan panel administrasi multi-role RBAC untuk memudahkan pembagian pengelolaan konten sekolah (berita, fasilitas, tendik) dan manajemen asrama secara aman.",
      "Mengintegrasikan fitur pengamanan login berupa rate limiter (throttling) untuk mencegah serangan brute force pada panel admin.",
      "Membangun pengaman berkas resmi (seperti PUDD) berbasis Web PDF Canvas Viewer (PDF.js) guna mencegah akses langsung dan pengunduhan dokumen yang tidak sah.",
      "Merancang basis data relasional untuk sistem pelacakan lulusan studi lanjut alumni beserta visualisasi grafik statistik persentasenya dan paginasi data skala besar.",
    ],
  },
];
