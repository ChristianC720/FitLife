import { useState } from 'react';
import type { ExerciseHistoryEntry } from '../types/exercises';
import * as exerciseApi from '../services/exerciseApi';

interface ExerciseHistoryListProps {
  items: ExerciseHistoryEntry[];
  onDelete?: () => void;
}

export function ExerciseHistoryList({ items, onDelete }: ExerciseHistoryListProps) {
  const [showAll, setShowAll] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  
  const PREVIEW_LIMIT = 5;
  const displayedItems = showAll ? items : items.slice(0, PREVIEW_LIMIT);
  const hasMore = items.length > PREVIEW_LIMIT;

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`¿Eliminar "${name}" del historial?`)) {
      return;
    }

    try {
      setDeletingId(id);
      console.log('🗑️ Eliminando del historial:', id);
      
      await exerciseApi.deleteWorkoutEntry(id);
      
      console.log('✅ Eliminado del historial');
      
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error('❌ Error al eliminar del historial:', error);
      alert('Error al eliminar. Por favor intenta de nuevo.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section className="exercise-history">
      <header>
        <div>
          <h2>Historial de Entrenamientos</h2>
          <p>Tus últimas sesiones de ejercicio (últimos 30 días)</p>
        </div>
        {hasMore && !showAll && (
          <button 
            className="ghost-button"
            onClick={() => setShowAll(true)}
          >
            Ver historial completo
          </button>
        )}
        {showAll && (
          <button 
            className="ghost-button"
            onClick={() => setShowAll(false)}
          >
            Mostrar menos
          </button>
        )}
      </header>
      <ul className="history-list">
        {displayedItems.map((item) => (
          <li key={item.id} className={`history-item ${item.accent}`}>
            <div className="history-item__badge" aria-hidden="true"></div>
            <div className="history-item__content">
              <h3 className="history-item__name">{item.name}</h3>
              <p className="history-item__date">{item.date}</p>
            </div>
            <div className="history-item__meta">
              <span>{item.duration}</span>
              <button
                className="history-delete-button"
                onClick={() => handleDelete(item.id, item.name)}
                disabled={deletingId === item.id}
                aria-label="Eliminar del historial"
                title="Eliminar del historial"
              >
                {deletingId === item.id ? '⏳' : '🗑️'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {hasMore && !showAll && (
        <div style={{ 
          textAlign: 'center', 
          padding: '16px', 
          color: 'var(--text-muted)',
          fontSize: '14px'
        }}>
          Mostrando {PREVIEW_LIMIT} de {items.length} entrenamientos
        </div>
      )}
    </section>
  );
}