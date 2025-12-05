import type { INutritionDAO, MealRecord } from './INutritionDAO'

export class HttpNutritionDAO implements INutritionDAO {
  private base = '/api/nutrition'

  async addMeal(meal: MealRecord) {
    // Frontend DAO delegates to backend API; this is a thin wrapper
    const res = await fetch(`${this.base}/meals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meal),
    })
    if (!res.ok) throw new Error('Failed to add meal')
    return res.json()
  }

  async getMeals(userId: string) {
    const res = await fetch(`${this.base}/meals?userId=${encodeURIComponent(userId)}`)
    if (!res.ok) return []
    return res.json()
  }
}
