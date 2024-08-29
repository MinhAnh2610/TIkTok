import "./App.css";
import { useStore, actions } from "./store";
function App() {
  const { state, dispatch } = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };

  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index));
  };

  return (
    <div className="App">
      <input
        value={todoInput}
        placeholder="Enter task..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleDelete(index)}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
