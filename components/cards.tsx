import { ProjectNavItem, ProjectStatus } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Recipe } from "contentlayer/generated";
import React from "react";

type Cards = {
  type: "docs" | "new" | "old" | "in progress";
  status: ProjectStatus;
  project: ProjectNavItem;
};
export const ProjectCard = ({ type, project }: Cards) => (
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
        <Button className="w-full" size="sm">
          <Link href={project.oldLink.href} className="flex items-center gap-1">
            <Icons.link className="h-6 w-6" />
            {project.oldLink.label}
          </Link>
        </Button>
      )}
    </CardFooter>
  </Card>
);

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Card key={recipe.id} className="group relative h-full w-full bg-muted">
    <Link
      href={`/projects/new/recipes/${recipe.slugAsParams}`}
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
