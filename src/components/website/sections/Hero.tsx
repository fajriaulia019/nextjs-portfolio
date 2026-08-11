"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import dynamic from "next/dynamic";
import DotField from "@/components/DotField";

const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="relative z-0 w-full h-[320px] sm:h-[400px] md:h-screen flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  ),
});
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lanyardRef = useRef<HTMLDivElement>(null);
  const mobileLanyardRef = useRef<HTMLDivElement>(null);

  // Dynamic Typewriter Roles
  const roles = [
    "Full-Stack Developer",
    "Laravel Specialist",
    "Backend Engineer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [roleText, setRoleText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(100);

  // Canvas Lanyard textures
  const [badgeImages, setBadgeImages] = React.useState<{
    front: string;
    back: string;
  }>({
    front: "",
    back: "",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setRoleText(fullText.substring(0, roleText.length + 1));
        setTypingSpeed(100);

        if (roleText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setRoleText(fullText.substring(0, roleText.length - 1));
        setTypingSpeed(50);

        if (roleText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const W = 400;
    const H = 640;

    // Front Canvas
    const canvasFront = document.createElement("canvas");
    canvasFront.width = W;
    canvasFront.height = H;
    const ctxF = canvasFront.getContext("2d");
    if (!ctxF) return;

    // Drawing front bg
    ctxF.fillStyle = "#09090b";
    ctxF.fillRect(0, 0, W, H);

    // Matrix Grid lines
    ctxF.strokeStyle = "rgba(59, 130, 246, 0.08)";
    ctxF.lineWidth = 1;
    for (let i = 20; i < W; i += 30) {
      ctxF.beginPath();
      ctxF.moveTo(i, 0);
      ctxF.lineTo(i, H);
      ctxF.stroke();
    }
    for (let j = 20; j < H; j += 30) {
      ctxF.beginPath();
      ctxF.moveTo(0, j);
      ctxF.lineTo(W, j);
      ctxF.stroke();
    }

    ctxF.strokeStyle = "rgba(59, 130, 246, 0.35)";
    ctxF.lineWidth = 6;
    ctxF.strokeRect(10, 10, W - 20, H - 20);

    ctxF.fillStyle = "#3b82f6";
    ctxF.font = "bold 26px monospace";
    ctxF.fillText("F [.]", 30, 55);

    ctxF.fillStyle = "rgba(59, 130, 246, 0.5)";
    ctxF.font = "10px monospace";
    ctxF.fillText("[ SECURITY PASS: L3 ]", 30, 80);

    // User photo loader
    const imgPhoto = new Image();
    imgPhoto.crossOrigin = "anonymous";
    imgPhoto.src = "/img/profil.jpeg";

    const drawBadgeDetails = () => {
      ctxF.save();
      ctxF.beginPath();
      ctxF.roundRect(110, 120, 180, 180, 24);
      ctxF.clip();
      try {
        if (imgPhoto.complete && imgPhoto.naturalWidth !== 0) {
          ctxF.drawImage(imgPhoto, 110, 120, 180, 180);
        } else {
          ctxF.fillStyle = "#1e293b";
          ctxF.fillRect(110, 120, 180, 180);
          ctxF.fillStyle = "#64748b";
          ctxF.font = "bold 16px monospace";
          ctxF.textAlign = "center";
          ctxF.fillText("FAJRI PHOTO", 200, 215);
        }
      } catch (err) {
        ctxF.fillStyle = "#1e293b";
        ctxF.fillRect(110, 120, 180, 180);
      }
      ctxF.restore();

      ctxF.strokeStyle = "rgba(59, 130, 246, 0.5)";
      ctxF.lineWidth = 3;
      ctxF.beginPath();
      ctxF.roundRect(110, 120, 180, 180, 24);
      ctxF.stroke();

      ctxF.fillStyle = "#ffffff";
      ctxF.font = "bold 26px system-ui, sans-serif";
      ctxF.textAlign = "center";
      ctxF.fillText("FAJRI AULIA", 200, 360);

      ctxF.fillStyle = "#60a5fa";
      ctxF.font = "bold 12px monospace";
      ctxF.fillText("FULL-STACK DEVELOPER", 200, 395);

      ctxF.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctxF.font = "9px monospace";
      ctxF.textAlign = "left";
      ctxF.fillText("DEPT: RESEARCH & ENG", 45, 450);
      ctxF.fillText("UUID: 9f8a32-bc78", 45, 475);
      ctxF.fillText("EXPIRED: 25.07.2028", 45, 500);

      ctxF.fillStyle = "#ffffff";
      ctxF.fillRect(45, 530, 310, 8);
      ctxF.fillStyle = "#000000";
      for (let x = 50; x < 350; x += Math.random() * 12 + 4) {
        ctxF.fillRect(x, 530, Math.random() * 3 + 2, 45);
      }

      // Back Canvas
      const canvasBack = document.createElement("canvas");
      canvasBack.width = W;
      canvasBack.height = H;
      const ctxB = canvasBack.getContext("2d");
      if (ctxB) {
        ctxB.fillStyle = "#09090b";
        ctxB.fillRect(0, 0, W, H);
        ctxB.strokeStyle = "rgba(59, 130, 246, 0.35)";
        ctxB.lineWidth = 6;
        ctxB.strokeRect(10, 10, W - 20, H - 20);

        ctxB.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctxB.font = "10px monospace";
        ctxB.fillText("SECURITY REGULATIONS LEVEL 3", 45, 200);
        ctxB.fillText("1. DO NOT DUPLICATE THIS PASS.", 45, 230);
        ctxB.fillText("2. SUBJECT TO DISCIPLINARY ACTIONS.", 45, 260);

        ctxB.fillStyle = "#60a5fa";
        ctxB.font = "11px monospace";
        ctxB.fillText("AUTHORIZATION SYSTEM ACTIVE", 45, 390);

        setBadgeImages({
          front: canvasFront.toDataURL(),
          back: canvasBack.toDataURL(),
        });
      }
    };

    imgPhoto.onload = drawBadgeDetails;
    imgPhoto.onerror = drawBadgeDetails;
    setTimeout(drawBadgeDetails, 500);
  }, []);

  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const content = contentRef.current;
    const lanyard = lanyardRef.current;
    const mobileLanyard = mobileLanyardRef.current;

    const ctx = gsap.context(() => {
      if (content) {
        gsap.to(content, {
          opacity: 0.15,
          y: -80,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "50px top",
            end: "bottom 30%",
            scrub: true,
          },
        });
      }

      if (lanyard) {
        gsap.to(lanyard, {
          y: 100,
          scale: 0.92,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.0,
          },
        });
      }

      if (mobileLanyard) {
        gsap.to(mobileLanyard, {
          y: 50,
          scale: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.0,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isMobileView]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="py-25 absolute inset-0 z-0">
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

      <div className="container mx-auto w-full grid items-center col-span-12 lg:grid-cols-2 relative pb-16 bg-transparent">
        {/* Left Lanyard - Only shown on Desktop */}
        {!isMobileView && (
          <div
            ref={lanyardRef}
            className="hidden lg:flex w-full md:min-w-full items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ willChange: "transform", transformStyle: "preserve-3d" }}
            data-cursor="drag"
          >
            <Lanyard
              position={[0, 3, 12]}
              gravity={[0, -40, 0]}
              frontImage={badgeImages.front}
              backImage={badgeImages.back}
              imageFit="cover"
              lanyardImage=""
              lanyardWidth={1}
              transparent={true}
            />
          </div>
        )}

        {/* Right Info */}
        <div
          ref={contentRef}
          className="text-center max-w-3xl w-full md:min-w-full lg:text-left px-4"
        >
          <h1 className="mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Fajri Aulia
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-zinc-300 sm:text-2xl lg:text-3xl min-h-[40px]">
            <span className="text-blue-400 font-mono text-sm tracking-wider mr-2">
              &lt;Coder /&gt;
            </span>
            {roleText}
            <span className="animate-ping font-light text-blue-500 ml-1">
              |
            </span>
          </h2>

          {/* Mobile Lanyard (Only shown on Mobile viewports inline) */}
          {isMobileView && (
            <div
              ref={mobileLanyardRef}
              className="lg:hidden flex justify-center w-full my-4"
              style={{ willChange: "transform", transformStyle: "preserve-3d" }}
            >
              <Lanyard
                position={[0, -1, 14]}
                gravity={[0, -40, 0]}
                frontImage={badgeImages.front}
                backImage={badgeImages.back}
                imageFit="cover"
                lanyardImage=""
                lanyardWidth={1}
                transparent={true}
              />
            </div>
          )}

          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-zinc-400 lg:mx-0 lg:text-lg">
            Information Technology graduate with hands-on experience building
            secure, high-performance web applications using Laravel, Next.js,
            and MySQL. Passionate about clean code and full-stack craft.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Magnetic>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/35 hover:translate-y-[-2px] active:translate-y-[0px] cursor-pointer"
                data-cursor="pointer"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/60 hover:text-white hover:translate-y-[-2px] active:translate-y-[0px] cursor-pointer"
                data-cursor="pointer"
              >
                Download CV
                <Download size={16} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
