import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Title from "../components/common/Title";
import colors from "../styles/colors";
import RootStackParamList from "../models/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface BuildingScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Building"> {}

const BuildingScreen = ({ navigation }: BuildingScreenProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Entypo name="chevron-thin-left" size={24} color={colors.gray} />
      </TouchableOpacity>
      <View>
        <Title style={styles.text}>Estamos em trabalhando nisso!</Title>
        <Image
          style={styles.image}
          source={require("../../assets/illustrations/under-construction.png")}
        />
      </View>
    </View>
  );
};

export default BuildingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  text: { textAlign: "center", color: colors.mainColor },
  backIcon: {
    position: "absolute",
    top: 32,
    left: 16,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
});
