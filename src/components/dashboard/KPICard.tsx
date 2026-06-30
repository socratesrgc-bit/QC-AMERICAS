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
    <div className="relative overflow-hidden bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300">

      <div
        className="absolute top-0 left-0 w-2 h-full"
        style={{ backgroundColor: color }}
      />

      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-400">
            {titulo}
          </p>

          <h1
            className="text-5xl font-bold mt-4"
            style={{ color }}
          >
            {valor}
          </h1>

        </div>

        <div
          className="rounded-xl p-3"
          style={{
            backgroundColor: `${color}25`,
          }}
        >
          <TrendingUp
            size={28}
            style={{ color }}
          />
        </div>

      </div>

      <div className="mt-8 flex justify-between items-center">

        <span className="text-xs text-slate-500">
          Actualizado hace unos segundos
        </span>

        <ArrowUpRight
          size={18}
          className="text-slate-500"
        />

      </div>

    </div>
  );
}