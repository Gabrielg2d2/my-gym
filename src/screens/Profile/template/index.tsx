import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack } from "native-base";

export type IProfileTemplateProps = {};

export function ProfileTemplate(props: IProfileTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: "https://github.com/Gabrielg2d2.png",
            }}
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
