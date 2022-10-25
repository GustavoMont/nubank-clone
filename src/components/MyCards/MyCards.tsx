import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Title from "../common/Title";
import colors from "../../styles/colors";

const MyCards = () => {
  return (
    <View style={[styles.container]}>
      <MaterialIcons
        style={styles.icon}
        name="credit-card"
        size={24}
        color="black"
      />
      <Title>Meus Cartões</Title>
    </View>
  );
};

export default MyCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkWhite + "55",
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  icon: { marginBottom: 5, marginRight: 16 },
});
