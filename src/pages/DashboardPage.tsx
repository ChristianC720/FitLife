import { AlertsGrid } from '../components/AlertsGrid'
import { ConnectedDevicesCard } from '../components/ConnectedDevicesCard'
import { HeroSection } from '../components/HeroSection'
import { QuickActionsCard } from '../components/QuickActionsCard'
import { RecentActivityCard } from '../components/RecentActivityCard'
import { StatsGrid } from '../components/StatsGrid'
import { WeeklyActivityCard } from '../components/WeeklyActivityCard'
import {
  connectedDevices,
  heroContent,
  quickActions,
  recentActivities,
  reminders,
  statCards,
  weeklyActivity,
} from '../data/dashboard'

export function DashboardPage() {
  return (
    <>
  <HeroSection {...heroContent} ctaLabel={undefined} />

      <StatsGrid items={statCards} />

      <section className="main-grid">
        <WeeklyActivityCard
          title="Actividad Semanal"
          subtitle="Tu progreso de pasos y calorías en los últimos 7 días"
          data={weeklyActivity}
          actionLabel="Ver todo"
        />

        <QuickActionsCard
          title="Acciones Rápidas"
          subtitle="Accede rápidamente a las funciones más utilizadas"
          actions={quickActions}
        />
      </section>

      <section className="secondary-grid">
        <RecentActivityCard
          title="Actividad Reciente"
          subtitle="Tus últimas actividades y logros"
          activities={recentActivities}
        />

        <ConnectedDevicesCard
          title="Dispositivos Conectados"
          subtitle="Estado de sincronización con tus wearables"
          devices={connectedDevices}
          actionLabel="Conectar Nuevo Dispositivo"
        />
      </section>

      <AlertsGrid items={reminders} />
    </>
  )
}
