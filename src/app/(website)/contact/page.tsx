"use client";

import React, { useState, useEffect } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import gsap from "gsap";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".animate-header-item",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      ".animate-card-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      },
    );
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fajriaulia019@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[-15%] w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-[10%] right-[-15%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Header section */}
      <div className="space-y-4 mb-16 text-center">
        <p className="animate-header-item opacity-0 text-xs font-semibold tracking-wider text-blue-500 uppercase flex items-center justify-center gap-2">
          <Mail size={14} className="text-blue-500 animate-pulse" />
          System.log : init_connection
        </p>
        <h1 className="animate-header-item opacity-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Get In Touch
        </h1>
        <p className="animate-header-item opacity-0 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Silakan hubungi saya melalui saluran komunikasi langsung di bawah ini.
          Saya terbuka untuk diskusi proyek, peluang kerja, atau sekadar
          berjejaring.
        </p>
      </div>

      {/* Cards Grid: Mobile-first layout (1 col on mobile, 3 cols on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="animate-card-item opacity-0 p-6 sm:p-8 rounded-3xl border border-zinc-900 bg-zinc-950/45 backdrop-blur-md relative group flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300 hover:border-blue-500/20">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="space-y-4">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                E-mail
              </h3>
              <p className="text-zinc-400 text-xs font-mono mt-1">
                fajriaulia019@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 px-4 py-3 rounded-xl transition duration-300 text-zinc-300 font-medium hover:text-white text-xs cursor-none relative"
              data-cursor="pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400 animate-pulse" />
                  Berhasil Disalin
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Salin E-mail
                </>
              )}
            </button>

            {/* Direct Mailto Button */}
            <a
              href="mailto:fajriaulia019@gmail.com"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl transition duration-300 text-xs font-medium cursor-none"
              data-cursor="pointer"
            >
              Kirim Email Instan
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/fajri-aulia-rahman-723599398"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-card-item opacity-0 p-6 sm:p-8 rounded-3xl border border-zinc-900 bg-zinc-950/45 backdrop-blur-md relative group flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300 hover:border-blue-500/20 hover:shadow-md hover:shadow-blue-500/5 cursor-none"
          data-cursor="pointer"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="p-3 bg-zinc-900/50 group-hover:bg-blue-500/10 text-zinc-400 group-hover:text-blue-400 rounded-2xl w-fit transition duration-300">
            <svg
              className="w-6 h-6 text-current fill-current"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>

          <div className="mt-8 flex items-end justify-between">
            <div className="space-y-1">
              <h5 className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                Professional Network
              </h5>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                LinkedIn
              </h4>
            </div>
            <div className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-blue-500/20 transition duration-300">
              <ExternalLink size={14} />
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/fajriaulia019"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-card-item opacity-0 p-6 sm:p-8 rounded-3xl border border-zinc-900 bg-zinc-950/45 backdrop-blur-md relative group flex flex-col justify-between min-h-[220px] sm:min-h-[260px] transition-all duration-300 hover:border-blue-500/20 hover:shadow-md hover:shadow-blue-500/5 cursor-none"
          data-cursor="pointer"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="p-3 bg-zinc-900/50 group-hover:bg-blue-500/10 text-zinc-400 group-hover:text-blue-400 rounded-2xl w-fit transition duration-300">
            <svg
              className="w-6 h-6 text-current fill-current"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38l-.01-1.44-2.22.48c-.08.01-.15.02-.24.02-.64 0-1.22-.38-1.42-.98-.22-.61-.63-.98-.82-1.07l-.27-.14c-.03-.02-.06-.05-.09-.09 0 0-.01-.01-.01-.01s-.01 0-.01-.01c-.13-.08-.19-.17-.19-.3 0-.17.15-.3.33-.3.12 0 .23.05.34.13.43.33.72.63 1.13.78.29.11.59.13.88.08.38-.07.7-.27.87-.51.05-.12.15-.24.27-.33-.94-.1-1.92-.37-2.61-.91-.71-.56-1.12-1.4-1.12-2.39 0-.46.12-.9.34-1.32-.15-.42-.31-1.05.02-1.89l.34.05.74.34c.54.26 1.07.64 1.5.99.39-.12.8-.18 1.25-.18s.86.06 1.25.18c.43-.35.96-.73 1.5-.99l.74-.34.34-.05c.34.84.18 1.47.03 1.89.23.42.34.86.34 1.32 0 .98-.4 1.82-1.12 2.39-.68.54-1.66.81-2.61.91.15.11.27.27.35.48.06.18.09.39.09.61l-.01 2.2c0 .21.15.46.55.38C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </div>

          <div className="mt-8 flex items-end justify-between">
            <div className="space-y-1">
              <h5 className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                Code Repository
              </h5>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                GitHub
              </h4>
            </div>
            <div className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-500 group-hover:text-white group-hover:border-blue-500/20 transition duration-300">
              <ExternalLink size={14} />
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
