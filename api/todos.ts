import { TodoTypes } from "@/data/todos";
import axios from "axios";

export const getAllTodos = async (): Promise<TodoTypes[]> => {
  const result = await axios.get("https://dummyjson.com/todos");
  return result.data.todos;
};

export const createTodo = async (todo: {
  userId: number;
  completed: boolean;
  todo: string;
}): Promise<TodoTypes> => {
  const result = await axios.post("https://dummyjson.com/todos/add", todo);
  console.log("🚀 ~ createTodo ~ result:", result.data);
  return result.data;
};
