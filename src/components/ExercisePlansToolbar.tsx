import type { PlanFilterOption } from '../types/exercises'

interface ExercisePlansToolbarProps {
  typeOptions: PlanFilterOption[]
  levelOptions: PlanFilterOption[]
}

export function ExercisePlansToolbar({ typeOptions, levelOptions }: ExercisePlansToolbarProps) {
  return (
    <div className="exercise-toolbar">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input type="search" name="plan-search" placeholder="Buscar planes de ejercicio..." aria-label="Buscar planes de ejercicio" />
      </label>
      <div className="toolbar-filters">
        <label className="filter-select">
          <span>Tipo</span>
          <select name="plan-type" aria-label="Filtrar por tipo" defaultValue={typeOptions[0]?.value}>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-select">
          <span>Nivel</span>
          <select name="plan-level" aria-label="Filtrar por nivel" defaultValue={levelOptions[0]?.value}>
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button className="ghost-button" aria-label="Más opciones de filtrado">
          ⚙️
        </button>
      </div>
    </div>
  )
}
