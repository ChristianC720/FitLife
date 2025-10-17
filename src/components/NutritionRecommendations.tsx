import type { RecommendationItem } from '../types/nutrition'

interface NutritionRecommendationsProps {
  recommendations: RecommendationItem[]
}

export function NutritionRecommendations({ recommendations }: NutritionRecommendationsProps) {
  return (
    <article className="nutrition-card recommendations">
      <header>
        <div>
          <h2>Recomendaciones</h2>
          <p>Sugerencias personalizadas basadas en tu progreso</p>
        </div>
      </header>
      <ul className="recommendation-list">
        {recommendations.map((item) => (
          <li key={item.id} className={`recommendation-item ${item.priority}`}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <span className="recommendation-priority">{item.priority}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
