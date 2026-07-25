import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectProps = {
  title: string;
  description: string;
  tech: string;
  slug: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  slug,
  image,
}: ProjectProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover brightness-40 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <p className="mt-2 text-sm text-muted-foreground">
          {tech}
        </p>
      </CardHeader>
      <CardFooter>
        <Link href={`/projects/${slug}`} className="w-full">
          <Button className="w-full">View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}