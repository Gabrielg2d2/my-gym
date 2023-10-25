import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  text: string;
  variant?: "outline" | "solid";
};

export const Button = ({ text, variant = "solid", ...props }: ButtonProps) => {
  return (
    <ButtonNative
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={1}
      borderColor={variant === "outline" ? "green.500" : "transparent"}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...props}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="md"
      >
        {text}
      </Text>
    </ButtonNative>
  );
};
