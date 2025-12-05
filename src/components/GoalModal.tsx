import { useId } from 'react'
import type { FormEvent } from 'react'
import type { GoalFormOption } from '../types/goals'
import { GoalSubject } from '../services/observer/GoalSubject'

import type { GoalEvent } from '../services/observer/NotificationObserver'

interface GoalModalProps {
  isOpen: boolean
  onClose: () => void
  typeOptions: GoalFormOption[]
  unitOptions: GoalFormOption[]
}

export function GoalModal({ isOpen, onClose, typeOptions, unitOptions }: GoalModalProps) {
  const titleInputId = useId()
  const descriptionInputId = useId()
  const typeSelectId = useId()
  const targetInputId = useId()
  const unitSelectId = useId()
  const deadlineInputId = useId()

  if (!isOpen) {
    return null
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const fd = new FormData(form)
    const title = (fd.get('title') as string) || 'Nueva meta'
    const goalEvent: GoalEvent = {
      id: `${Date.now()}`,
      title,
      progress: 0,
    }

  GoalSubject.notify(goalEvent)

    onClose()
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby={`${titleInputId}-label`}>
      <div className="goal-modal">
        <header className="goal-modal__header">
          <div>
            <h2 id={`${titleInputId}-label`}>Crear Nueva Meta</h2>
            <p>Define una meta personalizada para tu progreso</p>
          </div>
          <button type="button" className="ghost-button" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </header>

        <form className="goal-modal__form" onSubmit={handleSubmit}>
          <div className="goal-modal__field">
            <label htmlFor={titleInputId}>Título de la meta</label>
            <div className="goal-modal__input-with-icon">
              <span aria-hidden="true">🖊️</span>
              <input
                id={titleInputId}
                name="title"
                type="text"
                placeholder="Caminar 10,000 pasos diarios"
                required
              />
            </div>
          </div>

          <div className="goal-modal__field">
            <label htmlFor={descriptionInputId}>
              Descripción <span className="optional">(opcional)</span>
            </label>
            <textarea
              id={descriptionInputId}
              name="description"
              placeholder="Describe tu meta..."
              rows={3}
            />
          </div>

          <div className="goal-modal__field-row">
            <div className="goal-modal__field">
              <label htmlFor={typeSelectId}>Tipo</label>
              <select id={typeSelectId} name="type" defaultValue="">
                <option value="" disabled>
                  Seleccionar
                </option>
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="goal-modal__field">
              <label htmlFor={targetInputId}>Objetivo</label>
              <input id={targetInputId} name="target" type="number" min={0} placeholder="1000" />
            </div>
          </div>

          <div className="goal-modal__field-row">
            <div className="goal-modal__field">
              <label htmlFor={unitSelectId}>Unidad</label>
              <select id={unitSelectId} name="unit" defaultValue="">
                <option value="" disabled>
                  pasos, kg, ml...
                </option>
                {unitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="goal-modal__field">
              <label htmlFor={deadlineInputId}>Fecha límite</label>
              <input id={deadlineInputId} name="deadline" type="date" placeholder="dd/mm/aaaa" />
            </div>
          </div>

          <button type="submit" className="primary-button">
            Crear Meta
          </button>
        </form>
      </div>
    </div>
  )
}
