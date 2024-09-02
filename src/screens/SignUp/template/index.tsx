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
import { Controller, useForm } from "react-hook-form";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import * as zod from "zod";

export type IData = {
  name: string;
  email: string;
  password: string;
};

export type ISignUpTemplateProps = {
  navigateSignIn: () => void;
  signUp: (data: IData) => Promise<void>;
};

const schema = zod.object({
  name: zod
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(3, {
      message: "O nome deve conter no mínimo 3 caracteres",
    }),
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

export function SignUpTemplate({
  navigateSignIn,
  signUp,
}: ISignUpTemplateProps) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: IData) {
    await signUp(data);
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

            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  placeholder="Nome"
                  keyboardType="name-phone-pad"
                  autoCapitalize="none"
                  onChangeText={field.onChange}
                  value={field.value}
                  error={!!errors.name}
                  textHelper={
                    errors?.name?.message && String(errors?.name?.message)
                  }
                />
              )}
            />

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

            <Button text="Criar e acessar" onPress={handleSubmit(onSubmit)} />
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
