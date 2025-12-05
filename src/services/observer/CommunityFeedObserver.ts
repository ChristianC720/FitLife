import type { IObserver } from './IObserver'
import type { GoalEvent } from './NotificationObserver'

export class CommunityFeedObserver implements IObserver<GoalEvent> {
  update(event: GoalEvent) {
    // Would push a small summary to community feed; console log for frontend demo
    // eslint-disable-next-line no-console
    console.log(`[Community] Publicar logro: ${event.title}`)
  }
}
