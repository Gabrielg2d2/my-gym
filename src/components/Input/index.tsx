import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
} from "native-base";
import { useMemo } from "react";

type InputProps = IInputProps & {
  error?: boolean;
  textHelper?: string;
};

export function Input({ error = false, textHelper, ...rest }: InputProps) {
  const messageError = useMemo(() => {
    if (error && textHelper) {
      return <FormControl.ErrorMessage>{textHelper}</FormControl.ErrorMessage>;
    }
  }, [error, textHelper]);

  const messageHelper = useMemo(() => {
    if (!error && textHelper) {
      return <FormControl.HelperText>{textHelper}</FormControl.HelperText>;
    }
  }, [error, textHelper]);

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
      {messageError}
      {messageHelper}
    </FormControl>
  );
}
