import { pgTable, serial, varchar, json, text } from "drizzle-orm/pg-core";
import { eq, InferModel } from "drizzle-orm";
import { db } from "@/lib/db";

export const recipes = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  thumbnailHref: text("thumbnail"), // To store the URL of the image
  userId: varchar("user_id", { length: 256 }), // To store UserId from Clerk
  content: json("content"), // For flexible content schema
});

export type Recipe = InferModel<typeof recipes>;
export type NewRecipe = InferModel<typeof recipes, "insert">;

export async function createRecipe(recipe: NewRecipe): Promise<Recipe> {
  const res = await db.insert(recipes).values(recipe).returning();
  return res[0];
}

export async function getRecipe(id: number): Promise<Recipe | null> {
  const res = await db
    .select()
    .from(recipes)
    .where(eq(recipes.id, id))
    .limit(1);
  return res[0] ?? null;
}

export async function getRecipes(): Promise<Recipe[]> {
  return db.select().from(recipes);
}

export async function deleteRecipe(id: number): Promise<void> {
  await db.delete(recipes).where(eq(recipes.id, id));
}
