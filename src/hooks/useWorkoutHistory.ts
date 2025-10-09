import { useState, useEffect, useCallback } from 'react';
import * as exerciseApi from '../services/exerciseApi';
import type { ExerciseHistoryEntry } from '../types/exercises';
import type { Accent } from '../types/dashboard';

const getAccentColor = (index: number): Accent => {
  const colors: Accent[] = ['success', 'warning', 'info'];
  return colors[index % colors.length];
};

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Fecha no disponible';
    }
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch (error) {
    return 'Fecha no disponible';
  }
};

const mapBackendHistoryToFrontend = (
  backendHistory: exerciseApi.BackendWorkoutHistory,
  index: number
): ExerciseHistoryEntry => {
  return {
    id: backendHistory.id.toString(),
    name: backendHistory.name,
    date: formatDate(backendHistory.date),
    duration: backendHistory.duration_minutes 
      ? `${backendHistory.duration_minutes} min` 
      : 'N/A',
    calories: backendHistory.calories 
      ? `${backendHistory.calories} cal` 
      : 'N/A',
    accent: getAccentColor(index),
  };
};

interface UseWorkoutHistoryReturn {
  history: ExerciseHistoryEntry[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  addWorkout: (workout: {
    name: string;
    plan_id?: number;
    date?: string;
    duration_minutes?: number;
    calories?: number;
  }) => Promise<void>;
}

export const useWorkoutHistory = (): UseWorkoutHistoryReturn => {
  const [history, setHistory] = useState<ExerciseHistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadHistory = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await exerciseApi.getWorkoutHistory();
      if (response.success) {
        const mappedHistory = response.data.map((item, index) => 
          mapBackendHistoryToFrontend(item, index)
        );
        setHistory(mappedHistory);
      } else {
        throw new Error('Error al cargar el historial');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setHistory([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addWorkout = useCallback(async (workout: {
    name: string;
    plan_id?: number;
    date?: string;
    duration_minutes?: number;
    calories?: number;
  }) => {
    try {
      const response = await exerciseApi.createWorkoutEntry(workout);
      if (response.success) {
        await loadHistory();
      }
    } catch (err) {
      throw err;
    }
  }, [loadHistory]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return {
    history,
    loading,
    error,
    refetch: loadHistory,
    addWorkout,
  };
};