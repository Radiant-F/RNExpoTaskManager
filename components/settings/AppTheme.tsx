import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import React from "react";
import Line from "../Line";
import Gap from "../Gap";
import Text from "../Text";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAppTheme } from "@/redux/slices/app-settings";
import Icon from "../Icon";

export default function AppTheme() {
  const dispatch = useAppDispatch();
  const app_theme = useAppSelector((state) => state.settings.app_theme);

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>App Theme</Text>
        <Line supportRow marginLeft={20} />
      </View>
      <TouchableOpacity
        style={styles.btnSwitch}
        activeOpacity={0.75}
        onPress={() => {
          dispatch(setAppTheme(app_theme == "light" ? "dark" : "light"));
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name={app_theme == "light" ? "weather-night" : "weather-sunny"}
            size={25}
          />
          <Gap width={10} />
          <Text>Switch to {app_theme == "light" ? "Dark" : "Light"}</Text>
        </View>
        <Switch
          value={app_theme == "dark"}
          onValueChange={() => {
            dispatch(setAppTheme(app_theme == "light" ? "dark" : "light"));
          }}
        />
      </TouchableOpacity>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  btnSwitch: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
