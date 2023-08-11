import { ChangeEventHandler, FormEventHandler } from "react";
import styles from './AddProtein.module.scss';

export default function AddProtein({
  change,
  handleAdd,
}: {
  change: ChangeEventHandler;
  handleAdd: FormEventHandler;
}) {
  return (
    <footer className={`${styles['add-protein']} fixed bottom-8 p-4 left-4 right-4 max-w-7xl m-auto`}>
      <form action="" onSubmit={handleAdd} className="flex gap-2">
        <input maxLength={3} className={`w-full bg-transparent border-0 outline-0 p-4 rounded-lg flex-1 ${styles['input']}`} placeholder="Add protein" onChange={change}></input>
        <button className={`${styles['button']} p-4 rounded-lg`}>Add</button>
      </form>
    </footer>
  );
}
