import { IPressableProps, Pressable, Text } from "native-base";

export type IGroupProps = IPressableProps & {
  name: string;
};

export function Group({ name, ...props }: IGroupProps) {
  return (
    <Pressable
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...props}
    >
      <Text
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}
