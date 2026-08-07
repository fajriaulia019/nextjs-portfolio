export type ProjectType = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  role?: string;
  date?: string;
  tech: string;
  image: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectType[] = [
  {
    title: "PPDB Online - Sekolah XYZ",
    slug: "ppdb-system",
    description:
      "Platform penerimaan siswa baru online berbasis Laravel dan Tailwind CSS yang mendigitalisasi proses registrasi, verifikasi berkas, ujian online, dan pengumuman kelulusan.",
    longDescription:
      "PPDB Online Sekolah XYZ adalah platform web manajemen penerimaan siswa baru. Sistem pendaftaran manual sebelumnya rentan melambat dan tidak efisien akibat tingginya volume input data dan unggahan berkas massal dari ratusan pendaftar dalam satu periode waktu. Tantangan utama saya adalah mendesain arsitektur backend yang kokoh untuk menangani validasi multi-tahap dan memproses database pendaftar secara real-time. Saya menerapkan pola structured Layered Architecture (Service-Repository) untuk memisahkan domain logic, menyusun kustom Form Requests untuk validasi berkas secara asinkron, serta mengintegrasikan modul cetak PDF bukti pendaftaran otomatis. Hasilnya, kode program menjadi sangat bersih (decoupled), mudah dirawat, dan sukses memproses ratusan berkas pendaftar harian tanpa ada penumpukan proses atau crash pada server database.",
    tech: "Laravel 10, Tailwind CSS, MySQL, dompdf, Laravel Excel, SweetAlert",
    image: "/projects/ppdb-landing.webp",
    features: [
      "Registrasi mandiri calon siswa, pengisian formulir biodata, & manajemen unggah berkas",
      "Ujian seleksi online terintegrasi langsung pada dashboard siswa dengan kalkulasi skor otomatis",
      "Dashboard admin untuk monitor statistik pendaftaran & verifikasi berkas pendaftar",
      "Penerapan kode terstruktur menggunakan Layered Architecture (Service/Repository - Form Requests)",
      "Fitur cetak bukti pendaftaran berformat PDF resmi & ekspor data excel rekapan pendaftar",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/fajriaulia019/ppdb-sd",
  },
  {
    title: "ExploreID - Portal Destinasi Wisata Indonesia",
    slug: "exploreid",
    description:
      "Aplikasi web portal pariwisata untuk menjelajahi dan mempromosikan keindahan destinasi wisata di Indonesia lengkap dengan fitur pencarian, filter wilayah, dan panel dashboard admin.",
    longDescription:
      "ExploreID adalah aplikasi web portal pariwisata untuk mempromosikan keindahan destinasi wisata Indonesia. Pengguna kesulitan mencari referensi wisata akibat lambatnya proses kueri penelusuran ketika menggabungkan filter kategori pariwisata dan provinsi secara bertumpuk. Tugas saya adalah mengoptimalkan kueri pencarian multi-kategori dan perutean koordinat agar menghasilkan navigasi lokasi yang responsif. Saya merancang pengindeksan basis data relasional MySQL pada kolom pencarian filter utama, mengemas kueri relasional Laravel Eloquent yang efisien, serta menyematkan API Google Maps dinamis yang dikontrol di sisi klien menggunakan Alpine.js. Hasilnya, waktu respon pencarian destinasi berhasil dipangkas hingga di bawah 150ms dengan visualisasi peta interaktif yang berjalan mulus di perangkat mobile maupun desktop.",
    tech: "Laravel 11, Tailwind CSS, Alpine.js, MySQL, Laravel Breeze, Vite",
    image: "/projects/exploreid-home.webp",
    features: [
      "Pencarian tempat wisata secara interaktif dan filter kategori serta wilayah provinsi",
      "Halaman detail tempat wisata dilengkapi jam buka, tiket masuk, & koordinat Google Maps",
      "Panel dashboard admin (Laravel Breeze) untuk operasi CRUD destinasi, wilayah, & kategori",
      "Manajemen profil admin (pengubahan nama pendaftaran, email, & password)",
      "Hubungan penyimpanan berkas yang aman menggunakan Storage Link Laravel",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/fajriaulia019/exploreid",
  },
  {
    title: "SMA Negeri 1 MATAULI Pandan - Profile Portal",
    slug: "sman-matauli-profile",
    description:
      "Website profil resmi SMA Negeri 1 MATAULI Pandan yang mendukung standardisasi program internasional (IB World School).",
    longDescription:
      "Website profil resmi SMA Negeri 1 MATAULI Pandan dirancang sebagai portal informasi utama sekolah terakreditasi internasional. Sekolah membutuhkan media informasi penunjang standardisasi International Baccalaureate (IB) World School untuk memuat berkas resmi (seperti PUDD), namun berkas tersebut rentan diunduh secara ilegal dan disalahgunakan di internet. Tugas saya adalah merancang sistem penayangan berkas PDF yang aman dari unduhan bebas dan melindungi otentikasi admin dari serangan siber. Saya memasang middleware proteksi token header kustom (`X-PDF-Viewer === 'canvas'`) dan tag noindex untuk menyembunyikan file dari bot perayap, membangun visualizer PDF.js yang merender dokumen langsung ke HTML5 Canvas di frontend, serta menerapkan login rate limiting (throttling) dan paginasi data skala besar. Hasilnya, dokumen resmi sekolah berhasil ditayangkan secara interaktif dengan visual resolusi tinggi namun terlindungi dari click-kanan unduh langsung, serta tingkat keamanan panel admin meningkat drastis terhadap serangan brute force.",
    tech: "Laravel 11, Tailwind CSS v4, Vite 6, Alpine.js, MySQL, PDF.js, Spatie Translatable",
    image: "/projects/matauli-landing.webp",
    features: [
      "Sistem manajemen konten terbagi multi-role (sekolah & asrama) dengan proteksi login throttling",
      "Halaman pelacakan studi lanjut alumni dengan visualisasi statistik persentase kelulusan",
      "Document viewer terproteksi Canvas PDF (PDF.js) untuk berkas resmi PUDD & Perdupsis",
      "Dukungan multibahasa dinamis (Inggris & Indonesia) terintegrasi Spatie Translatable",
      "Paginasi dan optimasi kueri basis data relasional MySQL untuk data bervolume tinggi",
    ],
    demoUrl: "https://sman1matauli.sch.id/",
    githubUrl: "",
  },
];
