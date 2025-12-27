interface TodoTypes {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const todos: TodoTypes[] = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
    userId: 152,
  },
  {
    id: 2,
    todo: "Memorize a poem",
    completed: true,
    userId: 13,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: true,
    userId: 68,
  },
];

export { todos, TodoTypes };
