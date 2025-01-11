import { View, DimensionValue } from "react-native";

type Props = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
};

export default function Gap({ height, width }: Props) {
  return <View style={{ width, height }} />;
}
