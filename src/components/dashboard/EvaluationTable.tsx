const data = [
  {
    fecha: "26/06/2026",
    ede: "SEAL",
    asesor: "Juan Pérez",
    supervisor: "Sócrates",
    calidad: "98.50%",
    estado: "Excelente",
  },
  {
    fecha: "26/06/2026",
    ede: "ELOR",
    asesor: "Ana López",
    supervisor: "Sócrates",
    calidad: "96.20%",
    estado: "Bueno",
  },
  {
    fecha: "25/06/2026",
    ede: "ELPU",
    asesor: "Carlos Ruiz",
    supervisor: "Sócrates",
    calidad: "91.80%",
    estado: "Regular",
  },
  {
    fecha: "25/06/2026",
    ede: "ELUC",
    asesor: "María Torres",
    supervisor: "Sócrates",
    calidad: "100%",
    estado: "Excelente",
  },
];

export default function EvaluationTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      <div className="bg-[#C8102E] px-6 py-4">

        <h2 className="text-xl font-bold text-white">
          Últimas Evaluaciones
        </h2>

      </div>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-gray-700">

            <th className="text-left px-6 py-4">Fecha</th>
            <th className="text-left px-6 py-4">EDE</th>
            <th className="text-left px-6 py-4">Asesor</th>
            <th className="text-left px-6 py-4">Supervisor</th>
            <th className="text-center px-6 py-4">Calidad</th>
            <th className="text-center px-6 py-4">Estado</th>

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr
              key={index}
              className="border-t border-gray-200 hover:bg-gray-50 transition"
            >

              <td className="px-6 py-4">{row.fecha}</td>

              <td className="px-6 py-4 font-semibold text-red-700">
                {row.ede}
              </td>

              <td className="px-6 py-4">{row.asesor}</td>

              <td className="px-6 py-4">{row.supervisor}</td>

              <td className="text-center px-6 py-4 font-bold text-green-600">
                {row.calidad}
              </td>

              <td className="text-center px-6 py-4">

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {row.estado}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}