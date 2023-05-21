import { projectConfig } from "@/config/projects";
import { ProjectCard } from "@/components/cards";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/client-nav";
import { marketingConfig } from "@/config/marketing";
import { SiteFooter } from "@/components/site-footer";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center py-6">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">
        <section className="container">
          <div className="h-full space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex h-full max-w-[64rem] flex-col items-center justify-center text-center">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Project overview
              </h1>
              <p className="max-w-4xl py-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Links to the old and new versions as well as docs for the
                various projects. I try to be as comprehensive as possible, but
                if you have any questions, feel free to reach out to me.
              </p>
              <div className="flex gap-2">
                <div className="flex cursor-default items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                  <Icons.sparkles /> New
                </div>
                <div className="flex cursor-default items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                  <Icons.book /> Docs
                </div>
                <div className="flex cursor-default items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                  <Icons.archive /> Old
                </div>
              </div>
            </div>
            <div className="md: grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projectConfig.projectLinks.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
