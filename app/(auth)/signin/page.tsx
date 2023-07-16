"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyle from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [dataLogin, setDataLogin] = useState({ email: '', password: ''})
  function handleSignIn(event) {
    event.preventDefault();
    console.log("handleSignIn", dataLogin);
  }

  function handleChangeField(event, field) {
    const value = event.target.value
    const formField = field
    setDataLogin((prevState) => {
      return {...prevState, formField: event.target.value}
    });
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="" onSubmit={handleSignIn}>
        <label htmlFor="email">
          Email
          <input className={inputStyle['input']} type="email" value={dataLogin.email} onChange={(e) => handleChangeField('email')} />
        </label>
        <label htmlFor="password">
          Senha
          <input className={inputStyle['input']} type="password" value={dataLogin.password} onChange={(e) => handleChangeField(e, 'password')} />
        </label>
        <Link className={styles['link']} href="/recoverpassword">Esqueci minha senha</Link>
        <Button>Entrar</Button>
      </form>
      <p className={styles['signup-link']}>Não tem uma conta? <Link href="/signup">Cadastre-se</Link></p>
    </div>
  );
}
