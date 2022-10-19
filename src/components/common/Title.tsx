import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

interface TitleProps extends TextProps {}

const Title = (props: TitleProps) => {
  return (
    <Text {...props} style={[props.style, styles.standard]}>
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  standard: {
    fontFamily: "Poppins",
    fontSize: 22,
  },
});
