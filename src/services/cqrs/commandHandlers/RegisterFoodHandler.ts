import type { RegisterFoodCommand } from '../commands/RegisterFoodCommand'
import type { INutritionDAO } from '../../dao/INutritionDAO'

export class RegisterFoodHandler {
  private dao: INutritionDAO

  constructor(dao: INutritionDAO) {
    this.dao = dao
  }

  async handle(cmd: RegisterFoodCommand) {
    if (!cmd.userId || !cmd.items?.length) {
      throw new Error('Comando inválido')
    }
    return this.dao.addMeal({
      userId: cmd.userId,
      mealId: cmd.mealId,
      items: cmd.items,
      timestamp: cmd.timestamp,
    })
  }
}
