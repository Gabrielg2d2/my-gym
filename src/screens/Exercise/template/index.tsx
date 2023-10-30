import { ScreenHeader } from "@components/ScreenHeader";
import { Text, VStack } from "native-base";

type IExerciseTemplateProps = {};

export function ExerciseTemplate(props: IExerciseTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Exercício" />
      <Text color="white">Exercise</Text>
    </VStack>
  );
}
