import type {
  ProgressSummary,
  ProgressTab,
  ProgressTabId,
  ProgressView,
} from '../types/progress'

export const progressSummaries: ProgressSummary[] = [
  {
    id: 'steps',
    title: 'Pasos Totales',
    value: '72,200',
    description: 'Promedio: 10,314/día',
    accent: 'success',
    icon: '',
  },
  {
    id: 'calories',
    title: 'Calorías Quemadas',
    value: '16,850',
    description: 'Promedio: 2407/día',
    accent: 'warning',
    icon: '',
  },
  {
    id: 'workouts',
    title: 'Entrenamientos',
    value: '5',
    description: '42 min promedio',
    accent: 'info',
    icon: '',
  },
  {
    id: 'weight',
    title: 'Cambio de Peso',
    value: '-0.3 kg',
    description: 'Esta semana',
    accent: 'danger',
    icon: '',
  },
]

export const progressTabs: ProgressTab[] = [
  { id: 'activity', label: 'Actividad' },
  { id: 'nutrition', label: 'Nutrición' },
  { id: 'weight', label: 'Peso' },
  { id: 'goals', label: 'Metas' },
]

export const progressViews: Record<ProgressTabId, ProgressView> = {
  activity: {
    type: 'activity',
    dailySteps: [
      { day: 'Lun', value: 9800, target: 12000 },
      { day: 'Mar', value: 10250, target: 12000 },
      { day: 'Mié', value: 8700, target: 12000 },
      { day: 'Jue', value: 14320, target: 12000 },
      { day: 'Vie', value: 15200, target: 12000 },
      { day: 'Sáb', value: 16800, target: 12000 },
      { day: 'Dom', value: 13600, target: 12000 },
    ],
    distribution: [
      { id: 'cardio', label: 'Cardio', percentage: 40, accent: 'cardio' },
      { id: 'strength', label: 'Fuerza', percentage: 35, accent: 'strength' },
      { id: 'flexibility', label: 'Flexibilidad', percentage: 15, accent: 'flexibility' },
      { id: 'sports', label: 'Deportes', percentage: 10, accent: 'sports' },
    ],
  },
  nutrition: {
    type: 'nutrition',
    calories: [
      { day: 'Lun', consumed: 1950, burned: 2100 },
      { day: 'Mar', consumed: 2050, burned: 2150 },
      { day: 'Mié', consumed: 1880, burned: 2000 },
      { day: 'Jue', consumed: 2200, burned: 2500 },
      { day: 'Vie', consumed: 2300, burned: 2400 },
      { day: 'Sáb', consumed: 2450, burned: 2600 },
      { day: 'Dom', consumed: 2000, burned: 2100 },
    ],
  },
  weight: {
    type: 'weight',
    trend: [
      { day: 'Semana 1', weight: 72.4, target: 71.5 },
      { day: 'Semana 2', weight: 72.1, target: 71.2 },
      { day: 'Semana 3', weight: 71.8, target: 70.9 },
      { day: 'Semana 4', weight: 71.4, target: 70.6 },
    ],
    metrics: [
      { label: 'Peso Actual', value: '71.4 kg' },
      { label: 'Objetivo', value: '69.8 kg' },
      { label: 'Variación', value: '-0.7 kg' },
    ],
  },
  goals: {
    type: 'goals',
    completion: [
      { id: 'active', label: 'Activas', percentage: 65, accent: 'info' },
      { id: 'completed', label: 'Completadas', percentage: 25, accent: 'success' },
      { id: 'overdue', label: 'Vencidas', percentage: 10, accent: 'warning' },
    ],
    metrics: [
      { label: 'Metas activas', value: '3' },
      { label: 'Compleciones este mes', value: '1' },
      { label: 'Promedio avance', value: '65%' },
    ],
  },
}