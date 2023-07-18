import { useContext } from "react";
import { MainContext } from "@/store";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);

  const onHandleCompleted = (id) => {
    dispatch({ type: "SET_COMPLETED", payload: id });
  };

  const onHandleIncomplete = (id) => {
    dispatch({ type: "SET_INCOMPLETE", payload: id });
  };

  return (
    <div className={`${styles.TodoList} col-6 col-xs-12`}>
      {state?.map((todo) => (
        <p
          key={todo.id}
          className={`${styles.todo} ${todo.completed ? styles.completed : ""}`}
          onClick={
            todo.completed
              ? () => onHandleIncomplete(todo.id)
              : () => onHandleCompleted(todo.id)
          }
        >
          {todo.todo}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
