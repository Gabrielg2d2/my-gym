import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "src/context/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();
  const { getUserData } = useAuthContext();

  const authenticated = getUserData()?.token ? true : false;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray[600] }}>
      <NavigationContainer>
        {authenticated ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
