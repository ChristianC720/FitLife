import type { UserProfile } from '../types/dashboard'

const NAV_LINKS = [
  'Dashboard',
  'Ejercicios',
  'Nutrición',
  'Progreso',
  'Metas',
  'Comunidad',
]

interface TopBarProps {
  user: UserProfile
}

export function TopBar({ user }: TopBarProps) {
  return (
    <header className="top-bar">
      <div className="brand">
        <span className="brand-icon">⚡</span>
        <span className="brand-name">FitLife</span>
      </div>
      <nav className="nav-links" aria-label="Secciones principales">
        {NAV_LINKS.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>
      <div className="profile-area">
        <button className="ghost-button" aria-label="Notificaciones">
          🔔
        </button>
        <button className="ghost-button" aria-label="Alternar modo oscuro">
          🌙
        </button>
        <div className="profile-chip">
          <span className="avatar" aria-hidden="true">
            {user.avatarInitials}
          </span>
          <span className="profile-text">
            <span className="profile-name">{user.name}</span>
            <span className="profile-role">{user.role}</span>
          </span>
        </div>
      </div>
    </header>
  )
}
