import { IInputProps, Input as NativeBaseInput } from "native-base";

type InputProps = IInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...rest}
    />
  );
}
