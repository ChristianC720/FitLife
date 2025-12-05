import type { INutritionStrategy } from './INutritionStrategy'

export class BalancedStrategy implements INutritionStrategy {
  readonly name = 'Balanced'

  generateRecommendations(meals: any[]) {
    const total = meals?.reduce((s, m) => s + (m.totalCalories || 0), 0) || 0
    const summary = total ? `Total estimado de hoy: ${total} kcal.` : ''

    return [
      'Incluye una porción balanceada de carbohidratos, proteínas y grasas en cada comida.',
      'Aumenta el consumo de verduras y frutas frescas.',
      'Mantén hidratación regular durante el día.',
      summary,
    ].filter(Boolean)
  }
}

