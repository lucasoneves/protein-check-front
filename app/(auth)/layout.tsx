import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from "@/app/(auth)/Auth.module.scss";
import Head from "next/head";
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Protein Check',
}

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" async />
      </Head>
      <div className={styles["wrapper"]}>
        <h2 className="logo">protein check</h2>
        {children}
      </div>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
    </>
  );
}
