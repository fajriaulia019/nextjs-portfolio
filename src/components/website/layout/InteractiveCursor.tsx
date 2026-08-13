"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function InteractiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState<
    "default" | "pointer" | "view" | "drag"
  >("default");

  useEffect(() => {
    // Check if device supports hover / touch issues
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice || !cursorRef.current || !ringRef.current) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    // Center coordinates
    const xToCursor = gsap.quickTo(cursor, "x", {
      duration: 0.1,
      ease: "power3.out",
    });
    const yToCursor = gsap.quickTo(cursor, "y", {
      duration: 0.1,
      ease: "power3.out",
    });

    const xToRing = gsap.quickTo(ring, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yToRing = gsap.quickTo(ring, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);

      // Inspect elements under pointer
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactive element
      const interactiveEl = target.closest(
        "[data-cursor], a, button, input, select, textarea",
      ) as HTMLElement;

      if (interactiveEl) {
        const cursorData = interactiveEl.getAttribute("data-cursor");
        if (cursorData === "view") {
          setCursorType("view");
        } else if (cursorData === "drag") {
          setCursorType("drag");
        } else {
          setCursorType("pointer");
        }
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  // Set ring size classes based on cursor type
  let ringClasses =
    "w-8 h-8 -top-4 -left-4 border border-blue-500/40 bg-transparent";
  let content = "";

  if (cursorType === "pointer") {
    ringClasses =
      "w-14 h-14 -top-7 -left-7 border border-blue-400 bg-blue-500/10 scale-110";
  } else if (cursorType === "view") {
    ringClasses =
      "w-16 h-16 -top-8 -left-8 bg-blue-600 border border-blue-500 flex items-center justify-center scale-100 shadow-[0_0_20px_rgba(59,130,246,0.3)]";
    content = "VIEW";
  } else if (cursorType === "drag") {
    ringClasses =
      "w-16 h-16 -top-8 -left-8 bg-cyan-600 border border-cyan-500 flex items-center justify-center scale-100 shadow-[0_0_20px_rgba(6,182,212,0.3)]";
    content = "DRAG";
  }

  return (
    <>
      {/* Hide on mobile devices */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        {/* Outer Ring */}
        <div
          ref={ringRef}
          className={`fixed rounded-full pointer-events-none transition-all duration-300 ease-out flex items-center justify-center text-[10px] font-bold text-white font-mono tracking-widest ${ringClasses}`}
        >
          {content}
        </div>
        {/* Inner Dot */}
        <div
          ref={cursorRef}
          className={`fixed w-2 h-2 -top-1 -left-1 rounded-full pointer-events-none transition-colors duration-200 lg:block ${
            cursorType !== "default"
              ? "bg-cyan-400 scale-75"
              : "bg-blue-500 scale-100"
          }`}
        />
      </div>
    </>
  );
}
