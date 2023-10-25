import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[700] }}>
      <NavigationContainer>
        {/* <AuthRoutes /> */}
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
