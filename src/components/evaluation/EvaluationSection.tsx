import type { EvaluationItem } from "../../types/Evaluation";

interface EvaluationSectionProps {
  title: string;
  items: EvaluationItem[];
}

export default function EvaluationSection({
  title,
  items,
}: EvaluationSectionProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">

      <div className="bg-blue-700 px-6 py-4">
        <h2 className="text-lg font-bold text-white">
          {title}
        </h2>
      </div>

      {items.length === 0 ? (

        <div className="p-8 text-center text-slate-400">
          No hay criterios cargados para esta sección.
        </div>

      ) : (

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr>

              <th className="text-left px-4 py-3 w-16">N°</th>

              <th className="text-left px-4 py-3">
                Criterio
              </th>

              <th className="text-center px-4 py-3 w-24">
                Sí
              </th>

              <th className="text-center px-4 py-3 w-24">
                No
              </th>

              <th className="text-left px-4 py-3 w-72">
                Observación
              </th>

            </tr>

          </thead>

          <tbody>

            {items.map((item) => (

              <tr
                key={item.id}
                className="border-t border-slate-700 hover:bg-slate-700 transition"
              >

                <td className="px-4 py-4">
                  {item.id}
                </td>

                <td className="px-4">
                  {item.criterio}
                </td>

                <td className="text-center">

                  <input
                    type="radio"
                    name={`item-${item.id}`}
                  />

                </td>

                <td className="text-center">

                  <input
                    type="radio"
                    name={`item-${item.id}`}
                  />

                </td>

                <td className="px-4 py-3">

                  <input
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2"
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}