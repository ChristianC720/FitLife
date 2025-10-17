import type {
  FoodSearchSuggestion,
  FrequentFoodItem,
  MealEntry,
  NutritionStat,
  RecommendationItem,
  MealOption,
} from '../types/nutrition'

export const nutritionStats: NutritionStat[] = [
  {
    title: 'Calorías',
    current: '1650',
    target: '2000 kcal',
    accent: 'success',
    progress: 82,
  },
  {
    title: 'Proteínas',
    current: '85g',
    target: '120g',
    accent: 'warning',
    progress: 71,
  },
  {
    title: 'Carbohidratos',
    current: '180g',
    target: '250g',
    accent: 'info',
    progress: 72,
  },
  {
    title: 'Grasas',
    current: '65g',
    target: '80g',
    accent: 'success',
    progress: 81,
  },
]

export const todayMeals: MealEntry[] = [
  {
    id: 'breakfast',
    label: 'Desayuno',
    time: '08:30',
    items: [
      { name: 'Avena con fruta', calories: '210 kcal' },
      { name: 'Cafe con leche', calories: '90 kcal' },
    ],
    totalCalories: '400 kcal',
  },
  {
    id: 'lunch',
    label: 'Almuerzo',
    time: '13:00',
    items: [
      { name: 'Ensalada César', calories: '320 kcal' },
      { name: 'Pechuga de pollo', calories: '260 kcal' },
      { name: 'Agua', calories: '0 kcal' },
    ],
    totalCalories: '700 kcal',
  },
  {
    id: 'snack',
    label: 'Merienda',
    time: '16:30',
    items: [
      { name: 'Yogur griego', calories: '120 kcal' },
      { name: 'Almendras (30g)', calories: '110 kcal' },
    ],
    totalCalories: '230 kcal',
  },
]

export const recommendations: RecommendationItem[] = [
  {
    id: 'proteins',
    title: 'Aumentar Proteínas',
    description: 'Te faltan 35g de proteína para alcanzar tu objetivo diario. Considera agregar un batido de proteínas o pescado en la cena.',
    priority: 'alto',
  },
  {
    id: 'hydration',
    title: 'Hidratación',
    description: 'Has bebido 1.2L de agua hoy. Intenta beber al menos 0.8L más antes de dormir.',
    priority: 'media',
  },
  {
    id: 'fiber',
    title: 'Fibra',
    description: 'Excelente consumo de fibra hoy. Mantén este nivel incluyendo más vegetales.',
    priority: 'baja',
  },
]

export const searchSuggestion: FoodSearchSuggestion = {
  placeholder: 'Escribe el nombre de un alimento para ver su información nutricional',
  buttonLabel: 'Buscar',
}

export const mealOptions: MealOption[] = [
  { value: 'breakfast', label: 'Desayuno' },
  { value: 'lunch', label: 'Almuerzo' },
  { value: 'snack', label: 'Snack' },
  { value: 'dinner', label: 'Cena' },
]

export const frequentFoods: FrequentFoodItem[] = [
  { id: 'oats', name: 'Avena', portion: '100g' },
  { id: 'chicken', name: 'Pechuga de pollo', portion: '100g' },
  { id: 'brown-rice', name: 'Arroz integral', portion: '100g cocido' },
  { id: 'egg', name: 'Huevo entero', portion: '1 unidad' },
]
