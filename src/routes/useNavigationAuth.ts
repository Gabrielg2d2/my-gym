import { useNavigation } from "@react-navigation/native";
import { IAuthNavigationRoutesProps } from "./auth.routes";

type IUseNavigationAuthProps = IAuthNavigationRoutesProps;

export const useNavigationAuth = () => {
  const navigation = useNavigation<IUseNavigationAuthProps>();

  function navigateSignIn() {
    navigation.navigate("signIn");
  }

  function navigateSignUp() {
    navigation.navigate("signUp");
  }

  return {
    navigateSignIn,
    navigateSignUp,
  };
};
