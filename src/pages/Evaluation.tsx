import MainLayout from "../layouts/MainLayout";
import GeneralData from "../components/evaluation/GeneralData";
import CallData from "../components/evaluation/CallData";
import EvaluationSection from "../components/evaluation/EvaluationSection";
import ObservationBox from "../components/evaluation/ObservationBox";
import ResultCard from "../components/evaluation/ResultCard";
import { evaluationData } from "../data/evaluationData";

export default function Evaluation() {
  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Nueva Evaluación
          </h1>

          <p className="text-slate-400 mt-2">
            Campaña FONAFE
          </p>
        </div>

        <GeneralData />

        <CallData />

        {evaluationData.map((section) => (
          <EvaluationSection
            key={section.titulo}
            title={section.titulo}
            items={section.items}
          />
        ))}

        <ObservationBox />

        <ResultCard />

      </div>
    </MainLayout>
  );
}