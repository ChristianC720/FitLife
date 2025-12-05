export interface IWearableConnector {
  connect(): Promise<boolean>
  disconnect(): Promise<void>
  getSteps(): Promise<number>
  getHeartRate(): Promise<number>
}
