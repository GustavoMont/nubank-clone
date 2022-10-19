import { Platform, StyleSheet, Text, TextProps } from "react-native";
import React from "react";

interface TitleProps extends TextProps {
  fontWeight?: "Bold" | "Light";
}

const fontFamily = "Poppins";

const Title = (props: TitleProps) => {
  function handleFontWeight() {
    if (props.fontWeight) {
      return { fontFamily: `${fontFamily}-${props.fontWeight}` };
    }
    return {};
  }

  return (
    <Text {...props} style={[props.style, styles.standard, handleFontWeight()]}>
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  standard: {
    fontFamily,
    fontSize: 20,
  },
});
