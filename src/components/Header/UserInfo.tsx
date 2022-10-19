import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import colors from "../../styles/colors";
import useBalance from "../../Context/hooks/useBalance";

interface InfoBlockItemProps {
  children: React.ReactNode;
}

const UserInfo = () => {
  const { isBalanceVisible, toggleBalanceVisibility } = useBalance();
  function InfoBlockItem(props: InfoBlockItemProps) {
    return <View style={styles.infoBlockItems}>{props.children}</View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileButton}>
        <AntDesign name="user" size={20} color={colors.white} />
      </View>
      <View style={styles.infoBlocks}>
        <InfoBlockItem>
          <TouchableOpacity onPress={toggleBalanceVisibility}>
            {isBalanceVisible ? (
              <Feather name="eye" size={20} color={colors.white} />
            ) : (
              <Feather name="eye-off" size={20} color={colors.white} />
            )}
          </TouchableOpacity>
        </InfoBlockItem>
        <InfoBlockItem>
          <Feather name="help-circle" size={20} color={colors.white} />
        </InfoBlockItem>
        <InfoBlockItem>
          <AntDesign name="adduser" size={24} color={colors.white} />
        </InfoBlockItem>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoBlocks: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoBlockItems: {
    marginStart: 24,
  },
  profileButton: {
    backgroundColor: colors.lightMainColor,
    width: 44,
    height: 44,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
