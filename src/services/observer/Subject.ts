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
        console.error('Observer update failed', e)
      }
    }
  }
}
