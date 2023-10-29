import { HStack, Heading, SectionList, Text, VStack } from "native-base";

type ICardProps = {
  muscleGroupName: string;
  exerciseName: string;
  runtime: string;
};

export type IHistoryCardProps = {
  title: string;
  data: ICardProps[];
};

function HistoryCard({ muscleGroupName, exerciseName, runtime }: ICardProps) {
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
      <VStack mr={5} flex={1}>
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

      <Text color="gray.200" fontSize="md">
        {runtime}
      </Text>
    </HStack>
  );
}

export type IListCardsHistory = {
  data: IHistoryCardProps[];
};

export function ListHistoryCard({ data }: IListCardsHistory) {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.exerciseName + index}
      renderItem={({ item }) => <HistoryCard {...item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Heading
          color="gray.200"
          mt={10}
          mb={3}
          fontSize="md"
          fontFamily="heading"
        >
          {title}
        </Heading>
      )}
    />
  );
}
