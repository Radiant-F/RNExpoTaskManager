import { Button, StyleSheet, View } from "react-native";
import { AppFont, AppTheme } from "@/components/settings";
import { Gap } from "@/components";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  withSpring,
} from "react-native-reanimated";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";

export default function Settings() {
  // const app_theme = useAppSelector((state) => state.settings.app_theme);

  // const [toggle, setToggle] = useState(false);
  // const progress = useSharedValue(0);
  // const animatedStyle = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     progress.value,
  //     [0, 1],
  //     ["black", "white"] // Colors from red to blue
  //   );

  //   return {
  //     backgroundColor,
  //   };
  // });

  // const startAnimation = () => {
  //   progress.value = withTiming(toggle ? 0 : 1, { duration: 500 });
  //   setToggle(!toggle);
  // };

  // useEffect(() => {
  //   startAnimation();
  // }, [app_theme]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      {/* <Animated.View style={[styles.overlay, animatedStyle]} /> */}
      {/* <Button title="toggle color" onPress={startAnimation} /> */}
      <AppTheme />
      <Gap height={20} />
      <AppFont />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
