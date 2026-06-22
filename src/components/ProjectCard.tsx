import Link from "next/link"

type ProjectProps = {
    title : string
    description: string
    tech: string
    slug: string
}

export default function ProjectCard({
    title,
    description,
    tech,
    slug
}: ProjectProps) {
  return (
    <div className="border p-5 rounded-lg">
        <h2 className="text-2xl font-bold">
            {title}
        </h2>
        <p className="mt-2">
            {description}
        </p>
        <p className="mt-3 text-sm">
            {tech}
        </p>
        <Link href={`/projects/${slug}`} 
        className="mt-3 inline-block">
            Detail
        </Link>
      
    </div>
  )
}


