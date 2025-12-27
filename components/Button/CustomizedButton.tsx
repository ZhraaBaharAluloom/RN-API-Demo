import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface CustomizedButtonProps {
  title: string;
  handlePress: () => void;
}

const CustomizedButton = ({ title, handlePress }: CustomizedButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomizedButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "black",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
  },
});
