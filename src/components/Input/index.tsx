import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
} from "native-base";

type InputProps = IInputProps & {
  error?: boolean;
  textHelper?: string;
};

export function Input({ error = false, textHelper, ...rest }: InputProps) {
  return (
    <FormControl isInvalid={error}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        borderWidth={0}
        isInvalid={error}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{textHelper}</FormControl.ErrorMessage>
      {!error && <FormControl.HelperText>{textHelper}</FormControl.HelperText>}
    </FormControl>
  );
}
