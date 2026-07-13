import ProjectCard from "@/components/website/cards/ProjectCard";
import { projects } from "@/data/project";

function ProjectsPage() {
  return (
    <main>
        <h1>
            My Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    slug ={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    image={project.image}
                />
            ))}
        </div>
    </main>
  );
}

export default ProjectsPage;
