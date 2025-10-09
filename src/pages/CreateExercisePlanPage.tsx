import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddExerciseModal } from '../components/AddExerciseModal';
import {
  exerciseOptions,
  exerciseTypeOptions,
  planFrequencyOptions,
  planLevelOptions,
} from '../data/exercises';
import * as exerciseApi from '../services/exerciseApi';

interface Exercise {
  id?: number;
  exercise_name: string;
  sets: number;
  reps: string;
  weight?: string;
  rest_seconds: number;
  notes?: string;
  order: number;
}

export function CreateExercisePlanPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [planData, setPlanData] = useState({
    name: '',
    category: '',
    description: '',
    level: '',
    duration: '45 min',
    frequency: '',
  });

  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handlePlanChange = (field: string, value: string) => {
    setPlanData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddExercise = (exercise: Omit<Exercise, 'order'>) => {
    setExercises(prev => [
      ...prev,
      { ...exercise, order: prev.length + 1 }
    ]);
    handleCloseModal();
  };

  const handleRemoveExercise = (index: number) => {
    setExercises(prev => prev.filter((_, i) => i !== index));
  };

  const handleCreatePlan = async () => {
    if (!planData.name.trim()) {
      setError('El nombre del plan es requerido');
      return;
    }
    if (!planData.category) {
      setError('Debes seleccionar un tipo de entrenamiento');
      return;
    }
    if (!planData.level) {
      setError('Debes seleccionar un nivel');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const planResponse = await exerciseApi.createPlan({
        name: planData.name,
        category: planData.category,
        description: planData.description || undefined,
        duration: planData.duration || undefined,
        frequency: planData.frequency || undefined,
        level: planData.level,
        status: 'Programado',
        progress: 0,
      });

      if (!planResponse.success) {
        throw new Error('Error al crear el plan');
      }

      const createdPlanId = planResponse.data.id;

      if (exercises.length > 0) {
        for (const exercise of exercises) {
          await exerciseApi.addExerciseToPlan(createdPlanId, {
            exercise_name: exercise.exercise_name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            rest_seconds: exercise.rest_seconds,
            notes: exercise.notes,
            order: exercise.order,
          });
        }
      }

      navigate('/ejercicios');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido al crear el plan');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (confirm('¿Estás seguro de que deseas cancelar? Se perderán los cambios.')) {
      navigate('/ejercicios');
    }
  };

  return (
    <div className="create-plan-page">
      <Link to="/ejercicios" className="back-link">
        ← Volver a planes de ejercicio
      </Link>

      <header className="create-plan-header">
        <div>
          <h1>Crear Nuevo Plan</h1>
          <p>Diseña un plan de ejercicio personalizado</p>
        </div>
      </header>

      {error && (
        <div className="error-message" style={{ 
          padding: '1rem', 
          background: '#fee', 
          border: '1px solid #fcc',
          borderRadius: '8px',
          color: '#c00',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      <div className="create-plan-grid">
        <section className="create-card">
          <header>
            <h2>Información del Plan</h2>
            <p>Completa los detalles básicos de tu plan de ejercicio</p>
          </header>
          <form className="plan-form" aria-label="Formulario de plan de ejercicio">
            <div className="form-row">
              <label className="form-field">
                <span>Nombre del Plan *</span>
                <input 
                  type="text" 
                  placeholder="Ej: Fuerza Total" 
                  name="name"
                  value={planData.name}
                  onChange={(e) => handlePlanChange('name', e.target.value)}
                  required
                />
              </label>
              <label className="form-field">
                <span>Tipo de Entrenamiento *</span>
                <select 
                  name="type" 
                  value={planData.category}
                  onChange={(e) => handlePlanChange('category', e.target.value)}
                  required
                >
                  {exerciseTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="form-field">
              <span>Descripción</span>
              <textarea
                name="description"
                placeholder="Describe el objetivo y características del plan..."
                rows={3}
                value={planData.description}
                onChange={(e) => handlePlanChange('description', e.target.value)}
              />
            </label>

            <div className="form-row">
              <label className="form-field">
                <span>Nivel *</span>
                <select 
                  name="level" 
                  value={planData.level}
                  onChange={(e) => handlePlanChange('level', e.target.value)}
                  required
                >
                  {planLevelOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                <span>Duración</span>
                <input 
                  type="text" 
                  value={planData.duration} 
                  name="duration"
                  onChange={(e) => handlePlanChange('duration', e.target.value)}
                />
              </label>
              <label className="form-field">
                <span>Frecuencia</span>
                <select 
                  name="frequency" 
                  value={planData.frequency}
                  onChange={(e) => handlePlanChange('frequency', e.target.value)}
                >
                  {planFrequencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
        </section>

        <aside className="create-card plan-summary">
          <header>
            <h2>Resumen del Plan</h2>
          </header>
          <dl>
            <div>
              <dt>Nombre:</dt>
              <dd>{planData.name || 'Sin nombre'}</dd>
            </div>
            <div>
              <dt>Tipo:</dt>
              <dd>{planData.category || 'No definido'}</dd>
            </div>
            <div>
              <dt>Nivel:</dt>
              <dd>{planData.level || 'No definido'}</dd>
            </div>
            <div>
              <dt>Ejercicios:</dt>
              <dd>{exercises.length}</dd>
            </div>
          </dl>
          <div className="summary-actions">
            <button 
              type="button" 
              className="primary-button"
              onClick={handleCreatePlan}
              disabled={loading}
            >
              {loading ? 'Creando...' : 'Crear Plan'}
            </button>
            <button 
              type="button" 
              className="ghost-button"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancelar
            </button>
          </div>
        </aside>
      </div>

      <section className="create-card exercise-list-card">
        <header>
          <div>
            <h2>Ejercicios ({exercises.length})</h2>
            <p>Agrega los ejercicios que formarán parte de este plan</p>
          </div>
          <button type="button" className="primary-button secondary" onClick={handleOpenModal}>
            + Agregar Ejercicio
          </button>
        </header>
        
        {exercises.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon" aria-hidden="true">
            </div>
            <p>No has agregado ejercicios aún. Haz clic en "Agregar Ejercicio" para comenzar.</p>
          </div>
        ) : (
          <ul className="exercise-preview-list">
            {exercises.map((exercise, index) => (
              <li key={index} className="exercise-preview-item">
                <div>
                  <strong>{exercise.exercise_name}</strong>
                  <p>{exercise.sets} series × {exercise.reps} reps {exercise.weight && `(${exercise.weight})`}</p>
                  {exercise.notes && <small>{exercise.notes}</small>}
                </div>
                <button 
                  type="button"
                  onClick={() => handleRemoveExercise(index)}
                  className="ghost-button"
                  aria-label="Eliminar ejercicio"
                >
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <AddExerciseModal
        open={isModalOpen}
        onClose={handleCloseModal}
        exerciseOptions={exerciseOptions}
        onAddExercise={handleAddExercise}
      />
    </div>
  );
}