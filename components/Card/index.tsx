import { ReactNode } from "react";
import styles from "./Card.module.scss";

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={`${className} ${styles["card"]} rounded-lg p-4`}>
      {children}
    </div>
  );
};
