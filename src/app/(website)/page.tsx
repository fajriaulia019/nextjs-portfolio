import Image from "next/image";
import Hero from "@/components/website/sections/Hero"
import Project from "@/components/website/sections/Project"
import Skills from "@/components/website/sections/Skills" 
import Contact from "@/components/website/sections/Contact";
import Navbar from "@/components/website/layout/Navbar";
import Footer from "@/components/website/layout/Footer";


export default function Home() {
  return (
      <main className="relative min-h-screen mx-auto px-5">
        
        <Hero />
        <Skills />
        <Project />
        <Contact />
      
      </main>
  );
}
