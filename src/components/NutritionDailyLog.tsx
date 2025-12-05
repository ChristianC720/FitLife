import { useEffect, useMemo, useState } from 'react'
import type { MealEntry } from '../types/nutrition'
import { NutritionService } from '../services/nutrition/NutritionService'
import { KetoStrategy } from '../services/nutrition/KetoStrategy'
import { VeganStrategy } from '../services/nutrition/VeganStrategy'
import { BalancedStrategy } from '../services/nutrition/BalancedStrategy'

interface NutritionDailyLogProps {
  meals: MealEntry[]
  onAddFoodClick?: () => void
}

export function NutritionDailyLog({ meals, onAddFoodClick }: NutritionDailyLogProps) {
  const strategies = useMemo(() => [new KetoStrategy(), new VeganStrategy(), new BalancedStrategy()], [])
  const [strategyName, setStrategyName] = useState<string>(strategies[0].name)
  const [service] = useState(() => new NutritionService(strategies[0]))
  const [recommendations, setRecommendations] = useState<string[]>([])

  useEffect(() => {
    const s = strategies.find((x) => x.name === strategyName) || strategies[0]
    service.setStrategy(s)
    setRecommendations(service.getRecommendations(meals))
  }, [strategyName, meals, service, strategies])

  const totalCalories = useMemo(() => meals.reduce((s, m) => s + Number(m.totalCalories || 0), 0), [meals])

  return (
    <article className="nutrition-card daily-log">
      <header>
        <div>
          <h2>Registro de Hoy</h2>
          <p>Alimentos consumidos durante el día</p>
        </div>
        <div>
          <label htmlFor="strategy-select">Plan:</label>
          <select id="strategy-select" value={strategyName} onChange={(e) => setStrategyName(e.target.value)}>
            {strategies.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
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

      <div className="nutrition-summary">
        <div>Total hoy: {totalCalories} kcal</div>
        <div className="nutrition-recommendations">
          <strong>Recomendaciones ({service.getStrategyName()}):</strong>
          <ul>
            {recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <button type="button" className="ghost-button meal-add" onClick={onAddFoodClick}>
        + Agregar Comida
      </button>
    </article>
  )
}
