import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header/Header";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={styles.statusbar.backgroundColor}
        />
        <Header statusBarColor={styles.statusbar.backgroundColor} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
  statusbar: {
    backgroundColor: colors.mainColor,
  },
});
