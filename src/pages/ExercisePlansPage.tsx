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

  // Filtrar planes activos (no completados)
  const activePlans = plans.filter(plan => plan.status !== 'Completado');

  // Forzar actualización cuando cambian los filtros
  const handleFilterChange = async (newFilters: typeof filters) => {
    console.log('🔄 Cambiando filtros a:', newFilters);
    setFilters(newFilters);
    await filterPlans(newFilters);
  };

  // Manejar eliminación de plan
  const handlePlanDeleted = async () => {
    console.log('🗑️ Plan eliminado, recargando lista...');
    await refetch();
  };

  // Manejar finalización de plan
  const handlePlanCompleted = async () => {
    console.log('✅ Plan completado, recargando lista e historial...');
    await refetch();
    await refetchHistory();
  };

  // Manejar eliminación del historial
  const handleHistoryDeleted = async () => {
    console.log('🗑️ Entrada eliminada del historial, recargando...');
    await refetchHistory();
  };

  // Debug: mostrar planes actuales
  useEffect(() => {
    console.log('📊 Planes totales:', plans.length);
    console.log('📊 Planes activos:', activePlans.length);
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
          <p>❌ Error: {plansError}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      )}

      {!plansLoading && !plansError && (
        <>
          {activePlans.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon" aria-hidden="true">
                🏋️
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
          <p>❌ Error al cargar historial: {historyError}</p>
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