import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";
import { handleFontWeight } from "../../functions/handleText";
import FontWeight from "../../models/TitleType";

const fontFamily = "Poppins";

interface ParagraphProps extends TextProps {
  fontWeight?: FontWeight;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <Text
      style={[
        props.style,
        styles.text,
        handleFontWeight(fontFamily, props.fontWeight),
      ]}
    >
      {props.children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontFamily,
    fontSize: 12,
  },
});
