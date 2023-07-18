import { useContext, useState } from "react";
import { MainContext } from "@/store";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);
  const [inputValue, setInputValue] = useState("");

  const onHandleCompleted = (id) => {
    dispatch({ type: "SET_COMPLETED", payload: id });
  };

  const onHandleIncomplete = (id) => {
    dispatch({ type: "SET_INCOMPLETE", payload: id });
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e, length) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: length + 1, todo: inputValue, completed: false },
      });
      setInputValue("");
    }
  };

  const onHandleDeleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <div className={`${styles.TodoList} col-6 col-xs-12`}>
      {state?.map((todo) => (
        <div
          key={todo.id}
          className={`${styles.todo} ${todo.completed ? styles.completed : ""}`}
          onClick={
            todo.completed
              ? () => onHandleIncomplete(todo.id)
              : () => onHandleCompleted(todo.id)
          }
        >
          <p className={styles.todoText}>{todo.todo}</p>
          <span
            className={styles.todoDelete}
            onClick={() => onHandleDeleteTodo(todo.id)}
          >
            X
          </span>
        </div>
      ))}
      <form
        className={styles.addTodo}
        onSubmit={(e) => onHandleSubmit(e, state.length)}
      >
        <input
          type="text"
          placeholder="Ex.: Water the plants"
          value={inputValue}
          onChange={onHandleInputValue}
          minLength={3}
        />
      </form>
    </div>
  );
};

export default TodoList;
