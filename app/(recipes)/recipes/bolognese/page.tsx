"use client";
import type { Recipe } from "@/app/_models/recipe";
import { Salad, UtensilsCrossed } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type RecipeIngredient = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
};

type RecipeTime = {
  label: string;
  value: number;
};

type RecipeContent = {
  time: RecipeTime[];
  ingredients: RecipeIngredient[];
  steps: string[];
  servings: number;
};

const bologneseContent: RecipeContent = {
  time: [
    {
      label: "Prep Time",
      value: 15, // in minutes
    },
    {
      label: "Cook Time",
      value: 60, // in minutes
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Spaghetti",
      quantity: 500,
      unit: "g",
    },
    {
      id: 2,
      name: "Ground beef",
      quantity: 400,
      unit: "g",
    },
    {
      id: 3,
      name: "Onion",
      quantity: 1,
      unit: "piece",
    },
    {
      id: 4,
      name: "Garlic cloves",
      quantity: 2,
      unit: "piece",
    },
    {
      id: 5,
      name: "Canned tomatoes",
      quantity: 400,
      unit: "g",
    },
    {
      id: 6,
      name: "Olive oil",
      quantity: 2,
      unit: "tbsp",
    },
  ],
  steps: [
    "Boil water and cook spaghetti according to package instructions.",
    "While spaghetti is cooking, heat olive oil in a large pan.",
    "Sauté onions and garlic until soft.",
    "Add ground beef and cook until browned.",
    "Add canned tomatoes and simmer for 30-45 minutes.",
    "Drain spaghetti and serve with the sauce on top.",
  ],
  servings: 4,
};

export type FormattedRecipe = Recipe & {
  content: RecipeContent;
};

const bologneseRecipe: FormattedRecipe = {
  id: 1,
  name: "Spaghetti Bolognese",
  thumbnailHref:
    "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ.jpg",
  description:
    "Classic spaghetti bolognese that's perfect for a family dinner.",
  content: bologneseContent,
  userId: "1",
};

const getRecipe = () => {
  return bologneseRecipe;
};

interface ListedItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListedItem = ({ children }: ListedItemProps) => (
  <li className="flex items-center py-1">{children}</li>
);
export default function RecipePage() {
  const recipe = getRecipe();
  return (
    <div className="h-full overflow-y-scroll bg-zinc-200">
      <div className="mx-auto h-full px-4">
        <div className="mx-auto flex min-h-full max-w-xl flex-col bg-white px-4 py-16">
          <h1 className="mb-4 font-heading text-3xl">{recipe.name}</h1>
          {recipe.thumbnailHref && recipe.name && (
            <div className="items-center overflow-hidden rounded-lg">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={recipe.thumbnailHref}
                  alt={recipe.name}
                  className="object-cover object-center"
                />
              </AspectRatio>
            </div>
          )}
          <p className="py-4 leading-tight">{recipe.description}</p>
          <Accordion type="multiple" className="flex flex-col gap-2">
            <AccordionItem
              value="ingredients"
              className="max-w-xl rounded-lg bg-emerald-100 p-4"
            >
              <AccordionTrigger>
                <div className="flex items-center gap-1">
                  <Salad className="aspect-square h-4" />
                  <h2 className="font-heading text-xl">Ingredients</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent asChild={true}>
                <ul className="flex flex-col gap-1">
                  <fieldset>
                    {recipe.content.ingredients.map((ingredient) => (
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
                          {ingredient.quantity} {ingredient.unit}{" "}
                          {ingredient.name}
                        </label>
                      </ListedItem>
                    ))}
                  </fieldset>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="directions"
              className="max-w-xl rounded-lg bg-teal-100 p-4"
            >
              <AccordionTrigger>
                <div className="flex items-center gap-1">
                  <UtensilsCrossed className="aspect-square h-4" />
                  <h2 className="font-heading text-xl">Directions</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent asChild={true}>
                <ul className="flex flex-col gap-1">
                  {recipe.content.steps.map((step, index) => (
                    <ListedItem key={index} className="flex items-center gap-2">
                      {index + 1}. {step}
                    </ListedItem>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
