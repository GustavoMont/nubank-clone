import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../common/Title";
import useBalance from "../../Context/hooks/useBalance";
import colors from "../../styles/colors";
import ScreenComponentContainer from "../common/ScreenComponentContainer";
import CurrencyText from "../common/CurrencyText";
import VerticalSpacedContainer from "../common/VerticalSpacedContainer";

const Account = () => {
  const { isBalanceVisible } = useBalance();

  return (
    <VerticalSpacedContainer>
      <View>
        <Title fontWeight="Bold">Conta</Title>
      </View>
      <View>
        {isBalanceVisible ? (
          <CurrencyText value={5} />
        ) : (
          <View style={styles.viewBlocker} />
        )}
      </View>
    </VerticalSpacedContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  viewBlocker: {
    width: 200,
    height: 32,
    backgroundColor: colors.lightMainColor,
  },
});
