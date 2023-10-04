import { ReactNode } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div className={` bg-indigo-800 bg-opacity-50 h-full w-full top-0 bottom-0 z-20 left-0 right-0  ${styles["modal"]}`}>
      <div className={styles["modal-content"]}>{children}</div>
    </div>
  );
}
