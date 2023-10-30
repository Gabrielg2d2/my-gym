import { ScreenHeader } from "@components/ScreenHeader";
import { ScrollView, VStack } from "native-base";
import { Avatar } from "./components/Avatar";

export type IProfileTemplateProps = {
  urlAvatarUser?: string;
  handleEditPhoto: () => void;
};

export function ProfileTemplate(props: IProfileTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Avatar
          urlAvatarUser={props.urlAvatarUser}
          handleEditPhoto={props.handleEditPhoto}
        />
      </ScrollView>
    </VStack>
  );
}
