import { StyleSheet, View } from "react-native";
import React from "react";
import Paragraph from "../common/Paragraph";
import colors from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardsItemProps {
  isVirtual?: boolean;
  name: string;
  number: string;
}

const CardsItem = ({ isVirtual, name, number }: CardsItemProps) => {
  return (
    <View style={styles.container}>
      {isVirtual ? (
        <MaterialCommunityIcons
          name="credit-card-chip"
          size={24}
          color={colors.black}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          style={styles.icon}
          name="credit-card-chip-outline"
          size={24}
          color={colors.black}
        />
      )}
      <View>
        <Paragraph fontSize={20} style={styles.name} fontWeight="Bold">
          {name}
        </Paragraph>
        <Paragraph style={styles.number}>....{number}</Paragraph>
      </View>
    </View>
  );
};

export default CardsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginEnd: 16 },
  name: { fontSize: 30, color: colors.black },
  number: { fontSize: 16, color: colors.gray },
  cardInfo: {
    flexDirection: "column",
  },
});
