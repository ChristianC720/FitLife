import type { WeeklyActivityPoint } from '../types/dashboard'

interface WeeklyActivityCardProps {
  title: string
  subtitle: string
  data: WeeklyActivityPoint[]
  actionLabel?: string
  onActionClick?: () => void
}

export function WeeklyActivityCard({ title, subtitle, data, actionLabel, onActionClick }: WeeklyActivityCardProps) {
  const maxValue = data.reduce((acc, point) => Math.max(acc, point.value), 0)
  const MIN_HEIGHT_PERCENT = 20

  return (
    <article className="card weekly-card">
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
      <div className="chart-placeholder">
        <div className="chart-grid">
          {data.map((point) => {
            const normalized = maxValue === 0 ? MIN_HEIGHT_PERCENT : Math.max(MIN_HEIGHT_PERCENT, (point.value / maxValue) * 100)
            return <div key={point.label} className="chart-bar" style={{ height: `${normalized}%` }} />
          })}
        </div>
        <div className="chart-axis">
          {data.map((point) => (
            <span key={point.label}>{point.label}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
