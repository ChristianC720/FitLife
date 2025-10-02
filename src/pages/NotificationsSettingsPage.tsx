"use client"

import type React from "react"

import { Bell, Clock, Target, Users, Mail, Smartphone } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

interface NotificationSetting {
  id: string
  label: string
  enabled: boolean
}

interface NotificationCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  settings: NotificationSetting[]
}

export function NotificationsSettingsPage() {
  const [categories, setCategories] = useState<NotificationCategory[]>([
    {
      id: "exercise",
      title: "Recordatorios de Ejercicio",
      description: "Configura cuándo recibir recordatorios de entrenamiento",
      icon: <Clock size={20} />,
      settings: [
        { id: "exercise-reminders", label: "Activar recordatorios", enabled: true },
        { id: "exercise-time", label: "Hora preferida", enabled: false },
        { id: "exercise-frequency", label: "Frecuencia", enabled: false },
      ],
    },
    {
      id: "goals",
      title: "Notificaciones de Metas",
      description: "Recibe alertas sobre el progreso de tus objetivos",
      icon: <Target size={20} />,
      settings: [
        { id: "goals-achieved", label: "Logros alcanzados", enabled: true },
        { id: "goals-progress", label: "Progreso diario", enabled: true },
        { id: "goals-deadline", label: "Fechas límite", enabled: true },
      ],
    },
    {
      id: "community",
      title: "Comunidad",
      description: "Mantente al día con la actividad de la comunidad",
      icon: <Users size={20} />,
      settings: [
        { id: "community-challenges", label: "Nuevos retos", enabled: true },
        { id: "community-messages", label: "Mensajes", enabled: true },
        { id: "community-ranking", label: "Ranking semanal", enabled: false },
      ],
    },
  ])

  const [channels, setChannels] = useState([
    { id: "push", label: "Notificaciones push", icon: <Bell size={18} />, enabled: true },
    { id: "email", label: "Correo electrónico", icon: <Mail size={18} />, enabled: true },
    { id: "sms", label: "SMS", icon: <Smartphone size={18} />, enabled: false },
  ])

  const toggleCategorySetting = (categoryId: string, settingId: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              settings: cat.settings.map((s) => (s.id === settingId ? { ...s, enabled: !s.enabled } : s)),
            }
          : cat,
      ),
    )
  }

  const toggleChannel = (channelId: string) => {
    setChannels((prev) => prev.map((ch) => (ch.id === channelId ? { ...ch, enabled: !ch.enabled } : ch)))
  }

  const handleSave = () => {
    console.log("Save settings:", { categories, channels })
  }

  return (
    <div className="notifications-settings-page">
      <Link to="/notificaciones" className="back-link">
        <ArrowLeft size={20} />
        <span>Volver a Notificaciones</span>
      </Link>

      <header className="settings-header">
        <h1>Notificaciones</h1>
        <p className="subtitle">Gestiona tus alertas y recordatorios personalizados</p>
      </header>

      <div className="settings-sections">
        <div className="settings-section">
          <div className="settings-section-header">
            <h2>Notificaciones ({categories.length})</h2>
            <Link to="/notificaciones" className="config-link">
              Configuración
            </Link>
          </div>

          <div className="settings-categories">
            {categories.map((category) => (
              <div key={category.id} className="settings-category">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                <div className="category-settings">
                  {category.settings.map((setting) => (
                    <div key={setting.id} className="setting-row">
                      <span>{setting.label}</span>
                      <button
                        className={`toggle-switch ${setting.enabled ? "enabled" : ""}`}
                        onClick={() => toggleCategorySetting(category.id, setting.id)}
                        aria-label={`${setting.enabled ? "Desactivar" : "Activar"} ${setting.label}`}
                      >
                        <span className="toggle-slider" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <h2>Canales de Notificación</h2>
            <p className="section-subtitle">Elige cómo quieres recibir las notificaciones</p>
          </div>

          <div className="channels-list">
            {channels.map((channel) => (
              <div key={channel.id} className="channel-row">
                <div className="channel-info">
                  <div className="channel-icon">{channel.icon}</div>
                  <span>{channel.label}</span>
                </div>
                <button
                  className={`toggle-switch ${channel.enabled ? "enabled" : ""}`}
                  onClick={() => toggleChannel(channel.id)}
                  aria-label={`${channel.enabled ? "Desactivar" : "Activar"} ${channel.label}`}
                >
                  <span className="toggle-slider" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="save-button" onClick={handleSave}>
          Guardar Configuración
        </button>
      </div>
    </div>
  )
}
