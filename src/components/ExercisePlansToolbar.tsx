import { useState } from 'react';
import type { PlanFilterOption } from '../types/exercises';

interface ExercisePlansToolbarProps {
  typeOptions: PlanFilterOption[];
  levelOptions: PlanFilterOption[];
  onFilterChange: (filters: { type: string; level: string; search: string }) => void;
}

export function ExercisePlansToolbar({ 
  typeOptions, 
  levelOptions,
  onFilterChange 
}: ExercisePlansToolbarProps) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [level, setLevel] = useState('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    
    setTimeout(() => {
      onFilterChange({ type, level, search: value });
    }, 500);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setType(value);
    onFilterChange({ type: value, level, search });
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLevel(value);
    onFilterChange({ type, level: value, search });
  };

  const handleClearFilters = () => {
    setSearch('');
    setType('all');
    setLevel('all');
    onFilterChange({ type: 'all', level: 'all', search: '' });
  };

  return (
    <div className="exercise-toolbar">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input 
          type="search" 
          name="plan-search" 
          placeholder="Buscar planes de ejercicio..." 
          aria-label="Buscar planes de ejercicio"
          value={search}
          onChange={handleSearchChange}
        />
      </label>
      <div className="toolbar-filters">
        <label className="filter-select">
          <span>Tipo</span>
          <select 
            name="plan-type" 
            aria-label="Filtrar por tipo" 
            value={type}
            onChange={handleTypeChange}
          >
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="filter-select">
          <span>Nivel</span>
          <select 
            name="plan-level" 
            aria-label="Filtrar por nivel" 
            value={level}
            onChange={handleLevelChange}
          >
            {levelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button 
          className="ghost-button" 
          aria-label="Limpiar filtros"
          onClick={handleClearFilters}
          title="Limpiar filtros"
        >
          🔄
        </button>
      </div>
    </div>
  );
}