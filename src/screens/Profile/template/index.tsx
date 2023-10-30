import { ScreenHeader } from "@components/ScreenHeader";
import { VStack } from "native-base";

export type IProfileTemplateProps = {};

export function ProfileTemplate(props: IProfileTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Perfil" />
    </VStack>
  );
}
