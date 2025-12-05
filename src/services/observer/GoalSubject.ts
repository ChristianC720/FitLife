import { Subject } from './Subject'
import type { GoalEvent } from './NotificationObserver'

export const GoalSubject = new Subject<GoalEvent>()
