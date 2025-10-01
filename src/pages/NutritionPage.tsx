import { useNavigate } from 'react-router-dom'
import { NutritionDailyLog } from '../components/NutritionDailyLog'
import { NutritionRecommendations } from '../components/NutritionRecommendations'
import { NutritionStatsGrid } from '../components/NutritionStatsGrid'
import { nutritionStats, recommendations, searchSuggestion, todayMeals } from '../data/nutrition'

export function NutritionPage() {
  const navigate = useNavigate()

  const handleAddFoodClick = () => {
    navigate('/nutricion/agregar')
  }

  return (
    <div className="nutrition-page">
      <header className="nutrition-header">
        <div>
          <p className="eyebrow">Seguimiento Nutricional</p>
          <h1>Nutrición</h1>
          <p className="subtitle">Monitorea tu ingesta diaria y recibe recomendaciones personalizadas</p>
        </div>
        <div className="nutrition-actions">
          <form className="nutrition-search" role="search">
            <label htmlFor="nutrition-search-input" className="sr-only">
              Buscar alimento
            </label>
            <input
              id="nutrition-search-input"
              type="search"
              placeholder={searchSuggestion.placeholder}
              aria-label="Buscar alimento"
            />
            <button type="button" className="ghost-button">
              {searchSuggestion.buttonLabel}
            </button>
          </form>
          <button type="button" className="primary-button" onClick={handleAddFoodClick}>
            + Agregar Alimento
          </button>
        </div>
      </header>

      <NutritionStatsGrid stats={nutritionStats} />

      <section className="nutrition-main-grid">
        <NutritionDailyLog meals={todayMeals} onAddFoodClick={handleAddFoodClick} />
        <NutritionRecommendations recommendations={recommendations} />
      </section>
    </div>
  )
}
