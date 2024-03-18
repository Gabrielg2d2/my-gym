import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[600] }}>
      <NavigationContainer>
        <AuthRoutes />
        {/* <AppRoutes /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
