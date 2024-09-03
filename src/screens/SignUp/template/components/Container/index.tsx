import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

type IContainerProps = {
  children: React.ReactNode;
};

export function Container(props: IContainerProps) {
  return (
    <KeyboardAvoidingView
      h={{
        base: "full",
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Image
            source={BackGroundImg}
            defaultSource={BackGroundImg}
            alt="people training"
            resizeMode="contain"
            position="absolute"
          />

          <VStack flex={1} space={4} px={10} pb={16}>
            <Center my={24}>
              <LogoSVG />
              <Text fontSize="sm" fontWeight="bold" color="gray.100">
                Treine sua mente e seu corpo
              </Text>
            </Center>

            <Heading
              color="gray.100"
              fontSize="xl"
              fontFamily="heading"
              mb={6}
              textAlign="center"
            >
              Crie sua conta
            </Heading>

            {props.children}
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
