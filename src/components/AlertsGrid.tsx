import type { ReminderCard } from '../types/dashboard'

interface AlertsGridProps {
  items: ReminderCard[]
}

export function AlertsGrid({ items }: AlertsGridProps) {
  return (
    <section className="alerts-grid">
      {items.map((reminder) => (
        <article key={reminder.title} className={`card alert-card ${reminder.accent}`}>
          <h4>{reminder.title}</h4>
          <p>{reminder.description}</p>
        </article>
      ))}
    </section>
  )
}
