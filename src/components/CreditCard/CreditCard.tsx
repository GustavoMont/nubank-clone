import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../common/Title";
import Paragraph from "../common/Paragraph";
import colors from "../../styles/colors";
import CurrencyText from "../common/CurrencyText";
import { formateToCurrency } from "../../functions/handleText";

const CreditCard = () => {
  return (
    <View>
      <Title fontWeight="Bold">Cartão de Crédito</Title>
      <View style={{ marginTop: 24 }}>
        <Paragraph fontWeight="Bold" style={styles.liightText}>
          Fatura Fechada
        </Paragraph>
        <View style={{ marginVertical: 4 }}>
          <CurrencyText value={180} />
        </View>
        <Paragraph fontWeight="Bold" style={styles.liightText}>
          Limite disponível de R$ {formateToCurrency(1250)}
        </Paragraph>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  liightText: {
    color: colors.gray,
  },
});
