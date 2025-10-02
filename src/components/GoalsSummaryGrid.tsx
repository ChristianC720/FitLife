import type { GoalsSummary } from '../types/goals'

interface GoalsSummaryGridProps {
  items: GoalsSummary[]
}

export function GoalsSummaryGrid({ items }: GoalsSummaryGridProps) {
  return (
    <section className="goals-summary-grid" aria-label="Resumen de metas">
      {items.map((item) => (
        <article key={item.id} className={`goals-summary-card ${item.accent}`}>
          <header>
            <span className="goals-summary-icon" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </header>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  )
}
