import { VStack } from "native-base";
import { Header } from "./components/Header";

export type IExerciseTemplateProps = {
  header: {
    navigate: () => void;
    nameGroup: string;
  };
};

export function ExerciseTemplate(props: IExerciseTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />
    </VStack>
  );
}
