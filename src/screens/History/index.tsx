import { VStack } from "native-base";
import { HistoryCard } from "./components/HistoryCard";
import { ScreenHeader } from "./components/ScreenHeader";

type IHistoryProps = {};

export function History(props: IHistoryProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Histórico de Exercícios" />
      <HistoryCard />
    </VStack>
  );
}
