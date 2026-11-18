import { useState } from "react";
import styles from "./Header.module.css";

function Header({ onAdd }) {
  const [inputText, setInputText] = useState("");

  const handleAddClick = () => {
    onAdd(inputText);
    setInputText("");
  };

  return (
    <>
      <p className={styles.Quote}>step by step, day by day -akriti</p>
      <h1>TO-Do App 📝</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.Input}
          type="text"
          placeholder="Add a new task.... ✍️"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddClick()}
        />
        <button className={styles.addBtn} onClick={handleAddClick}>
          ADD+
        </button>
      </div>
    </>
  );
}

export default Header;