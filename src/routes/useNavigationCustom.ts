import { useNavigation } from "@react-navigation/native";
import { IAuthNavigationRoutesProps } from "./auth.routes";

type IUseNavigationCustom = IAuthNavigationRoutesProps;

export const useNavigationCustom = () => {
  const navigation = useNavigation<IUseNavigationCustom>();

  function navigateGoBack() {
    navigation.goBack();
  }

  function navigateSignIn() {
    navigation.navigate("signIn");
  }

  function navigateSignUp() {
    navigation.navigate("signUp");
  }

  return {
    navigateGoBack,
    navigateSignIn,
    navigateSignUp,
  };
};
