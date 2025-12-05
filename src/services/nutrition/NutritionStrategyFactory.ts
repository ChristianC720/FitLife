import { BalancedStrategy } from './BalancedStrategy'
import { KetoStrategy } from './KetoStrategy'
import { VeganStrategy } from './VeganStrategy'
import type { INutritionStrategy } from './INutritionStrategy'

export type StrategyKey = 'balanced' | 'keto' | 'vegan'

const registry: Record<StrategyKey, () => INutritionStrategy> = {
  balanced: () => new BalancedStrategy(),
  keto: () => new KetoStrategy(),
  vegan: () => new VeganStrategy(),
}

export const getStrategyByKey = (key: StrategyKey): INutritionStrategy => {
  const factory = registry[key]
  if (!factory) throw new Error(`Unknown strategy key: ${String(key)}`)
  return factory()
}

export const availableStrategies = Object.keys(registry) as StrategyKey[]

export default { getStrategyByKey, availableStrategies }
