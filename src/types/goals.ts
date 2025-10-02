export type GoalAccent = 'success' | 'warning' | 'info' | 'danger'

export interface GoalsSummary {
  id: string
  title: string
  value: string
  description: string
  icon: string
  accent: GoalAccent
}

export type GoalState = 'active' | 'completed'

export interface GoalBadge {
  id: string
  label: string
  tone: GoalAccent
  position: 'left' | 'right'
}

export interface GoalAction {
  id: string
  label: string
  icon: string
}

export interface Goal {
  id: string
  state: GoalState
  icon: string
  title: string
  description: string
  progressLabel: string
  progressPercent: number
  badges: GoalBadge[]
  actions: GoalAction[]
}

export interface GoalFormOption {
  value: string
  label: string
}
