import { StyleSheet, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import Gap from "./Gap";
import Text from "./Text";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

type Props = {
  title: string;
  done: boolean;
  onPressDelete: () => void;
  onPressEdit: () => void;
  onChecklist: () => void;
};

export default function RenderTask({
  done,
  title,
  onPressDelete,
  onPressEdit,
  onChecklist,
}: Props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Checkbox value={done} onValueChange={onChecklist} color={"#6600E7"} />
      <Gap width={20} />
      <View style={styles.containerTask}>
        <Text style={styles.text}>{title}</Text>

        <View style={styles.line} />

        <View>
          <TouchableOpacity style={styles.btnOption} onPress={onPressEdit}>
            <Icon name="lead-pencil" size={20} color={"white"} />
          </TouchableOpacity>
          <Gap height={5} />
          <TouchableOpacity
            style={{ ...styles.btnOption, backgroundColor: "tomato" }}
            onPress={onPressDelete}
          >
            <Icon name="trash-can" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  line: {
    height: 40,
    width: 2.5,
    backgroundColor: "black",
    marginHorizontal: 15,
    opacity: 0.25,
  },
  btnOption: {
    backgroundColor: "#6600E7",
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  containerTask: {
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    padding: 20,
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
});
