import Image from "next/image";
import Hero from "@/components/Hero"
import Project from "@/components/Project"
import Skills from "@/components/Skills" 
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="relative mx-auto px-5">
        <Hero />

        <Skills />

        <Project />

        <Contact />

      </main>
  );
}
