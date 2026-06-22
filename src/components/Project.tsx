import ProjectCard from "./ProjectCard"
import { projects } from "@/data/project"

function Project() {
  return (
    <section>
        <h1 className="text-3xl font-bold">
            Projects
        </h1>

        <div className="grid gap-5 mt-5">
            {projects.map((project) => (
                <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                tech={project.tech}
                />
            ))}
        </div>
    </section>
  )
}

export default Project



