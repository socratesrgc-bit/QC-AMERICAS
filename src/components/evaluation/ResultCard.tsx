import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ResultCard() {
  const [guardado, setGuardado] = useState(false);

  const guardarEvaluacion = () => {
    setGuardado(true);

    setTimeout(() => {
      setGuardado(false);
    }, 3000);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Resultado de la Evaluación
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-slate-900 rounded-lg p-5 border border-slate-700">

          <p className="text-slate-400 text-sm">
            Calidad
          </p>

          <h1 className="text-4xl font-bold text-green-400 mt-3">
            0.00%
          </h1>

        </div>

        <div className="bg-slate-900 rounded-lg p-5 border border-slate-700">

          <p className="text-slate-400 text-sm">
            Error Crítico
          </p>

          <h1 className="text-3xl font-bold text-red-400 mt-3">
            NO
          </h1>

        </div>

        <div className="bg-slate-900 rounded-lg p-5 border border-slate-700">

          <p className="text-slate-400 text-sm">
            Estado
          </p>

          <h1 className="text-3xl font-bold text-blue-400 mt-3">
            Pendiente
          </h1>

        </div>

      </div>

      {guardado && (
        <div className="mt-6 bg-green-600/20 border border-green-500 rounded-lg p-4 flex items-center gap-3">

          <CheckCircle className="text-green-400" />

          <span className="text-green-300 font-medium">
            Evaluación guardada correctamente.
          </span>

        </div>
      )}

      <div className="mt-8 flex justify-end">

        <button
          onClick={guardarEvaluacion}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold"
        >
          Guardar Evaluación
        </button>

      </div>

    </div>
  );
}