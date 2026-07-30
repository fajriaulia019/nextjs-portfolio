import Navbar from "@/components/website/layout/Navbar";
import Footer from "@/components/website/layout/Footer";
import InteractiveCursor from "@/components/website/layout/InteractiveCursor";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <InteractiveCursor />
      <Navbar />
      <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden">
        {/* Cyberpunk dot grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(59,130,246,0.02)_1.5px,transparent_1.5px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20" />

        {/* Floating neon ambient auras */}
        <div className="absolute top-[15%] left-10 w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] -z-10 animate-pulse" />
        <div
          className="absolute top-[50%] right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-[130px] -z-10 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-[10%] left-16 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] -z-10 animate-pulse"
          style={{ animationDuration: "9s" }}
        />

        <main className="relative z-10">{children}</main>
      </div>
      <Footer />
    </>
  );
}
