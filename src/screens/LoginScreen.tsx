import React, { useEffect } from "react";
import { StyleSheet, Alert, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import RootStackParamList from "../models/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import Title from "../components/common/Title";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

type loginNavigation = StackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<loginNavigation>();

  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  // Verifique se o hardware suporta biometria
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (title: any, mess: any, btnTxt: any, btnFunc: any) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable)
      return alertComponent(
        "Please enter your password",
        "Biometric Authentication not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );

    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        "Biometric record not found",
        "Please login with your password",
        "OK",
        () => fallBackToDefaultAuth()
      );

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      cancelLabel: "Cancelar",
      disableDeviceFallback: false,
    });

    if (biometricAuth.success) {
      navigation.navigate("Home");
      console.log("success");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title fontSize={80} color="white" fontWeight="Bold">
          Gu
        </Title>
        <View style={styles.fingerPrint}>
          <TouchableOpacity onPress={handleBiometricAuth}>
            <Ionicons name="finger-print" size={48} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.mainColor,
    position: "relative",
  },
  fingerPrint: {
    position: "absolute",
    bottom: 56,
  },
});
