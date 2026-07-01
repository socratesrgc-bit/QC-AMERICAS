import MainLayout from "../layouts/MainLayout";
import KPICard from "../components/dashboard/KPICard";
import QualityChart from "../components/dashboard/QualityChart";
import EvaluationTable from "../components/dashboard/EvaluationTable";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Encabezado */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">

          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Campaña FONAFE · Sistema de Gestión de Calidad
          </p>

        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <KPICard
            titulo="Calidad"
            valor="98.50%"
            color="#16A34A"
          />

          <KPICard
            titulo="Evaluaciones"
            valor="320"
            color="#C8102E"
          />

          <KPICard
            titulo="Asesores"
            valor="42"
            color="#374151"
          />

          <KPICard
            titulo="Errores Críticos"
            valor="5"
            color="#DC2626"
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