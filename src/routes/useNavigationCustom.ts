import { useNavigation } from "@react-navigation/native";
import { IAuthNavigationRoutesProps } from "./interfaceAuthRoutes";

type IUseNavigationCustom = IAuthNavigationRoutesProps;

export const useNavigationCustom = () => {
  const navigation = useNavigation<IUseNavigationCustom>();

  function goBack() {
    navigation.goBack();
  }

  function navigateSignIn() {
    navigation.navigate("signIn");
  }

  function navigateSignUp() {
    navigation.navigate("signUp");
  }

  return {
    goBack,
    navigateSignIn,
    navigateSignUp,
  };
};
