export interface ProgressSummary {
  id: string
  title: string
  value: string
  description: string
  accent: 'success' | 'warning' | 'info' | 'danger'
  icon: string
}

export type ProgressTabId = 'activity' | 'nutrition' | 'weight' | 'goals'

export interface ProgressTab {
  id: ProgressTabId
  label: string
}

export interface DailyStepsPoint {
  day: string
  value: number
  target: number
}

export interface ExerciseDistributionSlice {
  id: string
  label: string
  percentage: number
  accent: 'cardio' | 'strength' | 'flexibility' | 'sports'
}

export interface NutritionBalancePoint {
  day: string
  consumed: number
  burned: number
}

export interface WeightTrendPoint {
  day: string
  weight: number
  target: number
}

export interface GoalCompletionSlice {
  id: string
  label: string
  percentage: number
  accent: 'success' | 'warning' | 'info'
}

export interface ProgressMetric {
  label: string
  value: string
}

export type ProgressView =
  | {
      type: 'activity'
      dailySteps: DailyStepsPoint[]
      distribution: ExerciseDistributionSlice[]
    }
  | {
      type: 'nutrition'
      calories: NutritionBalancePoint[]
    }
  | {
      type: 'weight'
      trend: WeightTrendPoint[]
      metrics: ProgressMetric[]
    }
  | {
      type: 'goals'
      completion: GoalCompletionSlice[]
      metrics: ProgressMetric[]
    }
