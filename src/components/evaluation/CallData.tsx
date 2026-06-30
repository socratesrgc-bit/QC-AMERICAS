export default function CallData() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Datos de la Llamada
      </h2>

      <div className="grid grid-cols-3 gap-5">

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Cliente
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            DNI
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Código de Suministro
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Contrato
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Número Telefónico
          </label>

          <input
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Duración
          </label>

          <input
            placeholder="00:00"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          />
        </div>

        <div className="col-span-3">

          <label className="block text-sm text-slate-300 mb-2">
            Motivo de la Llamada
          </label>

          <textarea
            rows={3}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 resize-none"
          />

        </div>

      </div>

    </div>
  );
}