import { View } from "react-native";
import { AppFont, AppTheme } from "@/components/settings";
import { Gap } from "@/components";

export default function Settings() {
  return (
    <View style={{ padding: 20 }}>
      <AppTheme />
      <Gap height={20} />
      <AppFont />
    </View>
  );
}
