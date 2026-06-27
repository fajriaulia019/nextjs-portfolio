import Link from "next/link"

function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">
        <h2 className="font-bold text-xl">
          Fajri.dev
        </h2>
        <div className=" hidden md:flex gap-6">
            <Link  href="/">
                Home
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </div>

        <button className="md:hidden">
           ☰
        </button>
    </nav>
  )
}

export default Navbar
