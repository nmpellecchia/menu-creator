import { getRecipeFromAPI } from '../api/api.js';
import { Dish } from '../api/dish.js';

export async function getDishes(values) {
  const rawData = await getRecipeFromAPI(values);
  const dishes = destructureDishes(rawData);
  return dishes;
}

export function destructureDishes(dishes) {
  const purgedDishes = [];
  dishes.map(dish => {
    const {
      id,
      title,
      image,
      vegan,
      healthScore,
      pricePerServing,
      readyInMinutes,
      servings,
      dishTypes,
      analyzedInstructions,
    } = dish;

    const purgedDish = new Dish(
      id,
      title,
      image,
      vegan,
      healthScore,
      servings,
      pricePerServing,
      readyInMinutes,
      dishTypes,
      analyzedInstructions
    );
    purgedDishes.push(purgedDish);
  });
  return purgedDishes;
}
