import { useNavigation } from "@react-navigation/native";
import { IAppNavigationRoutesProps } from "./app.routes";

type IUseNavigationApp = IAppNavigationRoutesProps;

export const useNavigationApp = () => {
  const navigation = useNavigation<IUseNavigationApp>();

  function navigateHome() {
    navigation.navigate("home");
  }

  function navigateExercise() {
    navigation.navigate("exercise");
  }

  function navigateHistory() {
    navigation.navigate("history");
  }

  function navigateProfile() {
    navigation.navigate("profile");
  }

  return {
    navigateHome,
    navigateExercise,
    navigateHistory,
    navigateProfile,
  };
};
