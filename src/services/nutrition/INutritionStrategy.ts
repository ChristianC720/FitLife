export interface INutritionStrategy {
  generateRecommendations(meals: any[]): string[]
  readonly name: string
}
