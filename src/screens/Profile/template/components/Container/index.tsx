import { ScreenHeader } from "@components/ScreenHeader";
import { KeyboardAvoidingView, ScrollView, VStack } from "native-base";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

type IContainerProps = {
  children: React.ReactNode;
};

export function Container(props: IContainerProps) {
  return (
    <VStack flex={1} bg="bgDefault">
      <ScreenHeader title="Perfil" />

      <KeyboardAvoidingView
        h={{
          base: "full",
          lg: "auto",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 100,
            }}
          >
            {props.children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </VStack>
  );
}
