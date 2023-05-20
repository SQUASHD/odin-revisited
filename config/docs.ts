import { DocsConfig } from "types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    // {
    //   title: "Guides",
    //   href: "/guides",
    // },
  ],
  sidebarNav: [
    {
      title: "Odin Revisited",
      items: [
        {
          title: "Welcome",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Overview",
          href: "/docs/documentation",
        },
        {
          title: "Curriculum",
          href: "/docs/documentation/curriculum",
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          title: "Introduction",
          href: "/docs/projects",
        },
        {
          title: "Recipes",
          href: "/docs/projects/recipes",
        },
        {
          title: "Landing Page",
          href: "/docs/projects/landing-page",
        },
        {
          title: "Rock Paper Scissors",
          href: "/docs/projects/rock-paper-scissors",
        },
      ],
    },
  ],
};
