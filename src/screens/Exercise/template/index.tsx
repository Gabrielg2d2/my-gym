import { HStack, Text } from "native-base";

import RepetitionSvg from "@assets/exercise.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";
import { Container } from "./components/Container";

export type IExerciseTemplateProps = {
  header: {
    navigate: () => void;
    nameGroup: string;
  };
  qntSeries: number;
  qntRepetitions: number;
  onPressExerciseFinished: () => void;
};

export function ExerciseTemplate(props: IExerciseTemplateProps) {
  return (
    <Container header={props.header}>
      <HStack alignItems="center" justifyContent="space-around" mb={5}>
        <HStack>
          <SeriesSvg />
          <Text color="gray.200" ml={2}>
            {props.qntSeries} séries
          </Text>
        </HStack>

        <HStack>
          <RepetitionSvg />
          <Text color="gray.200" ml={2}>
            {props.qntRepetitions} repetições
          </Text>
        </HStack>
      </HStack>

      <Button
        text="Marcar como realizado"
        onPress={props.onPressExerciseFinished}
      />
    </Container>
  );
}
