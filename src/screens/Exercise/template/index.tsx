import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { Header } from "./components/Header";

import RepetitionSvg from "@assets/exercise.svg";
import SeriesSvg from "@assets/series.svg";
import { Button } from "@components/Button";

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
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />

      <ScrollView flex={1}>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            maxH={80}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1cmNAIvAVtskPpT4zajhytyPwyW664KkVw&usqp=CAU",
            }}
            alt="name exercise"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" py={4} px={4}>
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
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
