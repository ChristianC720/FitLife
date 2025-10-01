import { useEffect } from 'react'

interface Option {
  label: string
  value: string
}

interface AddExerciseModalProps {
  open: boolean
  onClose: () => void
  exerciseOptions: Option[]
}

export function AddExerciseModal({ open, onClose, exerciseOptions }: AddExerciseModalProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-exercise-title"
      onClick={onClose}
    >
      <div className="add-exercise-modal" onClick={(event) => event.stopPropagation()}>
        <header className="modal-header">
          <div>
            <h2 id="add-exercise-title">Agregar Ejercicio</h2>
            <p>Configura los detalles del ejercicio</p>
          </div>
          <button type="button" className="ghost-button modal-close" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </header>

        <form className="modal-form">
          <label className="form-field">
            <span>Ejercicio</span>
            <select defaultValue="" name="exercise">
              {exerciseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>Series</span>
              <input type="number" min={1} defaultValue={3} />
            </label>
            <label className="form-field">
              <span>Repeticiones</span>
              <input type="text" defaultValue="10-12" />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Peso (opcional)</span>
              <input type="text" defaultValue="20kg" />
            </label>
            <label className="form-field">
              <span>Descanso (seg)</span>
              <input type="number" min={0} defaultValue={60} />
            </label>
          </div>

          <label className="form-field">
            <span>Notas (opcional)</span>
            <textarea rows={2} placeholder="Instrucciones especiales..." />
          </label>

          <button type="button" className="primary-button modal-submit">
            Agregar Ejercicio
          </button>
        </form>
      </div>
    </div>
  )
}
