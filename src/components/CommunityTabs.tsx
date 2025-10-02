import type { CommunityTab, CommunityTabId } from '../types/community'

interface CommunityTabsProps {
  tabs: CommunityTab[]
  activeTabId: CommunityTabId
  onTabChange: (tabId: CommunityTabId) => void
}

export function CommunityTabs({ tabs, activeTabId, onTabChange }: CommunityTabsProps) {
  return (
    <div className="community-tabs" role="tablist" aria-label="Secciones de comunidad">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeTabId}
          className={`community-tab${tab.id === activeTabId ? ' is-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
