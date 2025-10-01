import { Link } from 'react-router-dom'
import { ExerciseHistoryList } from '../components/ExerciseHistoryList'
import { ExercisePlanCard } from '../components/ExercisePlanCard'
import { ExercisePlansToolbar } from '../components/ExercisePlansToolbar'
import { exerciseHistory, exercisePlans, planLevels, planTypes } from '../data/exercises'

export function ExercisePlansPage() {
  return (
    <div className="exercise-page">
      <header className="exercise-header">
        <div>
          <h1>Planes de Ejercicio</h1>
          <p>Gestiona y sigue tus rutinas de entrenamiento personalizadas</p>
        </div>
        <Link to="/ejercicios/crear" className="primary-button create-plan-link">
          Crear Nuevo Plan
        </Link>
      </header>

      <ExercisePlansToolbar typeOptions={planTypes} levelOptions={planLevels} />

      <section className="plan-grid">
        {exercisePlans.map((plan) => (
          <ExercisePlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      <ExerciseHistoryList items={exerciseHistory} />
    </div>
  )
}
