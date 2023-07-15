import React from "react";
import styles from "./../assets/styles/TodoItem.module.css";

const TodoItem = () => {
  const name = "Saif";
  return (
    <div className={styles.container}>
      <input className={styles.container__input} type="checkbox" />
      <span className={styles.container__name}>{name}</span>
      <button className={styles.container__btn}>Remove</button>
    </div>
  );
};

export default TodoItem;
