import type {
  CommunityChallenge,
  CommunityForumPost,
  CommunityRankingEntry,
  CommunitySummary,
  CommunityTab,
} from '../types/community'

export const communitySummaries: CommunitySummary[] = [
  {
    id: 'members',
    title: 'Miembros Activos',
    value: '12,847',
    description: 'Personas conectadas esta semana',
    icon: '🟢',
    accent: 'success',
  },
  {
    id: 'challenges',
    title: 'Retos Activos',
    value: '3',
    description: 'Retos colaborativos en marcha',
    icon: '🏆',
    accent: 'warning',
  },
  {
    id: 'posts',
    title: 'Posts Esta Semana',
    value: '1,234',
    description: 'Participación de la comunidad',
    icon: '💬',
    accent: 'info',
  },
  {
    id: 'streak',
    title: 'Tu Racha (días)',
    value: '28',
    description: 'Interacciones consecutivas',
    icon: '🔥',
    accent: 'danger',
  },
]

export const communityTabs: CommunityTab[] = [
  { id: 'challenges', label: 'Retos Comunitarios' },
  { id: 'forum', label: 'Foro' },
  { id: 'ranking', label: 'Ranking' },
]

export const communityChallenges: CommunityChallenge[] = [
  {
    id: 'challenge-steps',
    title: 'Reto 10K pasos por 30 días',
    description: 'Camina más de 10,000 pasos diarios y comparte tu mejor tip de motivación.',
    category: 'Actividad física',
    host: 'Equipo FitLife',
    participants: 842,
    progressPercent: 78,
    durationLabel: 'Quedan 12 días',
    statusLabel: 'En progreso',
  },
  {
    id: 'challenge-hydration',
    title: 'Hidratación consciente',
    description: 'Registra tu consumo de agua diario y comparte recetas creativas para saborizarla.',
    category: 'Hábitos saludables',
    host: 'Nutricoach Ana',
    participants: 563,
    progressPercent: 54,
    durationLabel: 'Quedan 5 días',
    statusLabel: 'Inscripciones abiertas',
  },
  {
    id: 'challenge-mindfulness',
    title: '7 días de mindfulness',
    description: 'Guía colaborativa para incorporar pausas conscientes y respiraciones durante la jornada.',
    category: 'Bienestar mental',
    host: 'Coach Martín',
    participants: 398,
    progressPercent: 62,
    durationLabel: 'Comienza mañana',
    statusLabel: 'Próximo',
  },
]

export const communityForumPosts: CommunityForumPost[] = [
  {
    id: 'forum-morning',
    title: '¿Cuál es su rutina matutina favorita?',
    category: 'Rutinas',
    author: 'María González',
    timeAgo: 'hace 2 horas',
    excerpt:
      'Hola comunidad! Me gustaría conocer qué rutinas matutinas les han funcionado mejor para mantener la energía durante todo el día...',
    replies: 28,
    likes: 45,
  },
  {
    id: 'forum-success',
    title: 'Logré mi meta de 10K pasos por 30 días seguidos!',
    category: 'Logros',
    author: 'Carlos Ruiz',
    timeAgo: 'hace 4 horas',
    excerpt:
      '¡No puedo creer que lo haya logrado! Después de varios intentos fallidos, finalmente completé 30 días consecutivos caminando 10,000 pasos...',
    replies: 18,
    likes: 67,
  },
  {
    id: 'forum-recovery',
    title: 'Consejos para recuperarse después de entrenamientos intensos',
    category: 'Recuperación',
    author: 'Lucía Prieto',
    timeAgo: 'hace 6 horas',
    excerpt:
      'Estoy entrenando para mi primera media maratón y busco ideas para mejorar la recuperación muscular sin perder el ritmo de entrenamiento...',
    replies: 34,
    likes: 52,
  },
]

export const communityRanking: CommunityRankingEntry[] = [
  {
    id: 'rank-1',
    position: 1,
    name: 'Elena Vásquez',
    badge: 'Campeona',
    points: 15420,
    streakDays: 45,
  },
  {
    id: 'rank-2',
    position: 2,
    name: 'Miguel Torres',
    badge: 'Atleta',
    points: 14890,
    streakDays: 38,
  },
  {
    id: 'rank-3',
    position: 3,
    name: 'Sofía López',
    badge: 'Guerrera',
    points: 14235,
    streakDays: 42,
  },
  {
    id: 'rank-4',
    position: 4,
    name: 'Juan Pérez',
    badge: 'Luchador',
    points: 13980,
    streakDays: 28,
  },
  {
    id: 'rank-5',
    position: 5,
    name: 'Carmen Díaz',
    badge: 'Estrella',
    points: 13567,
    streakDays: 33,
  },
]
