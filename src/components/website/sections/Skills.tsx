"use client";

import React, { useEffect, useRef } from "react";
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    name: "Web Development",
    description:
      "Skilled in full-stack web development using PHP, Laravel, React.js, Next.js, and TypeScript.",
    icon: (
      <svg
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: "Web Security",
    description:
      "Focus on implementing secure authentication, data protection, access controls, and defense against common vulnerabilities.",
    icon: (
      <svg
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: "Databases & Backend",
    description:
      "Expertise building relational schemas with MySQL, optimizing queries, and handling migrations.",
    icon: (
      <svg
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
];

export default function Skills() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;
    if (cards) {
      const childCards = Array.from(cards.children);

      gsap.fromTo(
        childCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-10 px-6 w-full">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
            My Expertise
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Skills
          </h1>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Core technologies and tools I specialize in to construct secure,
            database-driven web infrastructure.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <Magnetic
              key={skill.name}
              strength={0.15}
              className="w-full h-full"
            >
              <div
                onMouseMove={handleMouseMove}
                className="group relative rounded-2xl border border-blue-500/10 bg-zinc-950/45 p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden h-full cursor-none"
                data-cursor="pointer"
              >
                {/* Mouse spotlight tracker overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(350px at var(--x, 0px) var(--y, 0px), rgba(59, 130, 246, 0.08), transparent)",
                  }}
                />

                {/* Animated scanline laser sweep */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/[0.04] to-blue-500/0 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />

                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-950/5 relative z-10">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                  {skill.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed relative z-10">
                  {skill.description}
                </p>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
