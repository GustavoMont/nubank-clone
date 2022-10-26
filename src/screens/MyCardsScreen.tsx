import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/common/Title";
import { AntDesign } from "@expo/vector-icons";
import colors from "../styles/colors";
import ScreenComponentContainer from "../components/common/ScreenComponentContainer";
import CardsItem from "../components/MyCards/CardsItem";
import Paragraph from "../components/common/Paragraph";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../models/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, "MyCards">;

const MyCardsScreen = ({ navigation }: Props) => {
  function CardTypeName({ text }: { text: string }) {
    return (
      <Paragraph
        style={{ color: colors.gray, marginVertical: 36 }}
        fontSize={12}
        fontWeight="Bold"
      >
        {text}
      </Paragraph>
    );
  }

  return (
    <ScreenComponentContainer>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color={colors.gray} />
        </TouchableOpacity>
      </View>
      <Title forceStyle={styles.title} fontWeight="Bold">
        Meus Cartões
      </Title>
      <View>
        <View>
          <CardTypeName text="Cartão Virtual" />
          <CardsItem name="Usuário" number={"225"} isVirtual />
        </View>
        <View>
          <CardTypeName text="Cartão Físico" />
          <CardsItem name="Usuário" number={"572"} />
        </View>
      </View>
    </ScreenComponentContainer>
  );
};

export default MyCardsScreen;

const styles = StyleSheet.create({
  header: {
    marginVertical: 24,
  },
  title: { color: colors.black, fontSize: 24 },
});
