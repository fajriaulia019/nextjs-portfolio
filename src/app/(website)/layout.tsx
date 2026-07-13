import Navbar from "@/components/website/layout/Navbar";
import Footer from "@/components/website/layout/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}