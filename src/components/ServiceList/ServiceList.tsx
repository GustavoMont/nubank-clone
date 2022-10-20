import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ScreenComponentContainer from "../common/ScreenComponentContainer";
import ServiceItemList, { ServiceItemListProps } from "./ServiceItemList";
import { PixIcon } from "../common/icons";
import colors from "../../styles/colors";

const ServiceList = () => {
  const iconColor = colors.black;
  const services: ServiceItemListProps[] = [
    {
      title: "Área Pix",
      icon: <PixIcon fill={iconColor} stroke={iconColor} size={32} />,
    },
    {
      title: "Pagar",
      icon: <AntDesign name="barcode" size={24} color={iconColor} />,
    },
    {
      title: "Pegar Empréstimo",
      icon: <FontAwesome5 name="hand-holding" size={24} color={iconColor} />,
    },
  ];

  return (
    <ScreenComponentContainer>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceItemList {...item} />}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />

      {/* <View style={{ flexDirection: "row" }}>
        <ServiceItemList
          title="Área Pix"
          icon={}
        />
        <ServiceItemList
          title="Pagar"
          icon={<AntDesign name="barcode" size={32} color="black" />}
        />
      </View> */}
    </ScreenComponentContainer>
  );
};

export default ServiceList;

const styles = StyleSheet.create({});
