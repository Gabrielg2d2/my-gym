import BackGroundImg from "@assets/background.png";
import LogoSVG from "@assets/logo.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Controller, useForm } from "react-hook-form";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import * as zod from "zod";

export type ISignInTemplateProps = {
  navigateSignUp: () => void;
};

const schema = zod.object({
  email: zod
    .string({
      required_error: "O e-mail é obrigatório",
    })
    .email({
      message: "Por favor, insira um e-mail válido. Ex: gabs@gmail.com",
    }),
  password: zod
    .string({
      required_error: "A senha é obrigatória",
    })
    .min(6, {
      message: "A senha deve conter no mínimo 6 caracteres",
    }),
});

export function SignInTemplate({ navigateSignUp }: ISignInTemplateProps) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: any) {
    console.log("data_submit: ", JSON.stringify(data));
  }

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
              Acesse sua conta
            </Heading>

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={field.onChange}
                  value={field.value}
                  error={!!errors.email}
                  textHelper={
                    errors?.email?.message && String(errors?.email?.message)
                  }
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={field.onChange}
                  value={field.value}
                  error={!!errors.password}
                  textHelper={
                    errors?.password?.message &&
                    String(errors?.password?.message)
                  }
                />
              )}
            />

            <Button text="Acessar" onPress={handleSubmit(onSubmit)} />

            <Text
              color="gray.100"
              textAlign="center"
              fontSize="sm"
              fontFamily="body"
              my={3}
            >
              Ainda não tem acesso?
            </Text>

            <Button
              text="Criar Conta"
              variant="outline"
              onPress={navigateSignUp}
            />
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
