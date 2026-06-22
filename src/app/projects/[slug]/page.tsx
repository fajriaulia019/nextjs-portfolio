import { projects } from "@/data/project"

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{slug : string }>
}) {
    const { slug } = await params
    const project = projects.find(
        (item) => item.slug === slug
    )

    if (!project){
        return 
        <h1>Project tidak ditemukan</h1>
    }
  return (
    <main className="p-10">
        <h1 className="text-4xl font-bold">
            {project?.title}
        </h1>
        <p className="mt-5">
            {project?.description}
        </p>
        <p>
            {project?.tech}
        </p>
    </main>
  )
}


