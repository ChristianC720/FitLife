import { Outlet, Route, Routes, useLocation } from "react-router-dom"
import "./App.css"

import { TopBar } from "./components/TopBar"
import { userProfile } from "./data/dashboard"
import { AddFoodPage } from "./pages/AddFoodPage"
import { DashboardPage } from "./pages/DashboardPage"
import { CreateExercisePlanPage } from "./pages/CreateExercisePlanPage"
import { ExercisePlansPage } from "./pages/ExercisePlansPage"
import { CommunityPage } from "./pages/CommunityPage"
import { NutritionPage } from "./pages/NutritionPage"
import { GoalsPage } from "./pages/GoalsPage"
import { ProgressPage } from "./pages/ProgressPage"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { MisMetasPage } from "./pages/MisMetasPage"
import { NotificationsPage } from "./pages/NotificationsPage"
import { NotificationsSettingsPage } from "./pages/NotificationsSettingsPage"

function Layout() {
  const location = useLocation()
  const isExercisePage = location.pathname.startsWith("/ejercicios")

  return (
    <div className="dashboard">
      <TopBar user={userProfile} />
      <main className={`content${isExercisePage ? " content--exercise" : ""}`}>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />

      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/ejercicios" element={<ExercisePlansPage />} />
        <Route path="/ejercicios/crear" element={<CreateExercisePlanPage />} />
        <Route path="/nutricion" element={<NutritionPage />} />
        <Route path="/nutricion/agregar" element={<AddFoodPage />} />
        <Route path="/progreso" element={<ProgressPage />} />
        <Route path="/metas" element={<GoalsPage />} />
        <Route path="/mis-metas" element={<MisMetasPage />} />
        <Route path="/notificaciones" element={<NotificationsPage />} />
        <Route path="/notificaciones/configuracion" element={<NotificationsSettingsPage />} />
        <Route path="/comunidad" element={<CommunityPage />} />
      </Route>
    </Routes>
  )
}

export default App
