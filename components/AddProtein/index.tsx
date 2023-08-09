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
      <form action="" onSubmit={handleAdd}>
        <input className="w-full" placeholder="Add protein" onChange={change}></input>
        <button>Add</button>
      </form>
    </footer>
  );
}
