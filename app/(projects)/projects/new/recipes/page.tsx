import React from "react";
import { allRecipes } from "contentlayer/generated";
import { RecipeCard } from "@/components/cards";

export default async function RecipesPage() {
  return (
    <div className="mg:grid-cols-3 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {allRecipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
