export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );

    case "SET_INCOMPLETE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: false } : todo
      );

    default:
      return state;
  }
};
