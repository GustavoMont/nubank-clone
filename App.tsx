import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header/Header";
import colors from "./src/styles/colors";
import { useFonts } from "expo-font";
import Account from "./src/components/Account/Account";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={styles.statusbar.backgroundColor}
      />
      <Header statusBarColor={styles.statusbar.backgroundColor} />

      <View style={styles.container}>
        <Account />
      </View>
    </SafeAreaView>
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
