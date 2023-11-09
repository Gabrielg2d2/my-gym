import { useNavigationApp } from "@routes/useNavigationApp";
import { useState } from "react";
import { ExerciseTemplate, IExerciseTemplateProps } from "./template";

export function Exercise() {
  const { navigateGoBack } = useNavigationApp();
  const [exercise] = useState({
    name: "Supino",
    qntSeries: 3,
    qntRepetitions: 10,
  });

  function handleOnPressExerciseFinished() {
    console.log("handleOnPressExerciseFinished");
  }

  const propsTemplate: IExerciseTemplateProps = {
    header: {
      navigate: navigateGoBack,
      nameGroup: exercise.name,
    },
    qntSeries: exercise.qntSeries,
    qntRepetitions: exercise.qntRepetitions,
    onPressExerciseFinished: handleOnPressExerciseFinished,
  };

  return <ExerciseTemplate {...propsTemplate} />;
}
