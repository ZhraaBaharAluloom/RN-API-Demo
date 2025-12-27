import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { TodoTypes } from "@/data/todos";
import AddTodo from "./AddTodo";
import TodoCard from "./TodoCard";

const TodosList = () => {
  const [todoData, setTodoData] = useState<TodoTypes[]>([]);

  const handleAddTodo = async (newTodo: string) => {};

  let todoList = todoData.map((todo) => <TodoCard todo={todo} key={todo.id} />);

  return (
    <View style={styles.todosContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>todos</Text>
      </View>
      <AddTodo placeholder="Add New Todo :)" handlePress={handleAddTodo} />
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
