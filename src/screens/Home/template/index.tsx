import { VStack } from "native-base";
import { Header, IHeaderProps } from "../components/Header";

export type IHomeTemplateProps = {
  header: IHeaderProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />
    </VStack>
  );
}
