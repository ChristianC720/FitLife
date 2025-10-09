import api from '../utils/api';

export interface ProgressSummary {
  totalWorkouts: number;
  totalCaloriesBurned: number;
  totalDuration: number;
  avgWeight: number;
  weightChange: number;
  avgCaloriesConsumed: number;
}

export interface DailyMetric {
  id: number;
  user_id: string;
  date: string;
  weight: number;
  calories_consumed: number;
  calories_burned: number;
  workout_duration_minutes: number;
  workout_count: number;
}

export interface CalorieBalance {
  date: string;
  consumed: number;
  burned: number;
  balance: number;
}

export interface WeightTrend {
  date: string;
  weight: number;
}

export interface ExerciseDistribution {
  category: string;
  count: number;
  percentage: number;
}

export interface UserGoal {
  id: number;
  user_id: string;
  goal_type: string;
  target_value: number;
  current_value: number;
  start_date: string;
  target_date: string;
  status: string;
}

export interface GoalProgress {
  id: number;
  type: string;
  target: number;
  current: number;
  percentage: number;
  status: string;
}

export const getProgressSummary = async (days: number = 7) => {
  const response = await api.get<{ success: boolean; data: ProgressSummary }>(
    `/progress/summary?days=${days}`
  );
  return response.data.data;
};

export const getDailyMetrics = async (days: number = 7) => {
  const response = await api.get<{ success: boolean; data: DailyMetric[] }>(
    `/progress/metrics?days=${days}`
  );
  return response.data.data;
};

export const getCalorieBalance = async (days: number = 7) => {
  const response = await api.get<{ success: boolean; data: CalorieBalance[] }>(
    `/progress/calories?days=${days}`
  );
  return response.data.data;
};

export const getWeightTrend = async (days: number = 30) => {
  const response = await api.get<{ success: boolean; data: WeightTrend[] }>(
    `/progress/weight?days=${days}`
  );
  return response.data.data;
};

export const getExerciseDistribution = async () => {
  const response = await api.get<{ success: boolean; data: ExerciseDistribution[] }>(
    '/progress/distribution'
  );
  return response.data.data;
};

export const getUserGoals = async () => {
  const response = await api.get<{ success: boolean; data: UserGoal[] }>(
    '/progress/goals'
  );
  return response.data.data;
};

export const getGoalsProgress = async () => {
  const response = await api.get<{ success: boolean; data: GoalProgress[] }>(
    '/progress/goals/progress'
  );
  return response.data.data;
};