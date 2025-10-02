import { useState } from 'react'
import { GoalCard } from '../components/GoalCard'
import { GoalModal } from '../components/GoalModal'
import { GoalsSummaryGrid } from '../components/GoalsSummaryGrid'
import { goalTypeOptions, goalUnitOptions, goalsList, goalsSummaries } from '../data/goals'

export function GoalsPage() {
  const [isModalOpen, setModalOpen] = useState(false)

  const activeGoals = goalsList.filter((goal) => goal.state === 'active')
  const completedGoals = goalsList.filter((goal) => goal.state === 'completed')

  return (
    <div className="goals-page">
      <header className="goals-header">
        <div>
          <p className="eyebrow">Define y sigue tus objetivos de bienestar</p>
          <h1>Mis Metas</h1>
          <p className="subtitle">Gestiona tus metas activas, celebra tus logros y mantén el foco en lo que viene.</p>
        </div>
        <button type="button" className="primary-button" onClick={() => setModalOpen(true)}>
          <span aria-hidden="true">＋</span> Nueva Meta
        </button>
      </header>

      <GoalsSummaryGrid items={goalsSummaries} />

      <div className="goals-switch" role="presentation">
        <span className="goals-switch__item is-active">Metas Activas ({activeGoals.length})</span>
        <span className="goals-switch__item">Completadas ({completedGoals.length})</span>
      </div>

      <div className="goals-board">
        <section className="goals-column">
          <header className="goals-column__header">
            <h2>Metas Activas</h2>
            <span>{activeGoals.length}</span>
          </header>
          <div className="goals-column__list">
            {activeGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>
        <section className="goals-column">
          <header className="goals-column__header">
            <h2>Completadas</h2>
            <span>{completedGoals.length}</span>
          </header>
          <div className="goals-column__list">
            {completedGoals.length > 0 ? (
              completedGoals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
            ) : (
              <div className="empty-state">
                <span className="empty-state__icon" aria-hidden="true">
                  🎉
                </span>
                <p>Aún no tienes metas completadas. ¡Sigue avanzando!</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <GoalModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        typeOptions={goalTypeOptions}
        unitOptions={goalUnitOptions}
      />
    </div>
  )
}
