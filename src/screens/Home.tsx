import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Header from "../components/Header/Header";
import Account from "../components/Account/Account";
import ServiceList from "../components/ServiceList/ServiceList";
import MyCards from "../components/MyCards/MyCards";
import CreditCard from "../components/CreditCard/CreditCard";
import colors from "../styles/colors";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header statusBarColor={colors.mainColor} />
      <View style={styles.container}>
        <Account />
        <ServiceList />
        <MyCards />
        <CreditCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flex: 1,
  },
});
