import {
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

interface KPICardProps {
  titulo: string;
  valor: string;
  color: string;
}

export default function KPICard({
  titulo,
  valor,
  color,
}: KPICardProps) {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">

      <div
        className="absolute left-0 top-0 h-full w-2"
        style={{ backgroundColor: color }}
      />

      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
            {titulo}
          </p>

          <h2
            className="text-5xl font-extrabold mt-4"
            style={{ color }}
          >
            {valor}
          </h2>

        </div>

        <div
          className="rounded-xl p-3"
          style={{
            backgroundColor: `${color}20`,
          }}
        >
          <TrendingUp
            size={30}
            style={{ color }}
          />
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">

        <span className="text-xs text-gray-400">
          Actualizado hace unos segundos
        </span>

        <ArrowUpRight
          size={18}
          className="text-gray-400"
        />

      </div>

    </div>
  );
}