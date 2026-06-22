import Link from "next/link"

function Navbar() {
  return (
    <nav>
        <h2>
          Fajri.dev
        </h2>
        <div className="flex gap-5">
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
    </nav>
  )
}

export default Navbar
