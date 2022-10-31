import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  homeNavigation,
  NavigationKeys,
} from "../../models/RootStackParamList";

export interface ServiceItemListProps {
  icon: JSX.Element;
  title: string;
  backgroundColor: string;
  targetRoute?: NavigationKeys;
}

const ServiceItemList = (props: ServiceItemListProps) => {
  const { icon, backgroundColor, title, targetRoute } = props;
  const navigation = useNavigation<homeNavigation>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(targetRoute || "Building");
      }}
    >
      <View style={styles.container}>
        <View style={[styles.icon, { backgroundColor: backgroundColor }]}>
          {icon}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
