import { HStack, Heading, Text, VStack } from "native-base";
import { ExerciseCard } from "./components/ExerciseCard";
import { Header, IHeaderProps } from "./components/Header";
import { IListGroupsProps, ListGroups } from "./components/ListGroup";

export type IHomeTemplateProps = {
  header: IHeaderProps;
  groups: IListGroupsProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />

      <HStack m={4}>
        <ListGroups {...props.groups} />
      </HStack>

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between">
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="md">
            4
          </Text>
        </HStack>

        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
