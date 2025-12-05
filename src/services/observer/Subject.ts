import type { IObserver } from './IObserver'

export class Subject<T> {
  private observers: Set<IObserver<T>> = new Set()

  register(o: IObserver<T>) {
    this.observers.add(o)
  }

  unregister(o: IObserver<T>) {
    this.observers.delete(o)
  }

  notify(event: T) {
    for (const o of Array.from(this.observers)) {
      try {
        o.update(event)
      } catch (e) {
        // Observers should handle their own errors; we catch to avoid breaking the loop
        // eslint-disable-next-line no-console
        console.error('Observer update failed', e)
      }
    }
  }
}
