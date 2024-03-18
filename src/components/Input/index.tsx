import { IInputProps, Input as NativeBaseInput, Text } from "native-base";

type InputProps = IInputProps & {
  error?: boolean;
  textHelper?: string;
};

export function Input({ error = false, textHelper, ...rest }: InputProps) {
  const colorBorder = error ? "red.500" : "green.500";

  return (
    <>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        borderWidth={1}
        borderColor={error ? "red.500" : "gray.700"}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: colorBorder,
        }}
        {...rest}
      />
      {textHelper && (
        <Text fontSize="sm" color={error ? "red.500" : "gray.300"} mt={1}>
          {textHelper}
        </Text>
      )}
    </>
  );
}
