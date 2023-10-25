import { Button as ButtonNative, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  text: string;
};

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <ButtonNative
      h={14}
      bg="green.700"
      _pressed={{
        bg: "green.500",
      }}
      {...props}
    >
      <Text color="white" fontFamily="heading" fontSize="md">
        {text}
      </Text>
    </ButtonNative>
  );
};
