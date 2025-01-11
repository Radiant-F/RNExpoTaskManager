import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Gap from "./Gap";
import { useAppSelector } from "@/hooks";

type Props = {
  onChangeTitle: (title: string) => void;
  onPressCreate: () => void;
  value: string;
};

export default function FormInput({
  onChangeTitle,
  onPressCreate,
  value,
}: Props) {
  const appFont = useAppSelector((state) => state.settings.app_font);

  return (
    <View style={{ flexDirection: "row", margin: 20 }}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Nama tugas..."
          placeholderTextColor={"grey"}
          style={{ ...styles.input, fontFamily: appFont + "Regular" }}
          onChangeText={onChangeTitle}
          value={value}
        />
      </View>
      <Gap width={15} />
      <TouchableOpacity
        style={styles.btnAdd}
        activeOpacity={0.75}
        onPress={onPressCreate}
        disabled={value.length < 3}
      >
        <Icon name="plus-thick" size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAdd: {
    width: 50,
    height: 50,
    backgroundColor: "#6600E7",
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
  },
  viewInput: {
    backgroundColor: "#ECECEC",
    height: 50,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    borderRadius: 50 / 2,
    flex: 1,
  },
});
