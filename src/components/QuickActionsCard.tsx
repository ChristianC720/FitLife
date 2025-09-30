import type { QuickAction } from '../types/dashboard'

interface QuickActionsCardProps {
  title: string
  subtitle: string
  actions: QuickAction[]
}

export function QuickActionsCard({ title, subtitle, actions }: QuickActionsCardProps) {
  return (
    <article className="card actions-card">
      <header>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </header>
      <ul className="action-list">
        {actions.map((action) => (
          <li key={action.title} className={`action-item ${action.accent}`}>
            <span className="action-icon" aria-hidden="true">
              {action.icon}
            </span>
            <div>
              <p className="action-title">{action.title}</p>
              <p className="action-subtitle">{action.description}</p>
            </div>
            <span className="action-add" aria-hidden="true">
              +
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
