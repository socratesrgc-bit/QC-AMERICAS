import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import GeneralData from "../components/evaluation/GeneralData";
import CallData from "../components/evaluation/CallData";
import EvaluationSection from "../components/evaluation/EvaluationSection";
import ObservationBox from "../components/evaluation/ObservationBox";
import ResultCard from "../components/evaluation/ResultCard";
import { evaluationData } from "../data/evaluationData";

export default function Evaluation() {

  const [percentage, setPercentage] = useState<number>(0);

  return (
    <MainLayout>

      <div className="grid grid-cols-12 gap-8">

        {/* PANEL IZQUIERDO */}

        <aside className="col-span-3">

<div className="sticky top-18">
            <ResultCard
              percentage={percentage}
            />

          </div>

        </aside>

        {/* PANEL DERECHO */}

        <section className="col-span-9 flex flex-col gap-8">

          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              Nueva Evaluación
            </h1>

            <p className="text-gray-500 mt-2">
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
              percentage={percentage}
              setPercentage={setPercentage}
            />

          ))}

          <ObservationBox />

        </section>

      </div>

    </MainLayout>
  );
}