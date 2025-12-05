import type { INutritionDAO, MealRecord } from './INutritionDAO'
import api from '../../utils/api'

export class HttpNutritionDAO implements INutritionDAO {
  private base = '/nutrition'

  async addMeal(meal: MealRecord) {
    const response = await api.post(`${this.base}/meals`, meal)
    return response.data
  }

  async getMeals(userId: string) {
    const response = await api.get(`${this.base}/meals`, {
      params: { userId },
    })
    return response.data || []
  }
}
