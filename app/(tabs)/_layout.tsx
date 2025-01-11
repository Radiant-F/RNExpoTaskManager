import { Tabs } from "expo-router";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Text } from "@/components";
import { Platform, StyleSheet } from "react-native";
import { useAppSelector } from "@/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const { app_font, app_theme } = useAppSelector((state) => state.settings);
  const insets = useSafeAreaInsets();

  function handleTabBarHeight() {
    if (Platform.OS == "android") {
      if (app_font == "PlaywriteVN") return 70;
      else return 60;
    } else return insets.bottom + 45;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#6600E7", elevation: 5 },
        tabBarActiveTintColor: app_theme == "dark" ? "white" : "black",
        headerTitle({ children }) {
          return <Text style={styles.textHeaderTitle}>{children}</Text>;
        },
        tabBarAllowFontScaling: false,
        tabBarLabel({ children, color }) {
          return <Text style={{ color, fontSize: 12 }}>{children}</Text>;
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: handleTabBarHeight(),
          backgroundColor: app_theme == "dark" ? "#6600E7" : "white",
        },
        sceneStyle: {
          backgroundColor: app_theme == "dark" ? "#1f1b24" : "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Task Manager",
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  textHeaderTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
