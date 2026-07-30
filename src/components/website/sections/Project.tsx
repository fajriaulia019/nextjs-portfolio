"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "@/components/website/cards/ProjectCard";
import { projects } from "@/data/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Project() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (el) {
      const cards = Array.from(el.children);

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-8 px-6 w-full">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
            My Portfolio
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Projects
          </h1>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Selected works showcasing web development, full-stack pipelines, and
            database integrations.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              index={index}
              slug={project.slug}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
