import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { Container } from "./components/Container";

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
    <Container>
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
            textHelper={errors?.name?.message && String(errors?.name?.message)}
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
              errors?.password?.message && String(errors?.password?.message)
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
    </Container>
  );
}
