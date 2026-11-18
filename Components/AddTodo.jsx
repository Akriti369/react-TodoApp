import styles from "./AddTodo.module.css";

function AddTodo({ todo, onDelete, onToggle }) {
  return (
    <div className={styles.todoItem}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.checkmark}></span>
      </label>

      <span
        className={styles.taskText}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.6 : 1,
        }}
      >
        {todo.text}
      </span>

      <div className={styles.btn}>
        <button
          className={styles.deleteBtn}
          onClick={() => onDelete(todo.id)}
        >
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default AddTodo;