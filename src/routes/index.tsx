import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "src/context/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { getUserData } = useAuthContext();

  const authenticated = getUserData()?.token ? true : false;

  return (
    <NavigationContainer>
      {authenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
