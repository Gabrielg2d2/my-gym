import Home from "@screens/Home";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <View style={{ flex: 1 }}>
      {!fontsLoaded ? <View /> : <Home />}
      <StatusBar style="auto" />
    </View>
  );
}
