import Home from "@screens/Home";
import { StatusBar } from "react-native";

import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider>
      {!fontsLoaded ? <Loading /> : <Home />}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </NativeBaseProvider>
  );
}
