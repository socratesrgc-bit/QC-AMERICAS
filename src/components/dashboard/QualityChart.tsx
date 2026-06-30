import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { dia: "Lun", calidad: 95 },
  { dia: "Mar", calidad: 97 },
  { dia: "Mié", calidad: 93 },
  { dia: "Jue", calidad: 99 },
  { dia: "Vie", calidad: 98 },
  { dia: "Sáb", calidad: 96 },
  { dia: "Dom", calidad: 100 },
];

export default function QualityChart() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Calidad - Últimos 7 días
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Evolución diaria del porcentaje de calidad.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="dia"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
              domain={[90, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calidad"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}