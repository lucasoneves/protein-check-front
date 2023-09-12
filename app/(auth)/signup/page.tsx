/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from "@/components/Input/Input.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ErrorTypes } from "@/lib/types";
import { labelEmailRequired, labelPasswordRequired, labelUsernameRequired, labelEmailNotValid } from "@/lib/text";
import { ErrorBox } from "@/components/ErrorBox";
import { validateEmail } from "@/lib/validateEmail";
import { register } from '@/lib/api';

export default function SignUpPage() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [formMessages, setFormMessages] = useState<ErrorTypes[]>([]);
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = userPassword && userName && userEmail

  useEffect(() => {
    if (formMessages.length <= 0 && (isFormValid)) {
      setFormValid(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, userPassword, userEmail])

  useEffect(() => {
    if (formValid) {
      makeHttpSignUpRequest();
    }
  }, [formValid])

  function cleanErrorMessages() {
    setFormMessages([]);
  }

  async function handleSetFormError(text: string, field: string) {
    return await setFormMessages((prevState) => [
      ...prevState,
      { message: text, field, touched: true },
    ]);
  }

  function validateForm() {
    if (!isFormValid) {
      if (!userName) {
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
    } else {
      setFormValid(true)
      console.log("form valid", formValid)
    }

  }

  async function makeHttpSignUpRequest() {
    setLoading(true);
    try {
      const user = await register({
        userName,
        email: userEmail,
        password: userPassword
      })
      return user;
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  function handleSignUp(e: FormEvent) {
    e.preventDefault();
    cleanErrorMessages();
    validateForm();
    if (formValid) {
      makeHttpSignUpRequest();
    }
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
            onChange={(e) => setUserName(e.currentTarget.value)}
            defaultValue={userName}
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
        {formMessages.length ? (
          <ErrorBox>
            {formMessages.map((d) => {
              return <p className="mb-2 last:mb-0 text-xs" key={d.message + Math.random()}>{d.message}</p>;
            })}
          </ErrorBox>
        ) : (
          ""
        )}
        <Button disabled={loading}>{loading ? 'Loading...' : 'Cadastrar'}</Button>
      </form>
      <p className={styles["signup-link"]}>
        Já tem uma conta? <Link href="/signin">Faça login</Link>
      </p>
    </div>
  );
}
