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
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { labelEmailNotValid, labelEmailRequired, labelFormErrorLogin, labelPasswordRequired } from "@/lib/text";
import { Toast } from "@/components/Toast";


export default function SignInPage() {
  const [userEmail, setUserEmail] = useState<String>("");
  const [userPassword, setUserPassword] = useState<String>("");
  const [formError, setFormError] = useState<ErrorTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const router = useRouter()

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
        { message: labelEmailRequired, field: "email" },
      ]);
      return false;
    }

    if (!validateEmail(userEmail)) {
      setFormError((prevState) => [
        ...prevState,
        { message: labelEmailNotValid, field: "email"}
      ])
      return false;
    }
    return true;
  }

  function handleValidatePassword() {
    
    if (!userPassword) {
      setFormError((prevState) => [
        ...prevState,
        { message: labelPasswordRequired, field: "password" },
      ]);
      return false;
    }
    return true;
  }

  async function redirectUser() {
    router.push('/dashboard')
  }

  async function handleLoginUser() {
    if (handleValidateEmail() && handleValidatePassword()) {
      setLoading(true)
      try { 
        const req = await signin({
          email: userEmail,
          password: userPassword
        })

        const data = await req.token;
        Cookies.set('user', data)

        await redirectUser()
        
      } catch (error) {
        console.error(error)
        setFormError((prevState) =>[
          ...prevState,
          { message: labelFormErrorLogin, field: "auth"}
        ])
      } finally {
        setLoading(false)
      }
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
          <>
            {formError.map((d) => {
              return <Toast key={d.message}>{d.message}</Toast>;
            })}
          </>
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
