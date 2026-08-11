# Cyber-Dark Interactive Portfolio

Portofolio Full-Stack Web Developer interaktif premium yang dinamis dengan visual modern bertema _cyber-dark glassmorphism_, animasi interaktif 3D, serta struktur data yang terorganisasi dengan rapi.

## 🚀 Fitur Utama

Portofolio ini dirancang dengan tingkat interaktivitas yang tinggi dan estetika visual modern:

- **3D Interactive Lanyard (ID Card)**: Simulasi kartu identitas 3D interaktif yang berayun mengikuti kursor mouse menggunakan kalkulasi physics (gravitasi dan gesekan) berbasis `Three.js` dan `@react-three/rapier`.
- **Gooey Nav Menu**: Menu navigasi responsif dengan indikator bubble elastis (efek _gooey_) yang menyatu secara visual dan terintegrasi otomatis dengan perutean Next.js.
- **Glassmorphic Cyberpunk Theme**: Desain visual futuristik super premium yang memadukan latar belakang bermotif _dot grid_, efek cahaya aura neon mengambang, serta transparansi latar belakang yang halus (_backdrop blur_).
- **Clean & Decoupled Data**: Seluruh riwayat pengalaman kerja serta daftar proyek dipisah sepenuhnya ke dalam folder data (`src/data/`). Memudahkan pembaruan konten portofolio tanpa merusak struktur UI utama.

---

## 🛠️ Stack Teknologi

Proyek ini dibangun di atas teknologi modern dengan kinerja tinggi:

- **Frontend**: [Next.js 16.2](https://nextjs.org/) (App Router), [React 19](https://react.dev/), dan [TypeScript](https://www.typescriptlang.org/).
- **Styling & UI**: [Tailwind CSS v4](https://tailwindcss.com/) (menggunakan `@tailwindcss/postcss` untuk efisiensi kompilasi gaya) dan [Lucide React](https://lucide.dev/) untuk ikonografi.
- **Animasi & Efek**: [GSAP (GreenSock Animation Platform)](https://gsap.com/) untuk transisi perpindahan halaman dan animasi _entrance loading_ yang smooth.
- **Grafis 3D**: [Three.js](https://threejs.org/) dengan pembungkus React [@react-three/fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) & [@react-three/drei](https://github.com/pmndrs/drei), dan simulasi fisika [@react-three/rapier](https://github.com/pmndrs/react-three-rapier).
- **Prisma Client**: Prisma ORM dikonfigurasikan di dalam proyek dengan PostgreSQL adapter (`@prisma/adapter-pg` dan `pg`).
  > ⚠️ **Catatan**: Dependensi dan skema Prisma (`prisma/schema.prisma`) telah disetup di berkas konfigurasi, namun portofolio ini saat ini berjalan sepenuhnya menggunakan data statis terpusat di folder `src/data/` untuk meminimalkan beban runtime basis data.

---

## 📦 Struktur Direktori Proyek

```text
portfolio/
├── prisma/                  # Konfigurasi database & skema Prisma ORM
├── public/                  # Aset statis (gambar, favicon, logo)
└── src/
    ├── app/                 # Perutean aplikasi (Website Pages & API Routes)
    │   ├── (website)/       # Halaman utama portofolio (Home, About, Projects, Experience, Contact)
    │   ├── admin/           # Halaman administrasi portofolio
    │   └── api/             # API endpoint pendukung
    ├── assets/              # Logo dan komponen grafis kustom
    ├── components/          # Komponen UI Modular
    │   ├── ui/              # Komponen dasar (Button, Card, Badge, dll)
    │   └── website/         # Layout & seksi halaman portofolio (Hero, Navbar, Footer)
    ├── data/                # Data konten statik (experience.tsx & project.tsx)
    ├── generated/           # Berkas autogenerasi Prisma Client
    └── lib/                 # Utilitas & fungsi pembantu (Prisma client & Tailwind merge)
```

## 💻 Panduan Instalasi Lokal

Ikuti langkah berikut untuk menjalankan portofolio ini di perangkat lokal Anda:

### Prasyarat

Pastikan Anda telah memasang [Node.js](https://nodejs.org/) (versi LTS yang direkomendasikan) di sistem Anda.

### Langkah-langkah

1.  **Clone Repositori**:

    ```bash
    git clone https://github.com/fajriaulia019/nextjs-portfolio.git
    cd portfolio
    ```

2.  **Instalasi Dependensi**:

    ```bash
    npm install
    ```

3.  **Jalankan Server Pengembangan**:

    ```bash
    npm run dev
    ```

4.  **Akses Aplikasi**:
    Buka peramban (browser) Anda dan kunjungi halaman:
    [http://localhost:3000](http://localhost:3000)
