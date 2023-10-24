import Home from "@screens/Home";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}
