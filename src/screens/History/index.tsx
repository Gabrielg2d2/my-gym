import { useState } from "react";
import { HistoryTemplate, IHistoryTemplateProps } from "./template";
import { IHistoryCardProps } from "./template/components/ListHistoryCard";

export function History() {
  const [listCardsHistory, setListCardsHistory] = useState<IHistoryCardProps[]>(
    [
      {
        title: "25/10/2023",
        data: [
          {
            exerciseName: "Puxada lateral",
            muscleGroupName: "Costas",
            runtime: "9:56",
          },
          {
            exerciseName: "Puxada frontal",
            muscleGroupName: "Costas",
            runtime: "9:56",
          },
        ],
      },
      {
        title: "24/10/2023",
        data: [
          {
            exerciseName: "Puxada frontal",
            muscleGroupName: "Costas",
            runtime: "9:56",
          },
        ],
      },
      {
        title: "23/10/2023",
        data: [
          {
            exerciseName: "Puxada frontal",
            muscleGroupName: "Costas",
            runtime: "9:56",
          },
        ],
      },
    ]
  );

  const propsTemplate: IHistoryTemplateProps = {
    listCards: {
      data: listCardsHistory,
    },
  };

  return <HistoryTemplate {...propsTemplate} />;
}
