export interface NutritionStat {
  title: string
  current: string
  target: string
  accent: 'success' | 'warning' | 'info'
  progress: number
}

export interface MealFoodItem {
  name: string
  calories: string
}

export interface MealEntry {
  id: string
  label: string
  time: string
  items: MealFoodItem[]
  totalCalories: string
}

export interface RecommendationItem {
  id: string
  title: string
  description: string
  priority: 'alto' | 'media' | 'baja'
}

export interface FoodSearchSuggestion {
  placeholder: string
  buttonLabel: string
}

export interface MealOption {
  value: string
  label: string
}

export interface FrequentFoodItem {
  id: string
  name: string
  portion: string
}
