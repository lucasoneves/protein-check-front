import { ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled: boolean;
}) => {
  return (
    <button disabled={disabled} className={styles["button"]}>
      {children}
    </button>
  );
};
