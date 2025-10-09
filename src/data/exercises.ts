import type {
  ExerciseHistoryEntry,
  ExercisePlan,
  PlanFilterOption,
} from '../types/exercises'

export const exercisePlans: ExercisePlan[] = [
  {
    id: 'plan-strength-total',
    name: 'Fuerza Total',
    category: 'Fuerza',
    description: 'Entrenamiento completo de fuerza para todo el cuerpo',
    duration: '45 min',
    exercises: 8,
    frequency: '3x semana',
    level: 'Intermedio',
    status: 'En progreso',
    statusAccent: 'warning',
    progress: 68,
    schedule: 'Hoy',
  },
  {
    id: 'plan-hiit-cardio',
    name: 'Cardio HIIT',
    category: 'Cardio',
    description: 'Entrenamiento de alta intensidad para quemar grasa',
    duration: '30 min',
    exercises: 6,
    frequency: '4x semana',
    level: 'Avanzado',
    status: 'Completado',
    statusAccent: 'success',
    progress: 100,
    schedule: 'Ayer',
  },
  {
    id: 'plan-yoga-morning',
    name: 'Yoga Matutino',
    category: 'Flexibilidad',
    description: 'Rutina suave para comenzar el día con energía',
    duration: '25 min',
    exercises: 12,
    frequency: 'Diario',
    level: 'Principiante',
    status: 'Programado',
    statusAccent: 'info',
    progress: 32,
    schedule: 'Mañana',
  },
  {
    id: 'plan-core-power',
    name: 'Core Power',
    category: 'Fuerza',
    description: 'Fortalecimiento específico del core y abdomen',
    duration: '35 min',
    exercises: 10,
    frequency: '2x semana',
    level: 'Intermedio',
    status: 'En progreso',
    statusAccent: 'warning',
    progress: 54,
    schedule: 'Viernes',
  },
]

export const planTypes: PlanFilterOption[] = [
  { label: 'Todos los tipos', value: 'all' },
  { label: 'Fuerza', value: 'fuerza' },
  { label: 'Cardio', value: 'cardio' },
  { label: 'Flexibilidad', value: 'flexibilidad' },
  { label: 'Movilidad', value: 'movilidad' },
]

export const planLevels: PlanFilterOption[] = [
  { label: 'Todos los niveles', value: 'all' },
  { label: 'Principiante', value: 'principiante' },
  { label: 'Intermedio', value: 'intermedio' },
  { label: 'Avanzado', value: 'avanzado' },
]

export const exerciseTypeOptions = [
  { label: 'Seleccionar tipo', value: '' },
  { label: 'Fuerza', value: 'fuerza' },
  { label: 'Cardio', value: 'cardio' },
  { label: 'Flexibilidad', value: 'flexibilidad' },
  { label: 'Movilidad', value: 'movilidad' },
  { label: 'Resistencia', value: 'resistencia' },
]

export const planLevelOptions = [
  { label: 'Nivel', value: '' },
  { label: 'Principiante', value: 'principiante' },
  { label: 'Intermedio', value: 'intermedio' },
  { label: 'Avanzado', value: 'avanzado' },
]

export const planFrequencyOptions = [
  { label: 'Frecuencia', value: '' },
  { label: '2x semana', value: '2x' },
  { label: '3x semana', value: '3x' },
  { label: '4x semana', value: '4x' },
  { label: 'Diario', value: 'diario' },
]

export const exerciseOptions = [
  { label: 'Seleccionar ejercicio', value: '' },
  { label: 'Sentadilla con barra', value: 'sentadilla-barra' },
  { label: 'Press de banca', value: 'press-banca' },
  { label: 'Peso muerto', value: 'peso-muerto' },
  { label: 'Dominadas', value: 'dominadas' },
  { label: 'Plancha abdominal', value: 'plancha' },
  { label: 'Burpees', value: 'burpees' },
]

export const exerciseHistory: ExerciseHistoryEntry[] = [
  {
    id: 'history-strength-total',
    name: 'Fuerza Total',
    date: 'domingo, 14 de enero de 2024',
    duration: '42 min',
    calories: '380 cal',
    accent: 'success',
  },
  {
    id: 'history-hiit',
    name: 'Cardio HIIT',
    date: 'sábado, 13 de enero de 2024',
    duration: '28 min',
    calories: '420 cal',
    accent: 'warning',
  },
  {
    id: 'history-yoga',
    name: 'Yoga Matutino',
    date: 'viernes, 12 de enero de 2024',
    duration: '20 min',
    calories: '150 cal',
    accent: 'info',
  },
]