import { UserPhoto } from "@components/UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export type IHeaderProps = {
  signOut: () => void;
};

export function Header({ signOut }: IHeaderProps) {
  return (
    <HStack alignItems="center" bg="gray.600" pt={16} pb={5} px={8}>
      <UserPhoto
        source={{
          uri: "https://github.com/Gabrielg2d2.png",
        }}
      />

      <VStack flex={1} space={1} ml={2}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Gabs
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" size={7} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  );
}
