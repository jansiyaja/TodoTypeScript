import React from "react";
import { Todo } from "../types/type";
import { Trash2 } from "lucide-react";



interface TodoListProps {
  todo: Todo;
  onCompletedChange: (id: number, complete: boolean) => void;
  onDelete: (id: number) => void;
  
}

const TodoList: React.FC<TodoListProps> = ({ todo,onCompletedChange ,onDelete}) => {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.complete ? "line-through text-gray-400" : ""}>
          {todo.tittle}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500" />
      </button>
      
    </div>
  );
};

export default TodoList;
