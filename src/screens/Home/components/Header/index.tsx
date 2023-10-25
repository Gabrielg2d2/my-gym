import { HStack, Heading, Text, VStack } from "native-base";

export function Header() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <VStack space={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md">
          Gabs
        </Heading>
      </VStack>
    </HStack>
  );
}
