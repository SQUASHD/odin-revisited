import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { allRecipes, Recipe } from "contentlayer/generated";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Card key={recipe.id} className="group relative h-full w-full bg-muted">
    <Link
      href={`/projects/recipes/new/${recipe.slugAsParams}`}
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
          className="object-cover object-center group-hover:opacity-80"
        />
      </div>

      <CardDescription>{recipe.description}</CardDescription>
    </CardContent>
  </Card>
);

export default async function RecipesPage() {
  return (
    <div className="mg:grid-cols-3 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {allRecipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
