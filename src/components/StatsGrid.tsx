import type { StatCard } from '../types/dashboard'

interface StatsGridProps {
  items: StatCard[]
}

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <section className="stats-grid">
      {items.map((card) => (
        <article key={card.title} className={`stat-card ${card.accent}`}>
          <header>
            <h2>{card.title}</h2>
            <span className="stat-description">{card.description}</span>
          </header>
          <div className="stat-value">
            {card.value}
            <span className="stat-target">/{card.target}</span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={card.progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${card.progress}%` }} />
          </div>
          <span className="progress-label">{card.progress}% completado</span>
        </article>
      ))}
    </section>
  )
}
