import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();
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

            <Input placeholder="Nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button text="Criar e acessar" />
            <Button
              mt="auto"
              text="Voltar para o login"
              variant="outline"
              onPress={navigateSignIn}
            />
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
