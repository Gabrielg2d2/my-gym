import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text } from "native-base";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { Container } from "./components/Container";

export type ISignInTemplateProps = {
  navigateSignUp: () => void;
  onSubmit: (data: IData) => void;
};

export type IData = {
  email: string;
  password: string;
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

export function SignInTemplate({
  navigateSignUp,
  onSubmit,
}: ISignInTemplateProps) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IData>({
    resolver: zodResolver(schema),
  });

  return (
    <Container>
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
              errors?.password?.message && String(errors?.password?.message)
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

      <Button text="Criar Conta" variant="outline" onPress={navigateSignUp} />
    </Container>
  );
}
