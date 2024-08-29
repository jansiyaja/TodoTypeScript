import { useEffect, useState } from "react";
import { dumyData } from "../Components/Todos";
import { Todo } from "../types/type";

export default function useTodos() {

  const [todos, setTodos] = useState(() => {

    const savedTodos:Todo[]=JSON.parse(
       localStorage.getItem("todos") || "[]"
    )

    return savedTodos.length > 0 ? savedTodos : dumyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, complete: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, complete } : todo))
    );
  }

  function addTodo(tittle: string) {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        tittle,
        complete: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.complete));
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}