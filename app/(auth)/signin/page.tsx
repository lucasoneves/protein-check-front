"use client";

import { Input } from "@/components/Input/index";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="">
        <label htmlFor="email">
          Email
          <Input inputType="email" />
        </label>
        <label htmlFor="password">
          Senha
          <Input inputType="password" />
        </label>
        <Link className={styles['link']} href="/recoverpassword">Esqueci minha senha</Link>
        <Button>Entrar</Button>
      </form>
      <p className={styles['signup-link']}>Não tem uma conta? <Link href="/signup">Cadastre-se</Link></p>
    </div>
  );
}
