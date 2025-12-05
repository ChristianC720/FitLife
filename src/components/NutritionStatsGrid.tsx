import type { NutritionStat } from '../types/nutrition'

interface NutritionStatsGridProps {
  stats: NutritionStat[]
}

export function NutritionStatsGrid({ stats }: NutritionStatsGridProps) {
  return (
    <section className="nutrition-stats">
      {stats.map((stat) => (
        <article key={stat.title} className={`nutrition-stat-card ${stat.accent}`}>
          <header>
            <h3>{stat.title}</h3>
          </header>
          <div className="nutrition-stat-value">{stat.current}</div>
          <span className="nutrition-stat-target">de {stat.target}</span>
          <div className="progress-track" role="progressbar" aria-valuenow={stat.progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${stat.progress}%` }} />
          </div>
        </article>
      ))}
    </section>
  )
}
