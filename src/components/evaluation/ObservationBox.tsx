export default function ObservationBox() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Encabezado */}

      <div className="bg-red-700 px-6 py-4">

        <h2 className="text-xl font-bold text-white">
          OBSERVACIONES
        </h2>

      </div>

      {/* Contenido */}

      <div className="p-6">

        <textarea
          rows={6}
          placeholder="Ingrese las observaciones de la evaluación..."
          className="w-full rounded-lg border border-gray-300 bg-white p-4 resize-none focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
        />

      </div>

    </div>
  );
}