import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "./src/styles/colors";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={colors.mainColor}
        />
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
  },
});
