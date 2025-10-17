import type { ProgressSummary } from '../types/progress'

interface ProgressSummaryCardProps {
  summary: ProgressSummary
}

export function ProgressSummaryCard({ summary }: ProgressSummaryCardProps) {
  return (
    <article className={`progress-summary-card ${summary.accent}`}>
      <header>
        <span className="progress-summary-icon" aria-hidden="true">
          {summary.icon}
        </span>
        <div>
          <h3>{summary.title}</h3>
          <p>{summary.description}</p>
        </div>
      </header>
      <strong>{summary.value}</strong>
    </article>
  )
}
