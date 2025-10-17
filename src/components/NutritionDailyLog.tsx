import type { MealEntry } from '../types/nutrition'

interface NutritionDailyLogProps {
  meals: MealEntry[]
  onAddFoodClick?: () => void
}

export function NutritionDailyLog({ meals, onAddFoodClick }: NutritionDailyLogProps) {
  return (
    <article className="nutrition-card daily-log">
      <header>
        <div>
          <h2>Registro de Hoy</h2>
          <p>Alimentos consumidos durante el día</p>
        </div>
      </header>
      <ul className="meal-list">
        {meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <div className="meal-info">
              <div>
                <span className="meal-badge">{meal.label}</span>
                <span className="meal-time">{meal.time}</span>
              </div>
              <ul className="meal-food-list">
                {meal.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span>{item.calories}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="meal-total">{meal.totalCalories}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="ghost-button meal-add" onClick={onAddFoodClick}>
        + Agregar Comida
      </button>
    </article>
  )
}
