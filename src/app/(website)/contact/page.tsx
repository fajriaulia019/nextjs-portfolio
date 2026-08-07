"use client";

import React, { useState, useEffect } from "react";
import { Mail, Send, Copy, Check, CheckCircle } from "lucide-react";
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".animate-header-item",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      ".animate-form-item",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
    );
    gsap.fromTo(
      ".animate-sidebar-item",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
    );
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fajriaulia019@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending email api trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[-15%] w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-[10%] right-[-15%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Header section */}
      <div className="space-y-4 mb-16 text-center lg:text-left">
        <h2 className="animate-header-item opacity-0 text-sm font-semibold tracking-wider text-blue-500 uppercase flex items-center justify-center lg:justify-start gap-2">
          <Mail size={14} className="text-blue-500 animate-pulse" />
          System.log : init_connection
        </h2>
        <h1 className="animate-header-item opacity-0 text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Get In Touch
        </h1>
        <p className="animate-header-item opacity-0 text-zinc-400 text-sm md:text-base max-w-xl">
          Silakan kirim pesan Anda melalui formulir di bawah ini, atau salin
          e-mail langsung untuk kontak cepat.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left Side: Contact Form Card */}
        <div className="animate-form-item opacity-0 lg:col-span-3 relative rounded-3xl border border-zinc-900 bg-zinc-950/45 p-6 md:p-8 backdrop-blur-md overflow-hidden">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          {isSent ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 animate-fade-in">
              <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-xl font-bold text-white">
                Message Sent Successfully!
              </h2>
              <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                Terima kasih telah berkomunikasi! Saya membaca semua pesan
                secara langsung dan akan membalas e-mail Anda segera.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-zinc-500 uppercase tracking-widest"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Fajri Aulia"
                    className="w-full bg-zinc-900/40 border border-zinc-805/80 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none transition duration-300 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-zinc-500 uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className="w-full bg-zinc-900/40 border border-zinc-805/80 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none transition duration-300 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono text-zinc-500 uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Kebutuhan Projek / Kerjasama Bisnis"
                  className="w-full bg-zinc-900/40 border border-zinc-805/80 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none transition duration-300 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-zinc-500 uppercase tracking-widest"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ceritakan tentang proyek Anda atau kirim pesan di sini..."
                  className="w-full bg-zinc-900/40 border border-zinc-850 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-605 focus:outline-none transition duration-300 min-h-[140px] resize-y outline-none"
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/80 disabled:cursor-not-allowed text-white font-semibold transition-all duration-300 rounded-xl px-6 py-4 flex items-center justify-center gap-2 cursor-none text-sm group"
                  data-cursor="pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Connection...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={14}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 text-blue-200"
                      />
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          )}
        </div>

        {/* Right Side: Quick Connect Panels */}
        <div className="animate-sidebar-item opacity-0 lg:col-span-2 space-y-6">
          {/* Email Copy Card Widget */}
          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/45 relative group">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Direct Connection
            </span>
            <h4 className="text-white font-semibold text-lg mt-2 mb-1">
              Email Address
            </h4>
            <p className="text-zinc-400 text-xs font-light mb-4">
              Salin e-mail untuk mengirim kontak via client email pilihan Anda.
            </p>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between gap-4 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 px-4 py-3 rounded-xl transition duration-300 text-zinc-300 font-medium hover:text-white cursor-none"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <span className="text-xs font-mono truncate">
                  fajriaulia019@gmail.com
                </span>
              </div>
              <div className="text-zinc-500 group-hover:text-zinc-350 shrink-0">
                {copied ? (
                  <Check size={14} className="text-emerald-400 animate-pulse" />
                ) : (
                  <Copy size={13} />
                )}
              </div>
            </button>

            {/* Micro Toast Notification */}
            {copied && (
              <span className="absolute bottom-2.5 right-6 text-[10px] text-emerald-400 font-mono animate-fade-in">
                berhasil disalin!
              </span>
            )}
          </div>

          {/* Social Channels List */}
          <div className="grid grid-cols-2 gap-4">
            {/* GitHub Card */}
            <a
              href="https://github.com/fajriaulia019"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/45 hover:border-blue-500/20 hover:shadow-md hover:shadow-blue-500/5 transition duration-300 flex flex-col justify-between aspect-square group cursor-none"
              data-cursor="pointer"
            >
              <div className="p-3 bg-zinc-900/50 group-hover:bg-blue-500/10 text-zinc-400 group-hover:text-blue-400 rounded-xl w-fit transition duration-300">
                <svg
                  className="w-5 h-5 text-current fill-current"
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
              <div>
                <h5 className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Code Repository
                </h5>
                <h4 className="text-white font-semibold mt-1 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                  GitHub
                </h4>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="#"
              className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/45 hover:border-blue-500/20 hover:shadow-md hover:shadow-blue-500/5 transition duration-300 flex flex-col justify-between aspect-square group cursor-none"
              data-cursor="pointer"
            >
              <div className="p-3 bg-zinc-900/50 group-hover:bg-blue-500/10 text-zinc-400 group-hover:text-blue-400 rounded-xl w-fit transition duration-300">
                <svg
                  className="w-5 h-5 text-current fill-current"
                  viewBox="0 0 24 24"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  Professional Network
                </h5>
                <h4 className="text-white font-semibold mt-1 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
