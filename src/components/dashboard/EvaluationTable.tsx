const data = [
  {
    fecha: "25/06/2026",
    asesor: "Juan Pérez",
    supervisor: "Sócrates",
    calidad: "98.50%",
    estado: "Excelente",
  },
  {
    fecha: "25/06/2026",
    asesor: "Ana López",
    supervisor: "Sócrates",
    calidad: "95.00%",
    estado: "Bueno",
  },
  {
    fecha: "24/06/2026",
    asesor: "Carlos Ruiz",
    supervisor: "Sócrates",
    calidad: "89.00%",
    estado: "Regular",
  },
];

export default function EvaluationTable() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg">

      <div className="p-6 border-b border-slate-700">
        <h2 className="text-xl font-bold text-white">
          Últimas Evaluaciones
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Últimos monitoreos registrados en el sistema.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr>

              <th className="text-left px-6 py-4 text-slate-400">
                Fecha
              </th>

              <th className="text-left px-6 py-4 text-slate-400">
                Asesor
              </th>

              <th className="text-left px-6 py-4 text-slate-400">
                Supervisor
              </th>

              <th className="text-left px-6 py-4 text-slate-400">
                Calidad
              </th>

              <th className="text-left px-6 py-4 text-slate-400">
                Estado
              </th>

            </tr>

          </thead>

          <tbody>

            {data.map((item, index) => (

              <tr
                key={index}
                className="border-t border-slate-700 hover:bg-slate-700 transition"
              >

                <td className="px-6 py-4">{item.fecha}</td>

                <td className="px-6 py-4">{item.asesor}</td>

                <td className="px-6 py-4">{item.supervisor}</td>

                <td className="px-6 py-4 font-bold text-green-400">
                  {item.calidad}
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {item.estado}
                  </span>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}