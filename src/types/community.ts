export type CommunityAccent = 'success' | 'warning' | 'info' | 'danger'

export interface CommunitySummary {
  id: string
  title: string
  value: string
  description: string
  icon: string
  accent: CommunityAccent
}

export type CommunityTabId = 'challenges' | 'forum' | 'ranking'

export interface CommunityTab {
  id: CommunityTabId
  label: string
}

export interface CommunityChallenge {
  id: string
  title: string
  description: string
  category: string
  host: string
  participants: number
  progressPercent: number
  durationLabel: string
  statusLabel: string
}

export interface CommunityForumPost {
  id: string
  title: string
  category: string
  author: string
  timeAgo: string
  excerpt: string
  replies: number
  likes: number
}

export interface CommunityRankingEntry {
  id: string
  position: number
  name: string
  badge: string
  points: number
  streakDays: number
}
