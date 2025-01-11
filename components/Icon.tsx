import { OpaqueColorValue } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppSelector } from "@/hooks";

type Props = {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number | undefined;
  color?: string | OpaqueColorValue | undefined;
};

export default function Icon({ color, name, size }: Props) {
  const app_theme = useAppSelector((state) => state.settings.app_theme);
  return (
    <MaterialCommunityIcons
      name={name}
      color={color ? color : app_theme == "dark" ? "white" : "black"}
      size={size}
    />
  );
}
