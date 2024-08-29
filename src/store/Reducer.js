import { ADD_TODO, SET_TODO_INPUT, DELETE_TODO } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
