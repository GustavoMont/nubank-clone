import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/common/Title";
import { AntDesign } from "@expo/vector-icons";
import colors from "../styles/colors";
import ScreenComponentContainer from "../components/common/ScreenComponentContainer";

const MyCardsScreen = () => {
  return (
    <ScreenComponentContainer>
      <View style={styles.header}>
        <AntDesign name="close" size={32} color={colors.black} />
      </View>
      <Title forceStyle={styles.title} fontWeight="Bold">
        Meus Cartões
      </Title>
      <Text>MyCardsScreen</Text>
    </ScreenComponentContainer>
  );
};

export default MyCardsScreen;

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
  },
  title: { color: colors.black, fontSize: 24 },
});
