import { createContext } from "react";

export const MainContext = createContext();

export const initialState = {
  todos: [
    // {
    //   id: 1,
    //   todo: "Text a friend I haven't talked to in a long time",
    //   completed: false,
    // },
    // { id: 2, todo: "Organize pantry", completed: false },
    // { id: 3, todo: "Walk the dog", completed: true },
  ],
  username: "",
};
