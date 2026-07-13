import Image from "next/image";
import Hero from "@/components/website/sections/Hero"
import Project from "@/components/website/sections/Project"
import Skills from "@/components/website/sections/Skills" 
import Contact from "@/components/website/sections/Contact";


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
