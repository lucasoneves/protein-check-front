import { FormEvent } from "react";
import styles from "./AddProtein.module.scss";

export default function AddProtein() {
  function handleAddProteinAmount(e: FormEvent) {
    e.preventDefault();
  }
  function changedProteinAmount(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div
      className={`${styles["add-protein"]} bottom-8 p-4 left-4 right-4 m-auto`}
    >
      <form
          action=""
          onSubmit={handleAddProteinAmount}
          className="flex gap-2"
        >
          <input
            maxLength={3}
            className={`w-full bg-transparent border-0 outline-0 p-4 rounded-lg flex-1 ${styles["input"]}`}
            placeholder="Add protein"
            onChange={changedProteinAmount}
          ></input>
          <button className={`${styles["button"]} p-4 rounded-lg`}>Add</button>
        </form>
    </div>
  );
}
