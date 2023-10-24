import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export function SignIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
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
            <Center my={24}>
              <Heading
                color="gray.100"
                fontSize="xl"
                fontFamily="heading"
                mb={6}
              >
                Acesse sua conta
              </Heading>
            </Center>
            <VStack flex={1} space={4} mb={6} px={10}>
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input placeholder="Senha" secureTextEntry />
            </VStack>
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
