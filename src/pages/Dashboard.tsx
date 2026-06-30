import MainLayout from "../layouts/MainLayout";
import KPICard from "../components/dashboard/KPICard";
import QualityChart from "../components/dashboard/QualityChart";
import EvaluationTable from "../components/dashboard/EvaluationTable";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Encabezado */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Bienvenido al Sistema QC-AMÉRICAS
          </p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <KPICard
            titulo="Calidad"
            valor="98.50%"
            color="#22C55E"
          />

          <KPICard
            titulo="Evaluaciones"
            valor="320"
            color="#3B82F6"
          />

          <KPICard
            titulo="Asesores"
            valor="42"
            color="#A855F7"
          />

          <KPICard
            titulo="Errores Críticos"
            valor="5"
            color="#EF4444"
          />

        </div>

        {/* Gráfico */}
        <QualityChart />

        {/* Tabla */}
        <EvaluationTable />

      </div>
    </MainLayout>
  );
}