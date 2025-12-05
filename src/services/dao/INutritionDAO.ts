export interface MealRecord {
  userId: string
  mealId: string
  items: Array<{ name: string; calories: number }>
  timestamp: string
}

export interface INutritionDAO {
  addMeal(meal: MealRecord): Promise<any>
  getMeals(userId: string): Promise<MealRecord[]>
}
