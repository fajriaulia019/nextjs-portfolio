"use client";

import { useEffect, useState, useRef } from "react";
import GooeyNav from "@/components/GooeyNav";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/website/layout/Magnetic";
import gsap from "gsap";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const activeIndex = menus.findIndex((menu) => {
    if (menu.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(menu.href);
  });

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8 pointer-events-none">
        <div
          ref={headerRef}
          className={`mx-auto w-full pointer-events-auto transition-all duration-300 relative group ${
            scrolled
              ? "max-w-5xl rounded-2xl border border-blue-500/10 bg-zinc-950/75 shadow-lg shadow-blue-500/5 backdrop-blur-xl py-0.5"
              : "max-w-7xl rounded-2xl border border-transparent bg-transparent py-1"
          }`}
        >
          {/* Glowing border capsule aura */}
          <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />

          {/* ================= MOBILE ================= */}

          <div className="mx-auto flex h-16 items-center justify-between px-5 lg:hidden">
            <Link
              href="/"
              className="flex items-center gap-2 group/logo cursor-none"
              data-cursor="pointer"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover/logo:rotate-12 transition-transform duration-300">
                F
              </div>
              <span className="font-bold text-white tracking-widest text-xs">
                FAJRI<span className="text-blue-500">.</span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="rounded-xl border border-zinc-800 p-2 text-white transition hover:border-blue-500 hover:text-blue-500"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}

          <div className="hidden lg:flex w-full items-center justify-between px-6 h-20">
            {/* Logo segment */}
            <div className="flex-1 flex justify-start">
              <Magnetic>
                <Link
                  href="/"
                  className="flex items-center gap-2.5 group/logo cursor-none"
                  data-cursor="pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.35)] group-hover/logo:rotate-12 group-hover/logo:scale-105 transition-all duration-300">
                    F
                  </div>
                  <span className="font-bold text-white tracking-widest group-hover/logo:text-blue-400 transition-colors duration-300 text-sm">
                    FAJRI<span className="text-blue-500">.</span>
                  </span>
                </Link>
              </Magnetic>
            </div>

            {/* Central links */}
            <div className="flex-1 flex justify-center h-20 items-center relative">
              <GooeyNav
                items={menus}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={activeIndex}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>

            {/* Right Theme/CTA */}
            <div className="flex-1 flex items-center justify-end gap-5">
              <Magnetic>
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-none"
                  data-cursor="pointer"
                >
                  Let's Talk
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Background */}

        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Gooey Background */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute left-20 top-32 h-52 w-52 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />

        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-[90px] animate-pulse" />

        {/* Content */}

        <div className="relative flex h-full flex-col">
          <div className="flex h-20 items-center justify-between px-5">
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-none"
              onClick={() => setOpen(false)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md">
                F
              </div>
              <span className="font-bold text-white tracking-widest text-xs">
                FAJRI<span className="text-blue-500">.</span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl border border-zinc-700 p-2 text-white hover:border-blue-500 hover:text-blue-500 transition"
            >
              <X />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {menus.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`group relative text-3xl font-semibold transition duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
