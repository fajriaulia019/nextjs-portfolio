"use client";

import React, { useEffect, useState } from "react";

const chapters = [
  {
    id: "origin",
    label: "PHASE-01",
    name: "THE ORIGIN",
    status: "ONLINE",
    coordinates: "LOC://40.10.9",
  },
  {
    id: "arsenal",
    label: "PHASE-02",
    name: "THE ARSENAL",
    status: "READY",
    coordinates: "LOC://40.12.8",
  },
  {
    id: "repertoire",
    label: "PHASE-03",
    name: "THE REPERTOIRE",
    status: "STABLE",
    coordinates: "LOC://41.05.2",
  },
  {
    id: "convergence",
    label: "PHASE-04",
    name: "THE CONVERGENCE",
    status: "SYNCED",
    coordinates: "LOC://42.14.7",
  },
];

export default function StorylineTrack() {
  const [activeId, setActiveId] = useState("origin");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Live system clock overlay
    const timer = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when center of viewport passes section
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => {
      chapters.forEach((ch) => {
        const el = document.getElementById(ch.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Left Cyberpunk HUD Stepper */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-start gap-8 z-40 bg-zinc-950/60 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.05)] w-72 select-none">
        {/* Core telemetry details */}
        <div className="w-full flex items-center justify-between border-b border-zinc-800 pb-3 mb-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-zinc-500 font-mono tracking-wider">
              PROTOCOL // MAIN
            </span>
            <span className="text-xs font-semibold text-blue-400 font-mono animate-pulse">
              SYS_SECURE_LINK // ON
            </span>
          </div>
          <span className="text-xs font-bold text-zinc-400 font-mono">
            {time || "12:00:00"}
          </span>
        </div>

        <div className="relative w-full flex flex-col gap-6 pl-4 border-l border-zinc-800/80">
          {chapters.map((ch, idx) => {
            const isActive = activeId === ch.id;
            return (
              <div key={ch.id} className="relative group/ch">
                {/* Active Indicator dot overlay */}
                <div
                  className={`absolute -left-[21px] top-1.5 w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] scale-125"
                      : "bg-zinc-800 scale-100 group-hover/ch:bg-zinc-600"
                  }`}
                />

                <button
                  onClick={() => scrollToSection(ch.id)}
                  className="flex flex-col items-start cursor-pointer text-left w-full"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-blue-500"
                          : "text-zinc-600 group-hover/ch:text-zinc-400"
                      }`}
                    >
                      {ch.label}
                    </span>
                    <span
                      className={`text-[9px] font-mono border px-1 rounded transition-colors duration-300 ${
                        isActive
                          ? "border-blue-500/30 bg-blue-950/20 text-blue-400"
                          : "border-zinc-800 text-zinc-650"
                      }`}
                    >
                      {ch.status}
                    </span>
                  </div>

                  <span
                    className={`text-sm font-bold tracking-wide mt-0.5 transition-all duration-300 ${
                      isActive
                        ? "text-white translate-x-1"
                        : "text-zinc-400 group-hover/ch:text-zinc-200"
                    }`}
                  >
                    {ch.name}
                  </span>

                  <span className="text-[9px] font-mono text-zinc-600 mt-0.5">
                    {ch.coordinates}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Diagnostic logs */}
        <div className="w-full mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-1 text-[9px] font-mono text-zinc-650">
          <div className="flex justify-between">
            <span>MEM_ALLOC: 462MB</span>
            <span className="text-emerald-500">STABLE</span>
          </div>
          <div className="flex justify-between">
            <span>LATENCY: 12ms</span>
            <span className="text-blue-500">OPTIMAL</span>
          </div>
        </div>
      </div>
    </>
  );
}
