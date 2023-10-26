import { UserPhoto } from "@components/UserPhoto";
import { HStack, Heading, Text, VStack } from "native-base";

export function Header() {
  return (
    <HStack alignItems="center" bg="gray.600" pt={16} pb={5} px={8}>
      <UserPhoto
        source={{
          uri: "https://github.com/Gabrielg2d2.png",
        }}
      />

      <VStack space={1} ml={2}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Gabs
        </Heading>
      </VStack>
    </HStack>
  );
}
