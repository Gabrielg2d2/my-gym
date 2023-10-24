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
      {...rest}
    />
  );
}
