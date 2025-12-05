import type { ActivityItem } from '../types/dashboard'

interface RecentActivityCardProps {
  title: string
  subtitle: string
  activities: ActivityItem[]
  actionLabel?: string
  onActionClick?: () => void
}

export function RecentActivityCard({ title, subtitle, activities, actionLabel, onActionClick }: RecentActivityCardProps) {
  return (
    <article className="card recent-card">
      <header>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {actionLabel ? (
          <button className="ghost-button" onClick={onActionClick}>
            {actionLabel}
          </button>
        ) : null}
      </header>
      <ul className="timeline">
        {activities.map((activity) => (
          <li key={activity.title} className={activity.accent}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-title">{activity.title}</p>
              <p className="timeline-description">{activity.description}</p>
              <span className="timeline-time">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
