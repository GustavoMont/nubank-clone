import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { DepositIcon, PixIcon, TransferIcon } from "../common/icons";
import ServiceItemList from "./ServiceItemList";
import colors from "../../styles/colors";
import VerticalSpacedContainer from "../common/VerticalSpacedContainer";
import {
  homeNavigation,
  NavigationKeys,
} from "../../models/RootStackParamList";

const ServiceList = () => {
  const iconColor = colors.black;
  const bgIconColor = colors.darkWhite + "55";
  const services: {
    title: string;
    icon: JSX.Element;
    route?: NavigationKeys;
  }[] = [
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
    {
      title: "Transferir",
      icon: <TransferIcon stroke={colors.black} size={56} />,
    },
    {
      title: "Depositar",
      icon: <DepositIcon stroke={colors.black} size={56} />,
    },
  ];

  return (
    <VerticalSpacedContainer>
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ServiceItemList
              targetRoute={"Building"}
              {...item}
              backgroundColor={bgIconColor}
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </VerticalSpacedContainer>
  );
};

export default ServiceList;
