import { ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  disabled,
  isFlat
}: {
  children: ReactNode;
  disabled: boolean;
  isFlat?: boolean;
}) => {
  return (
    <button disabled={disabled} className={`${styles["button"]} ${isFlat ? styles['is-flat'] : ''}`}>
      {children}
    </button>
  );
};
