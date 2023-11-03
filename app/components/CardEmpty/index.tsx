import { Card } from "../Card";
import { MdOutlineBlock } from "react-icons/md";
import styles from './CardEmpty.module.scss';

export default function CardEmpty() {
  return (
    <Card className="flex items-center justify-center flex-col gap-3">
      {" "}
      <MdOutlineBlock className={styles.icon} />
      <h2>Você não consumiu proteína hoje</h2>
    </Card>
  );
}
