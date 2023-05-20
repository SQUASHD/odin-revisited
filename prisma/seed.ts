import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

async function main() {
  const bolognese = await prisma.recipe.create({
    data: {
      name: "Bolognese",
      thumbnail: {
        create: {
          href: "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/04/Authentic-Spaghetti-Bolognese-SQ.jpg",
          uploadedBy: "testUserId",
        },
      },
      userId: "testUserId",
      description: "A classic Italian dish",
      content: {
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
      },
    },
  });
  const chickenStirFry = await prisma.recipe.create({
    data: {
      name: "Chicken Stir-Fry",
      description:
        "A quick and flavorful chicken stir-fry that's packed with vegetables.",
      thumbnail: {
        create: {
          href: "https://natashaskitchen.com/wp-content/uploads/2018/08/Chicken-Stir-Fry-1-1.jpg",
          uploadedBy: "testUserId",
        },
      },
      userId: "testUserId",
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
    },
  });
  const caprese = await prisma.recipe.create({
    data: {
      name: "Caprese Salad",
      thumbnail: {
        create: {
          href: "https://assets.epicurious.com/photos/628ba560cf19fbfe9137ffa4/3:2/w_6948,h_4632,c_limit/Caprese_RECIPE_051922_34205.jpg",
          uploadedBy: "testUserId",
        },
      },
      description:
        "A refreshing and simple salad featuring ripe tomatoes, fresh mozzarella, and basil.",
      content: {
        time: [
          {
            label: "Prep Time",
            value: 10,
          },
        ],
        ingredients: [
          {
            id: 1,
            name: "Ripe tomatoes",
            quantity: 4,
            unit: "piece",
          },
          {
            id: 2,
            name: "Fresh mozzarella cheese",
            quantity: 8,
            unit: "ounces",
          },
          {
            id: 3,
            name: "Fresh basil leaves",
            quantity: 0,
            unit: "to taste",
          },
          {
            id: 4,
            name: "Balsamic vinegar",
            quantity: 2,
            unit: "tablespoon",
          },
          {
            id: 5,
            name: "Extra virgin olive oil",
            quantity: 2,
            unit: "tablespoon",
          },
          {
            id: 6,
            name: "Salt",
            quantity: 0,
            unit: "to taste",
          },
          {
            id: 7,
            name: "Pepper",
            quantity: 0,
            unit: "to taste",
          },
        ],
        steps: [
          "Arrange the tomato and mozzarella slices on a serving plate, alternating between them.",
          "Place fresh basil leaves on top of each tomato and mozzarella slice.",
          "Drizzle balsamic vinegar and extra virgin olive oil over the salad.",
          "Season with salt and pepper to taste.",
          "Serve the Caprese salad as a light appetizer or a side dish.",
        ],
        servings: 4,
      },
      userId: "testUserId",
    },
  });
  return { bolognese, chickenStirFry, caprese };
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
