import { UserPhoto } from "@components/UserPhoto";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { Center, Skeleton, Text, useToast } from "native-base";
import { TouchableOpacity } from "react-native";

type IPhotoInfo = {
  exists: boolean;
  isDirectory: boolean;
  modificationTime: number;
  size: number;
  uri: string;
} & FileSystem.FileInfo;

type IAvatarProps = {
  urlAvatarUser?: string;
  handleEditPhoto: (uri: string) => void;
};

const PHOTO_SIZE = 33;

export function Avatar(props: IAvatarProps) {
  const toast = useToast();

  async function handleEditUserPhoto() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (photoSelected.canceled) return;

      if (photoSelected?.assets[0]?.uri) {
        const photoInfo = (await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        )) as IPhotoInfo;

        if (photoInfo?.size && photoInfo?.size > 5000000) {
          return toast.show({
            title: "Imagem muito grande, selecione uma imagem menor que 5MB",
            placement: "top",
            bgColor: "red.500",
          });
        }

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
