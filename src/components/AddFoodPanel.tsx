import { useState } from 'react'
import type { FormEvent } from 'react'
import type { FrequentFoodItem, MealOption } from '../types/nutrition'

interface AddFoodPanelProps {
  mealOptions: MealOption[]
  frequentFoods: FrequentFoodItem[]
  onClose?: () => void
}

type AddFoodTab = 'search' | 'custom'

export function AddFoodPanel({ mealOptions, frequentFoods, onClose }: AddFoodPanelProps) {
  const [activeTab, setActiveTab] = useState<AddFoodTab>('search')
  const [selectedMeal, setSelectedMeal] = useState<string>(mealOptions[2]?.value ?? 'snack')
  const selectedMealLabel = mealOptions.find((option) => option.value === selectedMeal)?.label ?? 'Snack'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section className="add-food-panel" aria-labelledby="add-food-heading">
      <header className="add-food-header">
        {onClose ? (
          <button type="button" className="ghost-button add-food-back" onClick={onClose}>
            ←
          </button>
        ) : null}
        <div>
          <p className="eyebrow">Busca y agrega alimentos a tu registro diario</p>
          <h2 id="add-food-heading">Agregar Alimentos</h2>
        </div>
      </header>

      <div className="add-food-layout">
        <div className="add-food-card selection-card">
          <header>
            <div>
              <h3>Seleccionar Comida</h3>
              <p>Elige el momento del día al que deseas agregar alimentos</p>
            </div>
          </header>
          <div className="selection-field">
            <label htmlFor="meal-type" className="sr-only">
              Momento del día
            </label>
            <select
              id="meal-type"
              value={selectedMeal}
              onChange={(event) => setSelectedMeal(event.target.value)}
            >
              {mealOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="add-food-tabs" role="tablist" aria-label="Opciones de alimentos">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'search'}
              className={`add-food-tab${activeTab === 'search' ? ' is-active' : ''}`}
              onClick={() => setActiveTab('search')}
            >
              Buscar Alimentos
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'custom'}
              className={`add-food-tab${activeTab === 'custom' ? ' is-active' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Alimento Personalizado
            </button>
          </div>
        </div>

        <div className="add-food-card form-card">
          <header>
            <div>
              <h3>Crear Alimento Personalizado</h3>
              <p>Agrega un alimento que no está en nuestra base de datos</p>
            </div>
          </header>
          <form className="custom-food-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="form-field">
                <span>Nombre del Alimento</span>
                <input type="text" placeholder="Ej: Mi receta especial" />
              </label>
              <label className="form-field">
                <span>Porción</span>
                <input type="text" placeholder="Ej: 100g, 1 taza" />
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Calorías</span>
                <input type="number" placeholder="0" min={0} />
              </label>
              <label className="form-field">
                <span>Proteínas (g)</span>
                <input type="number" placeholder="0" min={0} />
              </label>
              <label className="form-field">
                <span>Carbohidratos (g)</span>
                <input type="number" placeholder="0" min={0} />
              </label>
              <label className="form-field">
                <span>Grasas (g)</span>
                <input type="number" placeholder="0" min={0} />
              </label>
            </div>

            <button type="submit" className="primary-button add-food-submit">
              + Agregar Alimento Personalizado
            </button>
          </form>
        </div>

        <aside className="add-food-card selected-card">
          <header>
            <div>
              <h3>Alimentos Seleccionados</h3>
              <p>Para {selectedMealLabel.toLowerCase()} (0 alimentos)</p>
            </div>
          </header>
          <p className="empty-selection">No has seleccionado alimentos aún</p>
        </aside>

        <aside className="add-food-card frequent-card">
          <header>
            <div>
              <h3>Alimentos Frecuentes</h3>
              <p>Agrega rápidamente alimentos que consumes con frecuencia</p>
            </div>
          </header>
          <ul className="frequent-food-list">
            {frequentFoods.map((item) => (
              <li key={item.id}>
                <button type="button" className="frequent-food-button">
                  <span className="food-name">{item.name}</span>
                  <span className="food-portion">({item.portion})</span>
                  <span aria-hidden="true" className="food-add">
                    +
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
