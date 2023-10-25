import { VStack } from "native-base";
import { Header } from "../components/Header";

export function HomeTemplate() {
  return (
    <VStack flex={1} bg="gray.700">
      <Header />
    </VStack>
  );
}
