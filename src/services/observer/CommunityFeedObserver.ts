import type { IObserver } from './IObserver'
import type { GoalEvent } from './NotificationObserver'

export class CommunityFeedObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    console.log(`[Community] Publicar logro: ${event.title}`)
  }
}
