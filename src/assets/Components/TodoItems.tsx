import React from 'react'
import { Todo } from '../types/type';
import TodoList from './TodoList';


interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, complete: boolean) => void;
    onDelete: (id: number) => void;
  }

const TodoItems : React.FC <TodoListProps>= ({todos,onCompletedChange, onDelete}) => {

    const todosSorted = todos.sort((a, b) => {
        if (a.complete === b.complete) {
          return b.id - a.id;
        }
        return a.complete ? 1 : -1;
      });

  return (
    <>
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
        />
      ))}
    </div>
    {todos.length === 0 && (
      <p className="text-center text-sm text-gray-500">
        No todos yet. Add a new one above.
      </p>
    )}
  </>
  )
}

export default TodoItems
