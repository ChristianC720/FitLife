import type { CommunityRankingEntry } from '../types/community'

interface CommunityRankingListProps {
  entries: CommunityRankingEntry[]
}

export function CommunityRankingList({ entries }: CommunityRankingListProps) {
  return (
    <ol className="community-ranking" aria-label="Ranking semanal de la comunidad">
      {entries.map((entry) => (
        <li key={entry.id} className="community-ranking__item">
          <span className="community-ranking__position">#{entry.position}</span>
          <div className="community-ranking__identity">
            <strong>{entry.name}</strong>
            <span>{entry.badge}</span>
          </div>
          <div className="community-ranking__stats">
            <span className="community-ranking__points">{entry.points.toLocaleString('es-MX')} pts</span>
            <span className="community-ranking__streak">{entry.streakDays} días</span>
          </div>
        </li>
      ))}
    </ol>
  )
}
