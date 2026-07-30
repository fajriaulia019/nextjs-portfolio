"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0.2, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col justify-center"
    >
      <div
        ref={containerRef}
        className="max-w-3xl mx-auto rounded-3xl border border-blue-500/10 bg-zinc-950/45 p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-md w-full"
      >
        {/* Glow blobs on hover */}
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-blue-600/10 blur-[90px] -z-10" />
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-600/5 blur-[90px] -z-10" />

        <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Get In Touch
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Let&apos;s Build Something
          <br />
          Awesome Together
        </h1>
        <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light">
          Apakah Anda memiliki ide proyek menarik, membutuhkan bantuan
          pengembangan web Laravel atau Next.js, atau hanya sekadar ingin
          berdiskusi? Jangan ragu untuk memulai percakapan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300 cursor-none group"
              data-cursor="pointer"
            >
              Start a Conversation
              <ArrowRight
                size={15}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </Magnetic>

          <Magnetic>
            <a
              href="mailto:fajriaulia020@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/60 hover:text-white cursor-none"
              data-cursor="pointer"
            >
              <Mail size={16} className="text-blue-400" />
              Quick Email
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
