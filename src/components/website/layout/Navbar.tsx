"use client";

import { useEffect, useState } from "react";
import GooeyNav from "@/components/GooeyNav";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const activeIndex = menus.findIndex((menu) => menu.href === pathname);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl"
            : "bg-zinc-950/20 backdrop-blur-md"
        }`}
      >
        {/* ================= MOBILE ================= */}

        <div className="mx-auto flex h-20 items-center justify-between px-5 lg:hidden">
          <h1 className="font-semibold text-white text-lg">
            Fajri<span className="text-orange-500">.</span>
          </h1>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl border border-zinc-800 p-2 text-white transition hover:border-orange-500"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}

        <div
          style={{
            height: "110px",
            position: "relative",
            overflow: "hidden",
          }}
          className="hidden items-center justify-center lg:flex"
        >
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

          <div className="absolute right-12">
            <AnimatedThemeToggler />
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
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        />

        {/* Gooey Background */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute left-20 top-32 h-52 w-52 rounded-full bg-orange-500/20 blur-[90px] animate-pulse" />

        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-red-500/20 blur-[80px] animate-pulse" />

        {/* Content */}

        <div className="relative flex h-full flex-col">
          <div className="flex h-20 items-center justify-between px-5">
            <h1 className="font-semibold text-lg text-white">
              Fajri<span className="text-orange-500">.</span>
            </h1>

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl border border-zinc-700 p-2 text-white"
            >
              <X />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {menus.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative text-3xl font-semibold text-zinc-300 transition hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
