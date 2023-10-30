import { UserPhoto } from "@components/UserPhoto";
import { Center, Skeleton, Text } from "native-base";
import { TouchableOpacity } from "react-native";

type IAvatarProps = {
  urlAvatarUser?: string;
  handleEditPhoto: () => void;
};

const PHOTO_SIZE = 33;

export function Avatar(props: IAvatarProps) {
  if (!props.urlAvatarUser) {
    return (
      <Skeleton
        size={PHOTO_SIZE}
        rounded="full"
        startColor="gray.400"
        endColor="gray.300"
      />
    );
  }

  return (
    <Center mt={6} px={10}>
      <UserPhoto
        source={{
          uri: props.urlAvatarUser,
        }}
        size={PHOTO_SIZE}
      />
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
  );
}
