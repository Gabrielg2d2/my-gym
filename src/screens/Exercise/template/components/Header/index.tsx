import { Feather } from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

import BodySVG from "@assets/body.svg";

type IHeaderProps = {
  navigate: () => void;
  nameGroup: string;
};

export function Header(props: IHeaderProps) {
  return (
    <VStack flex={1}>
      <VStack px={8} pt={12} pb={8} bg="gray.600">
        <TouchableOpacity onPress={() => props.navigate()}>
          <Icon as={Feather} name="arrow-left" size={6} color="green.500" />
        </TouchableOpacity>

        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Exercícios
          </Heading>

          <HStack alignItems="center">
            <BodySVG />
            <Text
              color="gray.200"
              ml={1}
              fontSize="lg"
              textTransform="capitalize"
            >
              {props.nameGroup}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
