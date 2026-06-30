export default function GeneralData() {
  const hoy = new Date();

  const fecha = hoy.toISOString().split("T")[0];

  const hora = hoy.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Datos Generales
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            EDE
          </label>

          <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3">

            <option>ENOSA</option>
            <option>ENSA</option>
            <option>HIDRANDINA</option>
            <option>ELECTROCENTRO</option>
            <option>SEAL</option>
            <option>ELOR</option>
            <option>ELSE</option>
            <option>ELECTROSUR</option>
            <option>ELECTRO UCAYALI</option>
            <option>ADINELSA</option>

          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Campaña
          </label>

          <input
            value="FONAFE"
            readOnly
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Supervisor
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
            placeholder="Ingrese el supervisor"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Asesor
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
            placeholder="Ingrese el asesor"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Fecha
          </label>

          <input
            type="date"
            value={fecha}
            readOnly
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Hora
          </label>

          <input
            value={hora}
            readOnly
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

      </div>

    </div>
  );
}