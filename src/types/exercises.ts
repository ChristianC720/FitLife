import type { Accent } from './dashboard'

export type PlanStatus = 'En progreso' | 'Completado' | 'Programado'

export interface ExercisePlan {
  id: string
  name: string
  category: string
  description: string
  duration: string
  exercises: number
  frequency: string
  level: string
  status: PlanStatus
  statusAccent: Accent
  progress: number
  schedule: string
}

export interface PlanFilterOption {
  label: string
  value: string
}

export interface ExerciseHistoryEntry {
  id: string
  name: string
  date: string
  duration: string
  calories: string
  accent: Accent
}
