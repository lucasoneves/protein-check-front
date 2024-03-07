import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  disabled,
  isFlat,
  googleButton,
  classes,
  handleClick
}: {
  children: ReactNode;
  disabled?: boolean;
  classes?: string;
  isFlat?: boolean;
  googleButton?: boolean;
  handleClick?: MouseEventHandler
}) => {
  return (
    <button 
      onClick={handleClick} 
      disabled={disabled} 
      className={[
        classes,
        styles["button"],
        isFlat ? styles['is-flat'] : '',
        googleButton ? styles['is-google'] : ''
      ].join(' ')}
    >
      {children}
    </button>
  );
};
