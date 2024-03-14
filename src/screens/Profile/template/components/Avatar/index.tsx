import { UserPhoto } from "@components/UserPhoto";
import * as ImagePicker from "expo-image-picker";
import { Center, Skeleton, Text } from "native-base";
import { TouchableOpacity } from "react-native";

type IAvatarProps = {
  urlAvatarUser?: string;
  handleEditPhoto: (uri: string) => void;
};

const PHOTO_SIZE = 33;

export function Avatar(props: IAvatarProps) {
  async function handleEditUserPhoto() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        props.handleEditPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.error("handleEditUserPhoto: ", error);
      return null;
    }
  }

  return (
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
      <TouchableOpacity onPress={handleEditUserPhoto}>
        <Text mt={2} color="green.500" fontSize="lg" fontFamily="heading">
          Alterar foto
        </Text>
      </TouchableOpacity>
    </Center>
  );
}
