import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from "@/app/(auth)/Auth.module.scss";
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Protein Check - Check your protein consumption',
}

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles["wrapper"]}>
        <h2 className="logo">protein check</h2>
        {children}
      </div>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
    </>
  );
}
