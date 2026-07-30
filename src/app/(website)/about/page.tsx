"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Terminal, Shield, Cpu, Code2, Server } from "lucide-react";
import gsap from "gsap";

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo(
      ".animate-header-item",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      ".animate-left-col",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
    );
    gsap.fromTo(
      ".animate-right-col",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
    );
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Main Headings */}
      <div className="space-y-4 mb-16 text-center lg:text-left">
        <h2 className="animate-header-item opacity-0 text-sm font-semibold tracking-widest text-blue-500 uppercase flex items-center justify-center lg:justify-start gap-2">
          <Terminal size={14} className="text-blue-500 animate-pulse" />
          System.profile : active
        </h2>
        <h1 className="animate-header-item opacity-0 text-4xl font-bold tracking-tight text-white lg:text-5xl">
          About Me
        </h1>
        <p className="animate-header-item opacity-0 text-zinc-400 text-sm md:text-base max-w-xl">
          An overview of my technical profile, background, and professional
          practices.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-10">
        {/* LEFT COLUMN: Photocard & Professional Identity */}
        <div className="animate-left-col opacity-0 lg:col-span-5 flex flex-col gap-6">
          <div className="relative group rounded-3xl border border-blue-500/10 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/5 overflow-hidden">
            {/* Holographic scanning overlay effect on hover */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-out pointer-events-none" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur pointer-events-none -z-10" />

            {/* Profile Photocard image */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/80 mb-6 group/img">
              <Image
                src="/img/profil.jpeg"
                alt="Fajri Aulia Profile"
                fill
                priority
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

              {/* Floating status tag */}
              <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-emerald-500/20 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
                <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">
                  Active
                </span>
              </div>
            </div>

            {/* Professional Identity Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Fajri Aulia
                </h3>
                <p className="text-sm text-blue-400 font-medium mt-1">
                  Full-Stack Web Developer
                </p>
              </div>

              <div className="h-px bg-zinc-800/80" />

              {/* Stats & Metadata widgets */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                  <span className="text-zinc-500 block mb-1">Focus Areas</span>
                  <span className="font-semibold text-zinc-300">
                    Purity & Testing
                  </span>
                </div>
                <div className="p-3 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                  <span className="text-zinc-500 block mb-1">Tech Base</span>
                  <span className="font-semibold text-zinc-300">
                    Laravel & Nextjs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional details: Tag capsules */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              "Next.js",
              "Laravel",
              "Typescript",
              "Automation",
              "CI/CD",
              "React 19",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-white hover:border-blue-500/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Bio Explanation (2 Paragraphs) */}
        <div className="animate-right-col opacity-0 lg:col-span-7 space-y-8">
          {/* Paragraph explanation */}
          <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed font-light">
            <p>
              Saya adalah seorang <strong>Web Developer</strong> yang
              berdedikasi tinggi dalam menciptakan aplikasi web modern
              berkualitas premium. Menggunakan kombinasi tangguh dari ekosistem
              PHP dengan framework <strong>Laravel</strong> serta ekosistem
              Javascript modern berbasis <strong>Next.js</strong>, saya
              menjembatani visual antarmuka yang dinamis dengan arsitektur
              backend yang kokoh. Setiap baris kode dirancang untuk memberikan
              performa maksimal, estetika futuristik yang premium, serta
              struktur kode yang mudah dirawat secara berkelanjutan.
            </p>
            <p>
              Dalam menyusun kode program, saya selalu mengutamakan pendekatan
              yang teliti terhadap integritas detail dan efisiensi sistem. Saya
              percaya bahwa web premium tidak hanya indah dipandang, namun harus
              andal, aman, dan berkinerja cepat di bawah beban tinggi. Untuk
              itu, saya senantiasa menerapkan praktik optimasi kueri database,
              penulisan kode modular yang bersih, serta standarisasi uji mandiri
              demi meluncurkan produk akhir berkualitas tanpa kompromi.
            </p>
          </div>

          <div className="h-px bg-zinc-900" />

          {/* Core Values / Features grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              Core Domains
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-5 border border-zinc-800/80 bg-zinc-900/30 rounded-2xl hover:border-blue-500/10 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Code2 size={20} />
                  </div>
                  <h5 className="font-semibold text-white">Full-Stack Craft</h5>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Membangun aplikasi kaya interaksi dengan framework Next.js
                  React 19 ditambah sistem backend Laravel API.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 border border-zinc-800/80 bg-zinc-900/30 rounded-2xl hover:border-blue-500/10 transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Server size={20} />
                  </div>
                  <h5 className="font-semibold text-white">
                    Backend & API Craft
                  </h5>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Merancang arsitektur server yang aman, kueri database
                  relasional yang efisien, serta integrasi API RESTful yang
                  modular.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button groups */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              Let's Collaborate
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white font-medium text-sm text-center transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
