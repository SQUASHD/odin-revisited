import { projectConfig } from "@/config/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectNavItem, ProjectStatus } from "@/types";

type ProjectCard = {
  type: "docs" | "new" | "old" | "in progress";
  status: ProjectStatus;
  project: ProjectNavItem;
};
const ProjectCard = ({ type, project }: ProjectCard) => (
  <Card>
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{project.description}</p>
    </CardContent>
    <CardFooter>
      {type === "docs" && project.docs && (
        <Button className="w-full" disabled={project.status !== "DONE"}>
          <Link href={project.docs.href} className="flex items-center gap-1">
            <Icons.book className="h-6 w-6" />
            {project.docs.label}
          </Link>
        </Button>
      )}
      {type === "new" && project.newLink && (
        <Button className="w-full">
          <Link href={project.newLink.href} className="flex items-center gap-1">
            <Icons.link className="h-6 w-6" />
            {project.newLink.label}
          </Link>
        </Button>
      )}
      {type === "old" && project.oldLink && (
        <Button className="w-full">
          <Link href={project.oldLink.href} className="flex items-center gap-1">
            <Icons.link className="h-6 w-6" />
            {project.oldLink.label}
          </Link>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Project overview
          </h1>
          <p className="max-w-[42rem] py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Here is a list of projects that are either completed or upcoming/in
            progress.
          </p>
        </div>
        <div className="md: grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectConfig.projectLinks.map((project, index) => (
            <ProjectCard
              key={index}
              status={project.status}
              type="docs"
              project={project}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
