import { Link } from 'react-router-dom';
import { ExerciseHistoryList } from '../components/ExerciseHistoryList';
import { ExercisePlanCard } from '../components/ExercisePlanCard';
import { ExercisePlansToolbar } from '../components/ExercisePlansToolbar';
import { planLevels, planTypes } from '../data/exercises';
import { useExercisePlans } from '../hooks/useExercisePlans';
import { useWorkoutHistory } from '../hooks/useWorkoutHistory';
import { useState, useEffect } from 'react';

export function ExercisePlansPage() {
  const { plans, loading: plansLoading, error: plansError, filterPlans, refetch } = useExercisePlans();
  const { history, loading: historyLoading, error: historyError, refetch: refetchHistory } = useWorkoutHistory();
  
  const [filters, setFilters] = useState({
    type: 'all',
    level: 'all',
    search: '',
  });

  const activePlans = plans.filter(plan => plan.status !== 'Completado');

  const handleFilterChange = async (newFilters: typeof filters) => {
    setFilters(newFilters);
    await filterPlans(newFilters);
  };

  const handlePlanDeleted = async () => {
    await refetch();
  };

  const handlePlanCompleted = async () => {
    await refetch();
    await refetchHistory();
  };

  const handleHistoryDeleted = async () => {
    await refetchHistory();
  };

  useEffect(() => {
  }, [plans, activePlans]);

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

      <ExercisePlansToolbar 
        typeOptions={planTypes} 
        levelOptions={planLevels}
        onFilterChange={handleFilterChange}
      />

      {plansLoading && (
        <div className="loading-state">
          <p>Cargando planes de ejercicio...</p>
        </div>
      )}

      {plansError && (
        <div className="error-state">
          <p>{plansError}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      )}

      {!plansLoading && !plansError && (
        <>
          {activePlans.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon" aria-hidden="true">
              </div>
              <p>No tienes planes activos. ¡Crea uno nuevo para empezar!</p>
              <Link to="/ejercicios/crear" className="primary-button">
                Crear Plan
              </Link>
            </div>
          ) : (
            <section className="plan-grid" key={`plans-${activePlans.length}-${filters.type}-${filters.level}`}>
              {activePlans.map((plan) => (
                <ExercisePlanCard 
                  key={plan.id}
                  plan={plan}
                  onDelete={handlePlanDeleted}
                  onComplete={handlePlanCompleted}
                />
              ))}
            </section>
          )}
        </>
      )}

      {historyLoading && (
        <div className="loading-state">
          <p>Cargando historial...</p>
        </div>
      )}

      {historyError && (
        <div className="error-state">
          <p>{historyError}</p>
        </div>
      )}

      {!historyLoading && !historyError && history.length > 0 && (
        <ExerciseHistoryList 
          items={history}
          onDelete={handleHistoryDeleted}
        />
      )}
    </div>
  );
}