"use client"

import { useState } from "react"
import { Target, Trophy, Calendar, TrendingUp, Edit2, Trash2 } from "lucide-react"
import { CreateGoalModal } from "../components/CreateGoalModal"

interface Goal {
  id: string
  title: string
  description: string
  icon: string
  current: number
  target: number
  unit: string
  progress: number
  status: "active" | "completed"
  deadline?: string
}

const mockGoals: Goal[] = [
  {
    id: "1",
    title: "Caminar 10,000 pasos diarios",
    description: "Mantener una rutina de caminata constante",
    icon: "👟",
    current: 7500,
    target: 10000,
    unit: "pasos",
    progress: 75,
    status: "active",
  },
  {
    id: "2",
    title: "Ejercitarse 4 veces por semana",
    description: "Mantener consistencia en el entrenamiento",
    icon: "💪",
    current: 3,
    target: 4,
    unit: "sesiones/semana",
    progress: 75,
    status: "active",
  },
  {
    id: "3",
    title: "Perder 5 kg",
    description: "Alcanzar mi peso ideal de forma saludable",
    icon: "⚖️",
    current: 2.3,
    target: 5,
    unit: "kg",
    progress: 46,
    status: "completed",
  },
]

export function MisMetasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active")

  const activeGoals = mockGoals.filter((g) => g.status === "active")
  const completedGoals = mockGoals.filter((g) => g.status === "completed")
  const displayGoals = activeTab === "active" ? activeGoals : completedGoals

  const avgProgress = Math.round(mockGoals.reduce((sum, g) => sum + g.progress, 0) / mockGoals.length)

  return (
    <div className="mis-metas-page">
      <header className="mis-metas-header">
        <div>
          <h1>Mis Metas</h1>
          <p className="subtitle">Define y sigue el progreso de tus objetivos de bienestar</p>
        </div>
        <button className="nueva-meta-button" onClick={() => setIsModalOpen(true)}>
          <span>+</span> Nueva Meta
        </button>
      </header>

      <div className="metas-stats-grid">
        <div className="stat-card">
          <div className="stat-icon green">
            <Target size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{activeGoals.length}</div>
            <div className="stat-label">Metas Activas</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <Trophy size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{completedGoals.length}</div>
            <div className="stat-label">Completadas</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <TrendingUp size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{avgProgress}%</div>
            <div className="stat-label">Progreso Promedio</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Calendar size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">3</div>
            <div className="stat-label">Próximas a Vencer</div>
          </div>
        </div>
      </div>

      <div className="metas-tabs">
        <button
          className={`metas-tab ${activeTab === "active" ? "active" : ""}`}
          onClick={() => setActiveTab("active")}
        >
          Metas Activas ({activeGoals.length})
        </button>
        <button
          className={`metas-tab ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Completadas ({completedGoals.length})
        </button>
      </div>

      <div className="metas-sections">
        <section className="metas-section">
          <div className="metas-section-header">
            <h2>{activeTab === "active" ? "Metas Activas" : "Completadas"}</h2>
            <span className="count">({displayGoals.length})</span>
          </div>

          <div className="metas-list">
            {displayGoals.map((goal) => (
              <div key={goal.id} className="meta-card">
                <div className="meta-card-header">
                  <div className="meta-title-row">
                    <span className="meta-icon">{goal.icon}</span>
                    <div>
                      <h3>{goal.title}</h3>
                      <p className="meta-description">{goal.description}</p>
                    </div>
                  </div>
                  <div className="meta-actions">
                    <button className="icon-button" aria-label="Editar meta">
                      <Edit2 size={16} />
                    </button>
                    <button className="icon-button" aria-label="Eliminar meta">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="meta-progress-section">
                  <div className="meta-progress-info">
                    <span className="progress-text">
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                    <span className="progress-percentage">{goal.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${goal.progress}%` }} />
                  </div>
                </div>

                <div className="meta-footer">
                  <span className={`meta-badge ${goal.status === "completed" ? "completed" : "active"}`}>
                    {goal.status === "completed" ? "Vencida" : "En progreso"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CreateGoalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
