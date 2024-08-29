import { Todo } from "../types/type";


interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
  }

const TodoSummery :React.FC<TodoSummaryProps>= ({todos,deleteAllCompleted}) => {

    const completedTodos = todos.filter((todo) => todo.complete);
  return (
    <div className="text-center space-y-2">
    <p className="text-sm font-medium">
      {completedTodos.length}/{todos.length} todos completed
    </p>
    {completedTodos.length > 0 && (
      <button
        onClick={deleteAllCompleted}
        className="text-red-500 hover:underline text-sm font-medium"
      >
        Delete all completed
      </button>
    )}
  </div>
  )
}

export default TodoSummery
