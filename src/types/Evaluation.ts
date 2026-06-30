export interface EvaluationItem {
  id: number;
  criterio: string;
  cumple: boolean | null;
  observacion: string;
}

export interface EvaluationSection {
  titulo: string;
  items: EvaluationItem[];
}