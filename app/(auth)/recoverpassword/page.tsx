"use client";
import { Button } from "@/components/Button/index";
import styles from "@/app/(auth)/Auth.module.scss";
import inputStyles from '@/components/Input/Input.module.scss';
import Link from "next/link";
import { validateEmail } from "@/lib/validateEmail";
import { useState } from "react";
import { ErrorTypes } from "@/lib/types";
import { labelEmailNotValid, labelEmailRequired } from "@/lib/text";
import { ErrorBox } from "@/components/ErrorBox";
import { recoverPassword } from "@/lib/api";

export default function RecoverPassword() {
  const [email, setEmail] = useState<String>('');
  const [formMessages, setFormMessages] = useState<ErrorTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleSetFormError(text: string, field: string) {
    return setFormMessages((prevState) => [
      ...prevState,
      { message: text, field, touched: true },
    ]);
  }
  function clearErrorMessages() {
    setFormMessages([]);
  }
  function emailHandler(e) {
    clearErrorMessages();
    setEmail(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    clearErrorMessages();
    if (!validateEmail(email)) {
      handleSetFormError(labelEmailNotValid, "email");
    } else {
      setLoading(true);
      try {
        const req = recoverPassword({
          email
        })
        return req;
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    }
    
  }
  return (
    <div className={styles["signin"]}>
      <header>
        <h2>Redefinir senha</h2>
        <p>Digite seu email para recuperar sua senha</p>
      </header>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input className={inputStyles['input']} type="text" onChange={emailHandler} />
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
        <Button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</Button>
      </form>
      <Link className="mt-10 inline-flex" href={'/signin'}>Voltar</Link>
    </div>
  );
}
