"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/components/Input/Input.module.scss";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Cadastro</h2>
        <p>Preencha os dados para se cadastrar no site</p>
      </header>
      <form action="">
        <label htmlFor="username">
          Nome
          <input type="text" className={inputStyles['input']}/>
        </label>
        <label htmlFor="email">
          Email
          <input type="email" className={inputStyles['input']}/>
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" className={inputStyles['input']}/>
        </label>
        <Button>Cadastrar</Button>
      </form>
      <p className={styles["signup-link"]}>
        Já tem uma conta? <Link href="/signin">Faça login</Link>
      </p>
    </div>
  );
}
