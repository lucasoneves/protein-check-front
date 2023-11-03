import { ReactNode } from "react";
import styles from './Toast.module.scss';

export const Toast = ({ children, messageType }: { children: ReactNode, messageType: String }) => {
  return (
    <div className={`fixed right-2 bottom-2 rounded z-50 ${styles[`${messageType}`]} p-3 text-sm mt-3 mb-3`}>{children}</div>
  );
};
