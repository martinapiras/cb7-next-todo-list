export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };

    case "SET_INCOMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: false } : todo
        ),
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            completed: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };

    case "SET_LOGOUT":
      return {
        ...state,
        username: "",
      };

    default:
      return state;
  }
};
