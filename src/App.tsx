import React, { useState } from "react";
import TodoForm from "./assets/Components/TodoForm";
import TodoList from "./assets/Components/TodoList";

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(), // Use current timestamp as a unique ID
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center space-y-8">
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
