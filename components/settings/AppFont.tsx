import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import Line from "../Line";
import { Picker } from "@react-native-picker/picker";
import { setAppFont } from "@/redux/slices/app-settings";
import { fonts } from "@/constant";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Text from "../Text";

export default function AppFont() {
  const dispatch = useAppDispatch();
  const { app_font, app_theme } = useAppSelector((state) => state.settings);

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>App Font</Text>
        <Line supportRow marginLeft={20} />
      </View>
      <Picker
        mode="dropdown"
        selectedValue={app_font}
        onValueChange={(selectedFont) => dispatch(setAppFont(selectedFont))}
        dropdownIconColor={app_theme == "dark" ? "white" : "grey"}
        style={{ color: app_theme == "dark" ? "white" : "black" }}
      >
        {fonts.map((font) => (
          <Picker.Item
            label={font.name}
            value={font.name}
            key={font.name}
            color={
              Platform.OS == "ios"
                ? app_theme == "dark"
                  ? "white"
                  : "black"
                : undefined
            }
          />
        ))}
      </Picker>
      <View style={styles.viewFontPreview}>
        <Text style={{ fontWeight: "bold" }}>Bold</Text>
        <Text>Regular</Text>
        <Text style={{ fontWeight: "thin" }}>Thin</Text>
        <Text style={{ fontStyle: "italic" }}>Italic</Text>
      </View>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  viewFontPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
