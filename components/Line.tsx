import { DimensionValue, StyleSheet, View } from "react-native";

type Props = {
  marginTop?: DimensionValue | undefined;
  marginBottom?: DimensionValue | undefined;
  marginRight?: DimensionValue | undefined;
  marginLeft?: DimensionValue | undefined;
  marginHorizontal?: DimensionValue | undefined;
  marginVertical?: DimensionValue | undefined;
  supportRow?: boolean;
};

export default function Line({
  marginBottom,
  marginHorizontal,
  marginTop,
  marginVertical,
  marginLeft,
  marginRight,
  supportRow,
}: Props) {
  return (
    <View
      style={{
        marginBottom,
        marginHorizontal,
        marginTop,
        marginVertical,
        marginLeft,
        marginRight,
        flex: supportRow ? 1 : 0,
        height: StyleSheet.hairlineWidth,
        backgroundColor: "grey",
      }}
    />
  );
}
