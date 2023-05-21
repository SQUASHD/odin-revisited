import { projectConfig } from "@/config/projects";
import { ProjectCard } from "@/components/cards";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/client-nav";
import { marketingConfig } from "@/config/marketing";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function ProjectsPage({ params }: { params: { slug: string } }) {
  const findProject = (slug: string) => {
    return projectConfig.projectLinks.find(
      (project) => project.title.toLowerCase() === slugToString(slug)
    );
  };
  const slugToString = (slug: string) => {
    return slug.replace(/-/g, " ");
  };

  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const projectInfo = findProject(params.slug);

  const prettyHeader = toTitleCase(slugToString(params.slug));

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              {prettyHeader}
            </h1>
            <p className="max-w-2xl py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Making a landing page for each project is a lot of unnecessary
              work, so I&apos;m just going to provide you with a project card
              instead.
            </p>
            {projectInfo && (
              <div className="pb-4">
                <ProjectCard project={projectInfo} />
              </div>
            )}
            <Link
              href={"/projects"}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Icons.arrowRight className="mr-2 rotate-180" /> All Projects
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
