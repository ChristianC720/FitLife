import type { IObserver } from './IObserver'

export type GoalEvent = { id: string; title: string; progress: number }

export class NotificationObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    console.log(`[Notification] Meta completada: ${event.title} (${event.progress}%)`)
  }
}
