import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import UserInfo from "./UserInfo";
import Title from "../common/Title";

interface HeaderProps {
  statusBarColor: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={[styles.container, { backgroundColor: props.statusBarColor }]}>
      <UserInfo />
      <Title style={styles.welcomeText}>Olá, usuário</Title>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColor,
    height: 184,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  welcomeText: {
    marginTop: "auto",
    color: colors.white,
  },
});
