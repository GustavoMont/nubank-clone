import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./Title";
import { formateToCurrency } from "../../functions/handleText";
import colors from "../../styles/colors";

interface BalanceItemsProps {
  children: React.ReactNode;
}

interface CurrencyTextProps {
  value: number;
}

const CurrencyText = (props: CurrencyTextProps) => {
  function BalanceItem(props: BalanceItemsProps) {
    return (
      <Title style={[styles.balanceItem]} fontWeight="Bold">
        {props.children}
      </Title>
    );
  }

  return (
    <View style={styles.balance}>
      <BalanceItem>R$</BalanceItem>
      <BalanceItem>{formateToCurrency(props.value)}</BalanceItem>
    </View>
  );
};

export default CurrencyText;

const styles = StyleSheet.create({
  balance: {
    flexDirection: "row",
  },
  balanceItem: {
    marginEnd: 8,
    color: colors.black + "aa",
  },
});
