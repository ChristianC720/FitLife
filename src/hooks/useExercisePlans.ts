import { useState, useEffect, useCallback } from 'react';
import * as exerciseApi from '../services/exerciseApi';
import type { ExercisePlan } from '../types/exercises';

const mapBackendPlanToFrontend = (backendPlan: exerciseApi.BackendExercisePlan): ExercisePlan => {
  let statusAccent: 'success' | 'warning' | 'info' = 'info';
  if (backendPlan.status === 'Completado') statusAccent = 'success';
  else if (backendPlan.status === 'En progreso') statusAccent = 'warning';

  return {
    id: backendPlan.id.toString(),
    name: backendPlan.name,
    category: backendPlan.category,
    description: backendPlan.description || 'Sin descripción',
    duration: backendPlan.duration || 'N/A',
    exercises: backendPlan.exercises || 0,
    frequency: backendPlan.frequency || 'N/A',
    level: backendPlan.level,
    status: backendPlan.status as 'En progreso' | 'Completado' | 'Programado',
    statusAccent,
    progress: backendPlan.progress,
    schedule: backendPlan.schedule || 'Sin programar',
  };
};

interface UseExercisePlansReturn {
  plans: ExercisePlan[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  filterPlans: (filters: { type?: string; level?: string; search?: string }) => Promise<void>;
}

export const useExercisePlans = (): UseExercisePlansReturn => {
  const [plans, setPlans] = useState<ExercisePlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentFilters, setCurrentFilters] = useState<{ type?: string; level?: string; search?: string }>({});

  const loadPlans = async (filters?: { type?: string; level?: string; search?: string }) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('📥 Cargando planes con filtros:', filters);
      
      const response = await exerciseApi.getAllPlans(filters);
      
      console.log('📦 Respuesta del backend:', response);
      
      if (response.success) {
        const mappedPlans = response.data.map(mapBackendPlanToFrontend);
        console.log('✅ Planes mapeados:', mappedPlans);
        setPlans(mappedPlans);
        if (filters) {
          setCurrentFilters(filters);
        }
      } else {
        throw new Error('Error al cargar los planes');
      }
    } catch (err) {
      console.error('❌ Error al cargar planes:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setPlans([]);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    console.log('🔄 Refrescando planes...');
    await loadPlans(currentFilters);
  };

  useEffect(() => {
    loadPlans();
  }, []);

  return {
    plans,
    loading,
    error,
    refetch,
    filterPlans: loadPlans,
  };
};