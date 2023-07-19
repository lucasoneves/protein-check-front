"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyle from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { useState } from "react";
import { ErrorTypes } from "@/lib/types";

export default function SignInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState<ErrorTypes[]>([]);

  function saveUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function saveUserPassword(e) {
    setUserPassword(e.target.value);
  }

  function handleValidateEmail() {
    if (!userEmail) {
      setError((prevState) => [
        ...prevState,
        { message: "Email is required" }
      ]);
    }
  }

  function handleValidatePassword() {
    if (!userPassword) {
      alert("por favor, preecha o campo senha");
    }
  }

  function submitLoginForm(e) {
    e.preventDefault();
    handleValidateEmail();
    handleValidatePassword();
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="" onSubmit={submitLoginForm}>
        <label htmlFor="email">
          Email
          <input
            className={inputStyle["input"]}
            type="email"
            value={userEmail}
            onChange={saveUserEmail}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className={inputStyle["input"]}
            type="password"
            value={userPassword}
            onChange={saveUserPassword}
          />
        </label>
        <pre>{error}</pre>
        <Link className={styles["link"]} href="/recoverpassword">
          Esqueci minha senha
        </Link>
        <Button>Entrar</Button>
      </form>
      <p className={styles["signup-link"]}>
        Não tem uma conta? <Link href="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}
