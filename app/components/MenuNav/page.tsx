import styles from "./MenuNav.module.scss";
import MenuItem from "./MenuPage";
import { VscHome, VscPieChart } from "react-icons/vsc";

export default function MenuNav() {
  const menuItems = [
    {
      title: "Home",
      path: "/dashboard/home",
      icon: <VscHome />,
      id: "b2e96671-77fd-4b64-91e2-e3d080a33934",
    },
    {
      title: "Report",
      path: "/dashboard/report",
      icon: <VscPieChart />,
      id: 'addc3cfe-734f-4ec5-955a-4c5c3c509d87',
    },
  ];
  return (
    <nav className={styles["menu-nav"]}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          icon={item.icon}
          path={item.path}
          title={item.title}
        />
      ))}
    </nav>
  );
}
