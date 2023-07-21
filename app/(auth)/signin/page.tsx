"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyle from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import { ErrorTypes } from "@/lib/types";
import { ErrorBox } from "@/components/ErrorBox";
import { validateEmail } from "@/lib/validateEmail";
import { signin } from '@/lib/api';

export default function SignInPage() {
  const [userEmail, setUserEmail] = useState<String>("");
  const [userPassword, setUserPassword] = useState<String>("");
  const [formError, setFormError] = useState<ErrorTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(formError)
  }, [formError])

  function saveUserEmail(e: { target: { value: SetStateAction<String>; }; }) {
    setUserEmail(e.target.value);
    cleanErrorMessages();
  }

  function saveUserPassword(e: { target: { value: SetStateAction<String>; }; }) {
    setUserPassword(e.target.value);
    cleanErrorMessages();
  }

  function handleValidateEmail() {
    if (!userEmail) {
      setFormError((prevState) => [
        ...prevState,
        { message: "Preencha seu email", field: "email" },
      ]);
      return false;
    }

    if (!validateEmail(userEmail)) {
      setFormError((prevState) => [
        ...prevState,
        { message: "Email inválido", field: "email"}
      ])
      return false;
    }
    return true;
  }

  function handleValidatePassword() {
    
    if (!userPassword) {
      setFormError((prevState) => [
        ...prevState,
        { message: "Preencha a senha", field: "password" },
      ]);
      return false;
    }
    return true;
  }

  async function handleLoginUser() {
    if (handleValidateEmail() && handleValidatePassword()) {
      
      const req = await signin({
        email: userEmail,
        password: userPassword
      })
    }
    return false;
  }

  function cleanErrorMessages() {
    setFormError([]);
  }

  function checkValidityForm(e: { preventDefault: () => void; }) {
    e.preventDefault();
    cleanErrorMessages();
    handleLoginUser()
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Olá!</h2>
        <p>Entre com seu email e senha para acessar a plataforma</p>
      </header>
      <form action="" onSubmit={checkValidityForm}>
        <label htmlFor="email">
          Email
          <input
            className={inputStyle["input"]}
            type="text"
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
        {formError.length ? (
          <ErrorBox>
            {formError.map((d) => {
              return <p className="mb-2 last:mb-0 text-xs" key={d.message + Math.random()}>{d.message}</p>;
            })}
          </ErrorBox>
        ) : (
          ""
        )}
        <Link className={styles["link"]} href="/recoverpassword">
          Esqueci minha senha
        </Link>
        <Button disabled={loading}>{loading ? "Loading..." : "Entrar"}</Button>
      </form>
      <p className={styles["signup-link"]}>
        Não tem uma conta? <Link href="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}
