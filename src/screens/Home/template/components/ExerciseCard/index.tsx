import { Entypo } from "@expo/vector-icons";
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type IExerciseCardProps = TouchableOpacityProps & {};

export function ExerciseCard({ ...props }: IExerciseCardProps) {
  return (
    <TouchableOpacity {...props}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md">
        <Image
          source={{
            uri: "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/remada-serrote-musculos-trabalhados.jpg",
          }}
          alt="Image of exercise"
          w={16}
          h={16}
          rounded="md"
          resizeMode="center"
        />

        <VStack flex={1} ml={4}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={2} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-right" color="gray.200" size="md" />
      </HStack>
    </TouchableOpacity>
  );
}
