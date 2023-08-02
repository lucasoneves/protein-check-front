import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from "@/app/(auth)/Auth.module.scss";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["wrapper"]}>
        <h2 className="logo">protein check</h2>
        {children}
      </div>
  );
}
