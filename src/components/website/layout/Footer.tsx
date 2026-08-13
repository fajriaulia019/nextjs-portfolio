"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/logo";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="relative py-12 md:py-16 bg-[#030014] text-zinc-400 border-t border-zinc-900/50 overflow-hidden">
      {/* Top thin neon glow divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Ambient neon radial glows */}
      <div className="absolute -bottom-10 left-1/4 -z-10 h-32 w-32 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute -bottom-10 right-1/4 -z-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 border-b border-zinc-900/30">
          {/* Left Column - Brand Emblem */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-4">
            <Link
              href="/"
              aria-label="go home"
              className="flex items-center gap-2.5 group/logo cursor-none"
              data-cursor="pointer"
            >
              <LogoIcon className="h-9 w-9 shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover/logo:rotate-12 group-hover/logo:scale-105 transition-all duration-300" />
              <span className="font-bold text-white tracking-widest group-hover/logo:text-blue-400 transition-colors duration-300 text-sm">
                FAJRI<span className="text-blue-500">.</span>
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-zinc-500">
              Full-Stack Web Developer. Building robust, secure, and modern web
              applications with a focus on clean architecture, performance, and
              responsive interfaces.
            </p>
          </div>

          {/* Middle Column - Links */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`text-sm transition-colors duration-150 block cursor-none ${
                      isActive
                        ? "text-blue-400 font-medium"
                        : "text-zinc-500 hover:text-blue-400"
                    }`}
                    data-cursor="pointer"
                    style={{ contentVisibility: "auto" }}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column - Connect */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="mailto:fajriaulia019@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-950/40 text-zinc-500 hover:border-blue-500/40 hover:text-white transition duration-200 cursor-none"
                data-cursor="pointer"
              >
                <Mail size={16} />
              </Link>
              <Link
                href="https://github.com/fajriaulia019"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-950/40 text-zinc-500 hover:border-blue-500/40 hover:text-white transition duration-200 cursor-none"
                data-cursor="pointer"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/fajri-aulia-rahman-723599398"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-950/40 text-zinc-500 hover:border-blue-500/40 hover:text-white transition duration-200 cursor-none"
                data-cursor="pointer"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-zinc-600 text-xs text-center sm:text-left block">
            © {currentYear} Fajri Aulia. All rights reserved.
          </span>
          <span className="text-zinc-600 text-xs font-mono tracking-wide">
            [Designed & Built by Fajri Aulia]
          </span>
        </div>
      </div>
    </footer>
  );
}
