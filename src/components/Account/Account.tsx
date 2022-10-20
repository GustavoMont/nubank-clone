import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../common/Title";
import useBalance from "../../Context/hooks/useBalance";
import colors from "../../styles/colors";
import ScreenComponentContainer from "../common/ScreenComponentContainer";

interface BalanceItemsProps {
  children: React.ReactNode;
}

const Account = () => {
  const { isBalanceVisible } = useBalance();

  function formateToCurrency(value: number) {
    return value.toFixed(2).replace(".", ",");
  }
  function BalanceItem(props: BalanceItemsProps) {
    return <Title style={styles.balanceItem}>{props.children}</Title>;
  }

  return (
    <ScreenComponentContainer
      style={{
        height: 72,
      }}
    >
      <View>
        <Title fontWeight="Bold">Conta</Title>
      </View>
      <View>
        {isBalanceVisible ? (
          <View style={styles.balance}>
            <BalanceItem>R$</BalanceItem>
            <BalanceItem>{formateToCurrency(5)}</BalanceItem>
          </View>
        ) : (
          <View style={styles.viewBlocker} />
        )}
      </View>
    </ScreenComponentContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  balance: {
    flexDirection: "row",
  },
  balanceItem: {
    marginEnd: 8,
  },
  viewBlocker: {
    width: 200,
    height: 32,
    backgroundColor: colors.lightMainColor,
  },
});
