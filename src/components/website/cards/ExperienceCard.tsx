import Image from "next/image";
import React, { useRef } from "react";
import { Calendar } from "lucide-react";
import { ExperienceType } from "@/data/experience";

type ExperienceCardProps = {
  item: ExperienceType;
  index: number;
};

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const serialStr = typeof index === "number" ? `0${index + 1}` : "";
  const isActive = item.status === "ACTIVE";

  return (
    <div className="experience-card-wrapper relative opacity-0">
      {/* Timeline interactive pulsing node bubble */}
      <div className="absolute left-[-29px] top-1.5 flex items-center justify-center z-20">
        <span
          className={`absolute w-4 h-4 rounded-full border bg-zinc-950 transition-all duration-300 ${
            isActive
              ? "border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)] scale-110"
              : "border-indigo-500/50"
          }`}
        />
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isActive ? "bg-emerald-400 animate-pulse" : "bg-indigo-400"
          }`}
        />
      </div>

      {/* Glassmorphic timeline card content */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative group rounded-3xl border border-zinc-900 bg-zinc-900/30 hover:bg-zinc-900/50 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden"
      >
        {/* Mouse spotlight tracker overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "radial-gradient(300px at var(--x, 0px) var(--y, 0px), rgba(59, 130, 246, 0.08), transparent)",
          }}
        />

        {/* Dynamic neon top border line reflection */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Card header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              {item.role}
            </h3>
            <p className="text-sm text-zinc-400 font-medium mt-1">
              {item.company}
            </p>
          </div>

          {/* Date & status pill badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar size={12} />
              <span>{item.period}</span>
            </div>

            <span
              className={`text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-wide uppercase ${
                isActive
                  ? "bg-emerald-500/5 border-emerald-500/30 text-emerald-400"
                  : "bg-blue-500/5 border-blue-500/20 text-blue-400"
              }`}
            >
              {isActive ? "Active" : "Completed"}
            </span>
          </div>
        </div>

        <div className="h-px bg-zinc-800/50 my-5" />

        {/* Job responsibilities description list */}
        <ul className="space-y-3.5 mb-6 text-sm text-zinc-400 text-left font-light leading-relaxed">
          {item.description.map((desc, dIdx) => (
            <li key={dIdx} className="flex gap-2.5 items-start">
              <span className="text-blue-500 mt-1 select-none font-bold text-xs">
                🗲
              </span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Job technical tag badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {item.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="rounded-md bg-zinc-950/60 border border-zinc-800/40 px-2.5 py-1 text-[10px] text-zinc-400 font-medium tracking-wide uppercase transition-colors duration-300 hover:border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
