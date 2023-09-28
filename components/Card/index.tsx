import { ReactNode } from "react";
import styles from "./Card.module.scss";

export const Card = ({
  children,
  className,
  success
}: {
  children: ReactNode;
  className: string;
  success?: boolean
}) => {
  return (
    <div className={`${className} ${success && styles.success || ''} ${styles["card"]} rounded-lg p-4`}>
      {children}
    </div>
  );
};
