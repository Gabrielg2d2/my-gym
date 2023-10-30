import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export type IProfileTemplateProps = {
  urlAvatarUser: string;
  handleEditPhoto: () => void;
};

const PHOTO_SIZE = 33;

export function ProfileTemplate(props: IProfileTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {props.urlAvatarUser ? (
            <UserPhoto
              source={{
                uri: props.urlAvatarUser,
              }}
              size={PHOTO_SIZE}
            />
          ) : (
            <Skeleton
              size={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          )}
          <TouchableOpacity onPress={props.handleEditPhoto}>
            <Text
              mt={2}
              mb={8}
              color="green.500"
              fontSize="lg"
              fontFamily="heading"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}
