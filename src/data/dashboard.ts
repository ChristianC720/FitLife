import type {
  ActivityItem,
  DeviceItem,
  QuickAction,
  ReminderCard,
  StatCard,
  UserProfile,
  WeeklyActivityPoint,
} from '../types/dashboard'

export const userProfile: UserProfile = {
  name: 'Juan',
  role: 'Premium',
  avatarInitials: 'J',
}

export const heroContent = {
  eyebrow: 'Resumen Diario',
  title: '¡Bienvenido de vuelta, Juan! 👋',
  subtitle: 'Aquí tienes un resumen de tu progreso y actividades recientes.',
  ctaLabel: 'Iniciar Entrenamiento',
}

export const statCards: StatCard[] = [
  {
    title: 'Pasos Hoy',
    value: '8,547',
    target: '10,000',
    progress: 85,
    accent: 'success',
    description: 'Avance diario',
  },
  {
    title: 'Calorías Quemadas',
    value: '420',
    target: '500',
    progress: 84,
    accent: 'warning',
    description: 'Sesiones registradas',
  },
  {
    title: 'Metas Completadas',
    value: '7',
    target: '10',
    progress: 70,
    accent: 'info',
    description: 'Objetivos semanales',
  },
  {
    title: 'Racha Actual',
    value: '12',
    target: 'días',
    progress: 100,
    accent: 'purple',
    description: 'Entrenando sin pausas',
  },
]

export const quickActions: QuickAction[] = [
  {
    title: 'Nuevo Ejercicio',
    description: 'Registra tu sesión de entrenamiento',
    icon: '🏋️',
    accent: 'success',
  },
  {
    title: 'Registrar Comida',
    description: 'Añade alimentos a tu diario nutricional',
    icon: '🍽️',
    accent: 'warning',
  },
  {
    title: 'Nueva Meta',
    description: 'Establece un nuevo objetivo personal',
    icon: '🎯',
    accent: 'info',
  },
]

export const weeklyActivity: WeeklyActivityPoint[] = [
  { label: 'Lun', value: 65 },
  { label: 'Mar', value: 72 },
  { label: 'Mié', value: 88 },
  { label: 'Jue', value: 54 },
  { label: 'Vie', value: 93 },
  { label: 'Sáb', value: 78 },
  { label: 'Dom', value: 60 },
]

export const recentActivities: ActivityItem[] = [
  {
    title: 'Entrenamiento de Fuerza',
    description: 'Completaste 45 min de ejercicios',
    time: 'Hace 2 horas',
    accent: 'success',
  },
  {
    title: 'Almuerzo Registrado',
    description: 'Ensalada César · 420 calorías',
    time: 'Hace 4 horas',
    accent: 'warning',
  },
  {
    title: 'Meta Alcanzada',
    description: 'Completaste los 10,000 pasos',
    time: 'Hace 1 día',
    accent: 'info',
  },
  {
    title: 'Sincronización Wearable',
    description: 'Datos actualizados desde tu dispositivo',
    time: 'Hace 1 día',
    accent: 'neutral',
  },
]

export const connectedDevices: DeviceItem[] = [
  {
    name: 'Apple Watch Series 9',
    description: 'Última sync: hace 5 min',
    status: 'Conectado',
    accent: 'success',
  },
  {
    name: 'Google Fit',
    description: 'Última sync: hace 1 hora',
    status: 'Conectando',
    accent: 'warning',
  },
]

export const reminders: ReminderCard[] = [
  {
    title: 'Ejercicio Programado',
    description: 'Entrenamiento de cardio en 30 minutos',
    accent: 'success',
  },
  {
    title: 'Hidratación',
    description: 'Recuerda beber agua · 60% vasos completados',
    accent: 'warning',
  },
  {
    title: 'Reto Comunitario',
    description: '"Camina 50k esta semana" · Día 5/7',
    accent: 'info',
  },
]
