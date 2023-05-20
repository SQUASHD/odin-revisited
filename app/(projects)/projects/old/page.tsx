import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projectConfig } from "@/config/projects";
import { ProjectCard } from "@/components/cards";

export default function ProjectsPage() {
  return (
    <section className="container">
      <div className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Old Projects
          </h1>
          <p className="max-w-3xl py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;ve tried to show the projects true to how they were
            originally. However, some of the projects had so little styling that
            global css changed them.
          </p>
          <div className="flex gap-2">
            <Button>
              <Link href={"/projects"}>See Docs</Link>
            </Button>
            <Button>
              <Link href={"/projects/new"}>New Projects</Link>
            </Button>
          </div>
        </div>
        <div className="md: grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectConfig.projectLinks.map((project, index) => (
            <ProjectCard
              key={index}
              status={project.status}
              type="old"
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
