export default function CallData() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Encabezado */}

      <div className="bg-red-700 px-6 py-4">

        <h2 className="text-xl font-bold text-white">
          DATOS DE LA LLAMADA
        </h2>

      </div>

      {/* Contenido */}

      <div className="p-8">

        <div className="grid grid-cols-3 gap-6">

          {/* Cliente */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cliente
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* DNI */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              DNI
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Código */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Código de Suministro
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Contrato */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contrato
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Teléfono */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Número Telefónico
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Duración */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Duración
            </label>

            <input
              placeholder="00:00"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Fecha */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha de Llamada
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Hora Inicio */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hora Inicio
            </label>

            <input
              type="time"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Hora Fin */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hora Fin
            </label>

            <input
              type="time"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Motivo */}

          <div className="col-span-3">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Motivo de la Llamada
            </label>

            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-3 resize-none focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

        </div>

      </div>

    </div>
  );
}