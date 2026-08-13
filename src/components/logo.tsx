import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 overflow-hidden shrink-0",
        className,
      )}
    >
      <svg
        className="w-[55%] h-[55%]"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Futuristic geometric monogram 'F' + 'A' (Fajri Aulia) */}
        {/* Stem of F */}
        <path d="M150 120 H210 V392 H150 Z" fill="#ffffff" />

        {/* Top bar of F */}
        <path d="M210 120 H360 L330 180 H210 Z" fill="#ffffff" />

        {/* Middle bar of F */}
        <path d="M210 220 H300 L275 280 H210 Z" fill="#ffffff" />

        {/* Diagonal forming the 'A' leg (monogram feature) */}
        <path
          d="M245 220 L335 392 H275 L200 250 Z"
          fill="#93c5fd"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export const Logo = LogoIcon;
