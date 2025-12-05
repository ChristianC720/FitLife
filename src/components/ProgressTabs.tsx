import type { ProgressTab, ProgressTabId } from '../types/progress'

interface ProgressTabsProps {
  tabs: ProgressTab[]
  activeTabId: ProgressTabId
  onTabChange: (tabId: ProgressTabId) => void
}

export function ProgressTabs({ tabs, activeTabId, onTabChange }: ProgressTabsProps) {
  return (
    <div className="progress-tabs" role="tablist" aria-label="Secciones de progreso">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeTabId}
          className={`progress-tab${tab.id === activeTabId ? ' is-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
