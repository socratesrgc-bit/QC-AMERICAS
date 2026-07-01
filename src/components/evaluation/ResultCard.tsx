import {
  AlertTriangle,
  CheckCircle2,
  Save,
} from "lucide-react";

interface ResultCardProps {
  percentage: number;
}

export default function ResultCard({
  percentage,
}: ResultCardProps) {

  const color =
    percentage >= 95
      ? "#16A34A"
      : percentage >= 80
      ? "#F59E0B"
      : "#DC2626";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Encabezado */}

      <div className="bg-red-700 px-6 py-4">

        <h2 className="text-xl font-bold text-white text-center">
          RESULTADO
        </h2>

      </div>

      <div className="p-6">

        {/* Círculo */}

        <div className="flex justify-center">

          <div
            className="w-48 h-48 rounded-full border-[14px] flex flex-col items-center justify-center transition-all duration-300"
            style={{
              borderColor: color,
            }}
          >

            <span
              className="text-5xl font-extrabold"
              style={{ color }}
            >
              {percentage.toFixed(0)}%
            </span>

            <span className="text-gray-500 text-sm mt-2">
              Calidad
            </span>

          </div>

        </div>

        {/* Error crítico */}

        <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">

          <div className="flex items-center gap-3">

            <AlertTriangle
              className="text-red-600"
              size={22}
            />

            <div>

              <p className="text-sm text-gray-500">
                Error Crítico
              </p>

              <h3 className="font-bold text-red-700 text-xl">
                NO
              </h3>

            </div>

          </div>

        </div>

        {/* Estado */}

        <div className="mt-5 bg-gray-50 rounded-lg p-4 border border-gray-200">

          <div className="flex items-center gap-3">

            <CheckCircle2
              className="text-green-600"
              size={22}
            />

            <div>

              <p className="text-sm text-gray-500">
                Estado
              </p>

              <h3 className="font-bold text-green-700 text-xl">
                Pendiente
              </h3>

            </div>

          </div>

        </div>

        {/* Botón */}

        <button className="w-full mt-8 bg-red-700 hover:bg-red-800 transition text-white py-3 rounded-lg font-bold flex items-center justify-center gap-3">

          <Save size={20} />

          Guardar Evaluación

        </button>

      </div>

    </div>
  );
}