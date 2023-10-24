import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner accessibilityLabel="Loading posts" color="green.500" />
    </Center>
  );
}
