export interface ExercisePlan {
  id: string
  name: string
  weeks: number
  workouts: Array<{ day: string; description: string }>
}
