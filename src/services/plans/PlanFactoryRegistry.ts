import { MarathonPlanFactory } from './MarathonPlanFactory'
import { MuscleGainPlanFactory } from './MuscleGainPlanFactory'
import type { PlanFactory } from './PlanFactory'

export type PlanKey = 'marathon' | 'muscle'

const registry: Record<PlanKey, () => PlanFactory> = {
  marathon: () => new MarathonPlanFactory(),
  muscle: () => new MuscleGainPlanFactory(),
}

export function getFactoryFor(key: PlanKey): PlanFactory {
  const f = registry[key]
  if (!f) throw new Error(`Unknown plan key: ${String(key)}`)
  return f()
}

export default { getFactoryFor }
