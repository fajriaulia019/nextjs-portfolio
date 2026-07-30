"use client";

import React, { use, useEffect, useRef } from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectDetail({
  params,
}: {
  params: React.Usable<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((item) => item.slug === slug);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load reveal
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    );

    const leftCol = leftColRef.current;
    if (leftCol) {
      gsap.fromTo(
        leftCol.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftCol,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    const rightCol = rightColRef.current;
    if (rightCol) {
      gsap.fromTo(
        rightCol.children,
        { opacity: 0, scale: 0.96, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightCol,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, [project]);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-24 px-6 max-w-xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Project tidak ditemukan
        </h1>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition"
        >
          <ArrowLeft size={16} />
          Kembali ke Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Header back navigate controls */}
      <div ref={headerRef} className="flex flex-col items-start gap-4 mb-8">
        <Magnetic>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition duration-300 font-medium cursor-none"
            data-cursor="pointer"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </Magnetic>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mt-2">
          {project.title}
        </h1>
      </div>

      {/* Dual Column Layout Grid */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Image previews, Description, Features list */}
        <div ref={leftColRef} className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-blue-500/10 bg-zinc-950/40 shadow-lg shadow-blue-500/2">
            <div className="absolute inset-0 bg-black/10 z-10" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="border border-blue-500/5 bg-zinc-950/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-4">
            <h2 className="text-xl font-bold text-white mb-2 border-b border-zinc-900 pb-2">
              Project Overview
            </h2>
            <p className="text-zinc-350 text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="border border-blue-500/5 bg-zinc-950/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-4">
            <h2 className="text-xl font-bold text-white mb-4 border-b border-zinc-900 pb-2">
              Key Features
            </h2>
            <ul className="grid gap-3.5 sm:grid-cols-1">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed group"
                >
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 mt-1 shrink-0 transition-transform duration-300 group-hover:scale-115"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Spec cards, tech badges list, links */}
        <div ref={rightColRef} className="lg:col-span-1 space-y-6">
          <div className="border border-blue-500/10 bg-zinc-950/45 rounded-2xl p-6 backdrop-blur-md space-y-5">
            <h3 className="text-md font-bold text-white border-b border-zinc-900 pb-2">
              Specifications
            </h3>

            <div className="space-y-4">
              {[
                {
                  label: "My Role",
                  value: project.role,
                  icon: (
                    <ShieldCheck
                      className="text-blue-500 shrink-0 mt-0.5"
                      size={18}
                    />
                  ),
                },
                {
                  label: "Timeline",
                  value: project.date,
                  icon: (
                    <Calendar
                      className="text-blue-500 shrink-0 mt-0.5"
                      size={18}
                    />
                  ),
                },
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {spec.icon}
                  <div>
                    <h4 className="text-xs text-zinc-500 font-medium uppercase font-mono">
                      {spec.label}
                    </h4>
                    <p className="text-sm font-semibold text-zinc-200 mt-0.5">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-zinc-900" />

            <div>
              <h4 className="text-xs text-zinc-500 font-semibold uppercase font-mono mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.split(",").map((t) => (
                  <span
                    key={t.trim()}
                    className="rounded-md bg-blue-950/20 border border-blue-900/30 px-2.5 py-1 text-xs text-blue-400 font-medium"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.demoUrl && (
              <Magnetic className="w-full">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/35 hover:-translate-y-0.5 cursor-none"
                  data-cursor="pointer"
                >
                  Visit Live Demo
                  <ExternalLink size={16} />
                </a>
              </Magnetic>
            )}

            {project.githubUrl && (
              <Magnetic className="w-full">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/60 hover:text-white hover:-translate-y-0.5 cursor-none"
                  data-cursor="pointer"
                >
                  View Source Code
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38l-.01-1.44-2.22.48c-.08.01-.15.02-.24.02-.64 0-1.22-.38-1.42-.98-.22-.61-.63-.98-.82-1.07l-.27-.14c-.03-.02-.06-.05-.09-.09 0 0-.01-.01-.01-.01s-.01 0-.01-.01c-.13-.08-.19-.17-.19-.3 0-.17.15-.3.33-.3.12 0 .23.05.34.13.43.33.72.63 1.13.78.29.11.59.13.88.08.38-.07.7-.27.87-.51.05-.12.15-.24.27-.33-.94-.1-1.92-.37-2.61-.91-.71-.56-1.12-1.4-1.12-2.39 0-.46.12-.9.34-1.32-.15-.42-.31-1.05.02-1.89l.34.05.74.34c.54.26 1.07.64 1.5.99.39-.12.8-.18 1.25-.18s.86.06 1.25.18c.43-.35.96-.73 1.5-.99l.74-.34.34-.05c.34.84.18 1.47.03 1.89.23.42.34.86.34 1.32 0 .98-.4 1.82-1.12 2.39-.68.54-1.66.81-2.61.91.15.11.27.27.35.48.06.18.09.39.09.61l-.01 2.2c0 .21.15.46.55.38C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
