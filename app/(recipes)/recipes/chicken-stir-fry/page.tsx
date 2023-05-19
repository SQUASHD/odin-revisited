import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Salad, UtensilsCrossed } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FormattedRecipe } from "@/app/(recipes)/recipes/bolognese/page";

const caprese: FormattedRecipe = {
  id: 2,
  name: "Chicken Stir-Fry",
  thumbnailHref: "",
  description:
    "A quick and flavorful chicken stir-fry that's packed with vegetables.",
  content: {
    time: [
      {
        label: "Prep Time",
        value: 15,
      },
      {
        label: "Cook Time",
        value: 15,
      },
    ],
    ingredients: [
      {
        id: 1,
        name: "Chicken breasts",
        quantity: 2,
        unit: "piece",
      },
      {
        id: 2,
        name: "Soy sauce",
        quantity: 2,
        unit: "tablespoon",
      },
      {
        id: 3,
        name: "Oyster sauce",
        quantity: 2,
        unit: "tablespoon",
      },
      {
        id: 4,
        name: "Cornstarch",
        quantity: 1,
        unit: "tablespoon",
      },
      {
        id: 5,
        name: "Vegetable oil",
        quantity: 1,
        unit: "tablespoon",
      },
      {
        id: 6,
        name: "Onion",
        quantity: 1,
        unit: "piece",
      },
      {
        id: 7,
        name: "Bell pepper",
        quantity: 1,
        unit: "piece",
      },
      {
        id: 8,
        name: "Carrot",
        quantity: 1,
        unit: "piece",
      },
      {
        id: 9,
        name: "Garlic cloves",
        quantity: 2,
        unit: "piece",
      },
      {
        id: 10,
        name: "Ginger",
        quantity: 1,
        unit: "teaspoon",
      },
      {
        id: 11,
        name: "Salt",
        quantity: 0,
        unit: "to taste",
      },
      {
        id: 12,
        name: "Pepper",
        quantity: 0,
        unit: "to taste",
      },
    ],
    steps: [
      "In a bowl, mix together soy sauce, oyster sauce, and cornstarch. Add sliced chicken and toss to coat.",
      "Heat vegetable oil in a large pan or wok over medium-high heat.",
      "Add onion, bell pepper, carrot, garlic, and ginger to the pan. Stir-fry for 3-4 minutes until vegetables are tender-crisp.",
      "Push the vegetables to one side of the pan and add the marinated chicken to the other side. Cook for 5-6 minutes until the chicken is cooked through.",
      "Stir everything together and season with salt and pepper to taste.",
      "Serve the chicken stir-fry over cooked rice or noodles.",
    ],
    servings: 4,
  },
  userId: "1",
};

interface ListedItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListedItem = ({ children }: ListedItemProps) => (
  <li className="flex items-center py-1">{children}</li>
);

const getRecipe = () => {
  return caprese;
};

export default function RecipePage() {
  const recipe = getRecipe();
  return (
    <div className="mx-auto flex max-w-xl flex-col px-2 py-16">
      <h1 className="mb-4 font-heading text-3xl">{recipe.name}</h1>
      {recipe.thumbnailHref && recipe.name && (
        <div className="min-h-48 flex max-h-64 w-full items-center overflow-hidden rounded-lg">
          <img
            src={recipe.thumbnailHref}
            alt={recipe.name}
            className="object-cover"
          />
        </div>
      )}
      <p className="py-4 leading-tight">{recipe.description}</p>
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
                      {ingredient.quantity} {ingredient.unit} {ingredient.name}
                    </label>
                  </ListedItem>
                ))}
              </fieldset>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <div className="max-w-xl rounded-lg p-4">
          <AccordionItem value="directions">
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
        </div>
      </Accordion>
    </div>
  );
}
