import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
  Platform,
} from "react-native";
import {
  Header,
  FormInput,
  RenderTask,
  Gap,
  ModalEdit,
  Text,
} from "@/components";
import { useState } from "react";

type TaskType = {
  title: string;
  done: boolean;
  id: number;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [title, setTitle] = useState<string>("");
  function onCreateTask() {
    const newTask = { title: title, done: false, id: Math.random() };
    setTasks([newTask, ...tasks]);
    setTitle("");
  }

  function onDeleteTask(selectedId: number) {
    const onDelete = () =>
      setTasks(tasks.filter((task) => task.id != selectedId));

    Alert.alert("Delete Task?", "This action cannot be undone.", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => onDelete(),
      },
    ]);

    if (Platform.OS == "web") {
      const confirmDelete = window.confirm("Delete Task?");
      confirmDelete && onDelete();
    }
  }

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<TaskType>({
    done: false,
    id: 0,
    title: "",
  });
  function onEditTask() {
    if (selectedTask.title.length < 3) return;

    setTasks(
      tasks.map((item) =>
        item.id == selectedTask.id
          ? { ...item, title: selectedTask.title }
          : item
      )
    );

    setModalVisible(false);
  }

  function onChecklistTask(id: number) {
    setTasks(
      tasks.map((item) =>
        item.id == id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <Header /> */}

      <View style={styles.container}>
        <FormInput
          onChangeTitle={(title) => setTitle(title)}
          onPressCreate={onCreateTask}
          value={title}
        />
        <FlatList
          contentContainerStyle={{ padding: 20, paddingTop: 10 }}
          ListFooterComponent={<Gap height={150} />}
          ListEmptyComponent={
            <Text style={styles.textEmpty}>Such empty. Create one!</Text>
          }
          data={tasks}
          renderItem={({ item }) => {
            return (
              <RenderTask
                title={item.title}
                done={item.done}
                onPressDelete={() => onDeleteTask(item.id)}
                onPressEdit={() => {
                  setModalVisible(true);
                  setSelectedTask(item);
                }}
                onChecklist={() => onChecklistTask(item.id)}
              />
            );
          }}
        />
      </View>

      <ModalEdit
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        inputValue={selectedTask.title}
        onChangeTitle={(title) => setSelectedTask({ ...selectedTask, title })}
        onPressEdit={onEditTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
  },
  textEmpty: {
    textAlign: "center",
    color: "grey",
    fontStyle: "italic",
  },
});
