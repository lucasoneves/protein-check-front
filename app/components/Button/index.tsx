import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  disabled,
  isFlat,
  googleButton,
  handleClick
}: {
  children: ReactNode;
  disabled?: boolean;
  isFlat?: boolean;
  googleButton?: boolean;
  handleClick?: MouseEventHandler
}) => {
  return (
    <button onClick={handleClick} disabled={disabled} className={`${styles["button"]} ${isFlat ? styles['is-flat'] : ''} ${googleButton ? styles['is-google'] : ''}`}>
      {children}
    </button>
  );
};
