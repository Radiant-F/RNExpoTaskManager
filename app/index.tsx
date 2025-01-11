import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { router } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const [fontLoaded] = useFonts({
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratThin: require("@/assets/fonts/Montserrat-Thin.ttf"),
    MontserratItalic: require("@/assets/fonts/Montserrat-Italic.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    PoppinsThin: require("@/assets/fonts/Poppins-Thin.ttf"),
    PoppinsItalic: require("@/assets/fonts/Poppins-Italic.ttf"),
    PlaywriteVNBold: require("@/assets/fonts/PlaywriteVN-Regular.ttf"),
    PlaywriteVNRegular: require("@/assets/fonts/PlaywriteVN-Regular.ttf"),
    PlaywriteVNThin: require("@/assets/fonts/PlaywriteVN-Thin.ttf"),
    PlaywriteVNItalic: require("@/assets/fonts/PlaywriteVN-Regular.ttf"),
    RubikVinyl: require("@/assets/fonts/RubikVinyl-Regular.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
      router.replace("/(tabs)");
    }
  }, [fontLoaded]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}

const styles = StyleSheet.create({});
