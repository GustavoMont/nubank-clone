import React from "react";
import { FlatList, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ScreenComponentContainer from "../common/ScreenComponentContainer";
import ServiceItemList, { ServiceItemListProps } from "./ServiceItemList";
import { DepositIcon, PixIcon, TransferIcon } from "../common/icons";
import colors from "../../styles/colors";
import VerticalSpacedContainer from "../common/VerticalSpacedContainer";

const ServiceList = () => {
  const iconColor = colors.black;
  const bgIconColor = colors.darkWhite + "55";
  const services: { title: string; icon: JSX.Element }[] = [
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
          <ServiceItemList {...item} backgroundColor={bgIconColor} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </VerticalSpacedContainer>
  );
};

export default ServiceList;
