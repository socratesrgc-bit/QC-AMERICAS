export default function ObservationBox() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">

      <h2 className="text-xl font-bold text-white mb-6">
        Observaciones
      </h2>

      <textarea
        rows={6}
        placeholder="Ingrese observaciones de la evaluación..."
        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}