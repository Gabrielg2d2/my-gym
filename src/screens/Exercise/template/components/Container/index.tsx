import { Box, Image, ScrollView, VStack } from "native-base";

import { Header } from "../Header";

type IContainerProps = {
  children: React.ReactNode;
  header: {
    navigate: () => void;
    nameGroup: string;
  };
};

export function Container(props: IContainerProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <Header {...props.header} />

      <ScrollView flex={1}>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            maxH={80}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1cmNAIvAVtskPpT4zajhytyPwyW664KkVw&usqp=CAU",
            }}
            alt="name exercise"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" py={4} px={4}>
            {props.children}
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
