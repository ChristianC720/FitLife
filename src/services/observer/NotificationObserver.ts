import type { IObserver } from './IObserver'

export type GoalEvent = { id: string; title: string; progress: number }

export class NotificationObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    // For frontend only: show a toast or console message
    // In real app this would call a notification service
    // eslint-disable-next-line no-console
    console.log(`[Notification] Meta completada: ${event.title} (${event.progress}%)`)
  }
}
