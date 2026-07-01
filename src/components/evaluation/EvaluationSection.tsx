import type { EvaluationItem } from "../../types/Evaluation";

interface EvaluationSectionProps {
  title: string;
  items: EvaluationItem[];
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}

export default function EvaluationSection({
  title,
  items,
  setPercentage,
}: EvaluationSectionProps) {

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {

    const value = e.target.value;

    setPercentage((prev) => {

      if (value === "SI CUMPLE") {

        return Math.min(prev + 10, 100);

      }

      if (value === "NO CUMPLE") {

        return Math.max(prev - 5, 0);

      }

      return prev;

    });

  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      <div className="bg-red-700 px-6 py-4">

        <h2 className="text-lg font-bold text-white">
          {title}
        </h2>

      </div>

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr className="text-gray-700">

            <th className="text-center px-4 py-3 w-16">
              N°
            </th>

            <th className="text-left px-4 py-3">
              Criterio
            </th>

            <th className="text-center px-4 py-3 w-56">
              Resultado
            </th>

            <th className="text-left px-4 py-3 w-80">
              Observación
            </th>

          </tr>

        </thead>

        <tbody>

          {items.map((item) => (

            <tr
              key={item.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >

              <td className="text-center py-4">
                {item.id}
              </td>

              <td className="px-4">
                {item.criterio}
              </td>

              <td className="px-4">

                <select
                  defaultValue=""
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white p-2 focus:border-red-700 outline-none"
                >

                  <option value="">
                    Seleccione...
                  </option>

                  <option value="SI CUMPLE">
                    🟢 SI CUMPLE
                  </option>

                  <option value="NO CUMPLE">
                    🔴 NO CUMPLE
                  </option>

                  <option value="NA">
                    ⚪ N/A
                  </option>

                </select>

              </td>

              <td className="px-4 py-3">

                <input
                  placeholder="Observación..."
                  className="w-full rounded-lg border border-gray-300 p-2 focus:border-red-700 outline-none"
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}