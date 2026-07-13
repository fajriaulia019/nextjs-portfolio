import { projects } from "@/data/project";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Fajri",
    description: "My web development projects"
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return;
    <h1>Project tidak ditemukan</h1>;
  }
  return (
    <main className="p-auto max-w-4xl ">
      <div className="border rounded-2xl overflow-hidden bg-white aspect-3/4">
        <Image src={project?.image} width={600} height={400} alt={project?.title} />
      </div>
      <h1 className="text-4xl font-bold">{project?.title}</h1>
      <p className="mt-5">{project?.description}</p>
      <p>{project?.tech}</p>
    </main>
  );
}
