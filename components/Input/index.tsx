import styles from "./Input.module.scss";

export const Input = ({ inputType }: { inputType: string }) => {
  return <input type={inputType} className={styles["input"]} />;
};
