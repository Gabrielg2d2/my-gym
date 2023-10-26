import { HStack, VStack } from "native-base";
import { Header, IHeaderProps } from "../components/Header";
import { IListGroupsProps, ListGroups } from "../components/ListGroup";

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
    </VStack>
  );
}
