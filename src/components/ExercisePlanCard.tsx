import type { ExercisePlan } from '../types/exercises'

interface ExercisePlanCardProps {
  plan: ExercisePlan
}

export function ExercisePlanCard({ plan }: ExercisePlanCardProps) {
  return (
    <article className={`plan-card ${plan.statusAccent}`}>
      <header className="plan-card__header">
        <div className="plan-card__title">
          <span className={`plan-card__badge ${plan.statusAccent}`}>{plan.category}</span>
          <h3>{plan.name}</h3>
        </div>
        <span className={`plan-card__status ${plan.statusAccent}`}>{plan.status}</span>
      </header>

      <p className="plan-card__description">{plan.description}</p>

      <dl className="plan-card__meta">
        <div>
          <dt>Duración</dt>
          <dd>{plan.duration}</dd>
        </div>
        <div>
          <dt>Ejercicios</dt>
          <dd>{plan.exercises} ejercicios</dd>
        </div>
        <div>
          <dt>Frecuencia</dt>
          <dd>{plan.frequency}</dd>
        </div>
      </dl>

      <div className="plan-card__progress">
        <div className="progress-track" role="progressbar" aria-valuenow={plan.progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-fill" style={{ width: `${plan.progress}%` }} />
        </div>
        <div className="plan-card__progress-meta">
          <span>{plan.progress}% completado</span>
          <span>{plan.schedule}</span>
        </div>
      </div>

      <footer className="plan-card__footer">
        <div className={`plan-card__level ${plan.statusAccent}`}>{plan.level}</div>
        <button className="primary-button plan-card__cta">
          {plan.status === 'Completado' ? 'Ver Detalles' : 'Comenzar'}
        </button>
      </footer>
    </article>
  )
}
