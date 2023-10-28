import { Center, Heading } from "native-base";

type IScreenHeaderProps = {
  title: string;
};

export function ScreenHeader({ title }: IScreenHeaderProps) {
  return (
    <Center bg="gray.600" pt={16} pb={6}>
      <Heading color="gray.100" fontSize="xl" fontFamily="heading">
        {title}
      </Heading>
    </Center>
  );
}
