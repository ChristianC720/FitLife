import { PlanFactory } from './PlanFactory'
import type { ExercisePlan } from './ExercisePlan'

export class MarathonPlanFactory extends PlanFactory {
  createPlan(_profile?: any): ExercisePlan {
    // Simplified plan generation
    return {
      id: 'marathon-1',
      name: 'Plan Maratón - 16 semanas',
      weeks: 16,
      workouts: Array.from({ length: 16 }, (_, i) => ({
        day: `Semana ${i + 1}`,
        description: 'Entrenamiento progresivo de carrera y recuperación',
      })),
    }
  }
}
