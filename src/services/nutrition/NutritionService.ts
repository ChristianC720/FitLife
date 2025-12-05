import type { INutritionStrategy } from './INutritionStrategy'

export class NutritionService {
  private strategy: INutritionStrategy

  constructor(initial: INutritionStrategy) {
    this.strategy = initial
  }

  setStrategy(s: INutritionStrategy) {
    this.strategy = s
  }

  getStrategyName() {
    return this.strategy.name
  }

  getRecommendations(meals: any[]) {
    return this.strategy.generateRecommendations(meals)
  }
}
