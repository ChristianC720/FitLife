import { useState, useEffect } from 'react';
import * as progressApi from '../services/progressApi';

export function useProgress(days: number = 7) {
  const [summary, setSummary] = useState<progressApi.ProgressSummary | null>(null);
  const [metrics, setMetrics] = useState<progressApi.DailyMetric[]>([]);
  const [calorieBalance, setCalorieBalance] = useState<progressApi.CalorieBalance[]>([]);
  const [weightTrend, setWeightTrend] = useState<progressApi.WeightTrend[]>([]);
  const [distribution, setDistribution] = useState<progressApi.ExerciseDistribution[]>([]);
  const [goals, setGoals] = useState<progressApi.UserGoal[]>([]);
  const [goalsProgress, setGoalsProgress] = useState<progressApi.GoalProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        summaryData,
        metricsData,
        caloriesData,
        weightData,
        distributionData,
        goalsData,
        progressData,
      ] = await Promise.all([
        progressApi.getProgressSummary(days),
        progressApi.getDailyMetrics(days),
        progressApi.getCalorieBalance(days),
        progressApi.getWeightTrend(30),
        progressApi.getExerciseDistribution(),
        progressApi.getUserGoals(),
        progressApi.getGoalsProgress(),
      ]);

      setSummary(summaryData);
      setMetrics(metricsData);
      setCalorieBalance(caloriesData);
      setWeightTrend(weightData);
      setDistribution(distributionData);
      setGoals(goalsData);
      setGoalsProgress(progressData);
    } catch (err) {
      console.error('Error cargando datos de progreso:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [days]);

  return {
    summary,
    metrics,
    calorieBalance,
    weightTrend,
    distribution,
    goals,
    goalsProgress,
    loading,
    error,
    refetch: fetchData,
  };
}