export type EvaluationResult =
  | "SI CUMPLE"
  | "NO CUMPLE"
  | "N/A"
  | "";

export interface EvaluationItem {
  id: number;

  criterio: string;

  resultado: EvaluationResult;

  observacion: string;

  critico?: boolean;
}

export interface EvaluationSection {
  titulo: string;

  items: EvaluationItem[];
}