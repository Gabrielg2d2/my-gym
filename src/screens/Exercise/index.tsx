import { useNavigationApp } from "@routes/useNavigationApp";
import { useState } from "react";
import { ExerciseTemplate, IExerciseTemplateProps } from "./template";

export function Exercise() {
  const { navigateGoBack } = useNavigationApp();
  const [nameGroup] = useState<string>("costas");

  const propsTemplate: IExerciseTemplateProps = {
    header: {
      navigate: navigateGoBack,
      nameGroup: nameGroup,
    },
  };

  return <ExerciseTemplate {...propsTemplate} />;
}
