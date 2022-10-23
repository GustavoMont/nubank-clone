import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

export interface ServiceItemListProps {
  icon: JSX.Element;
  title: string;
  backgroundColor: string;
}

const ServiceItemList = (props: ServiceItemListProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: props.backgroundColor }]}>
        {props.icon}
      </View>
      <View style={styles.titleContainer}>
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
  },
  icon: {
    width: iconSize,
    height: iconSize,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  titleContainer: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
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
