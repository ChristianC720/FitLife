import type { INutritionStrategy } from './INutritionStrategy'

export class VeganStrategy implements INutritionStrategy {
  readonly name = 'Vegan'

  generateRecommendations(meals: any[]) {
    const total = meals?.reduce((s, m) => s + (m.totalCalories || 0), 0) || 0
    const summary = total ? `Total estimado de hoy: ${total} kcal.` : ''

    return [
      'Asegura fuentes de proteína vegetal (lentejas, garbanzos, tofu).',
      'Incluye B12 y hierro en el plan si es necesario.',
      'Varía las verduras para obtener una amplia gama de micronutrientes.',
      summary,
    ].filter(Boolean)
  }
}
