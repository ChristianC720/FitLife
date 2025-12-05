import type { IObserver } from './IObserver'
import type { GoalEvent } from './NotificationObserver'

export class StatsObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    console.log(`[Stats] Actualizar métricas por meta: ${event.id}`)
  }
}
