import type { CSSProperties } from 'react'

import type { ProgressView } from '../types/progress'

interface ProgressChartsProps {
  view: ProgressView
}

export function ProgressCharts({ view }: ProgressChartsProps) {
  if (view.type === 'activity') {
    const columnsStyle = { '--chart-columns': `${view.dailySteps.length}` } as CSSProperties
    return (
      <section className="progress-charts">
        <article className="progress-chart-card">
          <header>
            <div>
              <h3>Pasos Diarios</h3>
              <p>Progreso de pasos vs objetivo (últimos 7 días)</p>
            </div>
          </header>
          <div className="progress-chart-content">
            <div className="chart-plot chart-plot--line">
              <div className="chart-grid-lines" aria-hidden="true" style={columnsStyle}>
                {Array.from({ length: Math.max(view.dailySteps.length - 1, 1) }).map((_, index) => (
                  <span key={index} className="grid-line" />
                ))}
              </div>
              <div className="chart-days" style={columnsStyle}>
                {view.dailySteps.map((point) => (
                  <span key={point.day}>{point.day}</span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="progress-chart-card">
          <header>
            <div>
              <h3>Distribución de Ejercicios</h3>
              <p>Tipos de ejercicio realizados este mes</p>
            </div>
          </header>
          <div className="progress-chart-content">
            <div className="chart-plot chart-plot--donut">
              <div className="donut-ring" aria-hidden="true" />
              <ul className="donut-legend">
                {view.distribution.map((slice) => (
                  <li key={slice.id} className={`legend-item ${slice.accent}`}>
                    <span className="legend-color" aria-hidden="true" />
                    <span className="legend-label">{slice.label}</span>
                    <span className="legend-percentage">{slice.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    )
  }

  if (view.type === 'nutrition') {
    const highlight =
      view.calories[Math.floor(view.calories.length / 2)] ??
      view.calories[0] ?? {
        day: 'Hoy',
        consumed: 0,
        burned: 0,
      }
    const columnsStyle = { '--chart-columns': `${view.calories.length}` } as CSSProperties
    return (
      <section className="progress-charts nutrition">
        <article className="progress-chart-card full">
          <header>
            <div>
              <h3>Balance Calórico</h3>
              <p>Calorías consumidas vs quemadas (últimos 7 días)</p>
            </div>
          </header>
          <div className="progress-chart-content progress-chart-content--area">
            <div className="area-chart">
              <div className="area-layer area-layer--burned" />
              <div className="area-layer area-layer--consumed" />
              <div className="area-tooltip">
                <span className="area-day">{highlight.day}</span>
                <span>Consumidas: {highlight.consumed}</span>
                <span>Quemadas: {highlight.burned}</span>
              </div>
            </div>
            <div className="chart-days" style={columnsStyle}>
              {view.calories.map((point) => (
                <span key={point.day}>{point.day}</span>
              ))}
            </div>
            <div className="area-legend">
              <div>
                <span className="legend-dot consumed" />
                Consumidas
              </div>
              <div>
                <span className="legend-dot burned" />
                Quemadas
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  }

  if (view.type === 'weight') {
    const columnsStyle = { '--chart-columns': `${view.trend.length}` } as CSSProperties
    return (
      <section className="progress-charts weight">
        <article className="progress-chart-card full">
          <header>
            <div>
              <h3>Tendencia de Peso</h3>
              <p>Seguimiento semanal comparado con tu objetivo</p>
            </div>
          </header>
          <div className="progress-chart-content">
            <div className="chart-plot chart-plot--line chart-plot--weight">
              <div className="chart-grid-lines" aria-hidden="true" style={columnsStyle}>
                {Array.from({ length: Math.max(view.trend.length - 1, 1) }).map((_, index) => (
                  <span key={index} className="grid-line" />
                ))}
              </div>
              <div className="chart-days" style={columnsStyle}>
                {view.trend.map((point) => (
                  <span key={point.day}>{point.day}</span>
                ))}
              </div>
            </div>
          </div>
          <footer className="progress-chart-footer">
            {view.metrics.map((metric) => (
              <div key={metric.label}>
                <span className="metric-label">{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </footer>
        </article>
      </section>
    )
  }

  return (
    <section className="progress-charts goals">
      <article className="progress-chart-card full">
        <header>
          <div>
            <h3>Progreso de Metas</h3>
            <p>Porcentaje de avance por estado</p>
          </div>
        </header>
        <div className="progress-chart-content progress-chart-content--bars">
          <ul className="goal-progress-bars">
            {view.completion.map((slice) => (
              <li key={slice.id} className={`goal-bar ${slice.accent}`}>
                <span className="goal-bar-label">{slice.label}</span>
                <div className="goal-bar-track">
                  <div className="goal-bar-fill" style={{ width: `${slice.percentage}%` }} />
                </div>
                <span className="goal-bar-value">{slice.percentage}%</span>
              </li>
            ))}
          </ul>
          <div className="goal-metrics">
            {view.metrics.map((metric) => (
              <div key={metric.label}>
                <span className="metric-label">{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
