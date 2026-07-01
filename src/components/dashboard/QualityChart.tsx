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
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Calidad - Últimos 7 días
      </h2>

      <div style={{ width: "100%", height: 320 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="dia"
              stroke="#6B7280"
            />

            <YAxis
              stroke="#6B7280"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calidad"
              stroke="#C8102E"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#C8102E",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}