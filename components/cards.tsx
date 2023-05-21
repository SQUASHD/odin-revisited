import { ProjectNavItem } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Recipe } from "contentlayer/generated";
import React from "react";
import { projectConfig } from "@/config/projects";

type Cards = {
  project: ProjectNavItem;
};

export const ProjectCard = ({ project }: Cards) => (
  <Card>
    <CardHeader>
      <CardTitle>{project.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{project.description}</p>
    </CardContent>
    <CardFooter>
      <div className="grid w-full grid-cols-3 gap-2">
        {project.links?.newHref && (
          <Link
            href={project.links.newHref}
            className="flex h-9 w-full items-center justify-center gap-1 rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90"
          >
            <Icons.sparkles className="h-4 w-4" />
          </Link>
        )}
        {project.links?.docsHref && (
          <Link
            href={project.links.docsHref}
            className="flex h-9 w-full items-center justify-center gap-1 rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90"
          >
            <Icons.book className="h-4 w-4" />
          </Link>
        )}
        {project.links?.oldHref && (
          <Link
            href={project.links.oldHref}
            className="flex h-9 w-full items-center justify-center gap-1 rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90"
          >
            <Icons.archive className="h-4 w-4" />
          </Link>
        )}
      </div>
    </CardFooter>
  </Card>
);

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const recipeLinks = projectConfig.projectLinks[0];

  return (
    <Card key={recipe.id} className="group relative h-full w-full bg-muted">
      <Link
        href={`${recipeLinks.links?.newHref}/${recipe.slugAsParams}`}
        aria-label="Go to recipe"
        className="inset absolute inset-0 z-10"
      />
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg">
          <img
            src={recipe.thumbnail}
            alt={recipe.name}
            className="object-cover object-center group-hover:opacity-80"
          />
        </div>

        <CardDescription>{recipe.description}</CardDescription>
      </CardContent>
    </Card>
  );
};
