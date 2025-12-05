import type { IWearableConnector } from './IWearableConnector'
import { AppleWatchAdapter } from './AppleWatchAdapter'
import { GarminAdapter } from './GarminAdapter'

export type WearableType = 'apple' | 'garmin'

export function createWearableAdapter(type: WearableType): IWearableConnector {
  switch (type) {
    case 'apple':
      return new AppleWatchAdapter()
    case 'garmin':
      return new GarminAdapter()
    default:
      throw new Error(`Unsupported wearable type: ${String(type)}`)
  }
}

export default createWearableAdapter
