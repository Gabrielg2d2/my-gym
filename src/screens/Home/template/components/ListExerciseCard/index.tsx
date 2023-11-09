import { Entypo } from "@expo/vector-icons";
import {
  FlatList,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type CardExerciseProps = {
  imageExercise: string;
  nameExercise: string;
  series: number;
  repetitions: number;
};

type IExerciseCardProps = TouchableOpacityProps & CardExerciseProps;

function ExerciseCard({
  nameExercise,
  series = 0,
  repetitions = 0,
  ...props
}: IExerciseCardProps) {
  return (
    <TouchableOpacity {...props}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={4}
      >
        <Image
          source={{
            uri: props.imageExercise,
          }}
          alt="Image of exercise"
          w={16}
          h={16}
          rounded="md"
          resizeMode="cover"
        />

        <VStack flex={1} ml={4}>
          <Heading fontSize="lg" color="white" numberOfLines={1}>
            {nameExercise}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={2} numberOfLines={2}>
            {`${series} séries x ${repetitions} repetições`}
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-right" color="gray.200" size="md" />
      </HStack>
    </TouchableOpacity>
  );
}

export type IListExerciseCardProps = {
  data: CardExerciseProps[];
  navigation: () => void;
};

export function ListExerciseCard(props: IListExerciseCardProps) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <ExerciseCard
          nameExercise={item.nameExercise}
          series={item.series}
          repetitions={item.repetitions}
          imageExercise={item.imageExercise}
          onPress={() => props.navigation()}
        />
      )}
      keyExtractor={(item) => item.nameExercise}
      showsVerticalScrollIndicator={false}
    />
  );
}
