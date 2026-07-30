"use client";

import React, { useEffect, useRef } from "react";
import ProjectCard from "@/components/website/cards/ProjectCard";
import { projects } from "@/data/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate Header
    const header = headerRef.current;
    if (header) {
      gsap.fromTo(
        Array.from(header.children),
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      );
    }

    // Animate Cards Grid on Scroll
    const grid = gridRef.current;
    if (grid) {
      const cards = Array.from(grid.children);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div
        ref={headerRef}
        className="relative z-10 space-y-4 mb-16 text-center lg:text-left"
      >
        <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
          Selected Works
        </h2>
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          My Projects
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl">
          Explore the web applications, modules, and full-stack solutions I've
          developed.
        </p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 gap-8 mt-10">
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
    </main>
  );
}

export default ProjectsPage;
