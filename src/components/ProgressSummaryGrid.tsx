import type { ProgressSummary } from '../types/progress'
import { ProgressSummaryCard } from './ProgressSummaryCard'

interface ProgressSummaryGridProps {
  items: ProgressSummary[]
}

export function ProgressSummaryGrid({ items }: ProgressSummaryGridProps) {
  return (
    <section className="progress-summary-grid">
      {items.map((item) => (
        <ProgressSummaryCard key={item.id} summary={item} />
      ))}
    </section>
  )
}
