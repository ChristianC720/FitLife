import { PlanFactory } from './PlanFactory'
import type { ExercisePlan } from './ExercisePlan'

export class MuscleGainPlanFactory extends PlanFactory {
  createPlan(_profile?: any): ExercisePlan {
    return {
      id: 'muscle-1',
      name: 'Plan Ganancia Muscular - 12 semanas',
      weeks: 12,
      workouts: Array.from({ length: 12 }, (_, i) => ({
        day: `Semana ${i + 1}`,
        description: 'Entrenamientos de fuerza con progresión de cargas',
      })),
    }
  }
}
