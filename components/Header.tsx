import {
  View,
  StatusBar,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import Text from "./Text";

export default function Header() {
  const insets = useSafeAreaInsets();
  const statusBatHeightIOS: StyleProp<ViewStyle> = {
    height: insets.top,
    backgroundColor: "#330074",
    marginTop: -insets.top,
  };

  return (
    <>
      {Platform.OS == "ios" && <View style={statusBatHeightIOS} />}
      <StatusBar backgroundColor={"#330074"} barStyle={"light-content"} />
      <View style={styles.container}>
        <Icon name="notebook" size={25} color={"white"} />
        <Text style={styles.text}>Task Manager</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: "#6600E7",
    height: 50,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
