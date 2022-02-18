export class Dish {
  constructor(
    id,
    title,
    img,
    vegan,
    healthScore,
    servings,
    price,
    prepTime,
    type,
    instructions = []
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.vegan = vegan;
    this.healthScore = healthScore;
    this.servings = servings;
    this.price = price;
    this.prepTime = prepTime;
    this.type = type;
    this.instructions = instructions;
  }
}
