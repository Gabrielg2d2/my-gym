import { useState } from "react";
import { HistoryTemplate, IHistoryTemplateProps } from "./template";
import { IHistoryCardProps } from "./template/components/HistoryCard";

export function History() {
  const [listCardsHistory, setListCardsHistory] = useState<IHistoryCardProps[]>(
    [
      {
        exerciseName: "Puxada lateral",
        muscleGroupName: "Costas",
        runtime: "9:56",
      },
      {
        exerciseName: "Puxada frontal",
        muscleGroupName: "Costas",
        runtime: "6:00",
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
