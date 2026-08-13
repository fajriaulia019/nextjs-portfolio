import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  tech: string;
  slug: string;
  image: string;
  index?: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  slug,
  image,
  index,
}: ProjectProps) {
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

  return (
    <Link
      href={`/projects/${slug}`}
      className="block w-full cursor-none group"
      data-cursor="pointer"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/45 p-6 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] hover:-translate-y-1.5 flex flex-col justify-between h-full overflow-hidden"
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

        <div className="space-y-4">
          {/* Cover Image Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/40">
            {/* Dark glass screen overlay */}
            <div className="absolute inset-0 bg-black/35 z-10 transition-opacity duration-300 group-hover:opacity-15" />

            {/* Floating serial tag */}
            {serialStr && (
              <div className="absolute top-3 left-3 z-20 rounded-md bg-zinc-950/80 border border-zinc-800/80 px-2.5 py-0.5 text-[10px] font-semibold text-blue-400 font-mono tracking-widest">
                {serialStr}
              </div>
            )}

            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
              {title}
            </h3>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4 pt-4 border-t border-zinc-900/50">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {tech.split(",").map((t) => (
              <span
                key={t.trim()}
                className="rounded-md bg-zinc-900/60 border border-zinc-800/40 px-2 py-0.5 text-[10px] text-zinc-400 font-medium tracking-wide uppercase transition-colors duration-300"
              >
                {t.trim()}
              </span>
            ))}
          </div>

          {/* Action indicator link */}
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors">
            <span>View Details</span>
            <ArrowRight
              size={13}
              className="transform group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
