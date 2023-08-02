import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from './Layout.module.scss';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles['layout']}>
      <header>main header</header>
        {children}
    </main>
  );
}
