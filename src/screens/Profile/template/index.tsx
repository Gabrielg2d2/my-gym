import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Heading, VStack } from "native-base";
import { Avatar } from "./components/Avatar";
import { Container } from "./components/Container";

export type IProfileTemplateProps = {
  urlAvatar?: string;
  name?: string;
  email?: string;
  handleEditPhoto: (newUri: string) => void;
};

export function ProfileTemplate(props: IProfileTemplateProps) {
  return (
    <Container>
      <VStack space={6}>
        <Avatar
          urlAvatarUser={props.urlAvatar}
          handleEditPhoto={props.handleEditPhoto}
        />

        <Input placeholder="Nome" mx={10} bg="gray.600" value={props.name} />
        <Input
          placeholder="E-mail"
          mx={10}
          bg="gray.600"
          isDisabled
          value={props.email}
        />
      </VStack>

      <VStack space={6} px={10} mt={12} mb={9}>
        <Heading color="gray.200" fontSize="md">
          Alterar Senha
        </Heading>

        <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
        <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
        <Input
          placeholder="Confirme a nova senha"
          bg="gray.600"
          secureTextEntry
        />

        <Button text="Atualizar" mt={4} />
      </VStack>
    </Container>
  );
}
