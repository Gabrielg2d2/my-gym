import { StatusBar } from "react-native";

import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./src/context/auth";
import { THEME } from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <AuthProvider>
          <Routes />
        </AuthProvider>
      )}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </NativeBaseProvider>
  );
}
