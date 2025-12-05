import type { IWearableConnector } from './IWearableConnector'

// Mock adapter translating Garmin API to IWearableConnector
export class GarminAdapter implements IWearableConnector {
  async connect(): Promise<boolean> {
    // simulate auth flow
    return true
  }

  async disconnect(): Promise<void> {
    return
  }

  async getSteps(): Promise<number> {
    // Garmin returns a complex payload; adapter simplifies it
    return 7423
  }

  async getHeartRate(): Promise<number> {
    return 62
  }
}
