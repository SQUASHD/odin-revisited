import { z } from "zod";

export const RecipeIngredient = z.object({
  id: z.number(),
  name: z.string(),
  quantity: z.number(),
  unit: z.string(),
});

export const RecipeTime = z.object({
  label: z.string(),
  value: z.number(),
});

export const RecipeContent = z.object({
  time: z.array(RecipeTime),
  ingredients: z.array(RecipeIngredient),
  steps: z.array(z.string()),
  servings: z.number(),
});

export const FormattedRecipe = z.object({
  id: z.number(),
  name: z.string(),
  thumbnail: z.object({
    id: z.number(),
    href: z.string(),
  }),
  description: z.string(),
  content: RecipeContent,
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
