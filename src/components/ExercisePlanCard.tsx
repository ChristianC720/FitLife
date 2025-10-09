import { useState } from 'react';
import type { ExercisePlan } from '../types/exercises';
import * as exerciseApi from '../services/exerciseApi';

interface ExercisePlanCardProps {
  plan: ExercisePlan;
  onDelete?: () => void;
  onComplete?: () => void;
}

export function ExercisePlanCard({ plan, onDelete, onComplete }: ExercisePlanCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = async () => {
    try {
      setIsDeleting(true);
      
      console.log(' Eliminando plan:', plan.id);
      
      const response = await exerciseApi.deletePlan(plan.id);
      
      console.log(' Plan eliminado, respuesta:', response);
      
      setShowDeleteModal(false);
      
      if (onDelete) {
        await onDelete();
      }
      
    } catch (error) {
      console.error(' Error al eliminar plan:', error);
      alert('Error al eliminar el plan. Por favor intenta de nuevo.');
      setShowDeleteModal(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCompleteClick = () => {
    setShowCompleteModal(true);
  };

  const handleCancelComplete = () => {
    setShowCompleteModal(false);
  };

  const handleConfirmComplete = async () => {
    try {
      setIsCompleting(true);
      
      console.log('Completando plan:', plan.id);
      
      const response = await exerciseApi.completePlan(plan.id);
      
      console.log(' Plan completado, respuesta:', response);
      
      setShowCompleteModal(false);
      
      if (onComplete) {
        await onComplete();
      }
      
    } catch (error) {
      console.error(' Error al completar plan:', error);
      alert('Error al completar el plan. Por favor intenta de nuevo.');
      setShowCompleteModal(false);
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <>
      <article className={`plan-card ${plan.statusAccent}`}>
        <header className="plan-card__header">
          <div className="plan-card__title">
            <span className={`plan-card__badge ${plan.statusAccent}`}>{plan.category}</span>
            <h3>{plan.name}</h3>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span className={`plan-card__status ${plan.statusAccent}`}>{plan.status}</span>
            <button
              className="delete-plan-button"
              onClick={handleDeleteClick}
              disabled={isDeleting}
              aria-label="Eliminar plan"
              title="Eliminar plan"
            >
              🗑️
            </button>
          </div>
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
          
          {plan.status === 'Completado' ? (
            <button className="primary-button plan-card__cta">
              Ver Detalles
            </button>
          ) : (
            <button 
              className="success-button plan-card__cta"
              onClick={handleCompleteClick}
              disabled={isCompleting}
            >
              {isCompleting ? 'Finalizando...' : '✓ Finalizar'}
            </button>
          )}
        </footer>
      </article>

      {showDeleteModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-plan-title"
          onClick={handleCancelDelete}
        >
          <div className="delete-plan-modal" onClick={(e) => e.stopPropagation()}>
            <div className="delete-modal-icon">⚠️</div>
            <header className="delete-modal-header">
              <h2 id="delete-plan-title">¿Eliminar plan de ejercicio?</h2>
              <p>
                Estás a punto de eliminar el plan <strong>"{plan.name}"</strong>. 
                Esta acción no se puede deshacer.
              </p>
            </header>

            <div className="delete-modal-actions">
              <button
                type="button"
                className="danger-button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Eliminando...' : 'Sí, eliminar plan'}
              </button>
              <button
                type="button"
                className="ghost-button"
                onClick={handleCancelDelete}
                disabled={isDeleting}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showCompleteModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="complete-plan-title"
          onClick={handleCancelComplete}
        >
          <div className="complete-plan-modal" onClick={(e) => e.stopPropagation()}>
            <div className="complete-modal-icon">🎉</div>
            <header className="complete-modal-header">
              <h2 id="complete-plan-title">¿Finalizar plan de ejercicio?</h2>
              <p>
                Vas a marcar el plan <strong>"{plan.name}"</strong> como completado.
                Se agregará automáticamente a tu historial de entrenamientos.
              </p>
            </header>

            <div className="complete-modal-actions">
              <button
                type="button"
                className="success-button"
                onClick={handleConfirmComplete}
                disabled={isCompleting}
              >
                {isCompleting ? 'Finalizando...' : '✓ Sí, finalizar plan'}
              </button>
              <button
                type="button"
                className="ghost-button"
                onClick={handleCancelComplete}
                disabled={isCompleting}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}