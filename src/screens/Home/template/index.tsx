import { HStack, Heading, Text, VStack } from "native-base";
import { Header, IHeaderProps } from "./components/Header";
import {
  IListExerciseCardProps,
  ListExerciseCard,
} from "./components/ListExerciseCard";
import { IListGroupsProps, ListGroups } from "./components/ListGroup";

export type IHomeTemplateProps = {
  header: IHeaderProps;
  groups: IListGroupsProps;
  exercises: IListExerciseCardProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />

      <HStack m={4}>
        <ListGroups {...props.groups} />
      </HStack>

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" my={4}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="md">
            4
          </Text>
        </HStack>

        <ListExerciseCard {...props.exercises} />
      </VStack>
    </VStack>
  );
}
