import { ReactNode } from "react";
import styles from './Toast.module.scss';

export const Toast = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed right-2 bottom-2 rounded bg-red-200 text-red-950 p-3 text-sm mt-3 mb-3">{children}</div>
  );
};
