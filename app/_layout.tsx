import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { Platform } from "react-native";

export default function RootLayout() {
  const statusBarColor: any =
    Platform.OS == "android" ? { statusBarStyle: "light" } : {};

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: "#330074",
          ...statusBarColor,
        }}
      />
    </Provider>
  );
}
