import type { DeviceItem } from '../types/dashboard'

interface ConnectedDevicesCardProps {
  title: string
  subtitle: string
  devices: DeviceItem[]
  actionLabel?: string
  onActionClick?: () => void
}

export function ConnectedDevicesCard({ title, subtitle, devices, actionLabel, onActionClick }: ConnectedDevicesCardProps) {
  return (
    <article className="card devices-card">
      <header>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </header>
      <ul className="device-list">
        {devices.map((device) => (
          <li key={device.name} className={device.accent}>
            <div className="device-info">
              <p className="device-name">{device.name}</p>
              <p className="device-description">{device.description}</p>
            </div>
            <span className="device-status">{device.status}</span>
          </li>
        ))}
      </ul>
      {actionLabel ? (
        <button className="secondary-button" onClick={onActionClick}>
          {actionLabel}
        </button>
      ) : null}
    </article>
  )
}
