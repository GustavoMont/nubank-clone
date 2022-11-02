import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import React from "react";
import FontWeight from "../../models/TitleType";
import { handleFontWeight } from "../../functions/handleText";
import colors from "../../styles/colors";

type color = keyof typeof colors;

interface TitleProps extends TextProps {
  fontWeight?: FontWeight;
  forceStyle?: StyleProp<TextStyle>;
  fontSize?: number;
  color?: color;
}

const fontFamily = "Poppins";

const Title = ({
  style,
  fontWeight,
  fontSize,
  color,
  ...props
}: TitleProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          ...styles.standard,
          fontSize: fontSize || 20,
          color: colors[color || "black"],
        },
        style,
        handleFontWeight(fontFamily, fontWeight),
        props.forceStyle,
      ]}
    >
      {props.children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  standard: {
    fontFamily,
  },
});
