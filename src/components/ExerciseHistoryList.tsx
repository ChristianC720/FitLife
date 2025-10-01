import type { ExerciseHistoryEntry } from '../types/exercises'

interface ExerciseHistoryListProps {
  items: ExerciseHistoryEntry[]
}

export function ExerciseHistoryList({ items }: ExerciseHistoryListProps) {
  return (
    <section className="exercise-history">
      <header>
        <div>
          <h2>Historial de Entrenamientos</h2>
          <p>Tus últimas sesiones de ejercicio (últimos 30 días)</p>
        </div>
        <button className="ghost-button">Ver historial completo</button>
      </header>
      <ul className="history-list">
        {items.map((entry) => (
          <li key={entry.id} className={`history-item ${entry.accent}`}>
            <div className="history-item__badge" aria-hidden="true" />
            <div className="history-item__content">
              <p className="history-item__name">{entry.name}</p>
              <span className="history-item__date">{entry.date}</span>
            </div>
            <div className="history-item__meta">
              <span>{entry.duration}</span>
              <span>{entry.calories}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
