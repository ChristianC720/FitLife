import api from '../utils/api';

export interface BackendExercisePlan {
  id: number;
  name: string;
  category: string;
  description: string | null;
  duration: string | null;
  frequency: string | null;
  level: string;
  status: string;
  progress: number;
  schedule: string | null;
  created_at: string;
  updated_at: string;
  exercises?: number;
}

export interface BackendExercise {
  id: number;
  plan_id: number;
  exercise_name: string;
  sets: number;
  reps: string;
  weight: string | null;
  rest_seconds: number;
  notes: string | null;
  order: number;
  created_at: string;
}

export interface BackendWorkoutHistory {
  id: number;
  plan_id: number | null;
  name: string;
  date: string;
  duration_minutes: number | null;
  calories: number | null;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export const getAllPlans = async (filters?: {
  type?: string;
  level?: string;
  search?: string;
}) => {
  const params = new URLSearchParams();
  if (filters?.type && filters.type !== 'all') {
    params.append('category', filters.type);
  }
  if (filters?.level && filters.level !== 'all') {
    params.append('level', filters.level);
  }
  if (filters?.search && filters.search.trim()) {
    params.append('search', filters.search.trim());
  }
  const queryString = params.toString();
  const url = queryString ? `/plans?${queryString}` : '/plans';
  const response = await api.get<ApiResponse<BackendExercisePlan[]>>(url);
  return response.data;
};

export const getPlanById = async (id: number | string) => {
  const response = await api.get<ApiResponse<BackendExercisePlan & { exercises: BackendExercise[] }>>(
    `/plans/${id}`
  );
  return response.data;
};

export const createPlan = async (planData: {
  name: string;
  category: string;
  description?: string;
  duration?: string;
  frequency?: string;
  level: string;
  status?: string;
  progress?: number;
  schedule?: string;
}) => {
  const response = await api.post<ApiResponse<BackendExercisePlan>>('/plans', planData);
  return response.data;
};

export const updatePlan = async (
  id: number | string,
  planData: Partial<BackendExercisePlan>
) => {
  const response = await api.put<ApiResponse<BackendExercisePlan>>(
    `/plans/${id}`,
    planData
  );
  return response.data;
};

export const deletePlan = async (id: number | string) => {
  const response = await api.delete<ApiResponse<void>>(`/plans/${id}`);
  return response.data;
};

export const addExerciseToPlan = async (
  planId: number | string,
  exerciseData: {
    exercise_name: string;
    sets: number;
    reps: string;
    weight?: string;
    rest_seconds?: number;
    notes?: string;
    order?: number;
  }
) => {
  const response = await api.post<ApiResponse<BackendExercise>>(
    `/plans/${planId}/exercises`,
    exerciseData
  );
  return response.data;
};

export const updateExercise = async (
  planId: number | string,
  exerciseId: number | string,
  exerciseData: Partial<BackendExercise>
) => {
  const response = await api.put<ApiResponse<BackendExercise>>(
    `/plans/${planId}/exercises/${exerciseId}`,
    exerciseData
  );
  return response.data;
};

export const deleteExercise = async (
  planId: number | string,
  exerciseId: number | string
) => {
  const response = await api.delete<ApiResponse<void>>(
    `/plans/${planId}/exercises/${exerciseId}`
  );
  return response.data;
};

export const getWorkoutHistory = async () => {
  const response = await api.get<ApiResponse<BackendWorkoutHistory[]>>('/history');
  return response.data;
};

export const createWorkoutEntry = async (workoutData: {
  name: string;
  plan_id?: number;
  date?: string;
  duration_minutes?: number;
  calories?: number;
}) => {
  const response = await api.post<ApiResponse<BackendWorkoutHistory>>(
    '/history',
    workoutData
  );
  return response.data;
};

export const completePlan = async (planId: string | number) => {
  const response = await api.post<ApiResponse<{
    plan: BackendExercisePlan;
    historyEntry: BackendWorkoutHistory;
  }>>(`/plans/${planId}/complete`);
  return response.data;
};

export const deleteWorkoutEntry = async (id: string | number) => {
  const response = await api.delete<ApiResponse<null>>(`/history/${id}`);
  return response.data;
};