import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../common/Title";

const Account = () => {
  function formateToCurrency(value: number) {
    return "R$" + value.toFixed(2).replace(".", ",");
  }
  return (
    <View>
      <View>
        <Title>Conta</Title>
      </View>
      <View>
        <Text>{formateToCurrency(1.5)}</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
