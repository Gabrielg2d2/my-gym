import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import ExerciseSVG from "@assets/exercise.svg";
import HistorySVG from "@assets/history.svg";
import HomeSVG from "@assets/home.svg";
import ProfileSVG from "@assets/profile.svg";
import { useTheme } from "native-base";

type IAppRoutes = {
  home: undefined;
  exercise: undefined;
  history: undefined;
  profile: undefined;
};

export type IAppNavigationRoutesProps = BottomTabNavigationProp<IAppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<IAppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];
  const colorActiveIcon = colors.green[500];
  const colorInactiveIcon = colors.gray[200];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colorActiveIcon,
        tabBarInactiveTintColor: colorInactiveIcon,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarIcon: ({ color }) => (
            <ExerciseSVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
    </Navigator>
  );
}
