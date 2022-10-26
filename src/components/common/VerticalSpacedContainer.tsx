import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface VerticalSpacedContainerProps {
  children: React.ReactNode;
}

const VerticalSpacedContainer = ({
  children,
}: VerticalSpacedContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default VerticalSpacedContainer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
