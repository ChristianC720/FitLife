import type { CommunityChallenge } from '../types/community'

interface CommunityChallengeCardProps {
  challenge: CommunityChallenge
}

export function CommunityChallengeCard({ challenge }: CommunityChallengeCardProps) {
  return (
    <article className="community-card community-card--challenge">
      <header className="community-card__header">
        <div>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
        </div>
        <span className="community-chip">{challenge.category}</span>
      </header>
      <div className="community-card__meta">
        <span>Organiza: {challenge.host}</span>
        <span>{challenge.participants.toLocaleString('es-MX')} participantes</span>
      </div>
      <div className="community-card__progress">
        <div className="community-card__progress-labels">
          <span>{challenge.statusLabel}</span>
          <span>{challenge.durationLabel}</span>
        </div>
        <div
          className="community-card__progress-track"
          role="progressbar"
          aria-valuenow={challenge.progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="community-card__progress-fill" style={{ width: `${challenge.progressPercent}%` }} />
        </div>
      </div>
    </article>
  )
}
