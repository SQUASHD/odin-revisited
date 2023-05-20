import { ProjectConfig } from "@/types";
import { env } from "@/env.mjs";

const oldProjectURL = `${env.NEXT_PUBLIC_APP_URL}/projects/old`;
const newProjectURL = `${env.NEXT_PUBLIC_APP_URL}/projects/new`;

const docsURL = `${env.NEXT_PUBLIC_APP_URL}/docs/projects`;

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
      status: "DONE",
      oldLink: {
        href: oldProjectURL + "/recipes",
        label: "See live",
      },
      newLink: {
        href: newProjectURL + "/recipes",
        label: "See live",
      },
      docs: {
        href: docsURL + "/recipes",
        label: "Read more",
      },
    },
    {
      title: "Landing Page",
      description: "A landing page for a fictional company.",
      status: "DONE",
      oldLink: {
        href: oldProjectURL + "/landing-page",
        label: "See live",
      },
      docs: {
        href: docsURL + "/landing-page",
        label: "Read more",
      },
    },
    {
      title: "Rock Paper Scissors",
      description: "The classic game of rock paper scissors.",
      status: "WIP",
      oldLink: {
        href: oldProjectURL + "/rock-paper-scissors",
        label: "See live",
      },
      docs: {
        href: docsURL + "/rock-paper-scissors",
        label: "Read more",
      },
    },
    {
      title: "Etch a Sketch",
      description: "A digital version of the classic toy.",
      status: "TODO",
      disabled: true,
    },
  ],
};
