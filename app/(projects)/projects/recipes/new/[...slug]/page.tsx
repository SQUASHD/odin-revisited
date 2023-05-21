import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Salad, UtensilsCrossed } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RecipeContent } from "@/app/_models/recipe";
import React from "react";
import Link from "next/link";
import { allRecipes } from "contentlayer/generated";
import { Icons } from "@/components/icons";
interface ListedItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListedItem = ({ children }: ListedItemProps) => (
  <li className="flex items-center py-1">{children}</li>
);

type Params = {
  params: {
    slug: string;
  };
};

function getRecipeFromParams(params) {
  const slug = params?.slug?.join("/");
  return allRecipes.find((post) => post.slugAsParams === slug);
}

export default function RecipePage({ params }: Params) {
  const recipe = getRecipeFromParams(params);

  if (!recipe)
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="font-heading text-4xl">Sorry</h1>
        <h2 className="text-xl">No recipe found</h2>
        <Link
          href={"/projects"}
          className="flex items-center justify-center rounded-lg bg-emerald-200 px-4 py-2 transition-colors hover:bg-emerald-300"
        >
          Back
        </Link>
      </div>
    );

  const content = RecipeContent.parse(recipe.content);
  const prepTime = content.time.find((time) => time.label === "Prep Time");

  const ingredients = content.ingredients;
  const steps = content.steps;

  return (
    <div className="mx-auto flex max-w-xl flex-col px-2 py-16">
      <h1 className="mb-4 font-heading text-3xl">{recipe.name}</h1>
      {recipe.thumbnail && recipe.name && (
        <div className="min-h-48 flex max-h-64 w-full items-center overflow-hidden rounded-lg">
          <img
            src={recipe.thumbnail}
            alt={recipe.name}
            className="object-cover"
          />
        </div>
      )}
      <p className="py-4 leading-tight">{recipe.description}</p>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center gap-1">
          <Icons.clock className="h-4" />
          {prepTime?.label}: {prepTime?.value}m
        </div>
        <div className="flex items-center justify-center gap-1">
          <UtensilsCrossed className="h-4" />
          <span>{recipe.content.servings} Servings</span>
        </div>
      </div>

      <Accordion type="multiple">
        <AccordionItem value="ingredients" className="max-w-xl rounded-lg p-4">
          <AccordionTrigger>
            <div className="flex items-center gap-1">
              <Salad className="aspect-square h-4" />
              <h2 className="font-heading text-xl">Ingredients</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent asChild={true}>
            <ul className="flex flex-col gap-1">
              <fieldset>
                {ingredients.map((ingredient) => (
                  <ListedItem
                    key={ingredient.id}
                    className="flex items-center gap-2"
                  >
                    <Checkbox
                      id={`${ingredient.name}`}
                      name={`${ingredient.name}[]`}
                      value={ingredient.name}
                      className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-amber-400 focus:ring-amber-500"
                    />
                    <label
                      htmlFor={`${ingredient.name}`}
                      className="ml-3 min-w-0 flex-1"
                    >
                      {ingredient.unit === "to taste"
                        ? // Some crazy logic to make sure the unit is pluralized correctly
                          `${ingredient.name} ${ingredient.unit}`
                        : `${ingredient.quantity} ${
                            ingredient.quantity > 1 &&
                            ingredient.unit.length > 1 &&
                            !ingredient.unit.endsWith("s")
                              ? ingredient.unit + "s"
                              : ingredient.unit
                          } ${ingredient.name}`}
                    </label>
                  </ListedItem>
                ))}
              </fieldset>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="directions" className="max-w-xl rounded-lg p-4">
          <AccordionTrigger>
            <div className="flex items-center gap-1">
              <UtensilsCrossed className="aspect-square h-4" />
              <h2 className="font-heading text-xl">Directions</h2>
            </div>
          </AccordionTrigger>
          <AccordionContent asChild={true}>
            <ol className="flex flex-col gap-1">
              {steps.map((step, index) => (
                <ListedItem key={index} className="flex items-center gap-2">
                  {index + 1}. {step}
                </ListedItem>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
