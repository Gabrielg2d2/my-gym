import { HStack, VStack } from "native-base";
import { Group, IGroupProps } from "../components/Group";
import { Header, IHeaderProps } from "../components/Header";

export type IHomeTemplateProps = {
  header: IHeaderProps;
  groups: IGroupProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />

      <HStack space={2} m={4}>
        <Group {...props.groups} />
        <Group {...props.groups} />
        <Group {...props.groups} />
      </HStack>
    </VStack>
  );
}
