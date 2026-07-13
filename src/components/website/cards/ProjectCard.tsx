import Link from "next/link"
import Image from "next/image"

type ProjectProps = {
    title : string
    description: string
    tech: string
    slug: string
    image: string
}

export default function ProjectCard({
    title,
    description,
    tech,
    slug,
    image
}: ProjectProps) {
  return (
    <div className="border p-6 rounded-xl hover:shadow-xl transition">

        <div className="border rounded-2xl overflow-hidden bg-white aspect-4/3">
            <Image 
            src={image}
            width={600}
            height={400}
            alt={title} />
        </div>
        <h2 className="text-2xl font-bold">
            {title}
        </h2>
        <p className="mt-3 text-gray-600">
            {description}
        </p>
        <p className="mt-4 text-sm">
            {tech}
        </p>
        <Link href={`/projects/${slug}`} 
        className="mt-5 inline-block font-medium">
            Detail
        </Link>
      
    </div>
  )
}


