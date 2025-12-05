import { NavLink } from 'react-router-dom'
import type { UserProfile } from '../types/dashboard'

interface NavItem {
  label: string
  to?: string
  end?: boolean
}

const NAV_LINKS: NavItem[] = [
  { label: 'Dashboard', to: '/', end: true },
  { label: 'Ejercicios', to: '/ejercicios' },
  { label: 'Nutrición', to: '/nutricion' },
  { label: 'Progreso', to: '/progreso' },
  { label: 'Metas', to: '/metas' },
  { label: 'Comunidad', to: '/comunidad' },
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
        {NAV_LINKS.map((item) =>
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ) : (
            <span key={item.label} className="nav-link nav-link--disabled">
              {item.label}
            </span>
          )
        )}
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
