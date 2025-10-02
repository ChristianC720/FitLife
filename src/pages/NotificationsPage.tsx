import { Bell, Clock, Target, Users, SettingsIcon } from "lucide-react"
import { Link } from "react-router-dom"

interface Notification {
  id: string
  type: "exercise" | "goal" | "community" | "system"
  title: string
  message: string
  time: string
  badge?: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "exercise",
    title: "¡Hora de entrenar!",
    message: "Tu sesión de Cardio HIIT está programada para ahora",
    time: "15 min. 08:30",
    badge: "Alta",
    read: false,
  },
  {
    id: "2",
    type: "goal",
    title: "Meta alcanzada 🎉",
    message: "¡Felicidades! Has completado la meta de 10,000 pasos hoy",
    time: "15 ene. 12:41",
    badge: "Media",
    read: false,
  },
  {
    id: "3",
    type: "community",
    title: "Nuevo reto disponible",
    message: 'El reto "Maratón Virtual" comienza mañana. ¡Únete ahora!',
    time: "15 ene. 08:15",
    badge: "Media",
    read: false,
  },
  {
    id: "4",
    type: "exercise",
    title: "Recordatorio de hidratación",
    message: "Has bebido 4/8 vasos de agua hoy. ¡Sigue así!",
    time: "14 ene. 10:00",
    badge: "Baja",
    read: true,
  },
  {
    id: "5",
    type: "system",
    title: "Actualización del sistema",
    message: "Nueva función de seguimiento de sueño disponible",
    time: "13 ene. 07:00",
    badge: "Baja",
    read: true,
  },
]

export function NotificationsPage() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "exercise":
        return <Clock size={20} />
      case "goal":
        return <Target size={20} />
      case "community":
        return <Users size={20} />
      default:
        return <Bell size={20} />
    }
  }

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "exercise":
        return "red"
      case "goal":
        return "orange"
      case "community":
        return "orange"
      default:
        return "green"
    }
  }

  return (
    <div className="notifications-page">
      <header className="notifications-header">
        <div>
          <h1>Notificaciones</h1>
          <p className="subtitle">Gestiona tus alertas y recordatorios personalizados</p>
        </div>
        <div className="notifications-header-actions">
          <button className="mark-all-read">Marcar todas como leídas ({unreadCount})</button>
          <Link to="/notificaciones/configuracion" className="config-button">
            <SettingsIcon size={20} />
            Configuración
          </Link>
        </div>
      </header>

      <div className="notifications-summary">
        <div className="notification-stat">
          <div className="stat-icon green">
            <Bell size={18} />
          </div>
          <div>
            <div className="stat-number">2</div>
            <div className="stat-text">Sin leer</div>
          </div>
        </div>

        <div className="notification-stat">
          <div className="stat-icon red">
            <Clock size={18} />
          </div>
          <div>
            <div className="stat-number">1</div>
            <div className="stat-text">Ejercicio</div>
          </div>
        </div>

        <div className="notification-stat">
          <div className="stat-icon orange">
            <Target size={18} />
          </div>
          <div>
            <div className="stat-number">1</div>
            <div className="stat-text">Metas</div>
          </div>
        </div>

        <div className="notification-stat">
          <div className="stat-icon orange">
            <Users size={18} />
          </div>
          <div>
            <div className="stat-number">1</div>
            <div className="stat-text">Comunidad</div>
          </div>
        </div>
      </div>

      <div className="notifications-section">
        <div className="notifications-section-header">
          <h2>Notificaciones ({mockNotifications.length})</h2>
          <Link to="/notificaciones/configuracion" className="config-link">
            Configuración
          </Link>
        </div>

        <div className="notifications-list">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? "read" : "unread"} ${getNotificationColor(notification.type)}`}
            >
              <div className="notification-icon">{getNotificationIcon(notification.type)}</div>
              <div className="notification-content">
                <div className="notification-header-row">
                  <h3>{notification.title}</h3>
                  {notification.badge && (
                    <span className={`notification-badge ${notification.badge.toLowerCase()}`}>
                      {notification.badge}
                    </span>
                  )}
                </div>
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
              <button className="notification-menu" aria-label="Más opciones">
                •••
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
