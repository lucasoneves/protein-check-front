"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { useState } from "react";
import { ErrorTypes } from "@/lib/types";
import { labelEmailRequired, labelPasswordRequired, labelUsernameRequired, labelEmailNotValid } from "@/lib/text";
import { ErrorBox } from "@/components/ErrorBox";
import { validateEmail } from "@/lib/validateEmail";

export default function SignUpPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [username, setUserName] = useState("");
  const [formError, setFormError] = useState<ErrorTypes[]>([]);
  function cleanErrorMessages() {
    setFormError([]);
  }

  function handleSetFormError(text: string, field: string) {
    return setFormError((prevState) => [
      ...prevState,
      { message: text, field },
    ]);
  }

  function validateForm() {
    if (!username) {
      handleSetFormError(labelUsernameRequired, "username");
    }
    if (!userEmail) {
      handleSetFormError(labelEmailRequired, "email");
    }

    if (userEmail && !validateEmail(userEmail)) {
      handleSetFormError(labelEmailNotValid, "email");
    }

    if (!userPassword) {
      handleSetFormError(labelPasswordRequired, "password");
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    cleanErrorMessages();
    validateForm();
  }

  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Cadastro</h2>
        <p>Preencha os dados para se cadastrar no site</p>
      </header>
      <form action="" onSubmit={handleSignUp}>
        <label htmlFor="username">
          Nome
          <input
            type="text"
            className={inputStyles["input"]}
            onChange={(e) => setUserName(e.target.value)}
            defaultValue={username}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            className={inputStyles["input"]}
            onChange={(e) => setUserEmail(e.target.value)}
            defaultValue={userEmail}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            className={inputStyles["input"]}
            onChange={(e) => setUserPassword(e.target.value)}
            defaultValue={userPassword}
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
        <Button disabled={false}>Cadastrar</Button>
      </form>
      <p className={styles["signup-link"]}>
        Já tem uma conta? <Link href="/signin">Faça login</Link>
      </p>
    </div>
  );
}
