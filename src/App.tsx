
import TodoList from "./assets/Components/TodoList";
import useTodos from "./assets/Hooks/useTodos";
import TodoForm from "./assets/Components/TodoForm";
import TodoSummery from "./assets/Components/TodoSummery";


const App: React.FC = () => {

  

  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();

  return (
    <main className=" py-10  h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center"> Your Todos</h1>
      <div className=" max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
        <TodoForm onSubmit={addTodo}/>
        <div className=" space-y-2">
          {todos.map(todo=>(
            <TodoList
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            onDelete={deleteTodo}/>
          ))}
        </div>
      </div>
      <TodoSummery todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
};

export default App;
