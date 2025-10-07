import { useMemo, useState } from 'react';
import { ProgressCharts } from '../components/ProgressCharts';
import { ProgressSummaryGrid } from '../components/ProgressSummaryGrid';
import { ProgressTabs } from '../components/ProgressTabs';
import { progressTabs } from '../data/progress';
import type { ProgressTabId, ProgressSummary } from '../types/progress';
import { useProgress } from '../hooks/';

export function ProgressPage() {
  const [activeTab, setActiveTab] = useState<ProgressTabId>('activity');
  const [days, setDays] = useState(7);
  
  const { 
    summary, 
    metrics,
    calorieBalance, 
    weightTrend, 
    distribution,
    goalsProgress,
    loading, 
    error 
  } = useProgress(days);

  // Convertir datos del backend al formato del frontend
  const progressSummaries: ProgressSummary[] = useMemo(() => {
    if (!summary) return [];
    
    return [
      {
        id: 'workouts',
        title: 'Entrenamientos',
        value: summary.totalWorkouts.toString(),
        description: `${Math.round(summary.totalDuration / 60)} min promedio`,
        accent: 'success',
        icon: '💪',
      },
      {
        id: 'calories',
        title: 'Calorías Quemadas',
        value: summary.totalCaloriesBurned.toLocaleString(),
        description: `Promedio: ${Math.round(summary.totalCaloriesBurned / days)}/día`,
        accent: 'warning',
        icon: '🔥',
      },
      {
        id: 'duration',
        title: 'Tiempo Total',
        value: `${summary.totalDuration} min`,
        description: `${Math.round(summary.totalDuration / days)} min promedio`,
        accent: 'info',
        icon: '⏱️',
      },
      {
        id: 'weight',
        title: 'Cambio de Peso',
        value: `${summary.weightChange > 0 ? '+' : ''}${summary.weightChange} kg`,
        description: 'Esta semana',
        accent: summary.weightChange < 0 ? 'success' : 'danger',
        icon: '⚖️',
      },
    ];
  }, [summary, days]);

  const activeView = useMemo(() => {
    if (activeTab === 'activity') {
      return {
        type: 'activity' as const,
        dailySteps: metrics.map(m => ({
          day: new Date(m.date).toLocaleDateString('es', { weekday: 'short' }),
          value: m.workout_duration_minutes,
          target: 60,
        })),
        distribution: distribution.map(d => ({
          id: d.category,
          label: d.category.charAt(0).toUpperCase() + d.category.slice(1),
          percentage: d.percentage,
          accent: getCategoryAccent(d.category),
        })),
      };
    }
    
    if (activeTab === 'nutrition') {
      return {
        type: 'nutrition' as const,
        calories: calorieBalance.map(c => ({
          day: new Date(c.date).toLocaleDateString('es', { weekday: 'short' }),
          consumed: c.consumed,
          burned: c.burned,
        })),
      };
    }
    
    if (activeTab === 'weight') {
      return {
        type: 'weight' as const,
        trend: weightTrend.map(w => ({
          day: new Date(w.date).toLocaleDateString('es', { day: 'numeric', month: 'short' }),
          weight: w.weight,
          target: 69.8,
        })),
        metrics: [
          { label: 'Peso Actual', value: `${summary?.avgWeight || 0} kg` },
          { label: 'Objetivo', value: '69.8 kg' },
          { label: 'Variación', value: `${summary?.weightChange || 0} kg` },
        ],
      };
    }
    
    // goals
    return {
      type: 'goals' as const,
      completion: goalsProgress.map(g => ({
        id: g.id.toString(),
        label: getGoalLabel(g.type),
        percentage: g.percentage,
        accent: getGoalAccent(g.percentage),
      })),
      metrics: [
        { label: 'Metas Activas', value: goalsProgress.length.toString() },
        { label: 'Completadas', value: '0' },
      ],
    };
  }, [activeTab, metrics, distribution, calorieBalance, weightTrend, goalsProgress, summary]);

  if (loading) {
    return (
      <div className="progress-page">
        <div className="loading-state">
          <p>Cargando datos de progreso...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="progress-page">
        <div className="error-state">
          <p>❌ Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="progress-page">
      <header className="progress-header">
        <div>
          <p className="eyebrow">Analiza tu progreso y tendencias de bienestar</p>
          <h1>Visualización de Progreso</h1>
        </div>
        <div className="progress-actions">
          <div className="progress-range">
            <label htmlFor="progress-range" className="sr-only">
              Rango de tiempo
            </label>
            <select 
              id="progress-range" 
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
            >
              <option value="7">7 días</option>
              <option value="14">14 días</option>
              <option value="30">30 días</option>
            </select>
          </div>
          <button type="button" className="ghost-button">Exportar</button>
          <button type="button" className="ghost-button">Compartir</button>
        </div>
      </header>

      <ProgressSummaryGrid items={progressSummaries} />
      <ProgressTabs tabs={progressTabs} activeTabId={activeTab} onTabChange={setActiveTab} />
      <ProgressCharts view={activeView} />
    </div>
  );
}

// Funciones auxiliares
function getCategoryAccent(category: string): 'cardio' | 'strength' | 'flexibility' | 'sports' {
  const map: Record<string, 'cardio' | 'strength' | 'flexibility' | 'sports'> = {
    cardio: 'cardio',
    fuerza: 'strength',
    flexibilidad: 'flexibility',
    movilidad: 'flexibility',
    deportes: 'sports',
  };
  return map[category.toLowerCase()] || 'cardio';
}

function getGoalLabel(type: string): string {
  const labels: Record<string, string> = {
    weight: 'Peso',
    workouts: 'Entrenamientos',
    duration: 'Duración',
    calories: 'Calorías',
  };
  return labels[type] || type;
}

function getGoalAccent(percentage: number): 'success' | 'warning' | 'info' {
  if (percentage >= 80) return 'success';
  if (percentage >= 50) return 'warning';
  return 'info';
}