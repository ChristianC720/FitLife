import './App.css'

import { AlertsGrid } from './components/AlertsGrid'
import { ConnectedDevicesCard } from './components/ConnectedDevicesCard'
import { HeroSection } from './components/HeroSection'
import { QuickActionsCard } from './components/QuickActionsCard'
import { RecentActivityCard } from './components/RecentActivityCard'
import { StatsGrid } from './components/StatsGrid'
import { TopBar } from './components/TopBar'
import { WeeklyActivityCard } from './components/WeeklyActivityCard'
import {
  connectedDevices,
  heroContent,
  quickActions,
  recentActivities,
  reminders,
  statCards,
  userProfile,
  weeklyActivity,
} from './data/dashboard'

function App() {
  return (
    <div className="dashboard">
      <TopBar user={userProfile} />

      <main className="content">
        <HeroSection {...heroContent} />

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
            actionLabel="Ver historial"
          />

          <ConnectedDevicesCard
            title="Dispositivos Conectados"
            subtitle="Estado de sincronización con tus wearables"
            devices={connectedDevices}
            actionLabel="Conectar Nuevo Dispositivo"
          />
        </section>

        <AlertsGrid items={reminders} />
      </main>
    </div>
  )
}

export default App
