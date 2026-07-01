export default function GeneralData() {
  const hoy = new Date();

  const fecha = hoy.toISOString().split("T")[0];

  const hora = hoy.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Encabezado */}

      <div className="bg-red-700 px-6 py-4">

        <h2 className="text-xl font-bold text-white">
          DATOS GENERALES
        </h2>

      </div>

      {/* Contenido */}

      <div className="p-8">

        <div className="grid grid-cols-2 gap-6">

          {/* EDE */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              EDE
            </label>

            <select className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none">

              <option>ADINELSA</option>
              <option>ELOR</option>
              <option>ELPU</option>
              <option>ELUC</option>
              <option>SEAL</option>
              <option>ELSU</option>
              <option>ELSE</option>

            </select>

          </div>

          {/* Campaña */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Campaña
            </label>

            <input
              value="FONAFE"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
            />

          </div>

          {/* Supervisor */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Supervisor
            </label>

            <select className="w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none">

              <option value="">Seleccione un supervisor</option>

              <option>Johana Olivera</option>
              <option>Diego Paz</option>
              <option>Edgar Morán</option>
              <option>Angie Arata</option>
              <option>Miguel Angel</option>
              <option>Hugo Vélez</option>
              <option>Patrick de la Cruz</option>
              <option>Juan Ulloa</option>
              <option>Carlos Jara</option>
              <option>Abel Benavides</option>
              <option>Diana Avelino</option>
              <option>Sócrates Romero</option>
              <option>Ruth Canchari</option>
              <option>Adriana Cordova</option>

            </select>

          </div>

          {/* Asesor */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Asesor
            </label>

            <input
              placeholder="Ingrese el asesor"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-red-700 focus:ring-2 focus:ring-red-200 outline-none"
            />

          </div>

          {/* Fecha */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha
            </label>

            <input
              type="date"
              value={fecha}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
            />

          </div>

          {/* Hora */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hora
            </label>

            <input
              value={hora}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 p-3"
            />

          </div>

        </div>

      </div>

    </div>
  );
}