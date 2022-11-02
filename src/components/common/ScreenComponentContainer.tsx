import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenComponentContainer = ({ children, style }: ViewProps) => {
  return (
    <SafeAreaView>
      <View style={[style, styles.container]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenComponentContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
