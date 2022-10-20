import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

export interface ServiceItemListProps {
  icon: JSX.Element;
  title: string;
}

const ServiceItemList = (props: ServiceItemListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{props.icon}</View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default ServiceItemList;

const iconSize = 88;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: colors.darkMainColor + "18",
    width: iconSize,
    height: iconSize,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginTop: 8,
    width: 88,
    textAlign: "center",
    flexShrink: 1,
  },
});
