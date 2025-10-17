export type Accent = 'success' | 'warning' | 'info' | 'purple' | 'neutral'

export interface StatCard {
  title: string
  value: string
  target: string
  progress: number
  accent: Accent
  description: string
}

export interface QuickAction {
  title: string
  description: string
  icon: string
  accent: Exclude<Accent, 'purple' | 'neutral'>
}

export interface ActivityItem {
  title: string
  description: string
  time: string
  accent: Accent
}

export interface DeviceItem {
  name: string
  description: string
  status: string
  accent: Exclude<Accent, 'purple'>
}

export interface ReminderCard {
  title: string
  description: string
  accent: Exclude<Accent, 'purple'>
}

export interface WeeklyActivityPoint {
  label: string
  value: number
}

export interface UserProfile {
  name: string
  role: string
  avatarInitials: string
}
