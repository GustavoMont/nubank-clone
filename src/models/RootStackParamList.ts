import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  MyCards: undefined;
};

export type homeNavigation = StackNavigationProp<RootStackParamList, "Home">;

export default RootStackParamList;
