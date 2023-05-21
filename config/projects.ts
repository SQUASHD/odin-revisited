import { ProjectConfig } from "@/types";

const projectsURL = `/projects`;

const docsURL = `/docs`;

export const projectConfig: ProjectConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/projects",
    },
    {
      title: "Old",
      href: "/projects/old",
    },
    {
      title: "New",
      href: "/projects/new",
    },
  ],
  projectLinks: [
    {
      title: "Recipes",
      description: "The very first project in the curriculum.",
      links: {
        oldHref: projectsURL + "/recipes/old",
        newHref: projectsURL + "/recipes/new",
        docsHref: docsURL + "/foundations/recipes",
      },
    },
    {
      title: "Landing Page",
      description: "A landing page for a fictional company.",
      links: {
        oldHref: projectsURL + "/landing-page/old",
        newHref: "/",
        docsHref: docsURL + "/foundations/landing-page",
      },
    },
    {
      title: "Rock Paper Scissors",
      description: "The classic game of rock paper scissors.",
      links: {
        oldHref: projectsURL + "/rock-paper-scissors/old",
        docsHref: docsURL + "/foundations/rock-paper-scissors",
      },
    },
    {
      title: "Etch a Sketch",
      description: "A digital version of the classic toy.",
    },
  ],
};
