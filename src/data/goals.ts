import type { Goal, GoalFormOption, GoalsSummary } from '../types/goals'

export const goalsSummaries: GoalsSummary[] = [
  {
    id: 'active',
    title: 'Metas Activas',
    value: '3',
    description: 'Actualmente en seguimiento',
    icon: '🎯',
    accent: 'success',
  },
  {
    id: 'completed',
    title: 'Completadas',
    value: '1',
    description: 'Metas finalizadas este mes',
    icon: '🏁',
    accent: 'info',
  },
  {
    id: 'average-progress',
    title: 'Progreso Promedio',
    value: '65%',
    description: 'Avance combinado de tus metas',
    icon: '📊',
    accent: 'warning',
  },
  {
    id: 'upcoming',
    title: 'Próximas a vencer',
    value: '3',
    description: 'Metas con fecha límite cercana',
    icon: '⏳',
    accent: 'danger',
  },
]

export const goalsList: Goal[] = [
  {
    id: 'daily-steps',
    state: 'active',
    icon: '🥾',
    title: 'Caminar 10,000 pasos diarios',
    description: 'Mantener una rutina de caminata constante para mejorar la resistencia cardiovascular.',
    progressLabel: '7,500 / 10,000 pasos',
    progressPercent: 75,
    badges: [
      { id: 'overdue', label: 'Vencida', tone: 'danger', position: 'left' },
      { id: 'in-progress', label: 'En progreso', tone: 'info', position: 'right' },
    ],
    actions: [
      { id: 'edit', label: 'Editar meta', icon: '✏️' },
      { id: 'remind', label: 'Configurar recordatorio', icon: '🔔' },
    ],
  },
  {
    id: 'weekly-workouts',
    state: 'active',
    icon: '🏋️',
    title: 'Ejercitarse 4 veces por semana',
    description: 'Mantener consistencia en el entrenamiento combinando fuerza y cardio.',
    progressLabel: '3 / 4 sesiones/semana',
    progressPercent: 75,
    badges: [
      { id: 'overdue', label: 'Vencida', tone: 'danger', position: 'left' },
      { id: 'on-track', label: 'En progreso', tone: 'info', position: 'right' },
    ],
    actions: [
      { id: 'edit', label: 'Editar meta', icon: '✏️' },
      { id: 'share', label: 'Compartir avance', icon: '📤' },
    ],
  },
  {
    id: 'sleep-hygiene',
    state: 'active',
    icon: '🛌',
    title: 'Dormir 7 horas por noche',
    description: 'Optimizar la calidad del descanso estableciendo horarios regulares.',
    progressLabel: '4.5 / 7 noches cumplidas',
    progressPercent: 64,
    badges: [
      { id: 'focus', label: 'Necesita atención', tone: 'warning', position: 'left' },
      { id: 'tracking', label: 'En progreso', tone: 'info', position: 'right' },
    ],
    actions: [
      { id: 'edit', label: 'Editar meta', icon: '✏️' },
      { id: 'remind', label: 'Configurar recordatorio', icon: '🔔' },
    ],
  },
  {
    id: 'weight-loss',
    state: 'completed',
    icon: '⚖️',
    title: 'Perder 5 kg',
    description: 'Alcanzar un peso ideal de forma saludable con hábitos sostenibles.',
    progressLabel: '5 / 5 kg',
    progressPercent: 100,
    badges: [
      { id: 'celebrate', label: 'Completada', tone: 'success', position: 'right' },
    ],
    actions: [
      { id: 'review', label: 'Ver detalles', icon: '🔎' },
      { id: 'duplicate', label: 'Duplicar meta', icon: '➕' },
    ],
  },
]

export const goalTypeOptions: GoalFormOption[] = [
  { value: 'activity', label: 'Actividad física' },
  { value: 'nutrition', label: 'Nutrición' },
  { value: 'habits', label: 'Hábitos saludables' },
  { value: 'mindfulness', label: 'Bienestar mental' },
]

export const goalUnitOptions: GoalFormOption[] = [
  { value: 'steps', label: 'pasos' },
  { value: 'kilograms', label: 'kg' },
  { value: 'minutes', label: 'minutos' },
  { value: 'sessions', label: 'sesiones/semana' },
]
