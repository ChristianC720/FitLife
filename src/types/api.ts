// Tipos para mapear datos del backend al frontend

export interface ExerciseFromBackend {
  id: number;
  plan_id: number;
  exercise_name: string;
  sets: number;
  reps: string;
  weight: string | null;
  rest_seconds: number;
  notes: string | null;
  order: number;
}

export interface PlanWithExercises {
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
  exercises: ExerciseFromBackend[];
}