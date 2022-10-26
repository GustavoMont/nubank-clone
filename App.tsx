import React from "react";
import { StatusBar } from "react-native";
import colors from "./src/styles/colors";
import { useFonts } from "expo-font";
import BalanceProvider from "./src/Context/Providers/BalanceProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import MyCardsScreen from "./src/screens/MyCardsScreen";
import RootStackParamList from "./src/models/RootStackParamList";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  const Stack = createNativeStackNavigator<RootStackParamList>();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <BalanceProvider>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.mainColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCards" component={MyCardsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BalanceProvider>
  );
}
