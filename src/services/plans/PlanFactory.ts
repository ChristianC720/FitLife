import type { ExercisePlan } from './ExercisePlan'

export abstract class PlanFactory {
  abstract createPlan(profile?: any): ExercisePlan
}
