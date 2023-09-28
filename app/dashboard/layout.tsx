"use client";

import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";
import styles from "./Layout.module.scss";
import Header from "@/components/Header";
import AddProtein from "@/components/AddProtein";
import { Container } from "@/components/Container";
import MenuNav from "@/components/MenuNav/page";
import { useAppSelector } from "../store/hooks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { username } = useAppSelector((state) => state.userReducer.userInfo);
  return (
    <>
      <title>Protein Check</title>
      <main className={styles["layout"]}>
        <Header userName={username} />
        {children}
        <footer className="fixed bottom-0 left-0 right-0 m-auto">
          <Container containerClasses={"container-footer"}>
            <AddProtein />
            <MenuNav />
          </Container>
        </footer>
      </main>
    </>
  );
}
