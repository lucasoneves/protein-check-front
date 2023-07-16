"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from '@/components/Input/Input.module.scss';
import Link from "next/link";

export default function RecoverPassword() {
  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Redefinir senha</h2>
        <p>Digite seu email para recuperar sua senha</p>
      </header>
      <form action="">
        <label htmlFor="email">
          Email
          <input className={inputStyles['input']} type="email" />
        </label>
        <Button>Enviar</Button>
      </form>
      <Link className="mt-10 inline-flex" href={'/signin'}>Voltar</Link>
    </div>
  );
}