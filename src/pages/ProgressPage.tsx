import { useMemo, useState } from 'react'
import { ProgressCharts } from '../components/ProgressCharts'
import { ProgressSummaryGrid } from '../components/ProgressSummaryGrid'
import { ProgressTabs } from '../components/ProgressTabs'
import { progressSummaries, progressTabs, progressViews } from '../data/progress'
import type { ProgressTabId } from '../types/progress'

export function ProgressPage() {
  const [activeTab, setActiveTab] = useState<ProgressTabId>('activity')
  const activeView = useMemo(() => progressViews[activeTab], [activeTab])

  return (
    <div className="progress-page">
      <header className="progress-header">
        <div>
          <p className="eyebrow">Analiza tu progreso y tendencias de bienestar</p>
          <h1>Visualización de Progreso</h1>
        </div>
        <div className="progress-actions">
          <div className="progress-range">
            <label htmlFor="progress-range" className="sr-only">
              Rango de tiempo
            </label>
            <select id="progress-range" defaultValue="7">
              <option value="7">7 días</option>
              <option value="14">14 días</option>
              <option value="30">30 días</option>
            </select>
          </div>
          <button type="button" className="ghost-button">Exportar</button>
          <button type="button" className="ghost-button">Compartir</button>
        </div>
      </header>

      <ProgressSummaryGrid items={progressSummaries} />
      <ProgressTabs tabs={progressTabs} activeTabId={activeTab} onTabChange={setActiveTab} />
      <ProgressCharts view={activeView} />
    </div>
  )
}
