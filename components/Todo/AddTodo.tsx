import { createTodo } from "@/api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomizedButton from "../Button/CustomizedButton";

interface AddTodoProps {
  placeholder: string;
  handlePress?: (newTodo: string) => void;
}

const AddTodo = ({ placeholder, handlePress }: AddTodoProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: () =>
      createTodo({ todo: inputValue, completed: false, userId: 9 }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        // value={inputValue}
        placeholder={placeholder}
        // onChangeText={(value) => setInputValue(value)}
        onChangeText={(e) => console.log(e)}
      />
      <CustomizedButton title="Add" handlePress={mutate} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    columnGap: 3,
  },
  inputField: {
    width: 240,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
});
