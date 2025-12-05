import type { IWearableConnector } from './IWearableConnector'

// Mock adapter for Apple Watch
export class AppleWatchAdapter implements IWearableConnector {
  async connect(): Promise<boolean> {
    return true
  }

  async disconnect(): Promise<void> {
    return
  }

  async getSteps(): Promise<number> {
    return 8130
  }

  async getHeartRate(): Promise<number> {
    return 68
  }
}
