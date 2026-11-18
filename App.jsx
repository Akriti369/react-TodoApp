import styles from "./App.module.css";
import Header from "./Components/Header";
import { useState } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddItem = (newTaskText) => {
    if (!newTaskText || newTaskText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className={styles.TodoContainer}>
      <Header onAdd={handleAddItem} />

      {todoList.map((item) => (
        <AddTodo
          key={item.id}
          todo={item}
          onDelete={handleDeleteItem}
          onToggle={handleToggleItem}
        />
      ))}
    </div>
  );
}

export default App;