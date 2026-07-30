"use client";

import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Calendar, Code2, Shield, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/website/cards/ExperienceCard";

export default function ExperienceSubpage() {
  const [activeCategory, setActiveCategory] = useState<
    "ALL" | "FRONTEND" | "BACKEND"
  >("ALL");
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Filter items based on active category
  const filteredExperiences = experiences.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory,
  );

  useEffect(() => {
    gsap.fromTo(
      ".animate-header-item",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      ".animate-filter-item",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 },
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = timelineRef.current;
    if (timeline) {
      const cards = timeline.querySelectorAll(".experience-card-wrapper");

      // Animate entry of nodes and cards directly on render/filter changes
      gsap.fromTo(
        Array.from(cards),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }
  }, [activeCategory]);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[30%] left-[-15%] w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-[20%] right-[-15%] w-80 h-80 rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "7s" }}
      />

      {/* Header section */}
      <div className="space-y-4 mb-16 text-center lg:text-left">
        <h2 className="animate-header-item opacity-0 text-sm font-semibold tracking-wider text-blue-500 uppercase flex items-center justify-center lg:justify-start gap-2">
          <Briefcase size={14} className="text-blue-500 animate-pulse" />
          System.log : job_history
        </h2>
        <h1 className="animate-header-item opacity-0 text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Work Experience
        </h1>
        <p className="animate-header-item opacity-0 text-zinc-400 text-sm md:text-base max-w-xl">
          Exploring my professional development timeline and backend system log
          history.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="animate-filter-item opacity-0 flex justify-center lg:justify-start gap-3 mb-12">
        {(["ALL", "FRONTEND", "BACKEND"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl border text-xs font-semibold tracking-wider transition-all duration-300 uppercase cursor-none flex items-center gap-1.5 ${
              activeCategory === cat
                ? "border-blue-500/30 bg-blue-600/10 text-blue-400 shadow-md shadow-blue-500/10"
                : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700"
            }`}
            data-cursor="pointer"
          >
            {cat === "FRONTEND" && <Code2 size={12} />}
            {cat === "BACKEND" && <Shield size={12} />}
            {cat === "ALL" && <Sparkles size={12} />}
            {cat === "FRONTEND"
              ? "Frontend"
              : cat === "BACKEND"
                ? "Backend"
                : "Show All"}
          </button>
        ))}
      </div>

      {/* Experience vertical timeline */}
      <div ref={timelineRef} className="relative pl-8 md:pl-10 space-y-12">
        {/* Timeline main vertical axis */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/45 via-indigo-500/20 to-transparent" />

        {filteredExperiences.map((item, idx) => (
          <ExperienceCard
            key={`${activeCategory}-${idx}`}
            item={item}
            index={idx}
          />
        ))}
      </div>
    </main>
  );
}
