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

interface TitleProps extends TextProps {
  fontWeight?: FontWeight;
  forceStyle?: StyleProp<TextStyle>;
}

const fontFamily = "Poppins";

const Title = (props: TitleProps) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.standard,
        handleFontWeight(fontFamily, props.fontWeight),
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
    fontSize: 20,
  },
});
