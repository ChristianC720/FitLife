import type { IObserver } from './IObserver'
import type { GoalEvent } from './NotificationObserver'

export class StatsObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    // Update local analytics or send to backend; here we just log for demo
    // eslint-disable-next-line no-console
    console.log(`[Stats] Actualizar métricas por meta: ${event.id}`)
  }
}
