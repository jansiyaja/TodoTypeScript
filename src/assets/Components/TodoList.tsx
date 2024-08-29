import React from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todo: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todo, deleteTodo }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <p className="text-xl font-semibold">Listing your Todos</p>
      <ul className="space-y-2">
        {todo.map(tdo => (
          <li key={tdo.id} className="flex justify-between items-center">
            <span>{tdo.text}</span>
            <button
              onClick={() => deleteTodo(tdo.id)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
