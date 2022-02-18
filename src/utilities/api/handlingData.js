import { Dish } from './dish.js';

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
