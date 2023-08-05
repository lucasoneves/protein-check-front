import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from './Layout.module.scss';
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles['layout']}>
      <Header />
        {children}
    </main>
  );
}
