import { useEffect, useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface AddExerciseModalProps {
  open: boolean;
  onClose: () => void;
  exerciseOptions: Option[];
  onAddExercise: (exercise: {
    exercise_name: string;
    sets: number;
    reps: string;
    weight?: string;
    rest_seconds: number;
    notes?: string;
  }) => void;
}

export function AddExerciseModal({ 
  open, 
  onClose, 
  exerciseOptions,
  onAddExercise 
}: AddExerciseModalProps) {
  const [formData, setFormData] = useState({
    exercise_name: '',
    sets: 3,
    reps: '10-12',
    weight: '',
    rest_seconds: 60,
    notes: '',
  });

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setFormData({
        exercise_name: '',
        sets: 3,
        reps: '10-12',
        weight: '',
        rest_seconds: 60,
        notes: '',
      });
    }
  }, [open]);

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.exercise_name) {
      alert('Debes seleccionar un ejercicio');
      return;
    }

    onAddExercise({
      exercise_name: formData.exercise_name,
      sets: formData.sets,
      reps: formData.reps,
      weight: formData.weight || undefined,
      rest_seconds: formData.rest_seconds,
      notes: formData.notes || undefined,
    });
  };

  if (!open) return null;

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

        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Ejercicio *</span>
            <select 
              value={formData.exercise_name} 
              name="exercise"
              onChange={(e) => handleChange('exercise_name', e.target.value)}
              required
            >
              {exerciseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>Series *</span>
              <input 
                type="number" 
                min={1} 
                value={formData.sets}
                onChange={(e) => handleChange('sets', parseInt(e.target.value))}
                required
              />
            </label>
            <label className="form-field">
              <span>Repeticiones *</span>
              <input 
                type="text" 
                value={formData.reps}
                onChange={(e) => handleChange('reps', e.target.value)}
                placeholder="Ej: 10-12"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Peso (opcional)</span>
              <input 
                type="text" 
                value={formData.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                placeholder="Ej: 20kg"
              />
            </label>
            <label className="form-field">
              <span>Descanso (seg)</span>
              <input 
                type="number" 
                min={0} 
                value={formData.rest_seconds}
                onChange={(e) => handleChange('rest_seconds', parseInt(e.target.value))}
              />
            </label>
          </div>

          <label className="form-field">
            <span>Notas (opcional)</span>
            <textarea 
              rows={2} 
              placeholder="Instrucciones especiales..."
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
            />
          </label>

          <button type="submit" className="primary-button modal-submit">
            Agregar Ejercicio
          </button>
        </form>
      </div>
    </div>
  );
}