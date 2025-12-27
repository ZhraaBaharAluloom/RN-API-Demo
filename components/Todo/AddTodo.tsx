import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomizedButton from "../Button/CustomizedButton";

interface AddTodoProps {
  placeholder: string;
  handlePress?: (newTodo: string) => void;
}

const AddTodo = ({ placeholder, handlePress }: AddTodoProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        value={inputValue}
        placeholder={placeholder}
        onChangeText={(value) => setInputValue(value)}
      />
      <CustomizedButton
        title="Add"
        handlePress={() => handlePress && handlePress(inputValue)}
      />
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
