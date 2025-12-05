import type { INutritionStrategy } from './INutritionStrategy'

export class KetoStrategy implements INutritionStrategy {
  readonly name = 'Keto'

  generateRecommendations(meals: any[]) {
    // Small use of meals to avoid unused param lint: compute total calories
    const total = meals?.reduce((s, m) => s + (m.totalCalories || 0), 0) || 0
    const summary = total ? `Total estimado de hoy: ${total} kcal.` : ''

    return [
      'Aumenta grasas saludables (aguacate, aceite de oliva).',
      'Reduce porciones de carbohidratos refinados.',
      'Mantén la ingesta de proteína moderada en cada comida.',
      summary,
    ].filter(Boolean)
  }
}
