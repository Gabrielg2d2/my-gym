import { HStack, Heading, Text, VStack } from "native-base";

type IHistoryCardProps = {
  muscleGroupName: string;
  exerciseName: string;
  runtime: string;
};

export function HistoryCard({
  muscleGroupName,
  exerciseName,
  runtime,
}: IHistoryCardProps) {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
    >
      <VStack mr={5}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
        >
          {muscleGroupName}
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {exerciseName}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {runtime}
      </Text>
    </HStack>
  );
}
