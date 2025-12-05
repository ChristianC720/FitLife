export interface INutritionStrategy {
  /**
   * Generate a short list of textual recommendations based on meals or user profile.
   */
  generateRecommendations(meals: any[]): string[]
  readonly name: string
}
