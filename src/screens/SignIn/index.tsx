import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Image, VStack } from "native-base";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackGroundImg}
        alt="people training"
        resizeMode="contain"
        position="absolute"
      />

      <LogoSVG />
    </VStack>
  );
}
