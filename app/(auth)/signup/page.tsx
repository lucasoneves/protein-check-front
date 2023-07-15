"use client";

import { Input } from "@/components/Input/index";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
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
          <Input inputType="text" />
        </label>
        <label htmlFor="email">
          Email
          <Input inputType="email" />
        </label>
        <label htmlFor="password">
          Senha
          <Input inputType="password" />
        </label>
        <Button>Cadastrar</Button>
      </form>
      <p className={styles["signup-link"]}>
        Já tem uma conta? <Link href="/signin">Faça login</Link>
      </p>
    </div>
  );
}
