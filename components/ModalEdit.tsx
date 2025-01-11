import {
  View,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Gap from "./Gap";
import Text from "./Text";
import { useAppSelector } from "@/hooks";

type ModalEditProps = {
  visible: boolean;
  onRequestClose: () => void;
  inputValue: string;
  onChangeTitle: (title: string) => void;
  onPressEdit: () => void;
};

export default function ModalEdit({
  visible,
  onRequestClose,
  inputValue,
  onChangeTitle,
  onPressEdit,
}: ModalEditProps) {
  const appFont = useAppSelector((state) => state.settings.app_font);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <Pressable style={styles.backdrop} onPress={onRequestClose} />
        <View style={styles.viewModal}>
          <View style={styles.modalHeader}>
            <Icon name="notebook-edit" size={25} />
            <Text style={{ color: "black" }}>Edit Task</Text>
            <TouchableOpacity onPress={onRequestClose}>
              <Icon name="close-circle-outline" size={25} />
            </TouchableOpacity>
          </View>

          <Gap height={10} />

          <TextInput
            placeholder="Edit task..."
            placeholderTextColor={"grey"}
            style={{ ...styles.textInput, fontFamily: appFont + "Regular" }}
            value={inputValue}
            onChangeText={onChangeTitle}
          />

          <Gap height={20} />

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.75}
            onPress={onPressEdit}
          >
            <Text style={styles.textEdit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textEdit: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#6600E7",
    alignSelf: "center",
    height: 45,
    width: 100,
    borderRadius: 45 / 2,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  textInput: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    height: 50,
    paddingHorizontal: 10,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.25,
  },
  viewModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: "80%",
    maxWidth: 420,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
