import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { getAllTodos } from "@/api/todos";
import { useQuery } from "@tanstack/react-query";
import AddTodo from "./AddTodo";
import TodoCard from "./TodoCard";

const TodosList = () => {
  // const [todoData, setTodoData] = useState<TodoTypes[]>([]);

  const { data = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    retry: 3,
  });
  console.log("🚀 ~ TodosList ~ data:", data);

  if (isLoading) return <ActivityIndicator />;
  let todoList = data?.map((todo) => <TodoCard todo={todo} key={todo.id} />);

  return (
    <View style={styles.todosContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>todos</Text>
      </View>
      <AddTodo placeholder="Add New Todo :)" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.listContainer}
      >
        {todoList}
      </ScrollView>
    </View>
  );
};

export default TodosList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Times New Roman",
    textAlign: "center",
  },

  todosContainer: {
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
  },
});
