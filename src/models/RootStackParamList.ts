import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  MyCards: undefined;
  Building: undefined;
};

export type homeNavigation = StackNavigationProp<RootStackParamList, "Home">;

export type NavigationKeys = keyof RootStackParamList;

export default RootStackParamList;
