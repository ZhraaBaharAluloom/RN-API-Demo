import { TodoTypes } from "@/data/todos";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface TodoCardProps {
  todo: TodoTypes;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View key={todo.id} style={styles.todoCard}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text
        style={[styles.todoText, isChecked && styles.completed]}
        numberOfLines={1}
      >
        {todo.todo}
      </Text>
      <FontAwesome name="remove" size={24} color="red" />
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    margin: 5,
    width: 290,

    backgroundColor: "#fff",
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoText: {
    flex: 1,
    marginHorizontal: 8,
  },
  completed: {
    textDecorationLine: "line-through",
  },
});
