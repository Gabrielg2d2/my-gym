import { useNavigation } from "@react-navigation/native";

export const useNavigationCustom = () => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  function navigateSignIn() {
    navigation.navigate("signIn");
  }

  function navigateSignUp() {
    navigation.navigate("signUp");
  }

  type NavigateToPlayersProps = {
    groupName: string;
    groupId: string;
  };

  return {
    goBack,
    navigateSignIn,
    navigateSignUp,
  };
};
