import { ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button className={styles["button"]}>{children}</button>;
};
