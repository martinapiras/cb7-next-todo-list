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

  const onHandleSubmit = (length) => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: length, todo: inputValue, completed: false },
    });
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
      <form
        className={styles.addTodo}
        onSubmit={() => onHandleSubmit(state.length)}
      >
        <input
          type="text"
          placeholder="Ex.: Water the plants"
          value={inputValue}
          onChange={onHandleInputValue}
        />
      </form>
    </div>
  );
};

export default TodoList;
