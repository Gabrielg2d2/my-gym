import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Center, Image, Text, VStack } from "native-base";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackGroundImg}
        alt="people training"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSVG />

        <Text fontSize="sm" fontWeight="bold" color="gray.100">
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  );
}
