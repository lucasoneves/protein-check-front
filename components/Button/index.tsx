import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  disabled,
  isFlat,
  handleClick
}: {
  children: ReactNode;
  disabled?: boolean;
  isFlat?: boolean;
  handleClick?: MouseEventHandler
}) => {
  return (
    <button onClick={handleClick} disabled={disabled} className={`${styles["button"]} ${isFlat ? styles['is-flat'] : ''}`}>
      {children}
    </button>
  );
};
