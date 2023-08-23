import Link from "next/link";
import styles from "./MenuNav.module.scss";
import { VscHome, VscPieChart } from "react-icons/vsc";

export default function MenuNav() {
  return (
    <nav className={styles["menu-nav"]}>
      <Link
        href={"/dashboard/home"}
        className="flex items-center gap-2 flex-col text-2xl"
      >
        <VscHome />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href={"/dashboard/report"}
        className="flex items-center gap-2 flex-col text-2xl"
      >
        <VscPieChart />
        <span className="text-xs">Report</span>
      </Link>
    </nav>
  );
}
