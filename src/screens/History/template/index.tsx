import { ScreenHeader } from "@components/ScreenHeader";
import { HStack, VStack } from "native-base";
import {
  IListCardsHistory,
  ListHistoryCard,
} from "./components/ListHistoryCard";

export type IHistoryTemplateProps = {
  listCards: IListCardsHistory;
};

export function HistoryTemplate(props: IHistoryTemplateProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Histórico de Exercícios" />

      <HStack flex={1} m={4}>
        <ListHistoryCard {...props.listCards} />
      </HStack>
    </VStack>
  );
}
