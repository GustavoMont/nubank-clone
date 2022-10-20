import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";

const ScreenComponentContainer = ({ children, style }: ViewProps) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

export default ScreenComponentContainer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
});
