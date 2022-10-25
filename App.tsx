import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header/Header";
import colors from "./src/styles/colors";
import { useFonts } from "expo-font";
import Account from "./src/components/Account/Account";
import BalanceContext from "./src/Context/BalanceContext";
import BalanceProvider from "./src/Context/Providers/BalanceProvider";
import ServiceList from "./src/components/ServiceList/ServiceList";
import CreditCard from "./src/components/CreditCard/CreditCard";
import MyCards from "./src/components/MyCards/MyCards";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <BalanceProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={styles.statusbar.backgroundColor}
        />
        <Header statusBarColor={styles.statusbar.backgroundColor} />
        <View style={styles.container}>
          <Account />
          <ServiceList />
          <MyCards />
          <CreditCard />
        </View>
      </SafeAreaView>
    </BalanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flex: 1,
  },
  statusbar: {
    backgroundColor: colors.mainColor,
  },
});
