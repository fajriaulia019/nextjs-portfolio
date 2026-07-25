"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Lanyard from "@/components/Lanyard";
import DotField from "@/components/DotField";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden b">
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#1253be"
            gradientTo="#3639cc"
            glowColor="#120F17"
          />
        </div>
      <div className="container mx-auto w-full grid items-center col-span-12 lg:grid-cols-2">
        
        {/* Left */}
        <div className="min-w-screen md:min-w-full items-center justify-center">
          <Lanyard
            position={[0, -1, 14]}
            gravity={[0, -40, 0]}
            frontImage=""
            backImage=""
            imageFit="cover"
            lanyardImage=""
            lanyardWidth={1}
            transparent={true}
          />
        </div>

        {/* Right */}
        <div className="text-center max-w-3xl min-w-screen md:min-w-full lg:text-left">
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I'm
            <br />
            <span className="text-orange-500">Fajri Aulia</span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-zinc-300 sm:text-2xl lg:text-3xl">
            QA Analyst & Web Developer
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-zinc-400 lg:mx-0 lg:text-lg">
            Fresh Graduate in Information Technology with internship experience
            developing Laravel applications using PHP, Laravel, and MySQL.
            Passionate about building reliable web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
