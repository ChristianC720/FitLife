import type { CommunitySummary } from '../types/community'

interface CommunitySummaryGridProps {
  items: CommunitySummary[]
}

export function CommunitySummaryGrid({ items }: CommunitySummaryGridProps) {
  return (
    <section className="community-summary-grid" aria-label="Resumen de la comunidad">
      {items.map((item) => (
        <article key={item.id} className={`community-summary-card ${item.accent}`}>
          <header>
            <span className="community-summary-icon" aria-hidden="true">
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
