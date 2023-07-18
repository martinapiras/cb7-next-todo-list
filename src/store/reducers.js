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

    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          todo: action.payload.todo,
          completed: action.payload.completed,
        },
      ];

    default:
      return state;
  }
};
