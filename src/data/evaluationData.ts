import type { EvaluationSection } from "../types/Evaluation";

export const evaluationData: EvaluationSection[] = [
  {
    titulo: "ERRORES NO CRÍTICOS",
    items: [
      {
        id: 1,
        criterio: "Saludo e identificación.",
        resultado: "",
        observacion: "",
      },
      {
        id: 2,
        criterio: "Escucha activa.",
        resultado: "",
        observacion: "",
      },
      {
        id: 3,
        criterio: "Empatía con el cliente.",
        resultado: "",
        observacion: "",
      },
      {
        id: 4,
        criterio: "Comunicación clara.",
        resultado: "",
        observacion: "",
      },
      {
        id: 5,
        criterio: "Realiza la consulta adicional.",
        resultado: "",
        observacion: "",
      },
      {
        id: 6,
        criterio: "Indica corte programado / no programado.",
        resultado: "",
        observacion: "",
      },
      {
        id: 7,
        criterio: "Despedida adecuada.",
        resultado: "",
        observacion: "",
      },
    ],
  },

  {
    titulo: "ERRORES CRÍTICOS DE CUMPLIMIENTO",
    items: [
      {
        id: 8,
        criterio: "Cumple el procedimiento establecido.",
        resultado: "",
        observacion: "",
        critico: true,
      },
      {
        id: 9,
        criterio: "Brinda información correcta.",
        resultado: "",
        observacion: "",
        critico: true,
      },
    ],
  },

  {
    titulo: "ERRORES CRÍTICOS USUARIO FINAL",
    items: [
      {
        id: 10,
        criterio: "No afecta la experiencia del usuario.",
        resultado: "",
        observacion: "",
        critico: true,
      },
      {
        id: 11,
        criterio: "Resuelve correctamente la consulta.",
        resultado: "",
        observacion: "",
        critico: true,
      },
    ],
  },

  {
    titulo: "ERRORES CRÍTICOS DE NEGOCIO",
    items: [
      {
        id: 12,
        criterio: "Cumple las políticas FONAFE.",
        resultado: "",
        observacion: "",
        critico: true,
      },
      {
        id: 13,
        criterio: "No genera riesgos para la empresa.",
        resultado: "",
        observacion: "",
        critico: true,
      },
    ],
  },
];