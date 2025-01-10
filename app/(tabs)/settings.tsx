import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fonts } from "@/constant";
import { setAppFont } from "@/redux/slices/app-settings";
import { Gap, Text } from "@/components";

export default function Settings() {
  const dispatch = useAppDispatch();
  const { app_font } = useAppSelector((state) => state.settings);

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>App Font</Text>
        <View style={styles.line} />
      </View>
      <Picker
        mode="dropdown"
        selectedValue={app_font}
        onValueChange={(selectedFont) => dispatch(setAppFont(selectedFont))}
      >
        {fonts.map((font) => (
          <Picker.Item label={font.name} value={font.name} key={font.name} />
        ))}
      </Picker>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Bold</Text>
        <Text>Regular</Text>
        <Text style={{ fontWeight: "thin" }}>Thin</Text>
        <Text style={{ fontStyle: "italic" }}>Italic</Text>
      </View>
      <Gap height={10} />
      <View style={{ ...styles.line, flex: 0, width: "100%", marginLeft: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginLeft: 20,
  },
});
