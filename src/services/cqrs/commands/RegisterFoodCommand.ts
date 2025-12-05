export interface RegisterFoodCommand {
  userId: string
  mealId: string
  items: Array<{ name: string; calories: number }>
  timestamp: string
}
