import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AddExerciseModal } from '../components/AddExerciseModal'
import {
  exerciseOptions,
  exerciseTypeOptions,
  planFrequencyOptions,
  planLevelOptions,
} from '../data/exercises'

export function CreateExercisePlanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

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
                <input type="text" placeholder="Ej: Fuerza Total" name="name" />
              </label>
              <label className="form-field">
                <span>Tipo de Entrenamiento *</span>
                <select name="type" defaultValue="">
                  {exerciseTypeOptions.map((option) => (
                    <option key={option.label} value={option.value}>
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
              />
            </label>

            <div className="form-row">
              <label className="form-field">
                <span>Nivel</span>
                <select name="level" defaultValue="">
                  {planLevelOptions.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                <span>Duración</span>
                <input type="text" defaultValue="45 min" name="duration" />
              </label>
              <label className="form-field">
                <span>Frecuencia</span>
                <select name="frequency" defaultValue="">
                  {planFrequencyOptions.map((option) => (
                    <option key={option.label} value={option.value}>
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
              <dd>Sin nombre</dd>
            </div>
            <div>
              <dt>Tipo:</dt>
              <dd>No definido</dd>
            </div>
            <div>
              <dt>Nivel:</dt>
              <dd>No definido</dd>
            </div>
            <div>
              <dt>Ejercicios:</dt>
              <dd>0</dd>
            </div>
          </dl>
          <div className="summary-actions">
            <button type="button" className="primary-button">
              Crear Plan
            </button>
            <button type="button" className="ghost-button">
              Cancelar
            </button>
          </div>
        </aside>
      </div>

      <section className="create-card exercise-list-card">
        <header>
          <div>
            <h2>Ejercicios (0)</h2>
            <p>Agrega los ejercicios que formarán parte de este plan</p>
          </div>
          <button type="button" className="primary-button secondary" onClick={handleOpenModal}>
            + Agregar Ejercicio
          </button>
        </header>
        <div className="empty-state">
          <div className="empty-state__icon" aria-hidden="true">
            🏋️
          </div>
          <p>No has agregado ejercicios aún. Haz clic en "Agregar Ejercicio" para comenzar.</p>
        </div>
      </section>

      <AddExerciseModal
        open={isModalOpen}
        onClose={handleCloseModal}
        exerciseOptions={exerciseOptions}
      />
    </div>
  )
}
