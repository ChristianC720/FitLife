import type { IWearableConnector } from './IWearableConnector'

export class GarminAdapter implements IWearableConnector {
  async connect(): Promise<boolean> {
    return true
  }

  async disconnect(): Promise<void> {
    return
  }

  async getSteps(): Promise<number> {
    return 7423
  }

  async getHeartRate(): Promise<number> {
    return 62
  }
}
