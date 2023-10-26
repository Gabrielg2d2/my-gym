import { useState } from "react";
import { HomeTemplate, IHomeTemplateProps } from "./template";
import { CardExerciseProps } from "./template/components/ListExerciseCard";

export function Home() {
  const [listExercise, setListExercise] = useState<CardExerciseProps[]>([
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
    {
      nameExercise: "Remada Unilateral",
      imageExercise:
        "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
      repetitions: 10,
      series: 3,
    },
  ]);
  const [listGroup, setListGroup] = useState<string[]>([
    "Costas",
    "Pernas",
    "Braços",
    "Peito",
    "Ombros",
  ]);
  const [currentGroup, setCurrentGroup] = useState<string>(listGroup[0]);

  const propsTemplate: IHomeTemplateProps = {
    header: {
      signOut: () => {},
    },
    groups: {
      arrayGroups: listGroup,
      getCurrentGroup: (group: string) => setCurrentGroup(group),
    },
    exercises: {
      data: listExercise,
    },
  };

  return <HomeTemplate {...propsTemplate} />;
}
