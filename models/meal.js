class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegan,
    isVegeterian,
    isLactoseFree
  ) {
      this.id = id, 
      this.gacegoryIds=categoryIds,
      this.title = title,
      this.imageUrl=imageUrl,
      this.ingredients = ingredients,
      this.steps = steps,
      this.duration = duration,
      this.complexity = complexity,
      this.affordability = affordability,
      this.isGlutenFree = isGlutenFree,
      this.isVegan = isVegan,
      this.isVegeterian = isVegeterian,
      this.isLactoseFree = isLactoseFree,
  }
}

export default Meal;
