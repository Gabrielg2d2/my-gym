import { useState } from "react";
import { HomeTemplate, IHomeTemplateProps } from "./template";

export function Home() {
  const [listGroup, setListGroup] = useState<string[]>([
    "Costas",
    "Pernas",
    "Braços",
    "Peito",
    "Ombros",
  ]);
  const [currentGroup, setCurrentGroup] = useState<string>(listGroup[0]);
  console.log("currentGroup: ", currentGroup);

  const propsTemplate: IHomeTemplateProps = {
    header: {
      signOut: () => {},
    },
    groups: {
      arrayGroups: listGroup,
      getCurrentGroup: (group: string) => setCurrentGroup(group),
    },
  };

  return <HomeTemplate {...propsTemplate} />;
}
