import Image from "next/image";
import Hero from "@/components/Hero"
import Project from "@/components/Project"
import Skills from "@/components/Skills" 

export default function Home() {
  return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero />
        <Project />
        <Skills />
      </main>
  );
}
