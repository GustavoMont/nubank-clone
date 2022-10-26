import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header/Header";
import Account from "../components/Account/Account";
import ServiceList from "../components/ServiceList/ServiceList";
import MyCards from "../components/MyCards/MyCards";
import CreditCard from "../components/CreditCard/CreditCard";
import colors from "../styles/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../models/RootStackParamList";
import ScreenComponentContainer from "../components/common/ScreenComponentContainer";

type Props = NativeStackScreenProps<RootStackParamList, "Home", "mycards">;

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header statusBarColor={colors.mainColor} />
      <ScreenComponentContainer>
        <Account />
        <ServiceList />
        <MyCards />

        <CreditCard />
      </ScreenComponentContainer>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
