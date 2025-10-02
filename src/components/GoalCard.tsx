import type { Goal } from '../types/goals'

interface GoalCardProps {
  goal: Goal
}

export function GoalCard({ goal }: GoalCardProps) {
  const leftBadges = goal.badges.filter((badge) => badge.position === 'left')
  const rightBadges = goal.badges.filter((badge) => badge.position === 'right')

  return (
    <article className="goal-card">
      <header className="goal-card__header">
        <div className="goal-card__identity">
          <span className="goal-card__icon" aria-hidden="true">
            {goal.icon}
          </span>
          <div>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        </div>
        <div className="goal-card__actions" aria-label="Acciones rápidas">
          {goal.actions.map((action) => (
            <button key={action.id} type="button" className="ghost-button" aria-label={action.label}>
              {action.icon}
            </button>
          ))}
        </div>
      </header>

      <div className="goal-card__progress">
        <div className="goal-card__progress-label">
          <span>{goal.progressLabel}</span>
          <span>{goal.progressPercent}%</span>
        </div>
        <div
          className="goal-card__progress-track"
          role="progressbar"
          aria-valuenow={goal.progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="goal-card__progress-fill" style={{ width: `${goal.progressPercent}%` }} />
        </div>
      </div>

      <footer className="goal-card__footer">
        <div className="goal-card__badges">
          {leftBadges.map((badge) => (
            <span key={badge.id} className={`goal-pill ${badge.tone}`}>
              {badge.label}
            </span>
          ))}
        </div>
        <div className="goal-card__badges goal-card__badges--right">
          {rightBadges.map((badge) => (
            <span key={badge.id} className={`goal-pill ${badge.tone}`}>
              {badge.label}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}
